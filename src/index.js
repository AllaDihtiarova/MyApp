import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Form } from './components';
import { Navigation } from './Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
    <Navigation/>
  </React.StrictMode>
);

