from rest_framework import permissions, viewsets
from rest_framework.permissions import BasePermission, IsAdminUser, SAFE_METHODS
from django.http import HttpResponse
from django.core import serializers
from webapp.models import Blogpost, Image, Album, Event
from knox.auth import TokenAuthentication
import json

from .serializers import BlogpostSerializer, ImageSerializer, AlbumSerializer, EventSerializer

class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS

# Blogpost Viewset
class BlogpostViewSet(viewsets.ModelViewSet):
    queryset = Blogpost.objects.all().order_by('-created_at')
    authentication_classes = (TokenAuthentication, )

    permission_classes = [IsAdminUser | ReadOnly]
    serializer_class = BlogpostSerializer

# Album Viewset
class AlbumViewSet(viewsets.ModelViewSet):
    pagination_class = None
    queryset = Album.objects.all().order_by('-created_at')
    authentication_classes = (TokenAuthentication, )
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = AlbumSerializer

    def retrieve(self, request, *args, **kwargs):
        album = self.get_object()
        images = album.image_set.all()
        album_json = json.loads(serializers.serialize('json', [album]))
        # line below reduces json nesting. json root starts at album fields
        album_json = album_json[0]['fields']
        serializer = ImageSerializer(images, many=True)
        album_json['photos'] = serializer.data
        album_json = album_json
        return HttpResponse(json.dumps(album_json), content_type="application/json", status=200)





# Image Viewset
class ImageViewSet(viewsets.ModelViewSet):
    pagination_class = None
    queryset = Image.objects.all()
    authentication_classes= (TokenAuthentication, )
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = ImageSerializer

    def create(self, request):
        post_data = request.data
        image = post_data['image']
        album_id = post_data['album']
        album = Album.objects.get(id=album_id)
        Image.objects.create(image=image, album=album)
        return HttpResponse(str(post_data), status=200)

    def destroy(self, request, *args, **kwargs):
        image = self.get_object()
        image.image.delete(save=False)
        image.thumbnail.delete(save=False)
        image.delete()
        return HttpResponse({'message' : 'image deleted'}, 200)

class EventViewSet(viewsets.ModelViewSet):
    pagination_class = None
    queryset = Event.objects.all().order_by('date')
    authentication_classes= (TokenAuthentication, )
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = EventSerializer

    def create(self, request):
        post_data = request.data 
        name = post_data['name'] 
        description = None if not ('description' in post_data) else post_data['description']
        date = None if not ('date' in post_data) else post_data['date']
        flyer = None if not ('flyer' in post_data) else post_data['flyer']
        Event.objects.create(name=name, description=description, flyer=flyer, date=date)
        return HttpResponse({'message': 'Event Created'}, status=200)


class EventScoreViewset(viewsets.ModelViewSet):
    pagination_class = None
    queryset = Event.objects.all()
    authentication_classes = (TokenAuthentication, )
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = EventSerializer

    