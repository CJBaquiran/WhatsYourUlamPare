from django.shortcuts import render

# Create your views here.

def index(request):
	return render(request, 'uploadulam/home.html')
	
def upload(request):
	return render(request, 'uploadulam/upload.html', {'upload':['Call me','09123456789']})

def profile(request):
	return render(request, 'uploadulam/profileulam.html')	

