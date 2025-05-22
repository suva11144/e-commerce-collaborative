import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isLoading: false,    user: null,     
}






const authSlice = createSlice({
  name: 'auth',
    initialState,
    reducers : {
      setUSer: (state, action) => {
        state.user = action.payload;
      }
    }
})


export const { setUSer } = authSlice.actions;
export default authSlice.reducer;