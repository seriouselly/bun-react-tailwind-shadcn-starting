// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './components/context/ThemeContext';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'
import { Toaster } from 'sonner';

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


const elem = document.getElementById('root');
if (!elem) {
  throw new Error('Failed to find the root element');
};
const app = (
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(elem).render(app);
