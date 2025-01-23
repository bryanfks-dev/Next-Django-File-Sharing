from rest_framework.exceptions import APIException
from rest_framework import status


class InvalidCredentialException(APIException):
    """
    InvalidCredentialException is a class that represents the exception
    when the credential is invalid.

    Attributes:
    - detail (str): The error message.
    - status_code (int): The status code of the error.
    """

    status_code = status.HTTP_401_UNAUTHORIZED
