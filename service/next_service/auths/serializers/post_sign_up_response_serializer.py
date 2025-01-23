from users.models.user_model import User
from users.serializers.user_serializer import UserSerializer


class PostSignUpResponseSeralizer:
    """
    PostSignUpResponseSerializer is a class that serializes the response for
    the sign-up process.
    This class is responsible for serializing the response data of the sign-up
    process before sending the response to the client.

    Attributes:
    - user (UserSerializer): The user that signed up.
    """

    def __init__(self, user: User):
        self.user: User = user

    def to_dict(self) -> dict[str, any]:
        """
        to_dict is a method that serializes the response data.

        Returns:
        - dict[str, any]: The serialized response data.
        """

        return dict(UserSerializer(self.user).data)
