# Generated by Django 3.2.8 on 2021-10-26 05:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_auto_20211025_2308'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='countInStock',
            new_name='numInStock',
        ),
    ]
