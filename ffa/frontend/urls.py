from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('membership', views.index),
    path('about-us', views.index),
    path('photos', views.index)
]
