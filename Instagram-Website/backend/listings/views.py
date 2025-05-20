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
from .serializers import InquirySerializer  # ✅ Required for InquiryView

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
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='dispatch')  # ✅ exempt CSRF
class InquiryView(APIView):
    permission_classes = [AllowAny]  # ✅ allow any origin

    def options(self, request, *args, **kwargs):
        """Handles CORS preflight"""
        response = Response(status=status.HTTP_200_OK)
        response['Access-Control-Allow-Origin'] = '*'
        response['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response

    # def post(self, request):
    #     serializer = InquirySerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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


from rest_framework.generics import RetrieveAPIView

class ListingDetailView(RetrieveAPIView):
    queryset = InstagramListing.objects.all()
    serializer_class = ListingSerializer
    lookup_field = 'id'
