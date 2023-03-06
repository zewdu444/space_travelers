import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};
export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers() {

  },

});

export default rocketsSlice.reducer;
