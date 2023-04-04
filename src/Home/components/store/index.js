import {configureStore} from '@reduxjs/toolkit';

import postsReducer from './GetPostsSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})
