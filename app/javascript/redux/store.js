import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import greetingReducer from './reducers/greetingReducer';

const rootReducer = {
  greeting: greetingReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;