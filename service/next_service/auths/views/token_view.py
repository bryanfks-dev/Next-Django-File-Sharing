from rest_framework.viewsets import ViewSet
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from infrastructure.middlewares.auth_middleware import auth_middleware


class TokenView(ViewSet):
    """
    TokenView is a class-based view that is used to validate the token.

    Methods:
    - validate_token: The method that is used to validate the token.
    """

    @auth_middleware
    def validate_token(self, request: Request) -> Response:
        """
        validate_token is a method that is used to validate the token.

        Args:
        - request (Request): The request object.

        Returns:
        - Response: The response object.
        """

        # Since the token is already validated by the auth_middleware,
        # we can return a 200 OK response.

        return Response(status=status.HTTP_200_OK)
