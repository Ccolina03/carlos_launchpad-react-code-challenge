import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditPostForm from "./EditPostForm";
import DeleteForm from "./DeleteForm";
import { deletePost } from "./store/GetPostsSlice";


//Specific Card appearing in HomePage displaying data
const PostCard= ({id,title,userId,body}) => {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ id, title, userId, body }); // define editData state variable with initial values
    const [isDeleting, setIsDeleting] = useState(false)

    const handleEditPost = (post) => {
        setIsEditing(true);
        setEditData(post); // set the editData state variable to the post object
    }

    const handleDeletePost = () => {
        dispatch(deletePost(id))
        setIsDeleting(false)
    }

    if (isEditing) {
        return <EditPostForm editData={editData} />;
    }

    return (
        <div>
            <a className="group">
                <div className="2-full bg-gray-200 rounded-3xl overflow-hidden">
                    <div className="flex justify-center">
                        <div class="inline-flex  rounded-md shadow-sm">

                            <button
                                className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                                onClick={() => {
                                    handleEditPost({ id, title, userId, body });
                                }}
                            >
                                Edit
                            </button>
                            <button
                                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                                onClick={() => {
                                    setIsDeleting(true);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div
                        className="relative group-hover:opacity-75 h-72 flex justify-center items-center"
                        style={{ fontSize: "3rem" }}
                    >
                        {id}
                    </div>
                </div>
    
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
                    <h3> Author: {userId} </h3>
                    <h3>{body}</h3>
                </a>
                {isDeleting && <DeleteForm handleDeletePost={handleDeletePost} />}
            </div>
        );
                            }

export default PostCard;
