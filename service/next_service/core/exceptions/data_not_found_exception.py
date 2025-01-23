from rest_framework.exceptions import APIException
from rest_framework import status


class DataNotFoundException(APIException):
    """
    DataNotFoundException is an APIException that is raised when the requested data is not found.

    Attributes:
    - detail (str): The error message.
    - status_code (int): The status code of the error.
    """

    status_code = status.HTTP_404_NOT_FOUND
