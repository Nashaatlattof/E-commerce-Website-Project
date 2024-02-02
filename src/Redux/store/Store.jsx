/* 
*/
// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi, productFlashApi } from "../../Redux/prod.jsx";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    [productApi.reducerPath]: productApi.reducer,
    [productFlashApi.reducerPath]: productFlashApi.reducer, // تحديث هنا
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(productFlashApi.middleware), // تحديث هنا
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
