import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "./store/GetPostsSlice";

const EditPostForm = ({ title, body, userId, handleTitleChange, handleBodyChange, handleUserIdChange }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.posts);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: title,
      body: body,
      userId: userId,
      id: Math.floor(Math.random() * 100) + 1,
    };
    dispatch(editPost(post));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block font-medium text-gray-700 mb-2">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block font-medium text-gray-700 mb-2">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={handleBodyChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userId" className="block font-medium text-gray-700 mb-2">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={handleUserIdChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-black hover:bg-pink-300 text-white font-bold py-2 px-4 rounded">
        {status === "loading" ? "Loading..." : "Save Changes"}
      </button>
    </form>
  )
}

export default EditPostForm;
