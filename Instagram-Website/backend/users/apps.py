"""
Configuration for the users app.
This file registers the app with Django.
"""
from django.apps import AppConfig

class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'
