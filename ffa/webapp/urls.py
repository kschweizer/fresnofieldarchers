from rest_framework import routers

from .api import BlogpostViewSet, ImageViewSet, AlbumViewSet, EventViewSet

router = routers.DefaultRouter()
router.register('api/webapp/blogposts', BlogpostViewSet, '')
router.register('api/webapp/photos', ImageViewSet, '')
router.register('api/webapp/albums', AlbumViewSet, '')
router.register('api/webapp/events', EventViewSet, '')

urlpatterns = router.urls
