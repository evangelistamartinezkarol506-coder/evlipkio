import { useState } from 'react';
import FeedComposer from '../components/FeedComposer';
import PostCard from '../components/PostCard';
import { initialPosts, type Post } from '../data/mockData';

function HomePage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleNewPost = (text: string) => {
    const newPost: Post = {
      id: Date.now(),
      author: 'Tú',
      handle: '@tuperfil',
      time: 'Ahora mismo',
      text,
      accent: 'neutral',
    };

    setPosts((current) => [newPost, ...current]);
  };

  return (
    <>
      <FeedComposer onSubmit={handleNewPost} />
      <div className="feed">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
