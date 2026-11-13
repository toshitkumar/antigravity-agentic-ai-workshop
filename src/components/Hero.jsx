import React from 'react';
import { RocketIcon, CalendarIcon, SparklesIcon } from './Icons';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="hero" style={{ padding: '60px 20px 40px' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* MINIMAL BRAND PILL */}
        <div className="hero-pill" style={{ marginBottom: '20px' }}>
          <SparklesIcon size={14} color="var(--accent-blue)" />
          <span>AGENTVERSE AI</span>
          <span>•</span>
          <span>By Toshit Kumar</span>
        </div>

        {/* ULTRA-MINIMAL DISPLAY TITLE */}
        <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: '18px' }}>
          Build with <br />
          <span>AI Agents.</span>
        </h1>

        {/* CRISP SUBHEAD */}
        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.5 }}>
          The next-generation hands-on learning portal for <strong>Google Antigravity</strong> and <strong>Agentic AI</strong>.
        </p>

        {/* INSTRUCTOR CHIP */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '6px 16px', borderRadius: 'var(--radius-full)', marginBottom: '32px', boxShadow: 'var(--shadow-sm)' }}>
          <div className="avatar-circle" style={{ width: '28px', height: '28px', fontSize: '0.78rem' }}>TK</div>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>Instructor: Toshit Kumar</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>• Kumartoshit82@gmail.com</span>
        </div>

        {/* ACTION BUTTONS */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          <button className="action-btn" onClick={() => scrollTo('demo-suite')} style={{ padding: '14px 30px', fontSize: '1rem' }}>
            <RocketIcon size={18} color="#ffffff" />
            <span>Try Interactive Demos</span>
          </button>
          <button
            className="action-btn"
            style={{ background: 'var(--bg-card)', border: '1.5px solid var(--border-color)', color: 'var(--text-primary)', padding: '14px 26px', fontSize: '1rem' }}
            onClick={() => scrollTo('schedule')}
          >
            <CalendarIcon size={18} color="var(--accent-blue)" />
            <span>2-Day Curriculum</span>
          </button>
        </div>

        {/* MINIMAL 3-METRIC STRIP */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '28px' }}>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-blue)', lineHeight: 1 }}>2 Days</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>Hands-on Learning</div>
          </div>
          <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '32px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-purple)', lineHeight: 1 }}>4 Live Demos</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>Interactive Lab Suite</div>
          </div>
          <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '32px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-emerald)', lineHeight: 1 }}>100 Marks</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>Hackathon Project</div>
          </div>
        </div>
      </div>
    </section>
  );
}
