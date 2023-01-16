from django.shortcuts import render
from django.http import HttpResponse
import requests
from decouple import config

def index(request):
    response = requests.get(config('API') + '/all')
    links = response.json()
    return render(request, 'index.html',{'links':links})
