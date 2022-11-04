from django.conf.urls import include
from django.urls import re_path
from rest_framework.routers import DefaultRouter

from petfind import views

router = DefaultRouter()
router.register("posts", views.PostViewSet, "posts")

urlpatterns = [
    re_path("", include(router.urls))
]