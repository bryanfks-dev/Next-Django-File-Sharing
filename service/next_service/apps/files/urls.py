from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.files.views.file_view import FileView


# Create a router object
router: DefaultRouter = DefaultRouter(trailing_slash=False)

# Register urls for the router
router.register(r"files", FileView, basename="file")


urlpatterns = [
    path("api/", include(router.urls), name="file"),
]
