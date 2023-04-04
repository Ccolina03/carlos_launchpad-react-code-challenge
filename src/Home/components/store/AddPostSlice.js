import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addNewPost = createAsyncThunk('posts/addNewPost', async (newPost) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('Error adding post');
    }
  } catch (error) {
    throw new Error('Error adding post');
  }
});

export const AddPostSlice = createSlice({
  name: 'posts',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {}
});

export const { postAdded, postFailed, postRequested } = AddPostSlice.actions;

export default AddPostSlice.reducer;