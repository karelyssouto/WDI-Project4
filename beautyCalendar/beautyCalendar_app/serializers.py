from rest_framework import serializers
from models import MakeupArtist, Appointment, Client

# from rest_framework import serializers
# from .models import Meal


# class MealSerializer(serializers.ModelSerializer):
#     ingredients = IngredientSerializer(many=True, read_only=True)

#     class Meta:
#         model = Meal
#         fields = ('id', 'name', 'ingredients')

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('name', 'img', 'skinTon', 'skinType', 'clientId')

class AppointmentSerializer(serializers.ModelSerializer):
    client = ClientSerializer(many=True, read_only=True)

    class Meta:
        model = Appointment
        fields = ('date', 'location', 'category', 'artistId', 'clientId')

class MakeupArtistSerializer(serializers.ModelSerializer):
    appointments = AppointmentSerializer(many= True, read_only= True)

    class Meta:
        model = MakeupArtist
        fields = ('artistId', 'name', 'hometown')
