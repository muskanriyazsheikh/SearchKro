import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Added Navigate
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/Signup';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import Sidebar from '../components/Sidebar';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {/* Redirect base URL to signup so you don't see a 404 */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      {/* ...other routes */}
    </Routes>
  );
};

export default AppRouter;