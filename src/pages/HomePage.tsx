import { Bookmark, Heart, MessageCircle, MoreHorizontal } from 'lucide-react';
import type { Post } from '../App';

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card panel" aria-label={`Publicación de ${post.author}`}>
      <div className="post-card__header">
        <div className="post-card__user">
          <div className={`avatar ${post.accent ? `avatar--${post.accent}` : 'avatar--neutral'}`}>
            {post.author.charAt(0)}
          </div>
          <div>
            <div className="post-card__name-row">
              <strong>{post.author}</strong>
              <span>{post.handle}</span>
            </div>
            <time>{post.time}</time>
          </div>
        </div>

        <button className="icon-button" aria-label="Más opciones">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <p className="post-card__text">{post.text}</p>

      {post.image ? (
        <div className="post-card__media">
          <img src={post.image} alt="Contenido visual de la publicación" />
        </div>
      ) : null}

      <div className="post-card__actions">
        <button type="button" className="action-button">
          <Heart size={17} />
          <span>Me gusta</span>
        </button>
        <button type="button" className="action-button">
          <MessageCircle size={17} />
          <span>Comentar</span>
        </button>
        <button type="button" className="action-button">
          <Bookmark size={17} />
          <span>Guardar</span>
        </button>
      </div>
    </article>
  );
}

export default PostCard;
