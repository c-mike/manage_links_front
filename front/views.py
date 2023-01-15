from django.shortcuts import render
from django.http import HttpResponse
import requests

URL = 'http://localhost:8888'

def index(request):
    response = requests.get(URL + '/all')
    links = response.json()
    return render(request, 'index.html',{'links':links})
