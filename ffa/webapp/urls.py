from rest_framework import routers
from .api import BlogpostViewSet

router = routers.DefaultRouter()
router.register('api/webapp/blogposts', BlogpostViewSet, '')

urlpatterns = router.urls