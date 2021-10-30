from rest_framework import serializers
from .models import CONTACT_DETAIL

class CONTACT_DETAILSerializer(serializers.ModelSerializer):
    class Meta:
        model = CONTACT_DETAIL
        fields = '__all__'
