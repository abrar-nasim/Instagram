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


import requests
from django.conf import settings
from .models import Payment

class VerifyPaymentView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        order_id = request.data.get("orderID")
        listing_id = request.data.get("listingID")

        if not order_id or not listing_id:
            return Response({"error": "Missing order ID or listing ID"}, status=400)

        # Get access token from PayPal
        auth = (settings.PAYPAL_CLIENT_ID, settings.PAYPAL_SECRET)
        data = {'grant_type': 'client_credentials'}
        res = requests.post('https://api-m.paypal.com/v1/oauth2/token', auth=auth, data=data)

        if res.status_code != 200:
            return Response({"error": "Failed to authenticate with PayPal"}, status=500)

        access_token = res.json()['access_token']

        # Verify the payment with PayPal
        headers = {'Authorization': f'Bearer {access_token}'}
        res = requests.get(f'https://api-m.paypal.com/v2/checkout/orders/{order_id}', headers=headers)

        if res.status_code != 200:
            return Response({"error": "Invalid PayPal order"}, status=400)

        order_data = res.json()
        status = order_data['status']
        purchase_unit = order_data['purchase_units'][0]
        amount = purchase_unit['amount']['value']
        currency = purchase_unit['amount']['currency_code']
        transaction_id = order_data['id']
        buyer_email = order_data['payer']['email_address']
        buyer_name = order_data['payer']['name']['given_name']

        if status != "COMPLETED":
            return Response({"error": "Payment not completed"}, status=400)

        # Load and check listing
        try:
            listing = InstagramListing.objects.get(id=listing_id)
        except InstagramListing.DoesNotExist:
            return Response({"error": "Listing not found"}, status=404)

        # Check if already sold
        if listing.is_sold:
            return Response({"error": "Listing already sold"}, status=400)

        # Check amount (match USD price)
        expected_amount = round(float(listing.price) / 83, 2)
        if float(amount) != expected_amount:
            return Response({"error": "Amount mismatch"}, status=400)

        # Save payment and mark sold
        Payment.objects.create(
            listing=listing,
            buyer_name=buyer_name,
            buyer_email=buyer_email,
            paypal_transaction_id=transaction_id,
            amount=amount,
            currency=currency
        )
        listing.is_sold = True
        listing.save()

        return Response({"success": True, "message": "Payment verified & listing marked sold"})


from django.core.management import call_command
from django.http import JsonResponse

def run_migrations(request):
    try:
        call_command('migrate', interactive=False)
        return JsonResponse({"status": "✅ Migrations applied successfully."})
    except Exception as e:
        return JsonResponse({"status": "❌ Migration error", "error": str(e)}, status=500)
