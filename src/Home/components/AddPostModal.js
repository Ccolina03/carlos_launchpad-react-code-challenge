import React, { useState, useRef } from 'react';
import Modal from './Modal/Modal';

const AddPostModal = ({ showModal, setShowModal }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1); // default user ID

  const modalContentRef = useRef(null)

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

  const handleCloseModal = () => {
    console.log('Closing modal');
    setShowModal(false);
  };

  const content = (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="body">
          Body
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="body"
          placeholder="Enter body"
          rows="5"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="userId">
          User ID
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="userId"
          type="number"
          placeholder="Enter user ID"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
      </div>
      <footer className="modal__content modal__footer">
        <button className="bg-black hover:bg-pink-300 text-white font-bold py-2 px-4 rounded" type="submit">
          Add Post
        </button>
      </footer>
    </>
  );

  return (
    <Modal show={showModal} onCancel={handleCloseModal} modalRef={modalContentRef}>
      <form onSubmit={handleSubmit}>
        <div className={`modal__content`}>
          {content}
        </div>
      </form>
    </Modal>
  );
};

export default AddPostModal;
