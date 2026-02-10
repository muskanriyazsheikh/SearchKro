import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import DashLayout from './layouts/DashLayout'; // Only one import needed

// Auth Pages
// import Login from './pages/auth/Login';
import Login from './pages/auth/login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Dashboard Pages
import DashboardHome from './pages/dashboard/DashboardHome';
import Reports from './pages/Reports';
import Categories from './pages/Categories';
import Location from './pages/Location';
import Rating from './pages/Rating';
import LegalPolicy from './pages/LegalPolicy';
import Sidebar from './components/Sidebar';
import LogoutModal from './components/LogoutModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Authentication Routes (Wrapped in AuthLayout) */}
        <Route element={<AuthLayout />}>
          {/* Automatically redirect "/" to "/signup" */}
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* 2. Protected Dashboard Routes (Wrapped in DashLayout) */}
        {/* This matches the Sidebar and Header structure */}
        <Route element={<DashLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/location" element={<Location />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/legal-policy" element={<LegalPolicy />} />
        </Route>

        {/* 3. Catch-all: Redirect unknown URLs to Login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;