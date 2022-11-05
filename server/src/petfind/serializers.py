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


class CommentsSerializer(serializers.ModelSerializer):
    post_id = serializers.IntegerField(source="posts.id")
    title = serializers.CharField(help_text="Post title")
    author = serializers.CharField(help_text="Username")
    location = serializers.JSONField()
    post_date_time = serializers.DateTimeField()
    pet_date_time = serializers.DateTimeField()
    description = serializers.CharField()
    phone_number = serializers.IntegerField()
    photo = serializers.CharField()

    class Meta:
        model = models.Comments

