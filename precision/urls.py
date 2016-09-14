from django.conf.urls import url

from . import views

app_name = 'precision'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^about/', views.about, name='about'),
    url(r'^faq/', views.faq, name='faq'),
    url(r'^services/', views.services, name='services'),
    url(r'^contact/', views.contact, name='contact'),
    url(r'^career/', views.career, name='career'),
    url(r'^quote/', views.quote, name='quote'),
    url(r'^upload/', views.upload, name='upload'),
    url(r'^portfolio/', views.portfolio, name='portfolio'),
]


handler404 = 'views.error_page'

handler500 = 'views.internal_server'
