from django import forms
from .models import *


def handle_uploaded_file(f):
    with open('some/file/name.txt', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)


class UploadFileForm(forms.Form):
    title = forms.CharField(max_length=50)
    file = forms.FileField()

    class Meta:
        model = Upload
        fields = ('full_Name')



class ContactModelForm(forms.ModelForm):
    message = forms.CharField(
        label='Message',
        max_length=255,
        widget=forms.Textarea(attrs={'class':'form-control'})
    )
    full_Name = forms.CharField(
        label='Full Name',
        max_length=30,
        widget=forms.TextInput(attrs={'class': 'form-control'}),
    )
    email = forms.EmailField(
        label='Email',
        max_length=30,
        widget=forms.EmailInput(attrs={'class': 'form-control'})
    )

    phone_Number = forms.CharField(
        label='Phone Number',
        max_length=25,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )

    class Meta:
        model = Contact
        fields = ('full_Name', 'phone_Number', 'email', 'message')


class DocumentForm(forms.ModelForm):

    class Meta:
        model = Document
        fields = ('description', 'document')


