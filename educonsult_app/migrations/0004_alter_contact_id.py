# Generated by Django 3.2.9 on 2021-11-23 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('educonsult_app', '0003_auto_20211122_2215'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='id',
            field=models.AutoField(primary_key=True),
        ),
    ]
