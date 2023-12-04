import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk('courseList/fetchCourses', async () => {
  try {
    const response = await fetch('courseData.json');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const courseListSlice = createSlice({
  name: 'courseList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default courseListSlice.reducer;
