import { createSlice } from "@reduxjs/toolkit";

export const startSlice = createSlice({
  name: "start",
  initialState: {
    value: new Date(2023, 11, 14).getTime(),
  },

  reducers: {
    setStart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStart } = startSlice.actions;

export const selectStart = (state) => state.start.value;

export default startSlice.reducer;
