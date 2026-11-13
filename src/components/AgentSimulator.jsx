import React, { useState } from 'react';
import { RocketIcon, ZapIcon, CheckIcon, SparklesIcon } from './Icons';

export default function AgentSimulator() {
  const [goal, setGoal] = useState('Build a responsive event registration portal with form validation and dark mode');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const simulationSteps = [
    {
      stage: '1. USER GOAL',
      title: 'Analyze Goal & Constraints',
      tool: 'Agent Cognitive Kernel',
      action: 'Parsing user prompt for tech stack (HTML/CSS/JS), audience, design requirements, and state persistence rules.',
      output: 'Requirements validated: SPA layout, client-side validation, localStorage persistence, WCAG AA compliance.',
    },
    {
      stage: '2. REASONING & PLANNING',
      title: 'Decompose into Autonomous Subtasks',
      tool: 'Task Planner Subagent',
      action: 'Generating execution DAG: [1] Setup semantic DOM layout, [2] Design CSS variables system, [3] Implement event listeners, [4] Verify in headless browser.',
      output: 'Development Plan generated & saved to workspace artifact plan.md.',
    },
    {
      stage: '3. TOOL CALLING: WORKSPACE & EDITOR',
      title: 'Scaffold Directory & Write Modular Code',
      tool: 'write_file & edit_file',
      action: 'Writing index.html, styles.css, app.js, and storage.js with zero placeholder stubs.',
      output: 'Created 4 source files. 100% syntactically valid ES6+ JavaScript.',
    },
    {
      stage: '4. TOOL CALLING: TERMINAL & BUILD',
      title: 'Run Dependency Audit & Linter',
      tool: 'run_command (powershell)',
      action: 'Executing npm run build and inspecting exit code.',
      output: 'Build succeeded with exit code 0 in 480ms. Zero compilation errors.',
    },
    {
      stage: '5. OBSERVATION & VERIFICATION',
      title: 'Headless Browser & Console Inspection',
      tool: 'browser_sandbox & DOM Inspector',
      action: 'Simulating form submission with invalid email, verifying toast notification, toggling theme switch.',
      output: 'All 6 test cases passed. LocalStorage key event_reg_data verified intact after refresh.',
    },
    {
      stage: '6. FINAL DELIVERABLE',
      title: 'Deliver Validated Application to User',
      tool: 'Artifact Presenter',
      action: 'Presenting live preview URL and code review summary for human approval.',
      output: 'Application ready for deployment! Student project verified.',
    },
  ];

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < simulationSteps.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1800);
  };

  const resetSimulation = () => {
    setCurrentStep(0);
    setIsRunning(false);
  };

  return (
    <section className="container section-anchor" id="simulator" style={{ padding: '60px 20px' }}>
      <div className="section-header">
        <span className="section-tag">Interactive AI Lab 01</span>
        <h2 className="section-title">Agent Workflow Simulator</h2>
        <p className="section-desc">
          Experience how an Agentic AI system decomposes a high-level goal into autonomous reasoning, tool execution,
          observation loops, and verification in Google Antigravity.
        </p>
      </div>

      <div className="bug-sandbox">
        {/* LEFT: CONTROLLER */}
        <div className="bug-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '14px', color: 'var(--text-primary)' }}>
              🎯 Define User Goal
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Type a goal or pick from quick presets to watch the AI Agent execute autonomous planning and tool calling.
            </p>

            <textarea
              className="custom-input"
              rows="3"
              style={{ width: '100%', resize: 'none', marginBottom: '14px' }}
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              disabled={isRunning}
            />

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <button
                className="day-tab-btn"
                style={{ padding: '6px 12px', fontSize: '0.8rem', flex: 'none' }}
                onClick={() => setGoal('Build a responsive event registration portal with form validation and dark mode')}
                disabled={isRunning}
              >
                Event Portal
              </button>
              <button
                className="day-tab-btn"
                style={{ padding: '6px 12px', fontSize: '0.8rem', flex: 'none' }}
                onClick={() => setGoal('Create an interactive AI quiz application with instant scoring and retry option')}
                disabled={isRunning}
              >
                AI Quiz Engine
              </button>
              <button
                className="day-tab-btn"
                style={{ padding: '6px 12px', fontSize: '0.8rem', flex: 'none' }}
                onClick={() => setGoal('Develop a student task management dashboard with localStorage and priority filter')}
                disabled={isRunning}
              >
                Task Dashboard
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              className="action-btn"
              style={{ flex: 1 }}
              onClick={runSimulation}
              disabled={isRunning}
            >
              <RocketIcon size={18} color="#ffffff" />
              <span>{isRunning ? 'Agent Executing...' : 'Simulate Agent Workflow'}</span>
            </button>
            <button
              className="action-btn"
              style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1.5px solid var(--border-color)', padding: '12px 18px' }}
              onClick={resetSimulation}
              disabled={isRunning}
            >
              Reset
            </button>
          </div>
        </div>

        {/* RIGHT: LIVE AGENT EXECUTION TERMINAL */}
        <div className="bug-col" style={{ background: 'var(--bg-code)', color: '#f8fafc', border: '1.5px solid rgba(37,99,235,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="dot dot-green" style={{ animation: isRunning ? 'pulseBadge 1.2s infinite' : 'none' }}></span>
              <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#93c5fd' }}>
                ANTIGRAVITY AGENT MONITOR
              </strong>
            </div>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              Step {currentStep + 1} of {simulationSteps.length}
            </span>
          </div>

          {/* ACTIVE STEP DETAILS */}
          <div style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 800, padding: '3px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(37,99,235,0.25)', color: '#60a5fa', marginBottom: '10px' }}>
              {simulationSteps[currentStep].stage}
            </div>
            <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              {simulationSteps[currentStep].title}
            </h4>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#38bdf8', marginBottom: '14px' }}>
              Tool Invoked: <code>{simulationSteps[currentStep].tool}</code>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '14px' }}>
              {simulationSteps[currentStep].action}
            </p>

            <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#4ade80' }}>
              ✓ Output: {simulationSteps[currentStep].output}
            </div>
          </div>

          {/* PROGRESS TIMELINE BAR */}
          <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              <span>Autonomous Execution Progress</span>
              <span>{Math.round(((currentStep + 1) / simulationSteps.length) * 100)}%</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${((currentStep + 1) / simulationSteps.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #3b82f6, #10b981)',
                  transition: 'width 0.4s ease',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
