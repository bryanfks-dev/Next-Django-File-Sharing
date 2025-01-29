from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.files.views.file_view import FileView


# Create a router object
router: DefaultRouter = DefaultRouter(trailing_slash=False)

# Register urls for the router
router.register(prefix=r"files", viewset=FileView, basename="file")


urlpatterns = [
    path(route="api/", view=include(router.urls), name="file"),
]
