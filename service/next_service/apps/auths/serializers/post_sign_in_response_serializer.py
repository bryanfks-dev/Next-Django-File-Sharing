import uuid

from apps.users.serializers.user_serializer import UserSerializer
from apps.users.models.user_model import User


class PostSignInResponseSerializer:
    """
    PostSignInResponseSerializer is a class that serializes the response data of the sign-in process.
    This class is responsible for serializing the response data of the sign-in process
    before sending the response to the client.

    Attributes:
    - user (UserSerializer): The user that logged in.
    - token (UUIDField): The token for the user.
    """

    def __init__(self, user: User, token: uuid.UUID):
        self.user: User = user
        self.token: uuid.UUID = token

    def to_dict(self) -> dict[str, any]:
        """
        to_dict is a method that serializes the response data.

        Returns:
        - dict[str, any]: The serialized response data.
        """

        return {
            "user": UserSerializer(self.user).data,
            "token": str(self.token),
        }
