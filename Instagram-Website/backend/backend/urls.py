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


print("✅ This is the correct urls.py being loaded.")


urlpatterns = [
    path('admin/', admin.site.urls),  # Django admin panel
    path('api/users/', include('users.urls')),  # User-related endpoints
    path('api/listings/', include('listings.urls')),  # Instagram listings endpoints
    path('api/admin_dashboard/', include('admin_dashboard.urls')),  # Admin dashboard endpoints
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



def test_view(request):
    return HttpResponse("Admin Test Route is Working!")

urlpatterns += [
    path('admin-test/', test_view),
]

