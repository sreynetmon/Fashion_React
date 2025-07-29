import { configureStore } from '@reduxjs/toolkit';
import { ecommerceApi } from './api';
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from './features/counter/counterSlide'

export const store = configureStore({
    reducer: {
        [ecommerceApi.reducerPath]: ecommerceApi.reducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecommerceApi.middleware)
    
        
})
setupListeners(store.dispatch);