"""
Views for handling Instagram listings.
Provides endpoints to list and create new listings.
"""
from rest_framework import generics
from .models import InstagramListing
from .serializers import ListingSerializer

from rest_framework import generics
from .models import InstagramListing
from .serializers import ListingSerializer
from django.http import HttpResponse

def test_listings_view(request):
    return HttpResponse("✅ Listings API is working!")


class ListingListCreateView(generics.ListCreateAPIView):
    queryset = InstagramListing.objects.all()
    serializer_class = ListingSerializer

    def get_queryset(self):

        ## featured filter
        queryset = super().get_queryset()
        is_featured = self.request.query_params.get('is_featured')
        if is_featured == 'true':
            queryset = queryset.filter(is_featured=True)

        ##niche filter
        niche = self.request.query_params.get('niche')
        if niche:
            queryset = queryset.filter(niche__iexact=niche)   

        return queryset


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

from rest_framework.generics import RetrieveAPIView

class ListingDetailView(RetrieveAPIView):
    queryset = InstagramListing.objects.all()
    serializer_class = ListingSerializer
    lookup_field = 'id'
