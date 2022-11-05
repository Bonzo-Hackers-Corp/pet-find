from django.db import models



class Task(models.Model):
    description = models.CharField(max_length=128, help_text="Task description")


class Posts(models.Model):
    title = models.CharField(max_length=30, help_text="Post title")
    author = models.CharField(max_length=50, help_text="Username")
    location = models.JSONField()
    post_date_time = models.DateTimeField()
    pet_date_time = models.DateTimeField(blank= True)
    description = models.CharField(max_length=1000)
    phone_number = models.IntegerField(blank= True)
    tags = models.JSONField(blank = True)
    reward = models.JSONField(blank = True)
    
class Comments(models.Model):
    #id = models.IntegerField(primary_key=True)
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    title = models.CharField(max_length=30, help_text="Post title")
    author = models.CharField(max_length=50, help_text="Username")
    location = models.JSONField()
    post_date_time = models.DateTimeField()
    pet_date_time = models.DateTimeField(blank= True)
    description = models.CharField(max_length=1000)
    phone_number = models.BigIntegerField(blank= True)
    photo = models.CharField(max_length=1000)


class Photos(models.Model):
    id = models.IntegerField(primary_key=True)
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    photo = models.CharField(max_length=1000)
    if_primary = models.BooleanField()


class Users(models.Model):
    id = models.IntegerField(primary_key=True)
    nickname = models.CharField(max_length=20, unique= True)
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=30)
    phone_number = models.BigIntegerField(blank= True)
    photo = models.CharField(max_length=1000, blank= True)
    

class Shelters(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=80)
    location = models.JSONField()
    description = models.CharField(max_length=1000)
    phone_number = models.IntegerField()
    tags = models.JSONField(blank = True)
    reward = models.JSONField(blank = True)


class Location(models.Model):
    longtitude = models.CharField(max_length=1000)
    latitude = models.CharField(max_length=1000)
