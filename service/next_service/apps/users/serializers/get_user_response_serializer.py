from apps.users.models.user_model import User
from apps.users.serializers.user_serializer import UserSerializer


class GetUserResponseSerializer:
    """
    GetUserResponseSerializer is a class that serializes the response for
    the get user process.

    Attributes:
    - user (User): The user that is retrieved.
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
