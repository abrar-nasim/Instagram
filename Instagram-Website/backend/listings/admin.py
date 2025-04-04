from django.contrib import admin
from .models import InstagramListing, Inquiry

# ✅ Register the Inquiry model
admin.site.register(Inquiry)

# ✅ Register InstagramListing with custom admin panel
@admin.register(InstagramListing)
class InstagramListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'niche', 'price', 'is_sold', 'created_at')
    search_fields = ('username', 'niche')
    list_filter = ('is_sold', 'created_at')
