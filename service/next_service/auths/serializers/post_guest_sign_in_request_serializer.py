from decouple import config

from rest_framework import serializers


class PostGuestSignInRequestSerializer(serializers.Serializer):
    """
    PostGuestSignInRequestSerializer is a class that serializes the request data
    for the guest sign-in process.

    Attributes:
    - password (str): The password of the guest.
    """

    password = serializers.CharField(max_length=255, required=False)

    def validate(self, data: dict) -> dict:
        """
        validate is a method that validates the request data for the guest sign-in process.

        Args:
        - data (dict): The request data.

        Returns:
        - dict: The validated request data.
        """

        # Check if the password is correct.
        if data["password"] != config("GUEST_SIGNIN_PASSWORD"):
            raise serializers.ValidationError(detail={"password": "Invalid password."})

        return data
