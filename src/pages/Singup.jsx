/** @format */

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation logic
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      // Logic for API call would go here:
      // await api.post('/signup', formData);

      console.log("User registered:", formData);

      // Redirect to dashboard on success
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to create an account. Try again.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Create Account</h2>
        <p>Join us to start managing your dashboard.</p>

        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type='submit' style={buttonStyle}>
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
          Already have an account? <Link to='/login'>Login here</Link>
        </p>
      </div>
    </div>
  );
}

// Basic Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "70vh",
};
const cardStyle = {
  padding: "2rem",
  border: "1px solid #ddd",
  borderRadius: "8px",
  width: "100%",
  maxWidth: "400px",
  textAlign: "center",
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "1rem",
};
const inputStyle = {
  padding: "0.8rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
};
const buttonStyle = {
  padding: "0.8rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
};
