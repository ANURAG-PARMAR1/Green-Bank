import React from 'react';
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './input.css'
import { Toaster } from "react-hot-toast";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
  </StrictMode>,
)
