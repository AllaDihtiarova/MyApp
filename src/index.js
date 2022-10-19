import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import { Form } from './components';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Form /> */}
    <App/>
  </React.StrictMode>
);

