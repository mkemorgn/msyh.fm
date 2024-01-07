from django.db import models


# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    photo = models.ImageField(null=True, upload_to="images/")

    class Meta:
        verbose_name = "Team"
        verbose_name_plural = "Team members"

    def __str__(self):
        return f"{self.name} {self.title} {self.photo}"
