import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/userSlice"
import counterReducer from "./slice/counterSlice"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"


const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
})

const persistConfig = {
  key: "root",
  storage, 
  blacklist : []
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