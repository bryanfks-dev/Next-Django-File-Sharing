from django.urls import include, path
from rest_framework.routers import DefaultRouter

from auths.views.sign_up_view import SignUpView
from auths.views.sign_in_view import SignInView

# Create router object
router = DefaultRouter(trailing_slash=False)

# Register viewsets with router
router.register(r"signup", SignUpView, basename="signup")
router.register(r"signin", SignInView, basename="signin")

urlpatterns = [
    path("api/auth/", include(router.urls), name="auths"),
]
