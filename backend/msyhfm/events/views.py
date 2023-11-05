#from django.shortcuts import render
from rest_framework import viewsets

from .serializers import EventSerializer
from .models import Event

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('event_title')
    serializer_class = EventSerializer
