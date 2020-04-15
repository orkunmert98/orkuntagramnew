import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import {rootReducers} from '../redux/root.reducer';
export default (initialState) => {
  let store;

  const isClient = typeof window !== 'undefined';
  if (process.env.RUNTIME==="browser") {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'root',
      storage
    };
    store = createStore(
      persistReducer(persistConfig, rootReducers),
      initialState,
      
    );
     store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducers,
      initialState,
     
    );
  }

  return store;
};