from django.db import models
from django.db.models import constraints

# Create your models here.


class Contact(models.Model):
    contact_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    message = models.TextField(max_length=2000)

    def __str__(self):
        return self.name
