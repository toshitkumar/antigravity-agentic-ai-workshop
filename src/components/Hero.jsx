import React from 'react';

export default function Hero({ setActiveSection }) {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-pill">
          <span>✨ Student Edition</span>
          <span>•</span>
          <span>Beginner to Advanced</span>
          <span>•</span>
          <span>Hands-on Project Learning</span>
        </div>

        <h1 className="hero-title">
          Build with AI. <br />
          <span>Think Like a Developer.</span>
        </h1>

        <p className="hero-subtitle">
          A practical 2-day journey from AI fundamentals to building an intelligent, interactive web application
          using <strong>Google Antigravity</strong> and <strong>Agentic AI</strong> workflows.
        </p>

        <div className="hero-instructor-card">
          <div className="avatar-circle">TK</div>
          <div className="instructor-meta">
            <div className="instructor-name">Instructor: Toshit Kumar</div>
            <div className="instructor-sub">Google Antigravity • HTML/CSS/JS • Agentic Development</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          <button className="action-btn" onClick={() => setActiveSection('prompts')}>
            ⚡ View Master Prompts
          </button>
          <button className="action-btn" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} onClick={() => setActiveSection('preview')}>
            🚀 Test Live Capstone App
          </button>
          <button className="action-btn" style={{ background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)', border: '1px solid rgba(16, 185, 129, 0.4)' }} onClick={() => setActiveSection('deploy')}>
            🐙 Deploy to GitHub
          </button>
        </div>

        <div className="hero-metrics">
          <div className="metric-card">
            <div className="metric-val">2</div>
            <div className="metric-label">Intensive Days</div>
          </div>
          <div className="metric-card">
            <div className="metric-val">70%</div>
            <div className="metric-label">Hands-on Practical</div>
          </div>
          <div className="metric-card">
            <div className="metric-val">2</div>
            <div className="metric-label">Live Web Projects</div>
          </div>
          <div className="metric-card">
            <div className="metric-val">100</div>
            <div className="metric-label">Rubric Marks</div>
          </div>
        </div>
      </div>
    </section>
  );
}
