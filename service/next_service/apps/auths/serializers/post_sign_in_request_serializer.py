from rest_framework import serializers


class PostSignInRequestSerializer(serializers.Serializer):
    """
    PostSignInRequestSerializer is a class that serializes the request data for the sign-in process.
    This class is responsible for serializing the request data for the sign-in process.

    Attributes:
    - username (str): The username of the user.
    - password (str): The password of the user.
    """

    username = serializers.CharField(max_length=100)
    password = serializers.CharField(min_length=8, max_length=255, write_only=True)
