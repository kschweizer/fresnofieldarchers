from rest_framework import serializers
from webapp.models import Blogpost

# Blogpost Serializer
class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = ['subject', 'message', 'date']