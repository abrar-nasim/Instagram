from django.urls import path
from .views import (
    ListingListCreateView,
    InquiryView,
    ListingDetailView,
    test_listings_view,
    run_migrations,
    VerifyPaymentView,
)

urlpatterns = [
    # 🔹 Main listing routes
    path('', ListingListCreateView.as_view(), name='listings'),
    path('inquiries/', InquiryView.as_view(), name='inquiries'),
    path('<int:id>/', ListingDetailView.as_view(), name='listing-detail'),

    # 🧪 Health check or test route
    path('test/', test_listings_view),

    # ⚙️ Temporary migration trigger for Render
    path('migrate-now/', run_migrations),

    # 💳 PayPal payment verification
    path('verify-payment/', VerifyPaymentView.as_view(), name='verify-payment'),
]
