from django.db import models

# Create your models here.

class MakeupArtist(models.Model):
    name = models.CharField(max_length=50)
    hometown = models.CharField(max_length=50, null=True)
    artistId = models.AutoField(primary_key=True)
    img = models.CharField(max_length=250, null=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    date = models.DateTimeField()
    location = models.CharField(max_length=150)
    category = models.CharField(max_length=50, null=True)
    artistId = models.ForeignKey(MakeupArtist, on_delete=models.CASCADE, blank=True, null=True, related_name="appointments")
    clientId = models.AutoField(primary_key=True)

    def __str__(self):
        return self.location

class Client(models.Model):
    name = models.CharField(max_length=50)
    img = models.CharField(max_length=250, null=True)
    skinTone = models.CharField(max_length=50, null=True)
    skinType = models.CharField(max_length=50, null=True)
    clientId = models.ForeignKey(Appointment, on_delete=models.CASCADE, blank=True, null=True, related_name="client")

    def __str__(self):
        return self.name
