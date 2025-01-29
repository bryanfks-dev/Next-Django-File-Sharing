from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.users.views.user_view import UserView

# Create router object
router = DefaultRouter(trailing_slash=False)

# Register viewsets with router
router.register(r"users", UserView, basename="users")

urlpatterns = [
    path("api/", include(router.urls), name="users"),
    path(
        "api/users/me",
        UserView.as_view({"get": "retrieve_me"}),
        name="retrieve_current_user",
    ),
]
