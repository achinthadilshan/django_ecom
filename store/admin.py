from django.contrib import admin
from .models import *

# Register your models here.


admin.site.register(Customer)


class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price']
    search_fields = ['id', 'name', 'price']


admin.site.register(Product, ProductAdmin)

admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
