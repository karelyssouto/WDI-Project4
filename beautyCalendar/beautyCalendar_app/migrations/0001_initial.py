# Generated by Django 2.1.5 on 2019-02-22 16:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('date', models.DateTimeField(auto_now_add=True)),
                ('location', models.CharField(max_length=150)),
                ('category', models.CharField(max_length=50)),
                ('clientId', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('img', models.CharField(max_length=250)),
                ('skinTone', models.CharField(max_length=50)),
                ('skinType', models.CharField(max_length=50)),
                ('clientId', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='client', to='beautyCalendar_app.Appointment')),
            ],
        ),
        migrations.CreateModel(
            name='MakeupArtist',
            fields=[
                ('name', models.CharField(max_length=50)),
                ('hometown', models.CharField(max_length=50)),
                ('artistId', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.AddField(
            model_name='appointment',
            name='artistId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to='beautyCalendar_app.MakeupArtist'),
        ),
    ]
