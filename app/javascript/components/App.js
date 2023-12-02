import React from 'react';
import { useSelector } from 'react-redux';
import GreetingComponent from './Greeting';

const App = () => {
  const greeting = useSelector((state) => state.greeting.greeting);

  return <GreetingComponent greeting={greeting} />;
};

export default App;