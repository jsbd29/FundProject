/** @format */

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthGuard from "./components/AuthGuard";

// Pages
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

import Login from "./pages/Login";
import Signup from "./pages/Singup";

// In a real app, this would be managed by a Context Provider or Redux
// For now, we use a mock object to demonstrate the logic
const auth = {
  isAuthenticated: false, // Toggle this to test different views
  user: { name: "Alex" },
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout isAuthenticated={auth.isAuthenticated} />,
    children: [
      {
        index: true,
        element: (
          <Landing isAuthenticated={auth.isAuthenticated} user={auth.user} />
        ),
      },
      {
        path: "signup",
        element: <Signup/>
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        // Protected Route Group
        // Only routes inside this 'children' array check the AuthGuard
        element: <AuthGuard isAuthenticated={auth.isAuthenticated} />,
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
  {
    path: "*",
    element: (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>404: Page Not Found</h1>
      </div>
    ),
  },
]);
