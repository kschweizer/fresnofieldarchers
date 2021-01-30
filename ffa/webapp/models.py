import calendar

from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.

class Blogpost(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    subject = models.CharField(max_length=200, blank=False)
    message = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    @property
    def date(self):
        return  "{} {}, {}".format(calendar.month_name[self.created_at.month], self.created_at.day, self.created_at.year)

class Album(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200, blank=True)
    thumbnail = models.CharField(max_length=64, blank=True)
    description = models.TextField(blank=True)

class Image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    image = models.ImageField(upload_to='img/', unique=True)
    album = models.ForeignKey(Album, on_delete=models.CASCADE, blank=True, null=True)