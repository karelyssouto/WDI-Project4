from rest_framework import serializers
from .models import MakeupArtist, Appointment, Client


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('name', 'img', 'skinTone', 'skinType', 'clientId')

class AppointmentSerializer(serializers.ModelSerializer):
    client = ClientSerializer(many=True, read_only=True)

    class Meta:
        model = Appointment
        fields = ('date', 'location', 'category', 'artistId', 'clientId', 'client')

class MakeupArtistSerializer(serializers.ModelSerializer):
    appointments = AppointmentSerializer(many= True, read_only= True)

    class Meta:
        model = MakeupArtist
        fields = ('artistId', 'name', 'hometown', 'appointments')
