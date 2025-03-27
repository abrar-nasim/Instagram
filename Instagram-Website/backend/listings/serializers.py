"""
Serializes InstagramListing data for API responses.
"""
from rest_framework import serializers
from .models import InstagramListing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstagramListing
        fields = '__all__'
