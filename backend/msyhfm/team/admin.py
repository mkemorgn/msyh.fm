from django.contrib import admin
from django import forms
from django.contrib.postgres.forms import SimpleArrayField
from django.forms.widgets import Textarea
from .models import Team


# Define your custom admin form
class TeamAdminForm(forms.ModelForm):
    social_media_links = SimpleArrayField(
        forms.CharField(),
        widget=Textarea(attrs={"rows": 5, "cols": 20}),  # Customize the size as needed
        delimiter="\n",  # Each line is a new item in the array
    )

    class Meta:
        model = Team
        fields = "__all__"


# Define a ModelAdmin class for Team
class TeamAdmin(admin.ModelAdmin):
    form = TeamAdminForm


# Register your model with the custom ModelAdmin
admin.site.register(Team, TeamAdmin)
