import React from "react";
import { useParams } from "react-router-dom";

export default function ProblemDetail() {
  const { id } = useParams();
  return (
    <div style={{ padding: "30px" }}>
      <h1>Problem Detail Page</h1>
      <p>Coming soon: Details for problem ID: {id}</p>
    </div>
  );
}
