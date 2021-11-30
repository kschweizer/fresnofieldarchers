from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.index),
    path('about-us', views.index),
    path('events', views.index),
    path('membership', views.index),
    path('range', views.index),
    path('photos', views.index),
    path('login', views.index),
    path('register', views.index),
    path('logout', views.index),
    path('editor', views.index),
    re_path(r'editor/.*', views.index),
    re_path(r'^photos/albums', views.index),
    path('account', views.index)
]
