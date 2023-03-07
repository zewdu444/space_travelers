import { createSlice } from '@reduxjs/toolkit';

const api = 'https://api.spacexdata.com/v3/missions';

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
