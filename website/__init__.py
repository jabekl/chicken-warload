from flask import Flask
from .views import *

def create_app():
	app = Flask(__name__)
  
	app.register_blueprint()