import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'


const store = configureStore({
  reducer: rootReducer
});

export default store;

