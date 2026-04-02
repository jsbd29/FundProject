/** @format */

import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to='/'>Home</Link> | <Link to='/dashboard'>Dashboard</Link> |{" "}
        <Link to='/settings'>Settings</Link>
      </nav>

      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet /> {/* Child routes render here */}
      </main>

      <footer style={{ padding: "1rem", borderTop: "1px solid #ccc" }}>
        © 2026 Your App Inc.
      </footer>
    </div>
  );
}
