from django.shortcuts import render
import requests
from decouple import config
import re

def index(request):
    response = requests.get( config('API')+ '/all')
    links = response.json()
    urls = []

    if request.method == "POST":
        url = request.POST.get("input_link")

        r = requests.get(url)
        print('r ', r)

        html = r.text.encode('utf8')
        print('html ', html)

        search = re.findall(r'<a href=[\'"?](https[://\w\-._]+)', html.decode('utf8'))
        print('html ', html)

        for link in search:
            if link not in urls:
                urls.append(link)
                print(link)  

    return render(request, 'index.html',{'links':links})
