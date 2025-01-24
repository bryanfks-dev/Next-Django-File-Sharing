import uuid
from django.db import models


class FileCategory(models.Model):
    """
    FileCategory is a model to store the category of the file.

    Attributes:
    - id (UUID): The unique identifier of the file category.
    - category (str): The category of the file.
    - extensions (list): The list of extensions that belong to the file category.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.CharField(max_length=255, unique=True)
    extensions = models.JSONField(null=True)

    def __str__(self):
        return self.category
