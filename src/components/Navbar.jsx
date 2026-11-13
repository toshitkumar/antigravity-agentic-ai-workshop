import React from 'react';

export default function Navbar({ activeSection, setActiveSection, theme, toggleTheme }) {
  const navItems = [
    { id: 'schedule', label: '📅 2-Day Agenda' },
    { id: 'prompts', label: '⚡ Prompt Hub' },
    { id: 'preview', label: '🚀 Live Capstone' },
    { id: 'bughunter', label: '🐛 Bug Hunter' },
    { id: 'grader', label: '📊 100-Mark Rubric' },
    { id: 'deploy', label: '🐙 GitHub Deploy' },
  ];

  return (
    <header className="navbar">
      <div className="container nav-wrapper">
        <a href="#hero" className="brand" onClick={() => setActiveSection('hero')}>
          <div className="avatar-circle" style={{ width: '32px', height: '32px', fontSize: '0.8rem' }}>AI</div>
          <span>Antigravity Workshop</span>
          <span className="brand-badge">2-Day</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
