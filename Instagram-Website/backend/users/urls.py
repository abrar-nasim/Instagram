"""
URL configuration for the users app.
Maps URL patterns to user views.
"""
from django.urls import path
from .views import CreateUserView
from . import views

urlpatterns = [
    path('', views.test_user_view),
    path('register/', CreateUserView.as_view(), name='user-register'),

]



