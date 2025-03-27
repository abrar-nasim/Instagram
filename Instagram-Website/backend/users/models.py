"""
Defines the CustomUser model for the Instagram Website project.
This model extends Django's AbstractUser and overrides the 'groups' and 
'user_permissions' fields with custom related names to avoid reverse accessor 
conflicts that were causing system check errors.
"""

from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    # Ensure email is unique
    email = models.EmailField(unique=True)
    # Custom flag for admin status (optional, can be used in addition to is_staff)
    is_admin = models.BooleanField(default=False)

    # Override the 'groups' field with a custom related_name.
    # This prevents conflicts with the default reverse accessor in auth.User.
    groups = models.ManyToManyField(
        Group,
        related_name="customuser_groups",  # Custom related name to avoid clashes
        blank=True,
        help_text="The groups this user belongs to.",
        verbose_name="groups"
    )
    
    # Override the 'user_permissions' field with a custom related_name.
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_permissions",  # Custom related name to avoid clashes
        blank=True,
        help_text="Specific permissions for this user.",
        verbose_name="user permissions"
    )

    def __str__(self):
        return self.username
