from django.db import models


class BlacklistedToken(models.Model):
    """
    BlacklistedToken is a model that represents the blacklisted tokens
    details.

    Attributes:
    - token (UUIDField): The token that is blacklisted.
    - expires_at (DateTimeField): The date and time when the token expires.
    """

    token = models.UUIDField(primary_key=True)
    expires_at = models.DateTimeField()

    def __str__(self) -> str:
        return self.token
