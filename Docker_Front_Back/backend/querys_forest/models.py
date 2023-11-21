from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Post(models.Model):
    contenido = models.TextField()
    fecha_hora = models.DateTimeField(auto_now_add=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

class Comentario(models.Model):
    contenido = models.TextField()
    fecha_hora = models.DateTimeField(auto_now_add=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)