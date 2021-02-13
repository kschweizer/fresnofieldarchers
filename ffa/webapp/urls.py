from rest_framework import routers

from .api import BlogpostViewSet, ImageViewSet, AlbumViewSet

router = routers.DefaultRouter()
router.register('api/webapp/blogposts', BlogpostViewSet, '')
router.register('api/webapp/photos', ImageViewSet, '')
router.register('api/webapp/albums', AlbumViewSet, '')

urlpatterns = router.urls
