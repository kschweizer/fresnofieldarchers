import calendar
from django.core.exceptions import ValidationError

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save, pre_delete, pre_save
from django.dispatch import receiver

# Create your models here.

class Blogpost(models.Model):
    subject = models.CharField(max_length=200, blank=False)
    message = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    @property
    def date(self):
        return  "{} {}, {}".format(calendar.month_name[self.created_at.month], self.created_at.day, self.created_at.year)

class Album(models.Model):
    title = models.CharField(unique=True, max_length=200, blank=False)
    thumbnail = models.CharField(max_length=64, blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Image(models.Model):
    image = models.ImageField(upload_to='img/', unique=True)
    thumbnail = models.ImageField(upload_to='img/', blank=True, null=True)
    album = models.ForeignKey(Album, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def create_thumbnail(self):
        if not self.image:
            return
        import os 
        from PIL import Image as PIL_Image
        from io import BytesIO
        from django.core.files.uploadedfile import SimpleUploadedFile

        THUMB_SIZE = (250, 250)
        CONTENT_TYPE = self.image.file.content_type

        if CONTENT_TYPE == 'image/jpeg':
            PIL_TYPE = 'jpeg'
            FILE_EXTENSION = 'jpg'
        elif CONTENT_TYPE == 'image/png':
            PIL_TYPE = 'png'
            FILE_EXTENSION = 'png'

        image = PIL_Image.open(BytesIO(self.image.read()))
        image.thumbnail(THUMB_SIZE, PIL_Image.ANTIALIAS)

        temp_handle = BytesIO()
        image.save(temp_handle, PIL_TYPE)
        temp_handle.seek(0)

        suf = SimpleUploadedFile(os.path.split(self.image.name)[-1], temp_handle.read(), content_type=CONTENT_TYPE)
        self.thumbnail.save('{}_thumbnail.{}'.format(os.path.splitext(suf.name)[0], FILE_EXTENSION), suf, save=False)

    def save(self, *args, **kwargs):
        self.create_thumbnail()
        force_update = False
        if self.id:
            force_update = True
        super(Image, self).save(force_update=force_update)



class Event(models.Model):
    name = models.CharField(max_length=500, blank=False)
    description = models.TextField(blank=True)
    flyer = models.FileField(upload_to='events/flyers/', blank=True, null=True)
    date = models.TextField(blank=True)
    scores = models.FileField(upload_to='events/scores/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
   
    @property
    def format_date(self):
        date = self.date
        res = None
        if (date):
            start, end = str.split(date, ',')
            start_tokens = str.split(start, ' ')
            start = start_tokens[1] + ' ' + start_tokens[2] + ', ' + start_tokens[3]
            if (end):
                end_tokens = str.split(end, ' ')
                end = end_tokens[1] + ' ' + end_tokens[2] + ', ' + end_tokens[3]
                res = start + ' - ' + end
            else:
                res = start
        return res

class PinnedEvent(models.Model):
    text = models.TextField(blank=False)

class About(models.Model):
    number = models.CharField(max_length=32, blank=False)
    pitch = models.TextField(blank=False)
    info = models.TextField(blank=False)
    history = models.TextField(blank=False)



# Delete ImageField on S3 storage
@receiver(pre_delete, sender=Image)
def image_delete_handler(sender, instance, **kwargs):
    instance.image.delete(save=False)
    instance.thumbnail.delete(save=False)

# Delete FileField on S3
@receiver(pre_delete, sender=Event)
def event_delete_handler(sender, instance, **kwargs):
    if (instance.flyer):
        instance.flyer.delete(save=False)
    if (instance.scores):
        instance.scores.delete(save=False)

# Handle flyer and scores update
@receiver(pre_save, sender=Event)
def event_change_handler(sender, instance, **kwargs):
    if instance.id is None:
        pass
    else:
        prev_event = Event.objects.get(id=instance.id)
        if prev_event.flyer != instance.flyer:
            prev_event.flyer.delete(save=False)
        if prev_event.scores != instance.scores:
            prev_event.scores.delete(save=False)


# Ensure there is only one instance of model About
@receiver(pre_save, sender=About)
def check_solo_about(sender, instance, **kwargs):
    if (About.objects.exclude(pk=instance.pk).exists()):
        raise ValidationError("There can be only one About page")

# Ensure there is only one instance of model PinnedEvent
@receiver(pre_save, sender=PinnedEvent)
def check_solo_about(sender, instance, **kwargs):
    if (PinnedEvent.objects.exclude(pk=instance.pk).exists()):
        raise ValidationError("There can be only one PinnedEvent section")