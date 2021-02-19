from rest_framework import permissions, viewsets
from rest_framework.permissions import BasePermission, IsAdminUser, SAFE_METHODS
from django.http import HttpResponse
from webapp.models import Blogpost, Image, Album
from knox.auth import TokenAuthentication
import json

from .serializers import BlogpostSerializer, ImageSerializer, AlbumSerializer

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
    queryset = Album.objects.all().order_by('created_at')
    authentication_classes = (TokenAuthentication, )
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = AlbumSerializer

    def retrieve(self, request, *args, **kwargs):
        album = self.get_object()
        images = album.image_set.all()
        serializer = ImageSerializer(images, many=True)
        return HttpResponse(json.dumps(serializer.data), content_type="application/json", status=200)





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
        return HttpResponse({'message': 'Image Uploaded'}, status=200)