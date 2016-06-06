from django.conf.urls import url

from . import views

app_name = 'precision'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^about/', views.about, name='about'),
    url(r'^faq/', views.faq, name='faq'),
    url(r'^services/', views.services, name='services'),
    url(r'^contact/', views.contact, name='contact'),
    url(r'^pricing/', views.pricing, name='pricing'),
    url(r'^portfolio/', views.portfolio, name='portfolio'),
]