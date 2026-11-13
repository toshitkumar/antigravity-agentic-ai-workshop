import React, { useState, useEffect } from 'react';
import {
  CalendarIcon,
  ZapIcon,
  RocketIcon,
  BugIcon,
  ChartIcon,
  GithubIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  CloseIcon,
  ArrowRightIcon
} from './Icons';

export default function Navbar({ theme, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'schedule', label: '2-Day Agenda', Icon: CalendarIcon },
    { id: 'prompts', label: 'Prompt Hub', Icon: ZapIcon },
    { id: 'preview', label: 'Live Capstone', Icon: RocketIcon },
    { id: 'bughunter', label: 'Bug Hunter', Icon: BugIcon },
    { id: 'grader', label: '100-Mark Rubric', Icon: ChartIcon },
    { id: 'deploy', label: 'GitHub Deploy', Icon: GithubIcon },
  ];

  const scrollToSection = (id) => {
    setDrawerOpen(false);
    setActiveSection(id);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ScrollSpy: highlight nav item as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = ['hero', ...navItems.map((item) => item.id)];

      for (let i = sections.length - 1; i >= 0; i--) {
        const secId = sections[i];
        if (secId === 'hero') {
          if (window.scrollY < 250) {
            setActiveSection('hero');
            break;
          }
        } else {
          const el = document.getElementById(secId);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="container nav-wrapper">
          <a
            href="#hero"
            className="brand"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            <div className="avatar-circle" style={{ width: '36px', height: '36px', fontSize: '0.85rem' }}>AI</div>
            <span>Antigravity Workshop</span>
            <span className="brand-badge">2-Day</span>
          </a>

          {/* DESKTOP NAV LINKS */}
          <ul className="nav-links">
            {navItems.map((item) => {
              const { Icon } = item;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={`nav-btn ${isActive ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <Icon size={16} color={isActive ? 'var(--accent-blue)' : 'currentColor'} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? <MoonIcon size={18} color="var(--accent-blue)" /> : <SunIcon size={18} color="#f59e0b" />}
            </button>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              className="hamburger-btn"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle navigation menu"
            >
              {drawerOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        {navItems.map((item) => {
          const { Icon } = item;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon size={18} color={isActive ? 'var(--accent-blue)' : 'currentColor'} />
                <span>{item.label}</span>
              </div>
              <ArrowRightIcon size={16} />
            </button>
          );
        })}
        <button
          className="mobile-nav-btn"
          style={{ background: 'var(--gradient-accent-soft)', color: 'var(--accent-blue)', marginTop: '8px' }}
          onClick={() => {
            toggleTheme();
            setDrawerOpen(false);
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
            <span>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</span>
          </div>
          <ArrowRightIcon size={16} />
        </button>
      </div>
    </>
  );
}
