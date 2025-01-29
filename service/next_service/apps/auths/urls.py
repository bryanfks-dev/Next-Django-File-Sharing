from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.auths.views.sign_up_view import SignUpView
from apps.auths.views.sign_in_view import SignInView
from apps.auths.views.token_view import TokenView
from apps.auths.views.guest_sign_in_view import GuestSignInView

# Create router object
router = DefaultRouter(trailing_slash=False)

# Register viewsets with router
router.register(prefix=r"auth/signup", viewset=SignUpView, basename="signup")
router.register(prefix=r"auth/signin", viewset=SignInView, basename="signin")
router.register(
    prefix=r"auth/guest/signin", viewset=GuestSignInView, basename="guest_signin"
)

urlpatterns = [
    path(route="api/", view=include(router.urls), name="auths"),
    path(
        route="api/token/validate",
        view=TokenView.as_view({"get": "validate_token"}),
        name="validate_token",
    ),
]
