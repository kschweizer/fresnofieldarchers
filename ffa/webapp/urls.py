from rest_framework import routers

from .api import AboutViewSet, BlogpostViewSet, ImageViewSet, AlbumViewSet, EventViewSet, PinnedEventViewSet

router = routers.DefaultRouter()
router.register('api/webapp/blogposts', BlogpostViewSet, '')
router.register('api/webapp/photos', ImageViewSet, '')
router.register('api/webapp/albums', AlbumViewSet, '')
router.register('api/webapp/events', EventViewSet, '')
router.register('api/webapp/about', AboutViewSet, '')
router.register('api/webapp/pinnedevent', PinnedEventViewSet, '')

urlpatterns = router.urls
