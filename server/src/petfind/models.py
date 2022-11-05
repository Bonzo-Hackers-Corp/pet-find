from django.db import models



class Task(models.Model):
    description = models.CharField(max_length=128, help_text="Task description")


class Posts(models.Model):
    title = models.CharField(max_length=30, help_text="Post title", null=True, blank=True)
    author = models.CharField(max_length=50, help_text="Username", null=True, blank=True)
    location = models.JSONField(null=True, blank=True)
    post_date_time = models.DateTimeField(null=True, blank=True)
    pet_date_time = models.DateTimeField(null=True, blank=True)
    description = models.TextField(max_length=1000, null=True, blank=True)
    phone_number = models.IntegerField(null=True, blank=True)
    tags = models.JSONField(null=True, blank=True)
    reward = models.JSONField(null=True, blank=True)
    photo = models.TextField(null=True, blank=True)


class Comments(models.Model):
    post_id = models.IntegerField()
    author = models.CharField(max_length=50, help_text="Username", null=True, blank=True)
    location = models.JSONField(null=True, blank=True)
    post_date_time = models.DateTimeField(null=True, blank=True)
    pet_date_time = models.DateTimeField( null=True, blank=True)
    description = models.TextField(max_length=1000, null=True, blank=True)
    phone_number = models.IntegerField(null=True, blank=True)
    photo = models.TextField(null=True, blank=True)


class Photos(models.Model):
    post_id = models.IntegerField()
    photo = models.TextField(max_length=1000)
    if_primary = models.BooleanField()


class Users(models.Model):
    nickname = models.CharField(max_length=20, unique= True)
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=30)
    phone_number = models.IntegerField(blank= True)
    photo = models.TextField(max_length=1000, blank= True)
    

class Shelters(models.Model):
    name = models.CharField(max_length=80, null=True, blank=True)
    location = models.JSONField(null=True, blank=True)
    description = models.TextField(max_length=1000, null=True, blank=True)
    phone_number = models.IntegerField(null=True, blank=True)



class Location(models.Model):
    longtitude = models.TextField(max_length=1000, null=True, blank=True)
    latitude = models.TextField(max_length=1000, null=True, blank=True)
