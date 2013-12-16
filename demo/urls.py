from django.conf.urls import patterns, include, url

urlpatterns = patterns('demo',
    url(r'^$', 'views.form'),
    url(r'^form/$', 'views.form'),
    url(r'^datatables/$', 'views.datatables'),
)
