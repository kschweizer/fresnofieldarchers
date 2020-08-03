import calendar

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Blogpost(models.Model):
    subject = models.CharField(max_length=200, blank=False)
    message = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    @property
    def date(self):
        return  "{} {}, {}".format(calendar.month_name[self.created_at.month], self.created_at.day, self.created_at.year)

class Image(models.Model):
    image = models.ImageField(upload_to='img/', unique=True)
    title = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)