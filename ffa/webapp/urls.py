from rest_framework import routers
from .api import BlogpostViewSet

router = routers.DefaultRouter()
router.register('api/webapp', BlogpostViewSet, '')

urlpatterns = router.urls