import { Navigate } from 'react-router-dom';

import UserDashboard from '../../pages/UserDashboard';
import AdminDashboard from '../../pages/AdminDashboard';

import { useUserAuth } from './../../context/userAuthContext';

const ProtectedRoutes = () => {
  const { user } = useUserAuth();

  // If user is invalid (not logged in), Go to Home
  if (!user) {
    return <Navigate to='/' />;
  }
  // If User is Valid(logged in) AND User is Admin, Go to AdminDashboard
  else if (user && user.isAdmin) {
    return <AdminDashboard />;
  }
  // If User is Valid(logged in) And User is NOT Admin, Go to UserDashboard
  else if (user && !user.isAdmin) {
    return <UserDashboard />;
  }
};

export default ProtectedRoutes;
