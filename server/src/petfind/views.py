import logging

from petfind import models, serializers

from rest_framework import permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


logger = logging.getLogger(__name__)


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PostSerializer
    # disable authentication
    #permission_classes = (IsAuthenticated, )
    queryset = models.Posts.objects.all()

    def create(self, request):
        """
        Submit a new post.
        """
        post_serializer = serializers.PostSerializer(data=request.data)
        post_serializer.is_valid(raise_exception=True)

        post_serializer.save()

        return Response({"msg": "Post created"}, status=status.HTTP_201_CREATED)

    def list(self, request):
        """
        List all the posts.
        """
        qs = models.Posts.objects.all()
        posts_serializer = serializers.PostSerializer(qs, many=True)

        return Response(posts_serializer.data, status=status.HTTP_200_OK)
