import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';

import App from './app/App';

const rootContainer = document.getElementById('container') as HTMLElement;
const root = ReactDOM.createRoot(rootContainer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);