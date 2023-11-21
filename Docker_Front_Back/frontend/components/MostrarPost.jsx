import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

function MostrarPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/ruta/mostrar_posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts);
        } else {
          console.error('Error al obtener los posts:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    }

    fetchPosts();
  }, []);

  const handleCommentSubmit = async (postId, comment) => {
    try {
      const response = await fetch('/ruta/comentar_post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId, comment }),
      });
      // Manejar la respuesta del servidor si es necesario
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  return (
    <div className="posts-container">
      <h2>Consultas Guardadas</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const comment = e.target.comment.value;
              handleCommentSubmit(post.id, comment);
              e.target.reset();
            }}
          >
            <input className="comment-input" type="text" name="comment" placeholder="Agregar comentario" />
            <button type="submit">Comentar</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default MostrarPosts;
