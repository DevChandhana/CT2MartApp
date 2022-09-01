import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  // defining state name and it's initial value
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    // let's define reducers and their actions
    register: () => {
      //
    },
    login: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const {login, logout, register} = authSlice.actions;

// selectors
export const authSelector = state => state.user.user;

export default authSlice.reducer;
