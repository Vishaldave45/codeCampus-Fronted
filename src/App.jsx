import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProblemList from "./pages/ProblemList";
import ProblemDetail from "./pages/ProblemDetail";
import AddProblem from "./pages/AddProblem";
import Leaderboard from "./pages/Leaderboard";
import PlacementMaterial from "./pages/PlacementMaterial";
import ContestList from "./pages/ContestList";
import DiscussionBoard from "./pages/DiscussionBoard";

function AppWrapper({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const hideNavbar = location.pathname === "/dashboard";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Pages */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />}
        />

        <Route path="/problems" element={isLoggedIn ? <ProblemList /> : <Navigate to="/login" />} />
        <Route path="/problems/:id" element={isLoggedIn ? <ProblemDetail /> : <Navigate to="/login" />} />
        <Route path="/add-problem" element={isLoggedIn ? <AddProblem /> : <Navigate to="/login" />} />
        <Route path="/leaderboard" element={isLoggedIn ? <Leaderboard /> : <Navigate to="/login" />} />
        <Route path="/placement" element={isLoggedIn ? <PlacementMaterial /> : <Navigate to="/login" />} />
        <Route path="/contests" element={isLoggedIn ? <ContestList /> : <Navigate to="/login" />} />
        <Route path="/discussion" element={isLoggedIn ? <DiscussionBoard /> : <Navigate to="/login" />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppWrapper isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}
