from django.urls import path
from . import views

urlpatterns = [
    path('links', views.link, name = 'link'),
    path('', views.index, name = 'index')
]
