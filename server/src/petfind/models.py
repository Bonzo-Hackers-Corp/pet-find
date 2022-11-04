from django.db import models


class User(models.Model):
    name = models.CharField(max_length=64, unique=True, help_text="user full name")
    role = models.CharField(max_length=32, blank=True, null=True, help_text="user role")

    def __str__(self):
        return self.name


class Task(models.Model):
    description = models.CharField(max_length=128, help_text="Task description")


class Posts(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=30, help_text="Post title")
    author = models.CharField(max_length=50, help_text="Username")
    location = models.JSONField()
    date_time = models.DateTimeField()
    description = models.CharField(max_length=1000)
    phone_number = models.BigIntegerField()
    tags = models.JSONField(blank = True)
    reward  =models.JSONField(blank = True)
    
class Comments(models.Model):
    id = models.IntegerField(primary_key=True)
    post_id = models.ForeignKey(Posts, related_name=id)
    title = models.CharField(max_length=30, help_text="Post title")
    author = models.CharField(max_length=50, help_text="Username")
    location = models.JSONField()
    date_time = models.DateTimeField()
    description = models.CharField(max_length=1000)
    phone_number = models.BigIntegerField()
    tags = models.JSONField(blank = True)
    reward  =models.JSONField(blank = True)
