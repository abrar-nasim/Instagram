"""
Registers the InstagramListing model with Django admin.
Enables easy management of listings through the admin interface.
"""
from django.contrib import admin
from .models import InstagramListing

@admin.register(InstagramListing)
class InstagramListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'niche', 'price', 'is_sold', 'created_at')
    search_fields = ('username', 'niche')
    list_filter = ('is_sold', 'created_at')
