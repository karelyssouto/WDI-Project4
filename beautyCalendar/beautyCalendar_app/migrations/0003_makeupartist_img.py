# Generated by Django 2.1.5 on 2019-02-23 22:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beautyCalendar_app', '0002_auto_20190223_1616'),
    ]

    operations = [
        migrations.AddField(
            model_name='makeupartist',
            name='img',
            field=models.CharField(default=1, max_length=250),
            preserve_default=False,
        ),
    ]
