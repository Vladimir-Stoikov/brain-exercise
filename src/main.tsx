import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import Schulte from './pages/Schulte.tsx';
import Stroop from './pages/Stroop.tsx';
import TouchTyping from './pages/TouchTyping.tsx';
import Socratic from './pages/Socratic.tsx';
import ReverseReading from './pages/ReverseReading.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
      { path: 'schulte', element: <Schulte /> },
      { path: 'stroop', element: <Stroop /> },
      { path: 'touch-typing', element: <TouchTyping /> },
      { path: 'socratic', element: <Socratic /> },
      { path: 'reverse-reading', element: <ReverseReading /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
