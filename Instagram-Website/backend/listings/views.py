"""
Views for handling Instagram listings.
Provides endpoints to list and create new listings.
"""

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import HttpResponse
from django.contrib.auth.models import User

from .models import InstagramListing
from .serializers import ListingSerializer, InquirySerializer

# 🔹 Diagnostic/test route
def test_listings_view(request):
    return HttpResponse("✅ Listings API is working!")


# 🔹 List + filter + create listings
class ListingListCreateView(generics.ListCreateAPIView):
    queryset = InstagramListing.objects.all()
    serializer_class = ListingSerializer

    def get_queryset(self):
        queryset = super().get_queryset()

        is_featured = self.request.query_params.get('is_featured')
        if is_featured == 'true':
            queryset = queryset.filter(is_featured=True)

        niche = self.request.query_params.get('niche')
        if niche:
            queryset = queryset.filter(niche__iexact=niche)

        return queryset


# 🔹 Detail view for single listing
class ListingDetailView(generics.RetrieveAPIView):
    queryset = InstagramListing.objects.all()
    serializer_class = ListingSerializer
    lookup_field = 'id'


# 🔹 Inquiry (Contact Form) API
@method_decorator(csrf_exempt, name='dispatch')
class InquiryView(APIView):
    permission_classes = [AllowAny]

    def options(self, request, *args, **kwargs):
        response = Response(status=status.HTTP_200_OK)
        response['Access-Control-Allow-Origin'] = '*'
        response['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response

    def post(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except Exception as e:
                print("❌ Error during serializer.save():", str(e))
                return Response({"detail": "Internal server error", "debug": str(e)}, status=500)
        else:
            print("❌ Inquiry validation errors:", serializer.errors)
            return Response(serializer.errors, status=400)


# 🔹 Temporary Admin Account Creators (DO NOT KEEP IN PRODUCTION)

def create_temp_admin(request):
    if not User.objects.filter(username="admin").exists():
        User.objects.create_superuser("admin", "admin@example.com", "admin123")
        return HttpResponse("✅ Superuser 'admin' created with password 'admin123'")
    else:
        return HttpResponse("⚠️ Superuser already exists")


def force_create_admin(request):
    if not User.objects.filter(username="newadmin").exists():
        User.objects.create_superuser("newadmin", "admin@example.com", "newpassword123")
        return HttpResponse("✅ New superuser 'newadmin' created with password 'newpassword123'")
    return HttpResponse("⚠️ User already exists")
