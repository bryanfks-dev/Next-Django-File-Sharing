import logging
from rest_framework.viewsets import ViewSet
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from auths.use_cases.sign_up_usecase import SignUpUsecase
from auths.serializers.post_sign_up_request_serializer import (
    PostSignUpRequestSerializer,
)
from auths.serializers.post_sign_up_response_serializer import (
    PostSignUpResponseSeralizer,
)
from core.exceptions.server_failure_exception import ServerFailureException
from core.exceptions.invalid_field_value_exception import (
    InvalidFieldValueException,
)
from users.models.user_model import User


class SignUpView(ViewSet):
    """
    SignUpView is a class-based view that handles the user sign-up process.
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.sign_up_usecase = SignUpUsecase()
        self.logger = logging.getLogger("next_service")

    def create(self, request: Request) -> Response:
        """
        create is a method that handles the POST request for the sign-up process.

        Args:
        - request (Request): The request object.

        Returns:
        - Response: The response object.
        """

        # Serialize the request data
        request_serializer = PostSignUpRequestSerializer(data=request.data)

        try:
            # Execute the sign-up usecase
            user: User = self.sign_up_usecase.execute(
                request_serializer=request_serializer
            )

            # Serialize the response
            response_serializer = PostSignUpResponseSeralizer(user=user)

            return Response(
                data=response_serializer.to_dict(),
                status=status.HTTP_201_CREATED,
            )
        except (InvalidFieldValueException, ServerFailureException) as e:
            return Response(data={"error": e.detail}, status=e.status_code)
        except Exception as e:
            self.logger.error(
                "Unexpected Exception: An unexpected error occurred while signing up:",
                str(e),
            )

            return Response(
                data={"error": "An unexpected error occurred while signing up."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
