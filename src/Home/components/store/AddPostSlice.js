import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const addPostSlice = createSlice({
    name: 'addPost',
    initialState: {
      title: '',
      body: '',
      userId: 1,
      status: 'idle', // could be idle, loading, succeeded, or failed
      error: null,
    },
    reducers: {
      setTitle: (state, action) => {
        state.title = action.payload;
      },
      setBody: (state, action) => {
        state.body = action.payload;
      },
      setUserId: (state, action) => {
        state.userId = action.payload;
      },
      setStatus: (state, action) => {
        state.status = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      reset: (state) => {
        state.title = '';
        state.body = '';
        state.userId = 1;
        state.status = 'idle';
        state.error = null;
      },
    },
  });
  

  export const {
    setTitle,
    setBody,
    setUserId,
    setStatus,
    setError,
    reset,
  } = addPostSlice.actions;
  
  export const addPostReducer = addPostSlice.reducer;