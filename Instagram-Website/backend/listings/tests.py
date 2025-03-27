"""
Tests for the listings app.
Add test cases to verify listing functionality.
"""
from django.test import TestCase
from .models import InstagramListing

class ListingModelTest(TestCase):
    def test_create_listing(self):
        listing = InstagramListing.objects.create(
            username='test_insta',
            followers=1000,
            niche='travel',
            price=199.99,
            contact_email='seller@example.com'
        )
        self.assertEqual(listing.username, 'test_insta')
        self.assertEqual(listing.followers, 1000)
