import React, { useState } from 'react';
import { CalendarIcon, SparklesIcon, RocketIcon } from './Icons';

export default function ScheduleView() {
  const [activeDay, setActiveDay] = useState(1);

  const day1Sessions = [
    { time: '09:30–10:00', session: 'Welcome & Introduction', activity: 'AI Icebreaker Challenge: AI or Agent?' },
    { time: '10:00–10:45', session: 'AI Fundamentals', activity: 'AI vs Generative AI vs Agentic AI' },
    { time: '10:45–11:30', session: 'Understanding AI Agents', activity: 'Paper Activity: Planner, Executor & Tester Pods' },
    { time: '11:30–11:45', session: 'Tea & Networking Break', activity: 'Informal discussions & team sync' },
    { time: '11:45–12:30', session: 'Google Antigravity Introduction', activity: 'Workspace, agents, terminal & artifacts' },
    { time: '12:30–01:15', session: 'Prompt Engineering for Devs', activity: 'Mastering the 7-Part Development Prompt' },
    { time: '01:15–02:00', session: 'Lunch Break', activity: 'Recharge & setup laptops' },
    { time: '02:00–03:00', session: 'Website Development Basics', activity: 'HTML structure, CSS styling, JavaScript DOM' },
    { time: '03:00–04:00', session: 'Live Website Building', activity: 'Hands-on: Student Portfolio Website' },
    { time: '04:00–04:15', session: 'Short Refreshment Break', activity: 'Quick stretch & debugging assistance' },
    { time: '04:15–05:00', session: 'Interactive Functionality', activity: 'Buttons, forms, theme switcher & validation' },
    { time: '05:00–05:30', session: 'Day 1 Challenge & Wrap-up', activity: 'Student site showcase & Day 1 review' },
  ];

  const day2Sessions = [
    { time: '09:30–10:00', session: 'Day 1 Recap & Showcase', activity: 'Reviewing student portfolio sites' },
    { time: '10:00–10:45', session: 'Advanced Web Design', activity: 'CSS Flexbox, CSS Grid & Responsive UI' },
    { time: '10:45–11:30', session: 'JavaScript Functionality Deep Dive', activity: 'Event Listeners, Arrays & localStorage' },
    { time: '11:30–11:45', session: 'Morning Break', activity: 'Setup Capstone requirements' },
    { time: '11:45–12:30', session: 'Advanced Features Lab', activity: 'Smart Forms, Quiz engine & Search filters' },
    { time: '12:30–01:15', session: 'Agentic Workflows & Multi-Agent Swarms', activity: 'Planner, UI/UX, Dev & Tester Agents' },
    { time: '01:15–02:00', session: 'Lunch Break', activity: 'Team strategy' },
    { time: '02:00–03:00', session: 'Capstone Project Development', activity: 'Building the Student Innovation Hub' },
    { time: '03:00–03:45', session: 'Testing & Self-Healing Debugging', activity: 'Activity 3: Find the Bug Challenge' },
    { time: '03:45–04:00', session: 'Final Polish Break', activity: 'Preparing deployment and demo slides' },
    { time: '04:00–04:45', session: 'Deployment & Presentation', activity: 'Publishing on GitHub Pages & live demos' },
    { time: '04:45–05:30', session: 'Final Hackathon Competition', activity: '100-Mark Evaluation & Certificate Ceremony' },
  ];

  const currentList = activeDay === 1 ? day1Sessions : day2Sessions;

  return (
    <section className="container section-anchor" id="schedule" style={{ padding: '60px 20px' }}>
      <div className="section-header">
        <span className="section-tag">Interactive Timeline</span>
        <h2 className="section-title">2-Day Workshop Roadmap</h2>
        <p className="section-desc">
          Structured 70% practical and 30% conceptual schedule. Click between Day 1 and Day 2 to inspect session goals.
        </p>
      </div>

      <div className="day-tabs">
        <button
          className={`day-tab-btn ${activeDay === 1 ? 'active' : ''}`}
          onClick={() => setActiveDay(1)}
        >
          <div>
            <strong>DAY 01: Understand & Build</strong>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Fundamentals, AI Agents & First Website</div>
          </div>
          <SparklesIcon size={22} color="var(--accent-blue)" />
        </button>

        <button
          className={`day-tab-btn ${activeDay === 2 ? 'active' : ''}`}
          onClick={() => setActiveDay(2)}
        >
          <div>
            <strong>DAY 02: Automate & Deploy</strong>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Advanced Interactions, Testing & Capstone</div>
          </div>
          <RocketIcon size={22} color="var(--accent-purple)" />
        </button>
      </div>

      <div className="timeline-list">
        {currentList.map((item, idx) => (
          <div key={idx} className="timeline-card">
            <span className="time-badge">
              <CalendarIcon size={14} color="var(--accent-blue)" />
              {item.time}
            </span>
            <span className="session-name">{item.session}</span>
            <span className="activity-badge">{item.activity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
