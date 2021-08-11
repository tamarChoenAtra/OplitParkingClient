import React from 'react';
import { Routes } from './src/routes/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';


function App() {

  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
