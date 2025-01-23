from rest_framework.exceptions import APIException
from rest_framework import status


class InvalidFieldValueException(APIException):
    """
    Invalid is an APIException that is raised when a field value is invalid.

    Attributes:
    - detail (str): The error message.
    - status_code (int): The status code of the error.
    """

    status_code = status.HTTP_400_BAD_REQUEST
