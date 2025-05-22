from django.urls import path
from .views import VerifyPaymentView

from .views import (
    ListingListCreateView,
    InquiryView,
    ListingDetailView,
    test_listings_view,
    run_migrations,  # 👈 Add this
    
)

urlpatterns = [
    path('', ListingListCreateView.as_view(), name='listings'),
    path('inquiries/', InquiryView.as_view(), name='inquiries'),
    path('<int:id>/', ListingDetailView.as_view(), name='listing-detail'),
    path('test/', test_listings_view),  # Optional test route
    path('migrate-now/', run_migrations),  # ✅ Temporary route
    
]

urlpatterns += [
    path('verify-payment/', VerifyPaymentView.as_view(), name='verify-payment'),
]
