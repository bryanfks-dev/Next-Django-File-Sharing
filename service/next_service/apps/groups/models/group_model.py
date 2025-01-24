import uuid

from django.db import models

from apps.users.models.user_model import User


class Group(models.Model):
    """
    Group is a model to store the group information.

    Attributes:
    - id (UUID): The unique identifier of the group.
    - name (str): The name of the group.
    - owner (User): The owner of the group.
    - members (list): The members of the group.
    - created_at (DateTime): The date and time when the group was created.
    - updated_at (DateTime): The date and time when the group was last updated.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, unique=True)
    owner = (
        models.ForeignKey(
            User,
            related_name="owner_at_groups",
            on_delete=models.CASCADE,
        ),
    )
    members = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
