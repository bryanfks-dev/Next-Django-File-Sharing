import uuid
from django.db import models

from apps.files.models.file_category_model import FileCategory
from users.models.user_model import User


class File(models.Model):
    """
    File is a model to store the file information.

    Attributes:
    - id (UUID): The unique identifier of the file.
    - name (str): The name of the file.
    - extension (str): The extension of the file.
    - path (str): The path of the file.
    - category (FileCategory): The category of the file.
    - uploaded_by (User): The user who uploaded the file.
    - created_at (DateTime): The date and time when the file was created.
    - updated_at (DateTime): The date and time when the file was last updated.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, unique=True)
    extension = models.CharField(max_length=255)
    path = models.CharField(max_length=255)
    category = models.ForeignKey(
        FileCategory,
        related_name="files",
        on_delete=models.SET_NULL,
    )
    uploaded_by = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.file_path
