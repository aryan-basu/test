import React from 'react';
import { Navigate } from 'react-router-dom';

import { useUserAuth } from './../../context/userAuthContext';

const UnprotectedRoute = ({ UnprotectedComponent }) => {
  const { user } = useUserAuth();

  console.log(user);

  if (user) {
    return <Navigate to='/user' />;
  }
  return UnprotectedComponent;
};

export default UnprotectedRoute;
