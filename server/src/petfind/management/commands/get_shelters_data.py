import json
import os

from django.core.management.base import BaseCommand
from petfind import serializers

class Command(BaseCommand):
    help = 'Importing mock shelter data from json file to database'
        
    def handle(self, **options):
        module_dir = os.path.dirname(__file__)
        file_path = os.path.join(module_dir, 'shelters.json')
        with open(file_path, 'r') as file:
            mock_data = file.read()
            data = json.loads(mock_data)
        
        for shelter in data:
            post_serializer = serializers.PostSerializer(data=shelter)
            post_serializer.is_valid(raise_exception=True)

            post_serializer.save()  
        