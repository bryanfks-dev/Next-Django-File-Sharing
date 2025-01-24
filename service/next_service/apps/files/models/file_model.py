import uuid

from django.db import models
from django.utils.translation import gettext_lazy

from apps.files.models.file_category_model import FileCategory
from core.enums.upload_file_channel_enum import (
    UploadFileChannelEnum,
)
from apps.users.models.user_model import User
from core.constants.constants import UPLOAD_FILE_STORAGE_PATH
from apps.groups.models.group_model import Group


class File(models.Model):
    """
    File is a model to store the file information.

    Attributes:
    - id (UUID): The unique identifier of the file.
    - file (File): The file to be uploaded.
    - file_extension (str): The extension of the file.
    - category (FileCategory): The category of the file.
    - uploaded_by_user (User): The user who uploaded the file.
    - upload_channel (str): The channel where the file will be uploaded.
    - group (Group): The group where the file will be uploaded.
    - created_at (DateTime): The date and time when the file was created.
    - updated_at (DateTime): The date and time when the file was last updated.
    """

    class UploadChannel(models.TextChoices):
        """
        UploadChannel is a class that contains the choices for the upload channel of the file.
        This class is responsible for containing the choices for the upload channel of the file.
        """

        PUBLIC = ("PB", gettext_lazy(UploadFileChannelEnum.PUBLIC.value))
        GROUP = ("GR", gettext_lazy(UploadFileChannelEnum.GROUP.value))

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    file = models.FileField(upload_to=UPLOAD_FILE_STORAGE_PATH, editable=False)
    file_extension = models.CharField(max_length=50, editable=False)
    category = models.ForeignKey(
        FileCategory,
        related_name="files",
        on_delete=models.SET_NULL,
        null=True
    )
    uploaded_by_user = models.OneToOneField(User, on_delete=models.CASCADE, editable=False)
    upload_channel = UploadChannel.choices
    group = (
        models.ForeignKey(
            Group,
            related_name="files",
            on_delete=models.SET_NULL,
            null=True,
            editable=False,
        ),
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.file.path
