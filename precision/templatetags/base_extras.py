from django import template
from django.core.urlresolvers import resolve
from precision import views

register = template.Library()




@register.simple_tag
def navactive():
        return
