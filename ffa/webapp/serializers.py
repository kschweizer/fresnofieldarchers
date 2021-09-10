from rest_framework import serializers

from webapp.models import Blogpost, Image, Album, Event, About

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

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'name', 'date', 'description', 'flyer', 'scores', 'format_date', 'created_at']

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'