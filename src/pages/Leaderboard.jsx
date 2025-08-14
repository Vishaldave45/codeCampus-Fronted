import React from "react";
import Card from "../components/Card";
import "./../styles/Pages.css";

export default function Leaderboard() {
  const leaderboard = [
    { name: "Alice", score: 120, icon: "🥇" },
    { name: "Bob", score: 110, icon: "🥈" },
    { name: "Charlie", score: 100, icon: "🥉" },
  ];

  return (
    <div className="page-container">
      <h1>Leaderboard</h1>
      <p>Top performers in coding challenges.</p>

      <div className="card-grid">
        {leaderboard.map((user, index) => (
          <Card key={index} icon={user.icon} value={user.name} title={`Score: ${user.score}`} />
        ))}
      </div>
    </div>
  );
}
