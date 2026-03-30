import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';
import './App.css';

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 1,
      text: 'A short psychic broke out of jail. She was a small medium at large.',
    },
    {
      postNumber: 2,
      text: 'I told my wife she was drawing her eyebrows too high. She looked surprised.',
    },
    {
      postNumber: 3,
      text: 'Why do we tell actors to "break a leg"? Because every play has a cast.',
    }
  ]);
  
  const [postId, setPostId] = useState(4);

  const handleDeletePost = (id) => {
    console.log('Deleting post:', id);
    const updatedPostList = postList.filter(post => post.postNumber !== id);
    setPostList(updatedPostList);
  };

  const handleAddPost = (text) => {
    console.log('Adding post with text:', text);
    
    const newPost = {
      postNumber: postId,
      text: text
    };
    
    setPostList([...postList, newPost]);
    setPostId(postId + 1);
  };

  // Map through posts to create Post components
  const posts = postList.map((post) => {
    return (
      <Post 
        key={post.postNumber}
        id={post.postNumber}
        text={post.text}
        onDelete={handleDeletePost}
      />
    );
  });

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <AddPost onAdd={handleAddPost} />
      <div className="posts-container">
        {posts}
      </div>
    </div>
  );
}

export default App;