from django.db import DatabaseError
from rest_framework import serializers

from core.enums.upload_file_channel_enum import UploadFileChannelEnum
from apps.files.models.file_model import File
from apps.users.models.user_model import User
from apps.files.models.file_category_model import FileCategory
from core.enums.file_category_enum import FileCategoryEnum


class PostFileRequestSerializer(serializers.Serializer):
    """
    PostFileRequestSerializer is a class that serializes the request data for the upload file process.
    This class is responsible for serializing the request data for the upload file process.

    Attributes:
    - upload_file_channel (str): The channel where the file will be uploaded.
    - file (File): The file to be uploaded.
    - group_id (str): The group ID where the file will be uploaded.
    """

    upload_file_channel = serializers.ChoiceField(
        choices=[e.value for e in UploadFileChannelEnum]
    )
    file = serializers.FileField()
    group_id = serializers.UUIDField(required=False)

    def create(self, validated_data: dict) -> File:
        """
        create is a method that creates a file.

        Args:
        - validated_data (dict): The validated data

        Returns:
        - File: The file object
        """

        # Get the file from the validated data
        file = validated_data["file"]

        # Get the user from the context
        user: User = self.context.get("request").user

        # Get the file extension
        file_extension: str = file.name.split(".")[-1].lower()

        # Initialize the file category
        file_category: FileCategory = None

        # Get the file category
        try:
            # Find the file category based on the file extension
            file_category = FileCategory.objects.filter(
                extensions__contains=[file_extension]
            ).get_or_get
        except FileCategory.DoesNotExist:
            # If the file category does not exist, use the OTHERS category
            file_category = FileCategory.objects.get(
                category=FileCategoryEnum.OTHERS.get_text()
            )

        # Create the file object
        file: File = File.objects.create(
            file=file,
            file_extension=file_extension,
            category_id=file_category.id,
            uploaded_by_user=user,
            upload_channel=validated_data.get("upload_file_channel"),
            group_id=validated_data.get("group_id"),
        )

        return file
