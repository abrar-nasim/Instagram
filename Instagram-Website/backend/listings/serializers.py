from rest_framework import serializers
from .models import InstagramListing, Inquiry

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstagramListing
        fields = '__all__'

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'
