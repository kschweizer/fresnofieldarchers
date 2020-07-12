from rest_framework import serializers

from webapp.models import Blogpost, Image

# Blogpost Serializer
class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = ['id', 'subject', 'message', 'date']

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'