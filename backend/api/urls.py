"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
from django.contrib import admin
from django.urls import path
from .views import (
    ExpenseListView, 
    ExpenseCreateView, 
    ExpenseUpdateView,
    PaymentCreateView, 
    PaymentUpdateView,
    PaymentListView, 
    UserCreateOrSignInView, 
    UserListView
    )

urlpatterns = [
    path("admin/", admin.site.urls),
    path('expenses/', ExpenseListView.as_view(), name='expense-list'),
    path('expenses/create/', ExpenseCreateView.as_view(), name='expense-create'),
    path('payments/', PaymentListView.as_view(), name='payment-list'),
    path('payments/create/', PaymentCreateView.as_view(), name='payment-create'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/signin/', UserCreateOrSignInView.as_view(), name='user-signin'),
    path('expenses/update/<int:pk>/', ExpenseUpdateView.as_view(), name='expense-update'),
    path('payments/update/<int:pk>/', PaymentUpdateView.as_view(), name='payment-update'),
]
