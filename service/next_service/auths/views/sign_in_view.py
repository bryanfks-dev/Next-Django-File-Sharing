import logging
from rest_framework.viewsets import ViewSet
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from auths.use_cases.sign_in_usecase import SignInUsecase
from auths.serializers.post_sign_in_request_serializer import (
    PostSignInRequestSerializer,
)
from auths.serializers.post_sign_in_response_serializer import (
    PostSignInResponseSerializer,
)
from core.exceptions.invalid_credential_exception import InvalidCredentialException
from core.exceptions.server_failure_exception import ServerFailureException
from core.exceptions.invalid_field_value_exception import InvalidFieldValueException


class SignInView(ViewSet):
    """
    SignInView is a class-based view that handles the user sign-in process.
    This class is responsible for handling the user sign-in process.
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.sign_in_usecase = SignInUsecase()
        self.logger = logging.getLogger("next_service")

    def create(self, request: Request) -> Response:
        """
        create is a method that handles the user sign-in process.

        Args:
        - request (Request): The request object that contains the request data.

        Returns:
        - Response: The response object that contains the response data.
        """

        # Serialize the request data
        request_serializer = PostSignInRequestSerializer(data=request.data)

        try:
            # Execute the sign-in usecase
            user, token = self.sign_in_usecase.execute(
                request_serializer=request_serializer
            )

            # Serialize the response data
            response = PostSignInResponseSerializer(user=user, token=token)

            return Response(data=response.to_dict(), status=status.HTTP_200_OK)
        except (
            InvalidFieldValueException,
            InvalidCredentialException,
            ServerFailureException,
        ) as e:
            return Response(data={"error": e.detail}, status=e.status_code)
        except Exception as e:
            self.logger.error(
                "Unexpected Exception: An unexpected error occurred while signing up:",
                str(e),
            )

            return Response(
                data={"error": "An unexpected error occurred while signing in."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
