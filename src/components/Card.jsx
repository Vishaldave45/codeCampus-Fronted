import React from "react";
import "./../styles/Dashboard.css";

export default function Card({ title, value, icon, onClick }) {
  return (
    <div className="card" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      <div className="card-icon" style={{ fontSize: "40px", marginBottom: "10px" }}>
        {icon}
      </div>
      <div className="card-value" style={{ fontSize: "22px", fontWeight: "600", marginBottom: "5px" }}>
        {value}
      </div>
      <div className="card-title" style={{ fontSize: "16px", color: "#F0F0F0" }}>
        {title}
      </div>
    </div>
  );
}
