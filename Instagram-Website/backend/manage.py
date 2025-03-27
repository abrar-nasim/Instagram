#!/usr/bin/env python
"""
manage.py: Entry point for Django commands (running server, migrations, etc.).
It sets the default settings module and delegates command-line tasks.
"""
import os
import sys

def main():
    # Set the default settings module for the 'backend' project
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    try:
        # Import Django's command-line utility
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError("Couldn't import Django. Make sure it's installed.") from exc
    # Execute command-line tasks
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
