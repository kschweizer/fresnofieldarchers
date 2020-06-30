from django.db import models
import calendar

# Create your models here.

class Blogpost(models.Model):
    subject = models.CharField(max_length=200)
    message = models.CharField(max_length=3000)
    created_at = models.DateTimeField(auto_now_add=True)
    
    @property
    def date(self):
        return  "{} {}, {}".format(calendar.month_name[self.created_at.month], self.created_at.day, self.created_at.year)