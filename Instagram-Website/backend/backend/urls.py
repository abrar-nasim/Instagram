"""
Main URL configuration for the Instagram Website backend.
It includes URLs from the users, listings, and admin_dashboard apps.
"""

from django.contrib import admin
admin.autodiscover()
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from django.core.management import call_command
from django.db import connection  # ✅ for database check

print("✅ This is the correct urls.py being loaded.")

# View functions
def home_test_view(request):
    return HttpResponse("✅ Django URLs are working on Render!")

def admin_test_view(request):
    return HttpResponse("✅ Admin Test Route is Working!")

def migrate_view(request):
    try:
        call_command("migrate", interactive=False)
        return HttpResponse("✅ Migration success")
    except Exception as e:
        return HttpResponse(f"❌ Migration failed: {e}")

def db_check_view(request):
    try:
        connection.ensure_connection()
        return HttpResponse("✅ Database Connected Successfully!")
    except Exception as e:
        return HttpResponse(f"❌ Database Connection Failed: {e}")
    
from django.contrib.auth import get_user_model

def create_superuser_view(request):
    User = get_user_model()
    if not User.objects.filter(username="admin").exists():
        User.objects.create_superuser(
            username="admin",
            email="admin@example.com",
            password="admin123"
        )
        return HttpResponse("✅ Superuser created: admin/admin123")
    else:
        return HttpResponse("ℹ️ Superuser already exists")


# URL patterns
urlpatterns = [
    path('create-superuser/', create_superuser_view),

    path('', home_test_view),  # Root/homepage test route
    path('admin/', admin.site.urls),  # Django admin panel
    path('api/users/', include('users.urls')),  # User-related endpoints
    path('api/listings/', include('listings.urls')),  # Instagram listings endpoints
    path('api/admin_dashboard/', include('admin_dashboard.urls')),  # Admin dashboard endpoints
    path('admin-test/', admin_test_view),  # Admin Test Route
    path('test/', home_test_view),  # Homepage test route
    path('migrate-now/', migrate_view),  # Migration Route
    path('db-check/', db_check_view),  # ✅ Database connection check
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

print("💡 Django loaded this urls.py ✅")
