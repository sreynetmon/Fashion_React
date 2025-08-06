import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "./features/counter/counterSlide";
import { ecommerceApi } from "./features/car/car";

export const store = configureStore({
  reducer: {
    // [baseApi.reducerPath]: baseApi.reducer,
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerceApi.middleware),

});

setupListeners(store.dispatch);
