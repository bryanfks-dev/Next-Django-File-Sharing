from rest_framework.exceptions import APIException
from rest_framework import status


class ServerFailureException(APIException):
    """
    ServerFailureException is an APIException that is raised when the server fails
    to process the request.

    Attributes:
    - detail (str): The error message.
    - status_code (int): The status code of the error.
    """

    status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
