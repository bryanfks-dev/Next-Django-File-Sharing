import logging

from rest_framework.viewsets import ViewSet
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from apps.files.use_cases.file_usecase import FileUsecase
from infrastructure.middlewares.auth_middleware import auth_middleware
from apps.files.serializers.post_file_request_serializer import (
    PostFileRequestSerializer,
)
from apps.users.models.user_model import User
from apps.files.models.file_model import File
from apps.files.serializers.post_file_response_serializer import (
    PostFileResponseSerializer,
)


class FileView(ViewSet):
    """
    FileView is a class-based view that handles the file feature.
    This class is responsible for handling the file feature.
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.file_usecase = FileUsecase()
        self.logger = logging.getLogger("next_service")

    @auth_middleware
    def create(self, request: Request) -> Response:
        """
        create is a method that creates a file.

        Args:
        - request (Request): The request object

        Returns:
        - Response: The response object
        """

        # Get the user from the request object
        user: User = request.user

        # Get the file data from the request object
        request_serializer = PostFileRequestSerializer(
            data=request.data, context={"user": user}
        )

        try:
            # Upload the file
            file: File = self.file_usecase.upload_file(
                request_serializer=request_serializer
            )

            # Serialize the response data
            response = PostFileResponseSerializer(file=file)

            return Response(data=response.to_dict(), status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
