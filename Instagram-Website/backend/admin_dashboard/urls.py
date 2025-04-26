"""
URL configuration for the admin_dashboard app.
Maps the base URL to the admin_dashboard view.
"""
from django.urls import path
from .views import admin_dashboard
from django.urls import path
from . import views



urlpatterns = [
    path('', views.test_admin_view),
    path('', admin_dashboard, name='admin_dashboard'),
]
