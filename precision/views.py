from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseNotFound
from django.template import loader, RequestContext
# Create your views here.


# HTTP Error 404
def bad_request(request):
    response = render_to_response('precision/404.html', context_instance=RequestContext(request))
    response.status_code = 404
    return response


# HHTP Error 500
def internal_server(request):
    response = render_to_response('precision/404.html', context_instance=RequestContext(request))
    response.status_code = 500
    return response


def index(request):
    template = loader.get_template('precision/index.html')
    return HttpResponse(template.render(request))


def services(request):
    template = loader.get_template('precision/services.html')
    return HttpResponse(template.render(request))


def about(request):
    template = loader.get_template('precision/about.html')
    return HttpResponse(template.render(request))


def contact(request):
    template = loader.get_template('precision/contact.html')
    return HttpResponse(template.render(request))


def portfolio(request):
    template = loader.get_template('precision/portfolio-3-col.html')
    return HttpResponse(template.render(request))


def portfolio_item(request):
    template = loader.get_template('precision/portfolio-item.html')
    return HttpResponse(template.render(request))


def pricing(request):
    template = loader.get_template('precision/pricing.html')
    return HttpResponse(template.render(request))


def faq(request):
    template = loader.get_template('precision/faq.html')
    return HttpResponse(template.render(request))


def error_page(request):
    template = loader.get_template('precision/404.html')
    return HttpResponse(template.render(request))

