import React from 'react';
import './App.css';
import Calculator from './Calculator';
import NumberProvider from './NumberProvider';

const App = () => {
  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
