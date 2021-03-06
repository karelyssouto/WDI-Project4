# Generated by Django 2.1.5 on 2019-02-25 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beautyCalendar_app', '0003_makeupartist_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='category',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='img',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='skinTone',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='skinType',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='makeupartist',
            name='artistId',
            field=models.AutoField(max_length=5, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='makeupartist',
            name='hometown',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='makeupartist',
            name='img',
            field=models.CharField(max_length=250, null=True),
        ),
    ]
