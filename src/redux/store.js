import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
export const store = configureStore({
  // store configuration
  reducer: {
    user: authReducer,
  },
});
