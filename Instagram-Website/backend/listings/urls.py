from django.urls import path
from .views import (
    ListingListCreateView,
    InquiryView,
    ListingDetailView,
    test_listings_view,
    create_temp_admin,
    force_create_admin
)

urlpatterns = [
    path('', ListingListCreateView.as_view(), name='listings'),
    path('inquiries/', InquiryView.as_view(), name='inquiries'),
    path('<int:id>/', ListingDetailView.as_view(), name='listing-detail'),
    path('test/', test_listings_view),  # Optional test route
    
]
