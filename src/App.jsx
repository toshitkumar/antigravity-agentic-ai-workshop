import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgentChat from './components/AgentChat';
import DemoSuite from './components/DemoSuite';
import AgentSimulator from './components/AgentSimulator';
import PromptBuilder from './components/PromptBuilder';
import ScheduleView from './components/ScheduleView';
import PromptHub from './components/PromptHub';
import GraderRubric from './components/GraderRubric';
import GitHubDeployGuide from './components/GitHubDeployGuide';
import Resources from './components/Resources';
import Footer from './components/Footer';

export default function App() {
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
        {/* 01. Minimalist Landing Hero */}
        <Hero />

        {/* 02. 🤖 LIVE AGENT DEMO — Talk to the Agent */}
        <AgentChat />

        {/* 03. The Best Live Demo Suite (4 Interactive Demos) */}
        <DemoSuite />

        {/* 03. Agent Workflow Simulator */}
        <AgentSimulator />

        {/* 04. Visual Prompt Engineering Playground */}
        <PromptBuilder />

        {/* 05. 2-Day Workshop Curriculum */}
        <ScheduleView />

        {/* 06. Master Development Prompts (Capstone & Portfolio) */}
        <PromptHub />

        {/* 07. Final Hackathon 100-Mark Rubric */}
        <GraderRubric />

        {/* 08. GitHub Launch Guide */}
        <GitHubDeployGuide />

        {/* 09. Official Resources */}
        <Resources />
      </main>

      {/* 10. Minimalist Footer */}
      <Footer />
    </div>
  );
}
