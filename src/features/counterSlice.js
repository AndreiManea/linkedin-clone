import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: false,
  },
  reducers: {
    login: state => {
            state.auth = true;
    },
    logout: state => {
      state.auth = false;
    },
  },
});

export const { login, logout} = userSlice.actions;

export const selectCount = state => state.user.auth;

export default userSlice.reducer;
