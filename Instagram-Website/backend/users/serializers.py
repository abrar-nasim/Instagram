"""
Serializers for the users app.
Converts CustomUser model instances into JSON and vice versa.
"""
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'is_admin']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Create and return a new CustomUser instance, with hashed password.
        user = CustomUser.objects.create_user(**validated_data)
        return user
