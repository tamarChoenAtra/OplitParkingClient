import React, { useEffect } from 'react';
import { Routes } from './src/routes/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import DevService from './src/services/dev.service';

function App() {

  useEffect(() => {
    DevService.setDevOption();
  }, [])

  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
