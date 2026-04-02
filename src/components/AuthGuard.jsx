/** @format */

import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard({ isAuthenticated }) {
  // If not logged in, redirect to landing page
  return isAuthenticated ? <Outlet /> : <Navigate to='/' replace />;
}
