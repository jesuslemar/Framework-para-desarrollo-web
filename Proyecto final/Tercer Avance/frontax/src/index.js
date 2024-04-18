import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import './assets/bootstrap/dist/css/axyz.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);
