from rest_framework import serializers

from webapp.models import Blogpost, Image, Album

# Blogpost Serializer
class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = ['id', 'subject', 'message', 'date']

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'