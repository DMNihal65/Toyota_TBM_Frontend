import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthMiddleware = ({ element: Element, roles, ...rest }) => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Element {...rest} />;
};

export default AuthMiddleware;
