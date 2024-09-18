import { createSlice } from "@reduxjs/toolkit";
import { WeatherResponse } from "src/api/types";

interface initialStateType {
  loading: boolean;
  sevenDayForecast: WeatherResponse | null;
}

const initialState: initialStateType = {
  loading: false,
  sevenDayForecast: null,
};

export const weatherSlice = createSlice({
  name: "weatherCast",
  initialState,
  reducers: {
    loadingTrue: (state) => {
      state.loading = true;
    },
    loadingFalse: (state) => {
      state.loading = false;
    },
    updateForecast: (state, action) => {
      state.sevenDayForecast = action.payload;
      state.loading = false;
    },
  },
});

const reducer = weatherSlice.reducer;

export const { updateForecast, loadingFalse, loadingTrue } =
  weatherSlice.actions;

export { reducer };
