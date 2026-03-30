import React, { useState } from 'react';
import './Post.css';

const AddPost = (props) => {
  const [text, setText] = useState('');

  const updateText = (event) => {
    setText(event.target.value);
    console.log('Text of input is ', text);
  };

  return (
    <div className='post-container'>
      <textarea 
        onChange={updateText} 
        type='text' 
        value={text} 
        placeholder="Enter your blog post..."
        rows="3"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <br />
      <button 
        onClick={() => props.onAdd(text)}
        style={{ backgroundColor: '#4CAF50', position: 'relative', top: '0' }}
      >
        Add Post
      </button>
    </div>
  );
};

export default AddPost;