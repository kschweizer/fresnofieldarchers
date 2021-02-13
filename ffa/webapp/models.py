import calendar

from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.

class Blogpost(models.Model):
    subject = models.CharField(max_length=200, blank=False)
    message = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    @property
    def date(self):
        return  "{} {}, {}".format(calendar.month_name[self.created_at.month], self.created_at.day, self.created_at.year)

class Album(models.Model):
    title = models.CharField(unique=True, max_length=200)
    thumbnail = models.CharField(max_length=64, blank=True)
    description = models.TextField(blank=True)

class Image(models.Model):
    image = models.ImageField(upload_to='dev/img/', unique=True)
    album = models.ForeignKey(Album, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

#class Event(models.Model):
    #name = models.CharField(max_length=500, blank=False)
