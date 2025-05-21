from django.urls import path
from .views import VerifyPaymentView

from .views import (
    ListingListCreateView,
    InquiryView,
    ListingDetailView,
    test_listings_view,
    
)

urlpatterns = [
    path('', ListingListCreateView.as_view(), name='listings'),
    path('inquiries/', InquiryView.as_view(), name='inquiries'),
    path('<int:id>/', ListingDetailView.as_view(), name='listing-detail'),
    path('test/', test_listings_view),  # Optional test route
    
]

urlpatterns += [
    path('verify-payment/', VerifyPaymentView.as_view(), name='verify-payment'),
]
