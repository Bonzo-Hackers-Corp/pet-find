import json
import os


from django.core.management.base import BaseCommand
from petfind import serializers

class Command(BaseCommand):
    help = 'Importing mock data from json file to database'

    #def add_arguments(self, parser):
     #   parser.add_argument('path', type = str, help = 'Path to the json file')
        
    def handle(self, **options):
        module_dir = os.path.dirname(__file__)
        file_path = os.path.join(module_dir, 'posts.json')
        with open(file_path, 'r') as file:
            mock_data = file.read()
            data = json.loads(mock_data)
        
        for post in data:
            post_serializer = serializers.PostSerializer(data=post)
            post_serializer.is_valid(raise_exception=True)

            post_serializer.save()  
        