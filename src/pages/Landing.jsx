/** @format */

// pages/Landing.jsx
import { Link } from "react-router-dom";

export default function Landing({ isAuthenticated, user }) {
  if (isAuthenticated) {
    return (
      <div className='welcome-back'>
        <h1>Welcome back, {user?.name || "User"}!</h1>
        <p>You are currently logged in.</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to='/dashboard' style={btnStyle}>
            Go to Dashboard
          </Link>
          <Link to='/settings' style={btnStyle}>
            Account Settings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='hero'>
      <h1>The Ultimate App</h1>
      <p>Sign up today to manage your workflow efficiently.</p>
      <button onClick={() => alert("Redirect to Login")}>Get Started</button>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  background: "#007bff",
  color: "white",
  borderRadius: "5px",
  textDecoration: "none",
};
