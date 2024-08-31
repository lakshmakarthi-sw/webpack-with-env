import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthMethod } from '../utils/services';

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async (obj) => {
    const res = await getAuthMethod()
    const data = await res.data
    return {data, lUser: obj}
  }
)

const initialState = {
  contents: [],
  isLoading: false,
  error: null
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      return {
        ...state,
        status: action.payload.status
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      const { data, lUser } = action.payload;
      const cUserObj = data.filter(e => e.username === lUser.username && e.password === lUser.pwd);
      if (cUserObj.length) {
        localStorage.setItem('token', cUserObj[0]?.id);
        state.contents = data;
      } else {
        state.error = true;
      }
      state.isLoading = false;
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
});

export const { updateStatus } = loginSlice.actions;

export default loginSlice.reducer;