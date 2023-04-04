import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getPostId } from '../server/api';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20';

const INITIAL_POSTS_STATE = {
  posts: [],
  status: 'idle', // could be idle, loading, succeeded, or failed
  error: null,
  specificPost: null,
  editPost: null
};

// getting data from API
export const fetchPosts = createAsyncThunk(
  'carlos_colina_launchpad-react-code-challenge/',
  async () => {
    const response = await axios.get(POSTS_URL);
    return response.data;
  }
);

//getting data from specific id
export const fetchSpecificPost = createAsyncThunk(
  'posts/fetchSpecificPost',
  async (postId) => {
    if (postId) { 
       const response = await getPostId(postId);
      return response;
    } else {
      return null //handle empty string to recover default 20 items
    }
  }
);

//editing specific data
export const editPost = createAsyncThunk(
  'posts/editPost',
  async (post) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
    return response.data;
  }
);

//deleting specific post
export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (postId) => {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      return postId;
    }
  );


  //sending post to api
  


const getPostsSlice = createSlice({
  name: 'posts',
  initialState: INITIAL_POSTS_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // fetching all posts
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const loadedPosts = action.payload.map((post) => post);
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action)=> {
        state.status='failed'
        state.error = action.error.message
      })

      // fetching specific id post
      .addCase(fetchSpecificPost.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSpecificPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.specificPost = [action.payload];
      })
      .addCase(fetchSpecificPost.rejected, (state, action)=> {
        state.status='failed'
        state.error = action.error.message
      })

      // editing specific post
      .addCase(editPost.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.editPost = action.payload;
      })      
      .addCase(editPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      //deleting specific post
      .addCase(deletePost.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const postId = action.payload.id;
        state.posts = state.posts.filter((post) => post.id !== postId);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllPost = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default getPostsSlice.reducer;