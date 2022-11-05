from django.conf.urls import include
from django.urls import re_path
from rest_framework.routers import DefaultRouter

from petfind import views

router = DefaultRouter()
router.register("posts", views.PostViewSet, "posts")
router.register("comments", views.CommentsViewSet, "comments")

urlpatterns = [
    re_path("", include(router.urls)),
    re_path("shelter_list", views.ListShelters.as_view(), name="shelter_list")
]