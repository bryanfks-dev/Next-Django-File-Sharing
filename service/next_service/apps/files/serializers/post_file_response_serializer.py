from rest_framework import serializers

from apps.files.models.file_model import File
from apps.files.serializers.file_serializer import FileSerializer


class PostFileResponseSerializer(serializers.Serializer):
    """
    PostFileResponseSerializer is a class that serializes the response data of the post file endpoint.
    This class is responsible for serializing the response data of the post file endpoint.

    Attributes:
    - file (File): The file object.
    """

    def __init__(self, file: File):
        self.file: File = file

    def to_dict(self) -> dict:
        """
        to_dict is a method that serializes the response data.

        Returns:
        - dict: The serialized response data.
        """

        return dict(FileSerializer(self.data).data)
