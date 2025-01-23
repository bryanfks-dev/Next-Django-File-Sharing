import logging

from rest_framework.viewsets import ViewSet
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from auths.serializers.post_guest_sign_in_request_serializer import (
    PostGuestSignInRequestSerializer,
)
from auths.use_cases.guest_sign_in_usecase import GuestSignInUsecase
from core.exceptions.invalid_field_value_exception import InvalidFieldValueException


class GuestSignInView(ViewSet):
    """
    GuestSignInView is a class-based view that handles the guest sign-in process.
    This class is responsible for handling the guest sign-in process.
    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.guest_sign_in_use_case = GuestSignInUsecase()
        self.logger = logging.getLogger("next_service")

    def create(self, request: Request) -> Response:
        """
        create is a method that handles the guest sign-in process.

        Args:
        - request (Request): The request object that contains the request data.

        Returns:
        - Response: The response object that contains the response data.
        """

        # Serialize the request data
        request_serializer = PostGuestSignInRequestSerializer(data=request.data)

        try:
            # Execute the guest sign-in use case
            self.guest_sign_in_use_case.execute(request_serializer=request_serializer)

            return Response(status=status.HTTP_200_OK)
        except InvalidFieldValueException as e:
            return Response(
                data={"error": e.detail},
                status=e.status_code,
            )
        except Exception as e:
            self.logger.error(
                f"Unexpected Exception: An unexpected error occurred while signing in as a guest: {e}"
            )

            return Response(
                data={
                    "error": "An unexpected error occurred while signing in as a guest."
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
