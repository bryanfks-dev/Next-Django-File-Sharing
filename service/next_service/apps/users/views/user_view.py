import logging

from rest_framework.viewsets import ViewSet
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from infrastructure.middlewares.auth_middleware import auth_middleware
from apps.users.use_cases.user_usecase import UserUsecase
from apps.users.models.user_model import User
from apps.users.serializers.get_user_response_serializer import (
    GetUserResponseSerializer,
)


class UserView(ViewSet):
    """
    UserView is a viewset class that handles user related requests.
    This class is responsible for handling user related requests.
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.user_usecase = UserUsecase()
        self.logger = logging.getLogger("next_service")

    @auth_middleware
    def retrieve_me(self, request: Request) -> Response:
        """
        retrieve_me is a method that retrieves current user information.

        Args:
        - request (Request): The request object

        Returns:
        - Response: The response object
        """

        # Get the current user
        user: User = request.user

        # Serialize the response
        response_serializer = GetUserResponseSerializer(user=user)

        return Response(
            data=response_serializer.to_dict(),
            status=status.HTTP_200_OK,
        )
