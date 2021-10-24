import React from 'react';
import './styles/main.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './context/auth-context';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (error.status === 404) return false;
        else if (failureCount < 2) return true;
        else return false;
      },
    },
  },
});

export default function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            {children}
            <ReactQueryDevtools />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
