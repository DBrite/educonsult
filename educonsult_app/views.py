from django.shortcuts import render

from rest_framework import serializers, viewsets
from .serializers import ContactSerializer 
from .models import Contact
from rest_framework import permissions

class ContactView(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
    permission_classes = [permissions.IsAuthenticated]
