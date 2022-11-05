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


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CommentSerializer
    queryset = models.Comments.objects.all()

    def create(self, request):
        """
        Adding new comment
        """

        comment_serializer = serializers.CommentSerializer(data = request.data)
        comment_serializer.is_valid(raise_exception = True)

        comment_serializer.save()

        return Response({"msg": "Comment added"}, status= status.HTTP_201_CREATED)

    def list(self, request):
        qs = models.Comments.objects.all()
        comments_serializer = serializers.CommentSerializer(qs, many = True)

        return Response(comments_serializer.data, status=status.HTTP_200_OK)


class ShelterViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ShelterSerializer
    queryset = models.Shelters.objects.all()

    def create(self, request):

        """
        Adding new shelter
        """
        shelter_serializer = serializers.ShelterSerializer(data = request.data)
        shelter_serializer.is_valid(raise_exceptions = True)

        shelter_serializer.save()

        return Response({"msg": "Shelter added"}, status= status.HTTP_201_CREATED)


    def list(self, request):
        qs = models.Shelters.objects.all()
        shelter_serializer = serializers.ShelterSerializer(qs, many = True)

        return Response(shelter_serializer.data, status=status.HTTP_200_OK)