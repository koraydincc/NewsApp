// src/redux/store.jsx

import { configureStore } from '@reduxjs/toolkit';
import { googleNewsApi } from './services/googleNews';

const store = configureStore({
  reducer: {
    [googleNewsApi.reducerPath]: googleNewsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(googleNewsApi.middleware),
});

export default store;
