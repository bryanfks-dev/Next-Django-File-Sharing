import logging

from django.db import DatabaseError

from apps.users.models.user_model import User
from apps.files.models.file_model import File
from apps.files.serializers.post_file_request_serializer import (
    PostFileRequestSerializer,
)
from core.exceptions.invalid_field_value_exception import InvalidFieldValueException
from core.exceptions.server_failure_exception import ServerFailureException


class FileUsecase:
    """
    FileUsecase is a class that handles the business logic of the file feature.
    This class is responsible for handling the business logic of the file feature.
    """

    def __init__(self):
        self.logger = logging.getLogger("next_service")

    def upload_file(self, request_serializer: PostFileRequestSerializer) -> File:
        """
        upload_file is a method that uploads a file.

        Args:
        - request_serializer (PostFileRequestSerializer): The request serializer object

        Returns:
        - File: The file object
        """

        # Validate the request data
        if not request_serializer.is_valid():
            raise InvalidFieldValueException(detail=request_serializer.errors)

        try:
            # Create the file
            file: File = request_serializer.save()

            return file
        except DatabaseError as e:
            self.logger.error(f"DatabaseError: Failed to upload file: {e}")

            raise ServerFailureException(
                detail="An error occurred while uploading the file."
            )
        except Exception as e:
            self.logger.error(f"Unexpected Exception: Failed to upload file: {e}")

            raise ServerFailureException(
                detail="An unexpected error occurred while uploading the file."
            )
