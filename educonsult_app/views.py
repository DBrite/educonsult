from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CONTACT_DETAILSerializer
from .models import CONTACT_DETAIL

class CONTACT_DETAILView(viewsets.ModelViewSet):
    serializer_class = CONTACT_DETAILSerializer
    queryset = CONTACT_DETAIL.objects.all()