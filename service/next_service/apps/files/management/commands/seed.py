from django.core.management.base import BaseCommand
from django.db import transaction

from core.enums.file_category_enum import FileCategoryEnum
from apps.files.models.file_category_model import FileCategory


class Command(BaseCommand):
    """
    Command is a class that seeds the database with the initial datas.
    This class is responsible for seeding the database with the initial datas.
    """

    help = "Seed the database with the initial datas."

    @transaction.atomic
    def execute(self, *args, **kwargs) -> None:
        """
        execute is a method that seeds the database with the initial datas.

        Returns:
        - None
        """

        # Bulk create the file categories
        FileCategory.objects.bulk_create(
            [
                FileCategory(category=e.get_text(), extensions=e.get_extensions())
                for e in FileCategoryEnum
            ]
        )

        self.stdout.write(self.style.SUCCESS("Successfully seeded the database!"))
