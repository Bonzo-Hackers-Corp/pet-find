import json
import os


from django.core.management.base import BaseCommand


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
        
        
        print(data)