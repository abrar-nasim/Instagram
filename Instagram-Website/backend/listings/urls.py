from django.urls import path
from .views import ListingListCreateView, InquiryView, ListingDetailView
from . import views
from django.http import HttpResponse  # ✅ Add this
from django.contrib.auth.models import User  # ✅ Already added

# 🔐 Temporary view to create superuser
def create_temp_admin(request):
    if not User.objects.filter(username="admin").exists():
        User.objects.create_superuser("admin", "admin@example.com", "admin123")
        return HttpResponse("✅ Superuser 'admin' created with password 'admin123'")
    else:
        return HttpResponse("⚠️ Superuser already exists")

urlpatterns = [
    path('', ListingListCreateView.as_view(), name='listings'),
    path('inquiries/', InquiryView.as_view(), name='inquiries'),
    path('<int:id>/', ListingDetailView.as_view(), name='listing-detail'),
    path('create-temp-admin/', create_temp_admin),  # ✅ Temporary route
]
