import React, { useState } from 'react';
import Modal from './Modal/Modal';

const AddPostModal = ({ showModal, setShowModal }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1); // default user ID

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = { title, body, userId };
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      console.log(response.status) //giving 200 status code
      if (response.ok) {
        setShowModal(false);
        alert('Post added successfully!');
      } else {
        alert('Error adding post');
      }
    } catch (error) {
      alert('Error adding post');
    }
  };

  return (
    <Modal show={showModal} onCancel={() => setShowModal(false)}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <label htmlFor="body">Body:</label>
        <textarea id="body" value={body} onChange={(event) => setBody(event.target.value)}></textarea>
        <label htmlFor="userId">User ID:</label>
        <input type="number" id="userId" value={userId} onChange={(event) => setUserId(event.target.value)} />
        <button className ="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">Add Post</button>
      </form>
    </Modal>
  );
};

export default AddPostModal;