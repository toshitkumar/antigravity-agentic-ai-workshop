import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgenticConcepts from './components/AgenticConcepts';
import AgentSimulator from './components/AgentSimulator';
import PromptBuilder from './components/PromptBuilder';
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
        {/* 01. Landing Hero with 5-Stage Mastery Roadmap */}
        <Hero />

        {/* 02. Introduction to Agentic AI Architecture & 5 Pillars */}
        <AgenticConcepts />

        {/* 03. Interactive AI Lab 01: Agent Workflow Simulator */}
        <AgentSimulator />

        {/* 04. Interactive AI Lab 02: Visual Prompt Engineering Playground */}
        <PromptBuilder />

        {/* 05. Two-Day Learning Modules */}
        <ScheduleView />

        {/* 06. Master Development Prompts (Antigravity Capstone & Portfolio) */}
        <PromptHub />

        {/* 07. Interactive AI Lab 03: Live Student Innovation Hub Preview */}
        <LiveHubPreview />

        {/* 08. Interactive AI Lab 04: AI Debugging Sandbox ("Find the Bug") */}
        <BugHunter />

        {/* 09. Interactive AI Lab 05: Final AI Hackathon 100-Mark Rubric */}
        <GraderRubric />

        {/* 10. Launch & Deployment on GitHub */}
        <GitHubDeployGuide />

        {/* 11. Official Google Antigravity Resources & Codelabs */}
        <Resources />
      </main>

      {/* 12. Footer with Toshit Kumar Branding */}
      <Footer />
    </div>
  );
}
