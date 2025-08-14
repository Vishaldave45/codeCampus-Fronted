import React from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaCheckCircle, FaTrophy, FaUserCircle, FaPuzzlePiece } from "react-icons/fa";
import "../styles/home.css";

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to CodeCampus</h1>
        <p>Learn, Practice, and Master Coding with AI-powered Assistance</p>
        <Link to="/register" className="btn-cta">Get Started</Link>
      </section>

      {/* Core Features Section */}
      <section className="features-section">
        <h2>Core Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaRobot className="feature-icon"/>
            <h3>AI Tutor Chatbot</h3>
            <p>Explains concepts in plain language, suggests optimized code, and gives hints instead of direct answers.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="feature-icon"/>
            <h3>Plagiarism & Similarity Check</h3>
            <p>Compares user code with a dataset to ensure originality.</p>
          </div>
          <div className="feature-card">
            <FaTrophy className="feature-icon"/>
            <h3>Skill-based Leaderboard</h3>
            <p>Tracks solved challenges and categorizes skill levels.</p>
          </div>
          <div className="feature-card">
            <FaUserCircle className="feature-icon"/>
            <h3>User Dashboard</h3>
            <p>Shows progress, badges, and recent AI queries.</p>
          </div>
          <div className="feature-card">
            <FaPuzzlePiece className="feature-icon"/>
            <h3>Challenge Mode</h3>
            <p>AI generates new coding problems tailored to your skill level.</p>
          </div>
        </div>
      </section>

      {/* Why Impactful Section */}
      <section className="impact-section">
        <h2>Why CodeCampus is Impactful</h2>
        <p>Combines MERN stack + Generative AI, ideal for product-oriented companies. Learn faster, code smarter, and track your progress effectively.</p>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
          <span>⚛ React.js</span>
          <span>🟢 Node.js</span>
          <span>🍃 MongoDB</span>
          <span>🤖 GPT / Gemini API</span>
          <span>☁ Vercel + Render</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to level up your coding?</h2>
        <Link to="/register" className="btn-cta">Join CodeCampus</Link>
      </section>
    </div>
  );
}
