from rest_framework import serializers
from models import MakeupArtist, Appointment, Client

# from rest_framework import serializers
# from .models import Meal


# class MealSerializer(serializers.ModelSerializer):
#     ingredients = IngredientSerializer(many=True, read_only=True)

#     class Meta:
#         model = Meal
#         fields = ('id', 'name', 'ingredients')
class 

class MakeupArtistSerializer(serializers.ModelSerializer):
    appointments = AppointmentSerializer(many= True)

    class Meta:
        model = MakeupArtist
        fields = ('id', 'name', 'hometown')