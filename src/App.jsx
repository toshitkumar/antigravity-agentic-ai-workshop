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
  // Default to light theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('workshop_theme') || 'light';
  });

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
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <ScheduleView />
        <PromptHub />
        <LiveHubPreview />
        <BugHunter />
        <GraderRubric />
        <GitHubDeployGuide />
        <Resources />
      </main>

      <Footer />
    </div>
  );
}
