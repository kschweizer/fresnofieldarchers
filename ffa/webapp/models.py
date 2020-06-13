from django.db import models

# Create your models here.

class Blogpost(models.Model):
    message = models.CharField(max_length=3000)
    created_at = models.DateTimeField(auto_now_add=True)