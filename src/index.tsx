import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './assets/fonts/fonts.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);
root.render(<App />);
