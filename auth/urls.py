from django.conf.urls import patterns, include, url
from django.contrib.auth.views import login

urlpatterns = patterns('auth.views',
    url(r'^$', login),
    url(r'^login/', login),
    url(r'^logout/', 'logout'),
)
