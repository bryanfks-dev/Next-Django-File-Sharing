from functools import wraps
import logging

from django.db import DatabaseError, IntegrityError
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from apps.users.models.user_model import User


def auth_middleware(view_func):
    """
    auth_middleware is a middleware decorator function that is used to
    authenticate the user.

    Args:
    - view_func: The view function that needs to be wrapped.
    """

    # Get the logger
    logger = logging.getLogger("next_service")

    @wraps(wrapped=view_func)
    def _wrapped_view(self, request: Request, *args, **kwargs) -> Response:
        """
        _wrapped_view is a method that handles the middleware logic.

        Args:
        - request (Request): The request object

        Returns:
        - Response: The response object
        """

        # Get the token from the request headers
        token: str = request.META.get("HTTP_X_API_TOKEN", "").strip()

        # Check if the token is empty
        if not token:
            return Response(
                data={"error": "Token is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Get the user object from the database using the token
            user = User.objects.get(token=token)

            # Set the user in the request object
            request.user = user
        except User.DoesNotExist:
            return Response(
                data={"error": "Invalid token"}, status=status.HTTP_401_UNAUTHORIZED
            )
        except IntegrityError as e:
            logger.error(f"IntegrityError: Failed to find user using token: {e}")

            return Response(
                data={"error": "An error occurred while authenticating user"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        except DatabaseError as e:
            logger.error(f"DatabaseError: Failed to find user using token: {e}")

            return Response(
                data={"error": "An error occurred while authenticating user"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        except Exception as e:
            logger.error(
                f"Unexpected Exception: An error occurred while authenticating user: {e}"
            )

            return Response(
                data={
                    "error": "An unexpected error occurred while authenticating user"
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        return view_func(self, request)

    return _wrapped_view
