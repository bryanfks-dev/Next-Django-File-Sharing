from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import make_password

from users.models.user_model import User


class PostSignUpRequestSerializer(serializers.Serializer):
    """
    PostSignUpRequestSerializer is a class that serial the request data for the sign-up process.
    This class is responsible for serializing the request data for the sign-up process.

    Attributes:
    - username (str): The username of the user.
    - password (str): The password of the user.
    - confirmPasword (str): The confirm password of the user.
    """

    username = serializers.CharField(max_length=100)
    password = serializers.CharField(
        min_length=8, max_length=255, validators=[validate_password], write_only=True
    )
    confirm_password = serializers.CharField(
        min_length=8, max_length=255, write_only=True
    )

    def validate(self, data: dict) -> dict:
        """
        Validate is a method that validates the request data for the sign-up process.

        Args:
        - data (dict): The request data.

        Returns:
        - dict: The validated request data.
        """

        # Validate the password and confirm password
        if data["password"] != data["confirm_password"]:
            raise serializers.ValidationError(
                detail={"confirm_password": "Passwords do not match"}
            )

        return data

    def create(self, validated_data: dict) -> User:
        """
        create is a method that creates a new user with the validated data.

        Args:
        - validated_data (dict): The validated data.

        Returns:
        - User: The created user.
        """

        # Remove the confirm_password field
        validated_data.pop("confirm_password")

        # Create the user
        user: User = User.objects.create(
            username=validated_data["username"],
            password=make_password(validated_data["password"]),
        )

        return user
