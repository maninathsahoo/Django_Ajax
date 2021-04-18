from django.shortcuts import render
from .models import Employee
from django.http.response import JsonResponse

def EmpView(request):
    data = Employee.objects.all()
    # print(data)
    return render(request,"index.html",{"data":data})

def Alldata(request):
    data = Employee.objects.all()
    return JsonResponse({"data":list(data.values())})
