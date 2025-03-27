"""
WSGI config for the Instagram Website project.
It exposes the WSGI callable as a module-level variable named 'application'.
This is used by WSGI servers to forward requests to the Django application.
"""
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
application = get_wsgi_application()
