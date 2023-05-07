from django.urls import path
from .views import generate_caption

urlpatterns = [
    path("generate/", generate_caption, name="generate"),
]
