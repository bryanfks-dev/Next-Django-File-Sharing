from django.core.management.base import BaseCommand
from django.db import transaction
from django.contrib.auth.hashers import make_password

from apps.users.models.user_model import User


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

        # Create admin account
        User.objects.create_ig(
            username="admin",
            password=make_password("admin123"),
        )

        self.stdout.write(self.style.SUCCESS("Successfully seeded the database!"))
