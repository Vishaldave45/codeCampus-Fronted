import React from "react";
import Card from "../components/Card";
import "./../styles/Pages.css";

export default function Placement() {
  const materials = [
    { title: "DSA Notes", icon: "📚" },
    { title: "Interview Questions", icon: "📝" },
    { title: "Resume Tips", icon: "🖋️" },
  ];

  return (
    <div className="page-container">
      <h1>Placement Material</h1>
      <p>Resources to prepare for interviews and placements.</p>

      <div className="card-grid">
        {materials.map((m, index) => (
          <Card key={index} icon={m.icon} value={m.title} title="Download" />
        ))}
      </div>
    </div>
  );
}
