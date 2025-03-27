"""
URL configuration for the users app.
Maps URL patterns to user views.
"""
from django.urls import path
from .views import CreateUserView

urlpatterns = [
    path('register/', CreateUserView.as_view(), name='user-register'),
]
