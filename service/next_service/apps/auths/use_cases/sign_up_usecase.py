import logging

from django.db import DatabaseError, IntegrityError
from django.db import transaction

from apps.auths.serializers.post_sign_up_request_serializer import (
    PostSignUpRequestSerializer,
)
from core.exceptions.invalid_field_value_exception import (
    InvalidFieldValueException,
)
from core.exceptions.server_failure_exception import ServerFailureException
from apps.users.models.user_model import User


class SignUpUsecase:
    """
    SignUpUsecase is a class that represents the usecase of the sign up feature.
    This class is responsible for handling the business logic of the sign up feature.
    """

    def __init__(self):
        self.logger = logging.getLogger("next_service")

    @transaction.atomic
    def execute(self, request_serializer: PostSignUpRequestSerializer) -> User:
        """
        execute is a method that executes the sign up process.

        Args:
        - request_serializer (PostSignUpRequestSerializer):
            The request serializer that contains the request data.

        Returns:
        - User: The created user object.
        """

        # Validate the request data
        if not request_serializer.is_valid():
            raise InvalidFieldValueException(detail=request_serializer.errors)

        try:
            # Check if the username already exists
            if User.objects.filter(
                username=request_serializer.validated_data["username"]
            ).exists():
                raise InvalidFieldValueException(
                    detail={"username": ["Username already exists."]}
                )
        except DatabaseError as e:
            self.logger.error(f"DatabaseError: Failed to validate username:, {e}")

            raise ServerFailureException(
                detail="An error occurred while validating username."
            )

        try:
            # Create the user
            user: User = request_serializer.save()

            return user
        except IntegrityError as e:
            self.logger.error(f"IntegrityError: Failed to create user: {e}")

            raise ServerFailureException(
                detail="An error occurred while signing user up."
            )
        except DatabaseError as e:
            self.logger.error(f"DatabaseError: Failed to create user: {e}")

            raise ServerFailureException(
                detail="An error occurred while signing user up."
            )
        except Exception as e:
            self.logger.error(f"Unexpected Exception: Failed to create user: {e}")

            raise e
