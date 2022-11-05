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
    longtitude = serializers.CharField( required=False)
    latitude = serializers.CharField( required=False)

    class Meta:
        model = models.Location
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    title = serializers.CharField( help_text="Post title", required=False)
    author = serializers.CharField(max_length=50, help_text="Username",  required=False)
    location = LocationSerializer( required=False)
    post_date_time = serializers.DateTimeField( required=False)
    pet_date_time = serializers.DateTimeField( required=False)
    description = serializers.CharField( required=False)
    phone_number = serializers.IntegerField( required=False)
    tags = serializers.JSONField( required=False)
    reward = serializers.JSONField( required=False)
    photo = serializers.CharField(required=False)

    class Meta:
        model = models.Posts
        fields = '__all__'
    
    


class CommentsSerializer(serializers.ModelSerializer):
    post_id = serializers.IntegerField()
    author = serializers.CharField(help_text="Username", required=False)
    location = serializers.JSONField(required=False)
    post_date_time = serializers.DateTimeField(required=False)
    pet_date_time = serializers.DateTimeField(required=False)
    description = serializers.CharField(required=False)
    phone_number = serializers.IntegerField(required=False)
    photo = serializers.CharField(required=False)

    class Meta:
        model = models.Comments
        fields = '__all__'

class SheltersSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length= 80, required=False)
    location = serializers.JSONField(required=False)
    description = serializers.CharField(required=False)
    phone_number = serializers.IntegerField(required=False)

    class Meta:
        model  = models.Shelters
        fields = '__all__'

