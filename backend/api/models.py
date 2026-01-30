from django.db import models

class Expense(models.Model):
    author = models.ForeignKey('User', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    recipients = models.ManyToManyField('User', related_name='expenses')

class Payment(models.Model):
    author = models.ForeignKey('User', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    recipient = models.ForeignKey('User', on_delete=models.CASCADE, related_name='payments')

class User(models.Model):
    name = models.CharField(max_length=100, primary_key=True)

    