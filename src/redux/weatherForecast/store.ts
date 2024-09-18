import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slice";

const store = configureStore({
  reducer: {
    weatherForecast: reducer,
  },
});

export { store };
