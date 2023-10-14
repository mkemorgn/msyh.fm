from rest_framework import serializers

from .models import Event

class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('event_title', 'event_details', 'event_date')
