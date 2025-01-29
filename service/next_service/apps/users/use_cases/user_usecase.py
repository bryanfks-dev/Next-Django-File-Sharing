import logging

from apps.users.models.user_model import User


class UserUsecase:
    """
    UserUsecase is a class that handles the business logic for the user entity.
    This class is responsible for handling the business logic of the user entity.
    """

    def __init__(self):
        self.logger = logging.getLogger("next_service")
