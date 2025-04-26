"""
Views for the admin dashboard.
Allows the admin to view and manage Instagram listings.
"""
from django.shortcuts import render
from listings.models import InstagramListing

from django.http import HttpResponse

def test_admin_view(request):
    return HttpResponse("✅ Admin Dashboard API is working!")

def admin_dashboard(request):
    """
    Retrieves all Instagram listings and renders the admin dashboard page.
    """
    listings = InstagramListing.objects.all()
    # Render the admin dashboard template and pass listings data
    return render(request, 'admin_dashboard/dashboard.html', {'listings': listings})
