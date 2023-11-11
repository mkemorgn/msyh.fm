from django.db import models

# Create your models here.
class Event(models.Model):
    event_title = models.CharField(max_length=200)
    event_details = models.CharField(max_length=200)
    event_date = models.DateField(null=True)
    event_time = models.TimeField(null=True)
    event_flyer = models.ImageField(null=True, upload_to="images/")

    def __str__(self):
        return f"{self.event_title} {self.event_details} {self.event_date} {self.event_time} {self.event_flyer}"
