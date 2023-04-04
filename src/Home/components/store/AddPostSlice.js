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
  reducers: {
    postAdded: (state) => {
      state.status = 'succeeded';
      state.error = null;
    },
    postFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    postRequested: (state) => {
      state.status = 'loading';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewPost.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { postAdded, postFailed, postRequested } = AddPostSlice.actions;

export default AddPostSlice.reducer;