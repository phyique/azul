from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader, RequestContext
from .forms import *
from django.core.files.storage import FileSystemStorage
from django.shortcuts import redirect
from django.core.mail import send_mail, EmailMultiAlternatives
# Create your views here.



# HTTP Error 404
def bad_request(request):
    response = render_to_response('404.html', context_instance=RequestContext(request))
    response.status_code = 404
    return response
    # template = loader.get_template('precision/404.html')
    # return HttpResponse(template.render(request))


# HHTP Error 500
def internal_server(request):
    response = render_to_response('500.html', context_instance=RequestContext(request))
    response.status_code = 500
    return response


def index(request):
    context = {}
    context["home"] = "active"
    template = loader.get_template('precision/index.html')
    return HttpResponse(template.render(request))


def services(request):
    template = loader.get_template('precision/services.html')
    return HttpResponse(template.render(request))


def about(request):
    template = loader.get_template('precision/about.html')
    return HttpResponse(template.render(request))


def contact(request):
    if request.method == 'POST':
        form = ContactModelForm(request.POST, request.FILES)

        if form.is_valid():
            form.save()

            subject, from_email, to = form.cleaned_data['full_Name'], 'precisiongraphicsja@gmail.com', form.cleaned_data['email']
            html_content = '<p>This is an <strong>important</strong> message.</p>'
            msg = EmailMultiAlternatives(subject, html_content, from_email, [to])
            msg.content_subtype = 'html'
            # msg.attach_alternative(html_content, "text/html")
            msg.send()

            return redirect('/')

    else:
        form = ContactModelForm()

    return render(request, 'precision/contact.html', {'form': form})


def portfolio(request):
    template = loader.get_template('precision/portfolio.html')
    return HttpResponse(template.render(request))


def quote(request):
    template = loader.get_template('precision/quote.html')
    return HttpResponse(template.render(request))


def faq(request):
    template = loader.get_template('precision/faq.html')
    return HttpResponse(template.render(request))


def career(request):
    template = loader.get_template('precision/career.html')
    return HttpResponse(template.render(request))


# def upload(request):
#     if request.method == 'POST' and request.FILES['myfile']:
#         myfile = request.FILES['myfile']
#         fs = FileSystemStorage()
#         filename = fs.save(myfile.name, myfile)
#         uploaded_file_url = fs.url(filename)
#         return render(request, 'precision/upload.html', {
#             'uploaded_file_url': uploaded_file_url
#         })
#     return render(request, "precision/upload.html")

def upload(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)

        if form.is_valid():
            form.save()

            subject, from_email, to = form.cleaned_data['full_Name'], 'precisiongraphicsja@gmail.com', form.cleaned_data['email']
            html_content = '<p>This is an <strong>important</strong> message.</p>'
            msg = EmailMultiAlternatives(subject, html_content, from_email, [to])
            msg.content_subtype = 'html'
            # msg.attach_alternative(html_content, "text/html")
            msg.send()

            return redirect('/')

    else:
        form = ContactModelForm()

    return render(request, 'precision/upload.html', {'form': form})
