from django.shortcuts import render
from django.http import HttpResponse
import requests

def index(request):
    # response = requests.get(URL + 'school/')
    # indexs = response.json()
    return render(request, 'index.html') #,{'indexs':indexs}
