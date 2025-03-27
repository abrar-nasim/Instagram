"""
Configuration for the listings app.
Registers the app with Django.
"""
from django.apps import AppConfig

class ListingsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'listings'
