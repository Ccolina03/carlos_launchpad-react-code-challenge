import { useDispatch } from 'react-redux';
import { deletePost } from './store/GetPostsSlice';

const DeleteForm = ({ postId }) =>  {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(postId));
  };

  return (
    <form onSubmit={handleDelete}>
      <button type="submit" className="px-4 ml-20 py-2 mt-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">Delete Post</button>
    </form>
  );
}

export default DeleteForm