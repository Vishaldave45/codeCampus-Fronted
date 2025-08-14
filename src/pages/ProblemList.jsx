import React from "react";
import Card from "../components/Card";
import "./../styles/Pages.css";

export default function ProblemList() {
  return (
    <div className="page-container">
      <h1>Problem List</h1>
      <p>Coming soon: list of coding problems.</p>

      <div className="card-grid">
        <Card icon="🖋️" value="Problem 1" title="Easy" />
        <Card icon="🖋️" value="Problem 2" title="Medium" />
        <Card icon="🖋️" value="Problem 3" title="Hard" />
      </div>
    </div>
  );
}
