from rest_framework import generics 
from django.db.models import Q
from .models import Expense, Payment, User
from .serializer import ExpenseSerializer, PaymentSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework import status

class ExpenseListView(generics.ListAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    def get_queryset(self):
        username = self.request.query_params.get('user', None)
        
        if username:
            return Payment.objects.filter(
                Q(author__name=username) | Q(recipient__name=username)
            ).distinct()
        
        return Payment.objects.all()
  
class ExpenseCreateView(generics.CreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
class ExpenseUpdateView(generics.UpdateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
class PaymentCreateView(generics.CreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
class PaymentUpdateView(generics.UpdateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class PaymentListView(generics.ListAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    
    def get_queryset(self):
        username = self.request.query_params.get('user', None)
        
        if username:
            return Payment.objects.filter(
                Q(author__name=username) | Q(recipient__name=username)
            ).distinct()
        
        return Payment.objects.all()

class UserCreateOrSignInView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def create(self, request, *args, **kwargs):
        name = request.data.get('name')
        user, created = User.objects.get_or_create(name=name)
        serializer = self.get_serializer(user)
        status_code = status.HTTP_201_CREATED if created else status.HTTP_200_OK
        return Response(serializer.data, status=status_code)


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

