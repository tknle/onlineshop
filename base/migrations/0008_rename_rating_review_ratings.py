# Generated by Django 3.2.8 on 2021-10-30 18:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_rename_ratings_review_rating'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='rating',
            new_name='ratings',
        ),
    ]
