from django.shortcuts import render
# Create your views here.
from django.contrib.auth.decorators import login_required
from .models import Post, Comentario
from .forms import ComentarioForm
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status
import json
from google.cloud import bigquery


@login_required
def agregar_comentario(request, post_id):
    post = Post.objects.get(id=post_id)
    if request.method == 'POST':
        form = ComentarioForm(request.POST)
        if form.is_valid():
            comentario = form.save(commit=False)
            comentario.usuario = request.user
            comentario.post = post
            comentario.save()
            return redirect('detalles_post', post_id=post_id)
    else:
        form = ComentarioForm()
    return render(request, 'agregar_comentario.html', {'form': form})


@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            # Usuario autenticado, hacer lo que necesites (como login, establecer sesiones, etc.)
            return JsonResponse({'message': 'Inicio de sesión exitoso'})
        else:
            return JsonResponse({'error': 'Credenciales inválidas'}, status=400)
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)


@csrf_exempt
@api_view(['POST'])
def registro_view(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Guarda el usuario en la base de datos
            return Response({'message': 'Registro exitoso'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def logout_view(request):
    logout(request)
    # Redirige a la página que desees después del logout
    return redirect('pagina_inicio')


def mostrar_posts(request):
    posts = Post.objects.all()  # Obtener todos los posts desde la base de datos
    return render(request, 'mostrar_posts.html', {'posts': posts})


def detalle_post(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'detalle_post.html', {'post': post})


def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})


def hello(request):
    return JsonResponse({'message': 'Hello from Django!'})


@csrf_exempt
def get_population_data(request):
    client = bigquery.Client()
    sql_query = """
    SELECT county_code, state_code, estimation_unit, location_name 
    FROM `bigquery-public-data.usfs_fia.population` LIMIT 20
    """
    query_job = client.query(sql_query)

    data = []
    for row in query_job.result():
        data.append({
            'county_code': row[0],
            'state_code': row[1],
            'estimation_unit': row[2],
            'location_name': row[3]
        })

    return JsonResponse(data, safe=False)
