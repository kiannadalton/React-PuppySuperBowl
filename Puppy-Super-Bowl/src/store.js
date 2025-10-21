import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";

const store = configureStore({
  reducer: {
    // add api and reducer path here
    [api.reducerPath]: api.reducer,
  },
  // add middleware here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
