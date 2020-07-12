from rest_framework import routers

from .api import BlogpostViewSet, ImageViewSet

router = routers.DefaultRouter()
router.register('api/webapp/blogposts', BlogpostViewSet, '')
router.register('api/webapp/photos', ImageViewSet, '')

urlpatterns = router.urls
