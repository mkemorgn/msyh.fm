# Generated by Django 4.2.6 on 2024-01-14 15:15

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0002_alter_team_options_team_social_media_links'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='social_media_links',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.URLField(), blank=True, size=None),
        ),
    ]