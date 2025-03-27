"""
Views for handling Instagram listings.
Provides endpoints to list and create new listings.
"""
from rest_framework import generics
from .models import InstagramListing
from .serializers import ListingSerializer

class ListingListCreateView(generics.ListCreateAPIView):
    """
    GET: Returns a list of all Instagram listings.
    POST: Creates a new Instagram listing.
    """
    queryset = InstagramListing.objects.all()
    serializer_class = ListingSerializer
