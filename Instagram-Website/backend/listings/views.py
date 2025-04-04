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

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Inquiry
from .serializers import InquirySerializer

class InquiryView(APIView):
    def post(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
