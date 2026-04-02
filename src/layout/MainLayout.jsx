// layouts/MainLayout.jsx
import { Outlet, Link } from "react-router-dom";

export default function MainLayout({ isAuthenticated }) {
  return (
    <div className="layout">
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <Link to="/"><strong>BrandLogo</strong></Link>
        
        <div>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/settings" style={{ marginLeft: '15px' }}>Settings</Link>
              <button style={{ marginLeft: '15px' }}>Logout</button>
            </>
          ) : (
            <>
              <button>Login</button>
              <button style={{ marginLeft: '10px' }}>Sign Up</button>
            </>
          )}
        </div>
      </nav>

      <main><Outlet /></main>
      
      <footer>© 2026 Your App</footer>
    </div>
  );
}