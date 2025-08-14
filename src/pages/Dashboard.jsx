import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import "./../styles/Dashboard.css";

function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to CodeCampus Dashboard</h1>

        <div className="cards">
          <Card
            icon="📚"
            value="12"
            title="problems"
            onClick={() => navigate("/problems")}
          />
          <Card
            icon="📝"
            value="8"
            title="Challenges"
            onClick={() => navigate("/problems")}
          />
          <Card
            icon="🏆"
            value="5"
            title="Completed"
            onClick={() => navigate("/leaderboard")}
          />
        </div>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
