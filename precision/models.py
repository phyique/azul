from django.db import models
from django.core.validators import RegexValidator


# Create your models here.


class Document(models.Model):
    description = models.CharField(max_length=255, blank=True)
    document = models.FileField(upload_to='documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)


class Contact(models.Model):
    full_Name = models.CharField(max_length=255, blank=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in the format: '+(800)999-9999'")
    phone_Number = models.CharField(blank=True, max_length=20)
    email = models.EmailField(max_length=255)
    message = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Upload(models.Model):
    full_Name = models.CharField(max_length=255, blank=True)
