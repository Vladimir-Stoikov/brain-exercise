import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import NotFoundPage from '../pages/NotFoundPage';

const HomePage = lazy(() => import('../pages/HomePage'));
const Schulte = lazy(() => import('../pages/Schulte'));
const Stroop = lazy(() => import('../pages/Stroop'));
const TouchTyping = lazy(() => import('../pages/TouchTyping'));
const Socratic = lazy(() => import('../pages/Socratic'));
const ReverseReading = lazy(() => import('../pages/ReverseReading'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'schulte', element: <Schulte /> },
      { path: 'stroop', element: <Stroop /> },
      { path: 'touch-typing', element: <TouchTyping /> },
      { path: 'socratic', element: <Socratic /> },
      { path: 'reverse-reading', element: <ReverseReading /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
