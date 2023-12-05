import React from 'react';
import { useSelector } from 'react-redux';
import GreetingComponent from './Greeting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GreetingComponent />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;