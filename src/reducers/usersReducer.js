import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthMethod } from '../utils/services';

export const fetchUserList = createAsyncThunk(
  'users/list',
  async () => {
    const res = await getAuthMethod()
    const data = await res.data
    return data
  }
)

const initialState = {
  contents: [],
  isLoading: false,
  error: null
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserList.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUserList.fulfilled, (state, action) => {
      state.contents = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchUserList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
});


export default usersSlice.reducer;