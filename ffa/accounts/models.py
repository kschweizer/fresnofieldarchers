from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid

def user_email(instance, filename):
    return 'users/user_{0}/{1}'.format(instance.user, filename)
# Create your models here.
class Member(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    avatar = models.ImageField(upload_to=user_email, blank=True)