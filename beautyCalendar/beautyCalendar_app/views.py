from django.shortcuts import render
from rest_framework import viewsets
from .models import MakeupArtist, Appointment, Client
from .serializers import MakeupArtistSerializer, AppointmentSerializer, ClientSerializer


class MakeupArtistView(viewsets.ModelViewSet):
    queryset = MakeupArtist.objects.all()
    serializer_class = MakeupArtistSerializer


class AppointmentView(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


class ClientView(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
