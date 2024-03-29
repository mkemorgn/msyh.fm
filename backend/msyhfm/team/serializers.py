from rest_framework import serializers

from .models import Team


class TeamSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Team
        fields = ("name", "title", "photo", "social_media_links")
