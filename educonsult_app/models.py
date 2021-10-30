from django.db import models

class CONTACT_DETAIL(models.Model):
    contact_detail_id = models.AutoField
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=10,)
    message = models.TextField(max_length=1000)










