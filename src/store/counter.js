import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'products',
  storage,
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: {
    products: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Игнорировать проверки для конкретных действий
      },
    }),
});

export const persistor = persistStore(store);
