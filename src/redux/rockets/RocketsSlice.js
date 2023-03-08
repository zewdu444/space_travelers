import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
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
  extraReducers(builder) {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        rocketList: action.payload.map((mission) => ({

          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        })),
        status: 'loaded',
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },

});

export default rocketsSlice.reducer;
