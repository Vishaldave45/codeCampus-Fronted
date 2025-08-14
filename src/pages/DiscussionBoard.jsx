import React from "react";
import Card from "../components/Card";
import "./../styles/Pages.css";

export default function Discussion() {
  const threads = [
    { title: "How to solve Problem 1?", icon: "💬" },
    { title: "DSA Tips", icon: "💬" },
    { title: "Placement experiences", icon: "💬" },
  ];

  return (
    <div className="page-container">
      <h1>Discussion Board</h1>
      <p>Ask questions and discuss coding topics with peers.</p>

      <div className="card-grid">
        {threads.map((t, index) => (
          <Card key={index} icon={t.icon} value={t.title} title="View Thread" />
        ))}
      </div>
    </div>
  );
}
