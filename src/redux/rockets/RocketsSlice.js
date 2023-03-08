import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers() {

  },

});

export default rocketsSlice.reducer;
