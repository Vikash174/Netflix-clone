import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
  developerJobStatus: false,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    setShowDeveloperJobStatus: (state, action) => {
      state.developerJobStatus = action.payload;
    },
  },
});

export const { changeLanguage, setShowDeveloperJobStatus } =
  configSlice.actions;

export default configSlice.reducer;
