import logging
import requests
import json
import os
from petfind import models, serializers

from rest_framework import permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer


MAP_GOOGLE_API_KEY = os.environ.get('MAP_GOOGLE_API_KEY')



logger = logging.getLogger(__name__)
http_client = requests.Session()


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


class CommentsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CommentsSerializer
    queryset = models.Comments.objects.all()

    def create(self, request):
        """
        Submit a new comment.
        """
        comments_serializer = serializers.CommentsSerializer(data=request.data)
        comments_serializer.is_valid(raise_exception=True)

        comments_serializer.save()

        return Response({"msg": "Comment created"}, status=status.HTTP_201_CREATED)

    def list(self, request):
        """
        List all the posts.
        """
        qs = models.Comments.objects.all()
        comments_serializer = serializers.CommentsSerializer(qs, many=True)


        return Response(comments_serializer.data, status=status.HTTP_200_OK)


class ListShelters(APIView):
    """
    View to list shelters.
    """
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
            """
            List all shelters in range.
            """
            headers = {
                'accept': 'application/json'
            }
            response = http_client.get(f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=52.40958255384217%2C16.93353142673055&keyword=schronisko+dla+zwierząt&radius=30000&key={MAP_GOOGLE_API_KEY}")
            data = json.loads(response.text)
            
            response_list = []
            for result in data['results']:
                if result['business_status'] == "OPERATIONAL":
                    response_list.append(dict(name=result['name'], address=result['vicinity'], location=dict(latidue=result['geometry']['location']['lat'], longitude=result['geometry']['location']['lng'])))

            return Response(data=response_list, status=status.HTTP_200_OK)
