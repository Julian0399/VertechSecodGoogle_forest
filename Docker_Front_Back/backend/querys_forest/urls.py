from django.urls import path
from querys_forest import views
from .views import get_population_data


urlpatterns = [
    #path('login/', views.login_view, name='login_view'), 
    path('api/hello/', views.hello, name='hello_api'),
    path('api/login/', views.login_view, name='login_api'),
    path('api/registro/', views.registro_view, name='registro_api'),
    path('api/population_data/', get_population_data, name='population_data'),
    #re_path(r'^', TemplateView.as_view(template_name='main.jsx')),
    # path('logout/', views.logout_view, name='logout'),  # Vista para el logout de usuarios
    # path('posts/', views.mostrar_posts, name='mostrar_posts'),  # Vista para mostrar todos los posts
    # path('posts/<int:post_id>/', views.detalle_post, name='detalle_post'),  # Vista para ver un post específico
    # path('posts/<int:post_id>/comentar/', views.agregar_comentario, name='agregar_comentario'),  # Vista para agregar comentarios a un post
    ]
