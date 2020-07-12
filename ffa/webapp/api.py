from rest_framework import permissions, viewsets
from django.http import HttpResponse
from webapp.models import Blogpost, Image

from .serializers import BlogpostSerializer, ImageSerializer


# Blogpost Viewset
class BlogpostViewSet(viewsets.ModelViewSet):
    queryset = Blogpost.objects.all().order_by('-created_at')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogpostSerializer

# Image Viewset
class ImageViewSet(viewsets.ModelViewSet):
    pagination_class = None
    queryset = Image.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ImageSerializer

    def create(self, request):
        post_data = request.data
        for i in range(int(post_data['count'])):
            image = post_data['image{}'.format(i)]
            title = post_data['title{}'.format(i)]
            description = post_data['description{}'.format(i)]
            Image.objects.create(image=image, title=title, description=description)      
        return HttpResponse({'message': 'Image Uploaded'}, status=200)