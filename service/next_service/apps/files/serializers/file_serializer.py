from rest_framework import serializers

from apps.files.models.file_model import File


class FileSerializer(serializers.ModelSerializer):
    """
    FileSerializer is a class that serializes the file data.

    Attributes:
    - id (UUID): The unique identifier for the file.
    - file_extension (str): The file extension of the file.
    - created_at (DateTime): The date and time when the file was created.
    - updated_at (DateTime): The date and time when the file was last updated.
    """

    class Meta:
        model = File

        fields = "__all__"
