import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/public/HomePage';
import AdminDashboard from '../pages/admin/AdminDashboard';
import { useAuth } from '../context/AuthContext';

const AppRouter = () => {
  const { isAdmin } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin"
        element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRouter;

