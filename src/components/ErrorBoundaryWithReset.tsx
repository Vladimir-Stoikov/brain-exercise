import { useLocation } from 'react-router';
import { ErrorBoundary } from './ErrorBoundary';

export function ErrorBoundaryWithReset({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return <ErrorBoundary key={location.key}>{children}</ErrorBoundary>;
}
