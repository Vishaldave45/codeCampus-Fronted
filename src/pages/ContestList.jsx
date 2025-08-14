import React from "react";
import Card from "../components/Card";
import "./../styles/Pages.css";

export default function Contests() {
  const contests = [
    { title: "Monthly Coding Contest", icon: "🎯" },
    { title: "Hackathon 2025", icon: "🚀" },
  ];

  return (
    <div className="page-container">
      <h1>Contests</h1>
      <p>Upcoming and past coding contests.</p>

      <div className="card-grid">
        {contests.map((c, index) => (
          <Card key={index} icon={c.icon} value={c.title} title="Participate" />
        ))}
      </div>
    </div>
  );
}
