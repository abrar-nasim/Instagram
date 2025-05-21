"""
Defines the InstagramListing model.
Each instance represents an Instagram page listing available for sale.
"""
from django.db import models

class InstagramListing(models.Model):
    username = models.CharField(max_length=100)
    followers = models.PositiveIntegerField()
    niche = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    contact_email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    # Optional: you can add an is_sold flag if needed
    is_sold = models.BooleanField(default=False)
    image = models.ImageField(upload_to='uploads/', null=True, blank=True)
    is_featured = models.BooleanField(default=False)


    def __str__(self):
        return f'{self.username} - {self.niche}'


class Inquiry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    proposed_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Inquiry from {self.name}'
    

class Payment(models.Model):
    listing = models.ForeignKey(InstagramListing, on_delete=models.CASCADE)
    buyer_name = models.CharField(max_length=100)
    buyer_email = models.EmailField()
    paypal_transaction_id = models.CharField(max_length=255, unique=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Payment for {self.listing.username} by {self.buyer_email}'
