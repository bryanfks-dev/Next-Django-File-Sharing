from rest_framework.exceptions import APIException
from rest_framework import status


class ForbiddenException(APIException):
    """
    ForbiddenException is an APIException that is raised when the user is not allowed to access the resource.

    Attributes:
    - detail (str): The error message.
    - status_code (int): The status code of the error.
    """

    status_code = status.HTTP_403_FORBIDDEN
