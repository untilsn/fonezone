import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/userSlice"
import counterReducer from "./slice/counterSlice"
import wishlistReducer from "./slice/wishlistSlice"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"


const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  wishlist: wishlistReducer
})

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["counter"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export let persister = persistStore(store)