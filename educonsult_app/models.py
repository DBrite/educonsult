from django.db import models
from django.db.models import constraints

# Create your models here.

class Contact(models.Model):
    #contact_id = models.AutoField()
    name = models.CharField(max_length=40)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    message = models.TextField(max_length=1000)

    def __str__(self):
        return self.name