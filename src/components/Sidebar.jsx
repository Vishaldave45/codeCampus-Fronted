import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Dashboard.css";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link";

  const links = [
    { to: "/dashboard", name: "Home", icon: "🏠" },
    { to: "/problems", name: "Problems", icon: "🖋️" },
    { to: "/leaderboard", name: "Leaderboard", icon: "🏆" },
    { to: "/placement", name: "Placement", icon: "📚" },
    { to: "/contests", name: "Contests", icon: "🎯" },
    { to: "/discussion", name: "Discussion", icon: "💬" },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <h2>Dashboard</h2>

      <button
        className="toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
        style={{
          marginBottom: "15px",
          padding: "5px 10px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          background: "#3498DB",
          color: "white",
        }}
      >
        {collapsed ? "→" : "←"}
      </button>

      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className={linkClass}>
              <span className="link-icon">{link.icon}</span>
              {!collapsed && <span className="link-text">{link.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
