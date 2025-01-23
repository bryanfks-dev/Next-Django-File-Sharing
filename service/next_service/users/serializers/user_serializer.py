from rest_framework import serializers

from users.models.user_model import User


class UserSerializer(serializers.ModelSerializer):
    """
    UserSerializer is a class that serializes the user model.

    Attributes:
    - id (UUIDField): The unique identifier for the user.
    - username (CharField): The username of the user.
    - created_at (DateTimeField): The date and time when the user was created.
    - updated_at (DateTimeField): The date and time when the user was last updated.
    """

    class Meta:
        model = User

        fields = ["id", "username", "created_at", "updated_at"]
