import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import NotFoundPage from '../pages/NotFoundPage';

const HomePage = lazy(() => import('../pages/HomePage'));
const Schulte = lazy(() => import('../pages/Schulte'));
const Stroop = lazy(() => import('../pages/Stroop'));
const TouchTyping = lazy(() => import('../pages/TouchTyping'));
const Socratic = lazy(() => import('../pages/Socratic'));
const ReverseReading = lazy(() => import('../pages/ReverseReading'));

const withSuspense = (element: JSX.Element) => <Suspense fallback={<div style={{ padding: '2rem' }}>Loading...</div>}>{element}</Suspense>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: 'schulte', element: withSuspense(<Schulte />) },
      { path: 'stroop', element: withSuspense(<Stroop />) },
      { path: 'touch-typing', element: withSuspense(<TouchTyping />) },
      { path: 'socratic', element: withSuspense(<Socratic />) },
      { path: 'reverse-reading', element: withSuspense(<ReverseReading />) },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
