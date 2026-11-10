import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ allowedRoles }) {
  const { user } = useAuth();

  // Jika belum login, arahkan ke login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Jika role tidak sesuai (misal user biasa mencoba ke dashboard admin)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}