import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';

const app = ReactDOMClient.createRoot(document.getElementById('app'));
app.render(<App />);
