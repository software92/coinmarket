import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const mainTheme = {
  textColor: '#f5f5f5',
  backgroundColor: '#d9dbbd',
  accentColor: '#1f2937',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={mainTheme}>
    <App />
  </ThemeProvider>
);
