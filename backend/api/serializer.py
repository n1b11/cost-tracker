from rest_framework import serializers
from .models import User, Expense, Payment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name']


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['title', 'amount', 'recipients']

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['amount', 'author', 'recipient']
