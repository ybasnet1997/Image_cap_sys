from django.apps import AppConfig
from keras import backend as K

class CaptionConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "caption"
