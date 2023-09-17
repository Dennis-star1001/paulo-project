import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from './api';
import authReducer from './slice/authSlice';
import authMiddleware from './middleware/authMiddleware';

// Define the rootReducer by combining the reducers
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  // reducers...
  auth: authReducer
});

// Configure the persistConfig for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  // storage: new CookieStorage(Cookies),
  whitelist: ['auth']
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat([
      api.middleware,
      authMiddleware
    ])
});

// Create the persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
