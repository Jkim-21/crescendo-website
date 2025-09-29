// ProtectedRoute.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { RestrictedPage } from '../pages';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const LOCKED = import.meta.env.VITE_APP_LOCKED === 'true';

  if (LOCKED) {
    return <RestrictedPage locked />;
  }

  if (loading) return <div>Loading...</div>;

  if (!user || !user.email?.endsWith('@crescendoforacause.com')) {
    return <RestrictedPage />;
  }

  return children;
};

export default ProtectedRoute;