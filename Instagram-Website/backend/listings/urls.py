"""
URL configuration for the listings app.
Maps URL patterns to listing views.
"""
from django.urls import path
from .views import ListingListCreateView

urlpatterns = [
    path('', ListingListCreateView.as_view(), name='listings'),
]
