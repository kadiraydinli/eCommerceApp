import { MMKV } from 'react-native-mmkv';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    Storage,
} from 'redux-persist';

import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';

import theme from './theme';
import products from './products';
import productTiming from './productTiming';
import hotDeals from './hotDeals';
import basket from './basket';

const reducers = combineReducers({
    theme,
    products,
    productTiming,
    hotDeals,
    basket,
});

const storage = new MMKV();
export const reduxStorage: Storage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        storage.delete(key);
        return Promise.resolve();
    },
};

const persistConfig = {
    key: 'root',
    storage: reduxStorage,
    whitelist: ['theme', 'basket'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;