/** @format */
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Mimicking an API call
    if (email === "user@example.com" && password === "password") {
      // 1. Trigger the auth state change in your parent component
      // setAuth(true);

      // 2. Redirect to dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Try user@example.com / password");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />

          <button type='submit' style={btnStyle}>
            Sign In
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

// Simple styles to get you started
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
};

const cardStyle = {
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
  width: "350px",
  background: "#fff",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const btnStyle = {
  padding: "10px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
