"""
URL configuration for the listings app.
Maps URL patterns to listing views.
"""

from django.urls import path
from .views import ListingListCreateView, InquiryView

urlpatterns = [
    # List and create listings
    path('', ListingListCreateView.as_view(), name='listings'),

    # Inquiries API (for Contact Form Submissions)
    path('inquiries/', InquiryView.as_view(), name='inquiries'),
]
