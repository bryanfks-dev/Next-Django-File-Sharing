from apps.auths.serializers.post_guest_sign_in_request_serializer import (
    PostGuestSignInRequestSerializer,
)
from core.exceptions.invalid_field_value_exception import InvalidFieldValueException


class GuestSignInUsecase:
    """
    GuestSignInUsecase is a class that handles the guest sign-in process.
    This class is responsible for handling the guest sign-in process.
    """

    def execute(self, request_serializer: PostGuestSignInRequestSerializer) -> None:
        """
        execute is a method that handles the guest sign-in process.

        Args:
        - request_serializer (PostGuestSignInRequestSerializer):
            The request serializer object that contains the request data.

        Returns:
        - None
        """

        # Validate the request data
        if request_serializer.is_valid():
            return None

        raise InvalidFieldValueException(detail=request_serializer.errors)
