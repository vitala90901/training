import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App';

const rootContainer = document.getElementById('container') as HTMLElement;
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);