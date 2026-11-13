import React, { useState } from 'react';

export default function Navbar({ activeSection, setActiveSection, theme, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { id: 'schedule', label: '📅 2-Day Agenda' },
    { id: 'prompts', label: '⚡ Prompt Hub' },
    { id: 'preview', label: '🚀 Live Capstone' },
    { id: 'bughunter', label: '🐛 Bug Hunter' },
    { id: 'grader', label: '📊 100-Mark Rubric' },
    { id: 'deploy', label: '🐙 GitHub Deploy' },
  ];

  const handleSelectNav = (id) => {
    setActiveSection(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="container nav-wrapper">
          <a
            href="#hero"
            className="brand"
            onClick={(e) => {
              e.preventDefault();
              handleSelectNav('all');
            }}
          >
            <div className="avatar-circle" style={{ width: '36px', height: '36px', fontSize: '0.85rem' }}>AI</div>
            <span>Antigravity Workshop</span>
            <span className="brand-badge">2-Day</span>
          </a>

          {/* DESKTOP NAV LINKS */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleSelectNav(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              className="hamburger-btn"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle navigation menu"
            >
              {drawerOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleSelectNav(item.id)}
          >
            <span>{item.label}</span>
            <span>→</span>
          </button>
        ))}
        <button
          className="mobile-nav-btn"
          style={{ background: 'var(--gradient-accent-soft)', color: 'var(--accent-blue)', marginTop: '8px' }}
          onClick={() => {
            toggleTheme();
            setDrawerOpen(false);
          }}
        >
          <span>{theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}</span>
        </button>
      </div>
    </>
  );
}
