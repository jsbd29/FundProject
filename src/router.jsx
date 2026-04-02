/** @format */

import { createBrowserRouter } from "react-router-dom";

import AuthGuard from "./components/AuthGuard";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import MainLayout from "./layout/MainLayout";

// Simulate auth state
const isAuthenticated = true;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        // Protected Route Group
        element: <AuthGuard isAuthenticated={isAuthenticated} />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);
