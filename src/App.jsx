import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScheduleView from './components/ScheduleView';
import PromptHub from './components/PromptHub';
import LiveHubPreview from './components/LiveHubPreview';
import BugHunter from './components/BugHunter';
import GraderRubric from './components/GraderRubric';
import GitHubDeployGuide from './components/GitHubDeployGuide';
import Resources from './components/Resources';
import Footer from './components/Footer';

export default function App() {
  // Default to light mode as requested
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('workshop_theme') || 'light';
  });

  const [activeSection, setActiveSection] = useState('all');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('workshop_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-layout">
      {/* Dynamic Animated Glowing Meshes */}
      <div className="ambient-glow" />
      <div className="ambient-glow-secondary" />

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero setActiveSection={setActiveSection} />

        {(activeSection === 'all' || activeSection === 'schedule') && (
          <div id="schedule">
            <ScheduleView />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'prompts') && (
          <div id="prompts">
            <PromptHub />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'preview') && (
          <div id="preview">
            <LiveHubPreview />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'bughunter') && (
          <div id="bughunter">
            <BugHunter />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'grader') && (
          <div id="grader">
            <GraderRubric />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'deploy') && (
          <div id="deploy">
            <GitHubDeployGuide />
          </div>
        )}

        <Resources />
      </main>

      <Footer />
    </div>
  );
}
