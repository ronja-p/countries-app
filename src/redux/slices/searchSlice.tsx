import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: ''
  },
  reducers: {
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    }
  }
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
