import uuid
from datetime import timedelta

from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import check_password


class User(models.Model):
    """
    User is a model that represents the user details.

    Attributes:
    - id (UUIDField): The unique identifier for the user.
    - username (CharField): The username of the user.
    - password (CharField): The password of the user.
    - token (UUIDField): The token of the user.
    - token_expires_time (DateTimeField): The date and time when the token expires.
    - created_at (DateTimeField): The date and time when the user was created.
    - updated_at (DateTimeField): The date and time when the user was last updated.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=100, unique=True, blank=False)
    password = models.CharField(max_length=255, blank=False)
    token = models.UUIDField(editable=False, unique=True, null=True)
    token_expires_time = models.DateTimeField(null=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.username

    def check_password(self, comparator_password: str) -> bool:
        """
        check_password is a method that checks if the given password is correct.

        Args:
        - comparator_password (str): The password to compare.

        Returns:
        - bool: True if the password is correct, False otherwise.
        """
        return check_password(comparator_password, self.password)

    def generate_token(self) -> uuid.UUID:
        """
        generate_token is a method that generates a new token for the user.

        Returns:
        - uuid.UUID: The generated token
        """

        # Generate a new token and set the expiration time
        self.token = uuid.uuid4()
        self.token_expires_time = timezone.now() + timedelta(days=7)

        # Save the user object
        self.save()

        return self.token
