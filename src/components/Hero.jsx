import React from 'react';
import { ZapIcon, RocketIcon, GithubIcon, SparklesIcon } from './Icons';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const journeySteps = [
    { num: '01', title: 'UNDERSTAND AI', desc: 'AI, ML & Generative Models' },
    { num: '02', title: 'THINK AGENTIC', desc: 'Planning, Tools & Reasoning' },
    { num: '03', title: 'MASTER ANTIGRAVITY', desc: 'Agent Manager & Workspaces' },
    { num: '04', title: 'BUILD APPLICATIONS', desc: 'Portfolio & Capstone Hub' },
    { num: '05', title: 'TEST & INNOVATE', desc: 'Self-Healing & Hackathon' },
  ];

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-pill">
          <SparklesIcon size={14} color="var(--accent-blue)" />
          <span>AGENTVERSE AI</span>
          <span>•</span>
          <span>Next-Gen Agentic AI Learning & Training Portal</span>
        </div>

        <h1 className="hero-title">
          The Future of Building <br />
          <span>with AI Agents</span>
        </h1>

        <p className="hero-subtitle">
          Learn Agentic AI. Master Google Antigravity. Build the Future. <br />
          A complete hands-on journey from AI fundamentals to autonomous web development, guided by instructor <strong>Toshit Kumar</strong>.
        </p>

        <div className="hero-instructor-card">
          <div className="avatar-circle">TK</div>
          <div className="instructor-meta">
            <div className="instructor-name">Instructor & Creator: Toshit Kumar</div>
            <div className="instructor-sub">Google Antigravity Specialist • Full-Stack Agentic AI Architect</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          <button className="action-btn" onClick={() => scrollTo('simulator')}>
            <RocketIcon size={18} color="#ffffff" />
            <span>Launch Agent Simulator</span>
          </button>
          <button
            className="action-btn"
            style={{ background: 'var(--bg-card)', border: '1.5px solid var(--border-color)', color: 'var(--text-primary)' }}
            onClick={() => scrollTo('promptbuilder')}
          >
            <ZapIcon size={18} color="var(--accent-blue)" />
            <span>Open Prompt Playground</span>
          </button>
          <button
            className="action-btn"
            style={{ background: 'rgba(5, 150, 105, 0.1)', color: 'var(--accent-emerald)', border: '1.5px solid rgba(5, 150, 105, 0.3)' }}
            onClick={() => scrollTo('preview')}
          >
            <SparklesIcon size={18} color="var(--accent-emerald)" />
            <span>Test Capstone App</span>
          </button>
        </div>

        {/* 5-STEP LEARNING JOURNEY BAR */}
        <div style={{ marginBottom: '45px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-blue)', letterSpacing: '1px', marginBottom: '14px' }}>
            5-Stage Student Mastery Roadmap
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px 16px',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-purple)' }}>
                  {step.num}
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-metrics">
          <div className="metric-card">
            <div className="metric-val">2</div>
            <div className="metric-label">Intensive Days</div>
          </div>
          <div className="metric-card">
            <div className="metric-val">5</div>
            <div className="metric-label">Interactive AI Labs</div>
          </div>
          <div className="metric-card">
            <div className="metric-val">2</div>
            <div className="metric-label">Full Web Applications</div>
          </div>
          <div className="metric-card">
            <div className="metric-val">100</div>
            <div className="metric-label">Hackathon Rubric Marks</div>
          </div>
        </div>
      </div>
    </section>
  );
}
