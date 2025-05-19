"""
Main URL configuration for the Instagram Website backend.
It includes URLs from the users, listings, and admin_dashboard apps.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse

from django.core.management import call_command 
""" 
temporary
"""



print("✅ This is the correct urls.py being loaded.")

def run_migrations_view(request):
    import sys
    from io import StringIO

    out = StringIO()
    call_command('migrate', stdout=out)
    output = out.getvalue()

    return HttpResponse(f"✅ Migrations ran. Output:<br><pre>{output}</pre>")



# View functions
def home_test_view(request):
    return HttpResponse("✅ Django is running properly on Render!")

# URL patterns
urlpatterns = [
    path('', home_test_view),  # Homepage test route
    path('admin/', admin.site.urls),  # Django admin panel
    path('api/users/', include('users.urls')),  # User-related endpoints
    path('api/listings/', include('listings.urls')),  # Instagram listings endpoints
    path('api/admin_dashboard/', include('admin_dashboard.urls')),  # Admin dashboard endpoints
    path('run-migrations/', run_migrations_view),

]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

print("💡 Django loaded this urls.py ✅")
