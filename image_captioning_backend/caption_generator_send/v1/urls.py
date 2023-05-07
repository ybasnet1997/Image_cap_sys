from django.urls import include, path

urlpatterns = [
    path("caption/", include("caption.urls")),
]
