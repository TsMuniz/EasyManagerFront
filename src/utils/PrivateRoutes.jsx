import { Outlet, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

export default function PrivateRoutes() {
  const { auth } = useContext(AuthContext) || true;
  
  return true ? <Outlet /> : <Navigate to="/" />;
}
