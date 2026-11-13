import React, { useState, useEffect } from 'react';
import { RocketIcon, ZapIcon, BugIcon, CheckIcon, SearchIcon, CopyIcon, SparklesIcon } from './Icons';

export default function DemoSuite() {
  const [activeDemo, setActiveDemo] = useState('builder');

  // --- DEMO 1: AUTONOMOUS WEB BUILDER ---
  const [selectedPreset, setSelectedPreset] = useState('pomodoro');
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildLogs, setBuildLogs] = useState([]);

  // Demo 1 App State
  const [pomoTime, setPomoTime] = useState(1500); // 25 mins
  const [pomoRunning, setPomoRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (pomoRunning && pomoTime > 0) {
      interval = setInterval(() => setPomoTime((t) => t - 1), 1000);
    } else if (pomoTime === 0) {
      setPomoRunning(false);
    }
    return () => clearInterval(interval);
  }, [pomoRunning, pomoTime]);

  const formatPomoTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const triggerBuild = (preset) => {
    setSelectedPreset(preset);
    setIsBuilding(true);
    setBuildLogs([
      '🔍 Agent parsing prompt requirements...',
      '📐 Generating component architecture...',
      '⚡ Writing HTML & CSS styles...',
      '🚀 Injecting JavaScript DOM event listeners...',
      '✅ Build succeeded in 240ms! Ready in preview container.',
    ]);
    setTimeout(() => {
      setIsBuilding(false);
    }, 900);
  };

  // --- DEMO 2: AI KNOWLEDGE QUIZ ---
  const quizQuestions = [
    {
      q: 'How does an Agentic AI system differ from a standard Chatbot?',
      opts: [
        'Chatbots only speak English',
        'Agents have cognitive planning, tool-calling capabilities, and self-verification loops',
        'Agents cannot read user files',
        'There is no technical difference',
      ],
      ans: 1,
      expl: 'Agents autonomously break down multi-step goals, use developer tools (editors, terminals), and verify outputs.',
    },
    {
      q: 'In Google Antigravity, what is the role of an "Artifact"?',
      opts: [
        'A binary executable file',
        'A structured markdown document or actionable plan presented directly to the user',
        'A system crash log',
        'An unapproved git commit',
      ],
      ans: 1,
      expl: 'Artifacts display architectures, visual mockups, and execution plans for human-in-the-loop inspection.',
    },
    {
      q: 'Why should you always wrap Objects with JSON.stringify() in localStorage?',
      opts: [
        'It speeds up WiFi download speed',
        'Without it, JavaScript converts objects to the useless string "[object Object]"',
        'It makes the database encrypted',
        'LocalStorage does not support strings',
      ],
      ans: 1,
      expl: 'localStorage only stores DOMStrings. Storing raw objects corrupts your client-side data state.',
    },
  ];

  const [qIndex, setQIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const handleQuizChoice = (idx) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(idx);
    if (idx === quizQuestions[qIndex].ans) {
      setScore((s) => s + 1);
    }
  };

  const nextQuiz = () => {
    if (qIndex + 1 < quizQuestions.length) {
      setQIndex((i) => i + 1);
      setSelectedOpt(null);
    } else {
      setQuizDone(true);
    }
  };

  const resetQuiz = () => {
    setQIndex(0);
    setSelectedOpt(null);
    setScore(0);
    setQuizDone(false);
  };

  // Separate counter state (fix: was incorrectly using quiz score)
  const [counterClicks, setCounterClicks] = useState(0);

  // --- DEMO 3: INTERACTIVE TASK BOARD ---
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('agentverse_demo_tasks');
      return saved
        ? JSON.parse(saved)
        : [
            { id: 1, title: 'Explore Antigravity Workspaces', status: 'done' },
            { id: 2, title: 'Master 7-Part Prompt Engineering', status: 'progress' },
            { id: 3, title: 'Build Student Portfolio Site', status: 'todo' },
            { id: 4, title: 'Publish to GitHub Pages', status: 'todo' },
          ];
    } catch {
      return [];
    }
  });

  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('agentverse_demo_tasks', JSON.stringify(tasks));
    } catch (e) {
      console.error(e);
    }
  }, [tasks]);

  const addNewTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: taskInput.trim(), status: 'todo' }]);
    setTaskInput('');
  };

  const moveTask = (id, newStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // --- DEMO 4: SELF-HEALING DEBUGGER ---
  const [codeBroken, setCodeBroken] = useState(false);
  const [isHealing, setIsHealing] = useState(false);
  const [healSuccess, setHealSuccess] = useState(false);

  const breakCode = () => {
    setCodeBroken(true);
    setHealSuccess(false);
  };

  const healCode = () => {
    setIsHealing(true);
    setTimeout(() => {
      setIsHealing(false);
      setCodeBroken(false);
      setHealSuccess(true);
    }, 1200);
  };

  return (
    <section className="container section-anchor" id="demo-suite" style={{ padding: '40px 20px 80px' }}>
      {/* MINIMAL HEADER */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 32px' }}>
        <span className="section-tag">Interactive Playground</span>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-primary)', margin: '8px 0' }}>
          Live Demo Suite
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
          Test four live interactive capabilities of Google Antigravity & Agentic AI directly in your browser.
        </p>
      </div>

      {/* MINIMAL SEGMENTED CONTROL TABS */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          background: 'var(--bg-primary)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--radius-full)',
          padding: '6px',
          maxWidth: '780px',
          margin: '0 auto 36px',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {[
          { id: 'builder', label: 'Autonomous App Builder', icon: RocketIcon },
          { id: 'quiz', label: 'AI Knowledge Quiz', icon: ZapIcon },
          { id: 'tasks', label: 'State & Task Hub', icon: SparklesIcon },
          { id: 'debugger', label: 'Self-Healing Debugger', icon: BugIcon },
        ].map((tab) => {
          const { icon: TabIcon } = tab;
          const isActive = activeDemo === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveDemo(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: isActive ? 'var(--accent-blue)' : 'transparent',
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'var(--transition)',
              }}
            >
              <TabIcon size={16} color={isActive ? '#ffffff' : 'currentColor'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* DEMO 1: AUTONOMOUS APP BUILDER */}
      {activeDemo === 'builder' && (
        <div className="bug-sandbox">
          <div className="bug-col">
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Autonomous Code Synthesis
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '6px 0 12px', color: 'var(--text-primary)' }}>
              1-Click App Generator
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.5 }}>
              Instruct the agent to generate full HTML, CSS, and JavaScript applications with live runtime execution:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <button
                className="action-btn"
                style={{
                  background: selectedPreset === 'pomodoro' ? 'var(--accent-blue-subtle)' : 'var(--bg-primary)',
                  color: selectedPreset === 'pomodoro' ? 'var(--accent-blue)' : 'var(--text-primary)',
                  border: '1.5px solid var(--border-color)',
                  justifyContent: 'flex-start',
                  padding: '12px 18px',
                }}
                onClick={() => triggerBuild('pomodoro')}
              >
                <span>⏱️ Build a Minimalist Pomodoro Focus Timer</span>
              </button>

              <button
                className="action-btn"
                style={{
                  background: selectedPreset === 'counter' ? 'var(--accent-blue-subtle)' : 'var(--bg-primary)',
                  color: selectedPreset === 'counter' ? 'var(--accent-blue)' : 'var(--text-primary)',
                  border: '1.5px solid var(--border-color)',
                  justifyContent: 'flex-start',
                  padding: '12px 18px',
                }}
                onClick={() => triggerBuild('counter')}
              >
                <span>📊 Build an Interactive Metric Click Counter</span>
              </button>
            </div>

            {/* LIVE BUILD LOGS */}
            <div style={{ background: 'var(--bg-code)', padding: '14px 18px', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#93c5fd' }}>
              <div style={{ color: '#94a3b8', marginBottom: '6px' }}>// Antigravity Agent Execution Stream</div>
              {buildLogs.map((log, i) => (
                <div key={i} style={{ color: i === buildLogs.length - 1 ? '#4ade80' : '#cbd5e1', marginTop: '2px' }}>
                  {log}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: LIVE RUNNING PREVIEW CONTAINER */}
          <div className="bug-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--bg-secondary)', border: '2px solid var(--border-color)' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="dot dot-green" style={{ animation: 'pulseBadge 2s infinite' }}></span>
                Live Generated Sandbox Preview
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                viewport: 100%
              </span>
            </div>

            {/* PREVIEW: POMODORO */}
            {selectedPreset === 'pomodoro' && (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
                  FOCUS SESSION
                </div>
                <div style={{ fontSize: '4.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', lineHeight: 1, letterSpacing: '-0.04em' }}>
                  {formatPomoTime(pomoTime)}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '14px 0 20px' }}>
                  {pomoRunning ? 'Session active: Focus deeply!' : 'Paused: Ready when you are.'}
                </p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <button
                    className="action-btn"
                    style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                    onClick={() => setPomoRunning(!pomoRunning)}
                  >
                    {pomoRunning ? 'Pause' : 'Start Focus'}
                  </button>
                  <button
                    className="action-btn"
                    style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1.5px solid var(--border-color)', padding: '10px 18px', fontSize: '0.88rem' }}
                    onClick={() => {
                      setPomoRunning(false);
                      setPomoTime(1500);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}

            {/* PREVIEW: METRIC COUNTER */}
            {selectedPreset === 'counter' && (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>
                  STUDENT CODE ACTIONS
                </div>
                <div style={{ fontSize: '4.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', lineHeight: 1 }}>
                  {counterClicks * 12 + 42}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '14px 0 20px' }}>
                  Live reactive state mutation verified in DOM
                </p>
                <button className="action-btn" onClick={() => setCounterClicks((c) => c + 1)}>
                  + Trigger State Mutation
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DEMO 2: AI KNOWLEDGE QUIZ */}
      {activeDemo === 'quiz' && (
        <div className="bug-col" style={{ maxWidth: '720px', margin: '0 auto' }}>
          {!quizDone ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span>Question {qIndex + 1} of {quizQuestions.length}</span>
                <span style={{ fontWeight: 800, color: 'var(--accent-blue)' }}>Score: {score}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-primary)' }}>
                {quizQuestions[qIndex].q}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                {quizQuestions[qIndex].opts.map((opt, i) => {
                  let btnClass = 'quiz-option-btn';
                  if (selectedOpt !== null) {
                    if (i === quizQuestions[qIndex].ans) btnClass += ' correct';
                    else if (i === selectedOpt) btnClass += ' wrong';
                  }
                  return (
                    <button key={i} className={btnClass} onClick={() => handleQuizChoice(i)}>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selectedOpt !== null && (
                <div style={{ background: 'var(--accent-blue-subtle)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(37,99,235,0.2)', marginBottom: '18px', fontSize: '0.88rem' }}>
                  💡 <strong>Explanation:</strong> {quizQuestions[qIndex].expl}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="action-btn"
                  disabled={selectedOpt === null}
                  onClick={nextQuiz}
                  style={{ opacity: selectedOpt === null ? 0.5 : 1 }}
                >
                  {qIndex + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question →'}
                </button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>
                {score >= 2 ? '🏆' : '📚'}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Assessment Completed!</h3>
              <p style={{ margin: '8px 0 24px', color: 'var(--text-secondary)' }}>
                You scored <strong>{score}</strong> out of <strong>{quizQuestions.length}</strong>!
              </p>
              <button className="action-btn" onClick={resetQuiz}>
                ↺ Try Quiz Again
              </button>
            </div>
          )}
        </div>
      )}

      {/* DEMO 3: STATE & TASK HUB */}
      {activeDemo === 'tasks' && (
        <div className="bug-col" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Real-Time LocalStorage Task Pipeline
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Data automatically persists across browser refreshes using localStorage.
              </p>
            </div>
            <form onSubmit={addNewTask} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                className="custom-input"
                placeholder="New task..."
                style={{ padding: '8px 14px', fontSize: '0.88rem' }}
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
              />
              <button type="submit" className="action-btn" style={{ padding: '8px 16px', fontSize: '0.88rem' }}>
                + Add
              </button>
            </form>
          </div>

          {/* 3-COLUMN KANBAN BOARD */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {/* TODO */}
            <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase' }}>
                To Do ({tasks.filter((t) => t.status === 'todo').length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {tasks
                  .filter((t) => t.status === 'todo')
                  .map((t) => (
                    <div key={t.id} style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.86rem', fontWeight: 600 }}>{t.title}</span>
                      <button
                        onClick={() => moveTask(t.id, 'progress')}
                        style={{ background: 'var(--accent-blue-subtle)', border: 'none', color: 'var(--accent-blue)', borderRadius: '4px', padding: '2px 8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                      >
                        Start →
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            {/* IN PROGRESS */}
            <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--accent-amber)', marginBottom: '12px', textTransform: 'uppercase' }}>
                In Progress ({tasks.filter((t) => t.status === 'progress').length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {tasks
                  .filter((t) => t.status === 'progress')
                  .map((t) => (
                    <div key={t.id} style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.86rem', fontWeight: 600 }}>{t.title}</span>
                      <button
                        onClick={() => moveTask(t.id, 'done')}
                        style={{ background: 'rgba(5, 150, 105, 0.12)', border: 'none', color: 'var(--accent-emerald)', borderRadius: '4px', padding: '2px 8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                      >
                        Done ✓
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            {/* COMPLETED */}
            <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--accent-emerald)', marginBottom: '12px', textTransform: 'uppercase' }}>
                Completed ({tasks.filter((t) => t.status === 'done').length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {tasks
                  .filter((t) => t.status === 'done')
                  .map((t) => (
                    <div key={t.id} style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.8 }}>
                      <span style={{ fontSize: '0.86rem', textDecoration: 'line-through', color: 'var(--text-muted)' }}>{t.title}</span>
                      <button
                        onClick={() => removeTask(t.id)}
                        style={{ background: 'transparent', border: 'none', color: 'var(--accent-rose)', cursor: 'pointer', fontSize: '0.85rem' }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 4: SELF-HEALING DEBUGGER */}
      {activeDemo === 'debugger' && (
        <div className="bug-sandbox">
          <div className="bug-col">
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-rose)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Autonomous Self-Healing
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '6px 0 12px' }}>
              Live Runtime Error Simulation
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.5 }}>
              Click to intentionally inject a runtime null-pointer exception, then watch the AI agent analyze the stack trace and repair the code automatically.
            </p>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button
                className="action-btn"
                style={{ background: 'var(--accent-rose)', padding: '10px 18px', fontSize: '0.88rem' }}
                onClick={breakCode}
              >
                💥 Inject Runtime Crash
              </button>
              <button
                className="action-btn"
                style={{ background: 'var(--accent-emerald)', padding: '10px 18px', fontSize: '0.88rem' }}
                onClick={healCode}
                disabled={!codeBroken || isHealing}
              >
                {isHealing ? 'Agent Repairing...' : '✨ Agent Self-Heal'}
              </button>
            </div>

            <div style={{ background: 'var(--bg-code)', padding: '14px 18px', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
              <div style={{ color: '#94a3b8', marginBottom: '6px' }}>// Browser DevTools Console Output:</div>
              {codeBroken ? (
                <div style={{ color: '#fb7185' }}>
                  Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
                  <br />
                  &nbsp;&nbsp;at renderTasks (app.js:42:19)
                  <br />
                  &nbsp;&nbsp;Status: CRASHED ❌
                </div>
              ) : healSuccess ? (
                <div style={{ color: '#4ade80' }}>
                  [Agent Healer] Applied optional chaining `button?.addEventListener(...)`
                  <br />
                  [Agent Healer] Zero console errors. Application self-healed! ✅
                </div>
              ) : (
                <div style={{ color: '#94a3b8' }}>All systems healthy. No runtime errors detected.</div>
              )}
            </div>
          </div>

          <div className="bug-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '10px' }}>
              {codeBroken ? '⚠️ Broken Implementation' : '✅ Verified Implementation'}
            </h4>
            <div className="code-container" style={{ maxHeight: '240px', fontSize: '0.82rem' }}>
              {codeBroken
                ? `// Broken Code: Crashes if button isn't in DOM yet
const btn = document.getElementById("submitBtn");
btn.addEventListener("click", () => {
  saveData(); // Crashes with null pointer!
});`
                : `// Self-Healed Code: Safe guarded with fallback
const btn = document.getElementById("submitBtn");
if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    saveData();
  });
}`}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
