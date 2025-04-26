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
from django.contrib.auth import get_user_model

print("✅ This is the correct urls.py being loaded.")

# Temporary function to auto-migrate and create a superuser
def run_startup_commands():
    try:
        call_command("migrate", interactive=False)
        User = get_user_model()
        if not User.objects.filter(username="admin").exists():
            User.objects.create_superuser("admin", "admin@example.com", "admin123")
            print("✅ Superuser 'admin' created.")
        else:
            print("ℹ️ Superuser already exists.")
    except Exception as e:
        print("❌ Migration or superuser creation failed:", e)


run_startup_commands()

# View functions
def admin_test_view(request):
    return HttpResponse("✅ Admin Test Route is Working!")

def home_test_view(request):
    return HttpResponse("✅ Django URLs are working on Render!")

# URL patterns
urlpatterns = [
    path('admin/', admin.site.urls),  # Django admin panel
    path('api/users/', include('users.urls')),  # User-related endpoints
    path('api/listings/', include('listings.urls')),  # Instagram listings endpoints
    path('api/admin_dashboard/', include('admin_dashboard.urls')),  # Admin dashboard endpoints
    path('admin-test/', admin_test_view),  # Admin Test Route
    path('test/', home_test_view),  # Homepage test route
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


print("💡 Django loaded this urls.py ✅")
