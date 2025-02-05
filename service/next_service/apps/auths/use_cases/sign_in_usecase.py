import logging
import uuid

from django.db import DatabaseError, IntegrityError, transaction
from django.utils import timezone

from apps.auths.serializers.post_sign_in_request_serializer import (
    PostSignInRequestSerializer,
)
from core.exceptions.invalid_field_value_exception import (
    InvalidFieldValueException,
)
from core.exceptions.invalid_credential_exception import InvalidCredentialException
from core.exceptions.server_failure_exception import ServerFailureException
from apps.users.models.user_model import User
from core.exceptions.forbidden_exception import ForbiddenException


class SignInUsecase:
    """
    SignInUsecase is a class that represents the usecase of the sign in feature.
    This class is responsible for handling the business logic of the sign in feature.
    """

    def __init__(self):
        self.logger = logging.getLogger("next_service")

    @transaction.atomic
    def execute(
        self, request_serializer: PostSignInRequestSerializer
    ) -> tuple[User, uuid.UUID]:
        """
        execute is a method that executes the sign in process.

        Args:
        - request_serializer (PostSignInRequestSerializer):
            The request serializer that contains the request data.

        Returns:
        - tuple[User, str]: The user object and the token.
        """

        # Validate the request data
        if not request_serializer.is_valid():
            raise InvalidFieldValueException(detail=request_serializer.errors)

        try:
            # Get the user object from the database using the username
            user: User = User.objects.get(
                username=request_serializer.validated_data["username"]
            )

            # Check if the password is correct
            if not user.check_password(request_serializer.validated_data["password"]):
                raise InvalidCredentialException(detail="Invalid email or password.")

            # Check if the token is available and not expired
            if user.token is not None and user.token_expires_time > timezone.now():
                raise InvalidCredentialException(
                    detail="This account is used in another device, please logout from that device first."
                )

            # Check if user is still waiting for approval
            if getattr(user, "waiting_approval", None):
                raise ForbiddenException(
                    detail="This account is still waiting for approval."
                )

            # Generate the token
            token: uuid.UUID = user.generate_token()

            return user, token
        except User.DoesNotExist:
            raise InvalidCredentialException(detail="Invalid email or password.")
        except IntegrityError as e:
            self.logger.error(f"IntegrityError: Failed to signing in user: {e}")

            raise ServerFailureException(detail="An error occurred while signing in.")
        except DatabaseError as e:
            self.logger.error(f"DatabaseError: Failed to signing in user: {e}")

            raise ServerFailureException(detail="An error occurred while signing in.")
        except Exception as e:
            self.logger.error(f"Unexpected Exception: Failed to signing in user: {e}")

            raise e
