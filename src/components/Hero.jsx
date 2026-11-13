import React from 'react';
import { ZapIcon, RocketIcon, GithubIcon, SparklesIcon } from './Icons';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-pill">
          <SparklesIcon size={14} color="var(--accent-blue)" />
          <span>Student Edition</span>
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

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
          <button className="action-btn" onClick={() => scrollTo('prompts')}>
            <ZapIcon size={18} color="#ffffff" />
            <span>View Master Prompts</span>
          </button>
          <button
            className="action-btn"
            style={{ background: 'var(--bg-card)', border: '1.5px solid var(--border-color)', color: 'var(--text-primary)' }}
            onClick={() => scrollTo('preview')}
          >
            <RocketIcon size={18} color="var(--accent-blue)" />
            <span>Test Live Capstone App</span>
          </button>
          <button
            className="action-btn"
            style={{ background: 'rgba(5, 150, 105, 0.1)', color: 'var(--accent-emerald)', border: '1.5px solid rgba(5, 150, 105, 0.3)' }}
            onClick={() => scrollTo('deploy')}
          >
            <GithubIcon size={18} color="var(--accent-emerald)" />
            <span>Deploy to GitHub</span>
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
