"""ffa URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('about-us', include('frontend.urls')),
    path('events', include('frontend.urls')),
    path('membership', include('frontend.urls')),
    path('range', include('frontend.urls')),
    path('photos', include('frontend.urls')),
    path('login', include('frontend.urls')),
    path('register', include('frontend.urls')),
    path('logout', include('frontend.urls')),
    path('editor', include('frontend.urls')),
    re_path(r'editor/.*', include('frontend.urls')),
    re_path(r'^photos/albums', include('frontend.urls')),
    path('account', include('frontend.urls')),
    path ('', include('frontend.urls')),
    path('', include('webapp.urls')),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
