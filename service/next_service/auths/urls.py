from django.urls import include, path
from rest_framework.routers import DefaultRouter

from auths.views.sign_up_view import SignUpView
from auths.views.sign_in_view import SignInView
from auths.views.token_view import TokenView
from auths.views.guest_sign_in_view import GuestSignInView

# Create router object
router = DefaultRouter(trailing_slash=False)

# Register viewsets with router
router.register(r"auth/signup", SignUpView, basename="signup")
router.register(r"auth/signin", SignInView, basename="signin")
router.register(r"auth/guest/signin", GuestSignInView, basename="guest_signin")

urlpatterns = [
    path("api/", include(router.urls), name="auths"),
    path(
        "api/token/validate",
        TokenView.as_view({"get": "validate_token"}),
        name="validate_token",
    ),
]
