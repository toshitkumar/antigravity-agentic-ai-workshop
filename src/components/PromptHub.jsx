import React, { useState } from 'react';

export default function PromptHub() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const masterPrompt = `### PROJECT: STUDENT INNOVATION HUB (Cap-Stone Interactive Web App)

Act as a Senior Full-Stack Web Developer and UI/UX Architect. 

#### 1. ROLE & OBJECTIVE
Build a responsive, modern, multi-page client-side web application titled "Student Innovation Hub" using semantic HTML5, modern CSS3 (Flexbox/CSS Grid, CSS custom properties, smooth transitions), and modular vanilla JavaScript (ES6+). Do not use external CSS frameworks so we understand foundational DOM, CSS, and JS mechanics.

#### 2. TARGET AUDIENCE
High school and university students, peer collaborators, hackathon participants, and academic mentors looking for an intuitive platform to track learning, explore student courses/projects, and manage academic tasks.

#### 3. CORE ARCHITECTURE & FILE STRUCTURE
Create a clean directory layout:
- index.html (Main Application Entrypoint / SPA view switcher)
- css/styles.css (Design system, CSS variables for light/dark themes, responsive layout, animations)
- js/
  - app.js (App initialization, router/tab switcher, notification toasts)
  - storage.js (localStorage helper to persist user profile, tasks, quiz progress, and theme state)
  - quiz.js (Interactive 5-question AI/Tech Quiz engine with instant scoring and reset)
  - tasks.js (Task manager: Create, Read, Update/Toggle Complete, Delete, with category filters)
  - courses.js (Course & project catalog with real-time keyword search and category tags)
- assets/ (Placeholder avatars and SVG icons)

#### 4. PAGE SECTIONS & FUNCTIONAL REQUIREMENTS
1. Global Header & Navigation: Brand logo, Nav links, Dark/Light Theme toggle, Student Profile badge.
2. Hero & Welcome Section: Headline, metric stats counters (Projects, Skills, Completed Tasks).
3. Student Dashboard: Progress bar representing task completion percentage, recent activity feed.
4. Course Explorer: Grid of 6 courses with live search input and filter pills.
5. Interactive Quiz Engine: 5 questions on AI vs Agents vs Web Dev, live scoring, retry option.
6. Task Manager: Add task with priority, checkbox toggle complete, delete task, filter by status, full localStorage persistence.
7. Feedback Form: Validation and floating toast notification on submit.
8. Student Profile: Editable bio and claimed badges.

#### 5. DESIGN & ACCESSIBILITY
- CSS Variables for Light Mode & Dark Mode.
- Responsive breakpoints: Mobile (<640px), Tablet (641px–1024px), Desktop (>1024px).
- Accessible keyboard focus states, WCAG AA contrast, semantic ARIA attributes.

#### 6. EXECUTION INSTRUCTIONS
1. Step 1: Explain proposed structure and localStorage schema.
2. Step 2: Implement full functional code.
3. Step 3: Verify all buttons, forms, and storage in the browser.`;

  const portfolioPrompt = `### PROJECT: MODERN STUDENT PORTFOLIO WEBSITE (Day 1 Warm-up)

Act as a Frontend Web Developer. Build a clean, single-page responsive student portfolio using clean HTML5, modern CSS3, and lightweight JavaScript.

#### 1. OBJECTIVE & AUDIENCE
Showcase a student developer's biography, technical skills, academic projects, and contact channels to potential internship recruiters and peers.

#### 2. REQUIRED SECTIONS
1. Header / Navbar: Sticky header with logo, navigation links, and mobile menu toggle.
2. Hero Section: Student photo placeholder, greeting, dynamic subtitle ("Aspiring AI & Web Developer"), and CTA buttons.
3. About Me: Brief biography, education background, interests, and quick statistics.
4. Skills Matrix: Categorized skill pills (HTML, CSS, JavaScript, Google Antigravity, LLM Prompting).
5. Projects Gallery: 3 interactive project cards with badges, thumbnail placeholders, concise descriptions, and demo links.
6. Interactive Contact Form: Inputs for Name, Email, Subject, and Message with instant validation and a confirmation toast.
7. Footer: Copyright, social media links, and a smooth scroll-to-top button.

#### 3. TECHNICAL REQUIREMENTS
- Semantic HTML tags (<header>, <nav>, <main>, <section>, <footer>).
- CSS Flexbox & CSS Grid for layouts. Responsive on mobile, tablet, and widescreen.
- Dark/Light mode toggle stored in browser localStorage.
- No broken links or placeholder scripts.`;

  const quickPrompts = [
    { title: 'UI Improvement', prompt: 'Improve the visual design, typography, micro-interactions, and contrast without breaking any existing functionality.' },
    { title: 'Mobile Optimization', prompt: 'Make the website fully responsive across mobile (<640px), tablet, and desktop, including a mobile hamburger drawer.' },
    { title: 'Self-Healing Debugging', prompt: 'Inspect the entire project codebase, identify any broken event listeners, console errors, or unhandled null checks, and provide the fix.' },
    { title: 'Performance Tuning', prompt: 'Optimize image loading, reduce CSS layout recalculations, and streamline JavaScript DOM mutations.' },
    { title: 'Accessibility (a11y)', prompt: 'Audit the markup for WCAG AA compliance, semantic tags, keyboard focus rings, and proper ARIA labels.' },
    { title: 'Code Review & Security', prompt: 'Perform a comprehensive code review focusing on input sanitization, XSS prevention in innerHTML, and clean modular code separation.' },
  ];

  return (
    <section className="container" style={{ padding: '60px 24px' }}>
      <div className="section-header">
        <span className="section-tag">Prompt Engineering Center</span>
        <h2 className="section-title">The 7-Part Master Prompt Library</h2>
        <p className="section-desc">
          Ready-to-copy prompts engineered specifically for Google Antigravity. Students can paste these directly into the agent.
        </p>
      </div>

      {/* 7-PART FRAMEWORK BREAKDOWN */}
      <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>📐 The 7-Part Prompt Architecture</h3>
      <div className="prompt-framework-grid" style={{ marginBottom: '40px' }}>
        {[
          { num: '01', title: 'Role', desc: 'Who the agent acts as (e.g. Senior Frontend Engineer)' },
          { num: '02', title: 'Goal', desc: 'The exact concrete application to build' },
          { num: '03', title: 'Audience', desc: 'Who is going to use this product' },
          { num: '04', title: 'Technology', desc: 'Tech stack, constraints & forbidden libraries' },
          { num: '05', title: 'Features', desc: 'Explicit functionality, data schema & state flows' },
          { num: '06', title: 'Design', desc: 'Color palette, responsive rules & themes' },
          { num: '07', title: 'Testing', desc: 'How to verify DOM events & error handling' },
        ].map((f, i) => (
          <div key={i} className="framework-card">
            <span className="framework-num">{f.num}</span>
            <div className="framework-title">{f.title}</div>
            <div className="framework-desc">{f.desc}</div>
          </div>
        ))}
      </div>

      {/* MASTER PROMPT */}
      <div className="prompt-grid">
        <div className="prompt-card">
          <div className="prompt-header">
            <div className="prompt-title-group">
              <span style={{ fontSize: '1.3rem' }}>🏆</span>
              <div>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  Day 2 Capstone: Student Innovation Hub
                </strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Complete 6-module educational platform</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="prompt-badge">Master Prompt</span>
              <button
                className={`copy-btn ${copiedKey === 'master' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(masterPrompt, 'master')}
              >
                {copiedKey === 'master' ? '✓ Copied!' : '📋 Copy Prompt'}
              </button>
            </div>
          </div>
          <div className="code-container">{masterPrompt}</div>
        </div>

        {/* DAY 1 PORTFOLIO PROMPT */}
        <div className="prompt-card">
          <div className="prompt-header">
            <div className="prompt-title-group">
              <span style={{ fontSize: '1.3rem' }}>🌱</span>
              <div>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  Day 1 Warm-up: Student Portfolio Website
                </strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Foundational responsive portfolio</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="prompt-badge" style={{ background: 'rgba(59, 130, 246, 0.15)', color: 'var(--accent-blue)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>Day 1 Challenge</span>
              <button
                className={`copy-btn ${copiedKey === 'portfolio' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(portfolioPrompt, 'portfolio')}
              >
                {copiedKey === 'portfolio' ? '✓ Copied!' : '📋 Copy Prompt'}
              </button>
            </div>
          </div>
          <div className="code-container">{portfolioPrompt}</div>
        </div>
      </div>

      {/* QUICK PROMPTS FOR REFINEMENT */}
      <h3 style={{ fontSize: '1.25rem', margin: '40px 0 16px' }}>⚡ 6 Refinement & Extension Prompts</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        {quickPrompts.map((qp, i) => (
          <div key={i} className="framework-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <strong style={{ color: 'var(--accent-cyan)' }}>{qp.title}</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '6px', fontStyle: 'italic' }}>
                "{qp.prompt}"
              </p>
            </div>
            <button
              className="copy-btn"
              style={{ marginTop: '14px', alignSelf: 'flex-start', padding: '6px 12px', fontSize: '0.78rem' }}
              onClick={() => copyToClipboard(qp.prompt, `qp-${i}`)}
            >
              {copiedKey === `qp-${i}` ? '✓ Copied!' : 'Copy Snippet'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
