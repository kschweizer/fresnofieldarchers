from webapp.models import Blogpost
from rest_framework import viewsets, permissions
from .serializers import BlogpostSerializer

# Blogpost Viewset
class BlogpostViewSet(viewsets.ModelViewSet):
    queryset = Blogpost.objects.all().order_by('-created_at')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogpostSerializer