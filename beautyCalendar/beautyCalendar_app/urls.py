from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('makeupartist', views.MakeupArtistView)
router.register('appointments', views.AppointmentView)
router.register('client', views.ClientView)


urlpatterns = [path("", include(router.urls))]
