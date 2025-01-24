import uuid

from django.db import models

from apps.groups.models.group_model import Group
from apps.users.models.user_model import User


class Invitation(models.Model):
    """
    Invitation is a model to store the invitation information.

    Attributes:
    - id (UUID): The unique identifier of the invitation.
    - group (Group): The group that the invitation belongs to.
    - receiver (User): The user who receives the invitation.
    - created_at (DateTime): The date and time when the invitation was created.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    group = models.ForeignKey(
        Group,
        related_name="invitations",
        on_delete=models.CASCADE,
    )
    receiver = models.ForeignKey(
        User,
        related_name="received_invitations",
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
