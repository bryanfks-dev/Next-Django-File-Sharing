import uuid

from django.db import models

from apps.users.models.user_model import User


class WaitingApproval(models.Model):
    """
    WaitingApproval is a class that represents the waiting approval model.

    Attributes:
    - id (UUID): the unique identifier of the approval.
    - user (User): the user that is being approved.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
