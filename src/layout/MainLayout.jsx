/** @format */
import { Outlet, Link, useNavigate } from "react-router-dom";



export default function MainLayout({ isAuthenticated, setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Clear your auth state
    setAuth(false);
    // 2. Redirect to landing page
    navigate("/");
  };

  return (
    
    <div className='layout' style={layoutStyle}>
      <nav style={navStyle}>
        <Link to='/' style={logoStyle}>
          <strong>BrandLogo</strong>
        </Link>

        <div style={navGroupStyle}>
          {isAuthenticated ? (
            <>
              <Link to='/dashboard' style={linkStyle}>
                Dashboard
              </Link>
              <Link to='/settings' style={linkStyle}>
                Settings
              </Link>
              <button onClick={handleLogout} style={logoutBtnStyle}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/login' style={linkStyle}>
                Login
              </Link>
              <Link to='/signup' style={signupBtnStyle}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      <main style={mainContentStyle}>
        <Outlet />
      </main>

      <footer style={footerStyle}>© 2026 Your App</footer>
    </div>
  );
}

// --- Styles ---

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  borderBottom: "1px solid #eee",
};

const navGroupStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const logoStyle = {
  textDecoration: "none",
  color: "#333",
  fontSize: "1.2rem",
};

const linkStyle = {
  textDecoration: "none",
  color: "#555",
  fontSize: "0.95rem",
};

const mainContentStyle = {
  flex: 1, // Pushes footer to the bottom
  padding: "2rem",
};

const signupBtnStyle = {
  ...linkStyle,
  background: "#007bff",
  color: "white",
  padding: "8px 16px",
  borderRadius: "5px",
};

const logoutBtnStyle = {
  background: "none",
  border: "1px solid #dc3545",
  color: "#dc3545",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer",
};

const footerStyle = {
  textAlign: "center",
  padding: "1rem",
  borderTop: "1px solid #eee",
  color: "#888",
  fontSize: "0.8rem",
};
