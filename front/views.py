from django.shortcuts import render
from django.http import HttpResponse
import requests
from decouple import config
import re

def link(request):
    urls = []

    if request.method == "POST":
        url = request.POST.get("input_link")

        r = requests.get(url)
        html = r.text.encode('utf8')
        search = re.findall(r'<a href=[\'"?](https[://\w\-._]+)', html.decode('utf8'))

        for link in search:
            if link not in urls:
                urls.append({'url':link})

    return render(request, 'link.html', {'urls':urls})

def index(request):
    response = requests.get(config('API') + '/all')
    links = response.json()
    return render(request, 'index.html',{'links':links})
