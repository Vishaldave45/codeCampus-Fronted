import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // <-- add useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy auth: accept any input
    setIsLoggedIn(true);
    navigate("/dashboard"); // <-- redirect to Dashboard after login
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
