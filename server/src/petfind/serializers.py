from dataclasses import field
from unittest.util import _MAX_LENGTH
from rest_framework import serializers

from petfind import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Users
        fields = ("name", "role")


class TaskSerializer(serializers.ModelSerializer):
    description = serializers.CharField(help_text="description")

    class Meta:
        model = models.Task
        fields = '__all__'


class LocationSerializer(serializers.ModelSerializer):
    longtitude = serializers.CharField()
    latitude = serializers.CharField()

    class Meta:
        model = models.Location
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    title = serializers.CharField( help_text="Post title")
    author = serializers.CharField(max_length=50, help_text="Username")
    location = LocationSerializer()
    post_date_time = serializers.DateTimeField()
    pet_date_time = serializers.DateTimeField()
    description = serializers.CharField()
    phone_number = serializers.IntegerField()
    tags = serializers.JSONField()
    reward = serializers.JSONField()

    class Meta:
        model = models.Posts
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    post_id = serializers.IntegerField(source = 'posts.id')
    title = serializers.CharField( help_text="Post title")
    author = serializers.CharField(max_length=50, help_text="Username")
    location = LocationSerializer()
    post_date_time = serializers.DateTimeField()
    pet_date_time = serializers.DateTimeField()
    description = serializers.CharField()
    phone_number = serializers.IntegerField()
    photo = serializers.CharField()

    class Meta:
        model = models.Comments
        fields = '__all__'

class PhotosSerializer(serializers.ModelSerializer):
    #foregin key serializer
    photo = serializers.CharField()
    if_primary = serializers.BooleanField()

    class Meta:
        model = models.Photos
        fields = '__all__'

class ShelterSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length = 80)
    location = LocationSerializer()
    description = serializers.CharField()
    phone_number = serializers.IntegerField()

    class Meta:
        model = models.Shelters
        fields = '__all__'



    
