import React from 'react';
import ReactDOM from 'react-dom';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';
import router from './App';
import { ThemeProvider } from "@material-tailwind/react";

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// Create a client
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);