from rest_framework import serializers

from core.enums.upload_file_channel_enum import UploadFileChannelEnum


class PostFileRequestSerializer(serializers.Serializer):
    """
    PostFileRequestSerializer is a class that serializes the request data for the upload file process.
    This class is responsible for serializing the request data for the upload file process.

    Attributes:
    - upload_file_channel (str): The channel where the file will be uploaded.
    - file (File): The file to be uploaded.
    """

    upload_file_channel = serializers.ChoiceField(
        choices=[e.value for e in UploadFileChannelEnum]
    )
    file = serializers.FileField()
