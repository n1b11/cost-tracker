from rest_framework import serializers
from .models import User, Expense, Payment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name']


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['author', 'amount', 'recipients','description', 'id']

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['amount', 'author', 'recipient','description', 'id']
