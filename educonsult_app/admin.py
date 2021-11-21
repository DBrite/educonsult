from django.contrib import admin
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "message")


admin.site.register(Contact, ContactAdmin)

# Register your models here.
