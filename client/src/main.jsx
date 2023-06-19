import React from 'react';
import ReactDOM from 'react-dom/client';
//
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//
import App from './App.jsx';
import ContextProvider from './contexts/index.jsx';
import './index.css';
import { store } from './store/index.js';

import { QueryClientProvider, queryClient } from './config/react-query.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ContextProvider>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
);
