import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../components/App';
import { fetchGreeting } from '../redux/actions/greetingActions';

// Dispatch fetchGreeting when the component mounts
store.dispatch(fetchGreeting());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);