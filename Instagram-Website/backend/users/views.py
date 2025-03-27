"""
Views for handling user-related API endpoints.
For example, user registration.
"""
from rest_framework import generics
from .models import CustomUser
from .serializers import UserSerializer

class CreateUserView(generics.CreateAPIView):
    """
    API endpoint that allows a new user to be created.
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
