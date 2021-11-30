from rest_framework import routers

from .api import AboutViewSet, BlogpostViewSet, ImageViewSet, AlbumViewSet, EventViewSet, PinnedEventViewSet

router = routers.DefaultRouter()
router.register('webapp/blogposts', BlogpostViewSet, '')
router.register('webapp/photos', ImageViewSet, '')
router.register('webapp/albums', AlbumViewSet, '')
router.register('webapp/events', EventViewSet, '')
router.register('webapp/about', AboutViewSet, '')
router.register('webapp/pinnedevent', PinnedEventViewSet, '')

urlpatterns = router.urls
