import React, { useState } from 'react';

export default function BugHunter() {
  const [showSolution, setShowSolution] = useState(false);
  const [revealedHints, setRevealedHints] = useState({});

  const toggleHint = (num) => {
    setRevealedHints((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const bugs = [
    {
      id: 1,
      title: 'Bug 1: CSS Off-Screen Button',
      clue: 'Look at .btn-submit styling. Why can mobile users not click it?',
      fix: 'The CSS rule "right: -500px; position: absolute;" moves the button completely offscreen! Change to relative positioning or remove the absolute offset.',
    },
    {
      id: 2,
      title: 'Bug 2: Unhandled Form Submit Page Reload',
      clue: 'Clicking the button clears the input but nothing stays on the screen!',
      fix: 'Forms refresh the webpage upon submit unless event.preventDefault() is executed.',
    },
    {
      id: 3,
      title: 'Bug 3: Storing Objects directly in localStorage',
      clue: 'Check localStorage.setItem("tasks", tasks). What string gets saved?',
      fix: 'localStorage converts JavaScript objects to "[object Object]". You must wrap with JSON.stringify(tasks).',
    },
    {
      id: 4,
      title: 'Bug 4: Reading Raw Strings without JSON.parse',
      clue: 'Why does tasks.forEach(...) throw a TypeError on second page load?',
      fix: 'localStorage.getItem returns a raw string. Without JSON.parse(), calling .forEach() crashes because strings are not arrays.',
    },
  ];

  return (
    <section className="container section-anchor" id="bughunter" style={{ padding: '60px 20px' }}>
      <div className="section-header">
        <span className="section-tag">Day 2 Practical Activity 3</span>
        <h2 className="section-title">🐛 "Find the Bug" Debugging Sandbox</h2>
        <p className="section-desc">
          Teach students how to inspect console errors, identify state serialization issues, and instruct Google Antigravity to repair broken code.
        </p>
      </div>

      <div className="bug-sandbox">
        {/* LEFT COLUMN: THE BUGGY CODE */}
        <div className="bug-col">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <strong style={{ color: 'var(--accent-rose)' }}>⚠️ Flawed Code Specimen</strong>
            <span style={{ fontSize: '0.75rem', background: 'rgba(244,63,94,0.15)', color: 'var(--accent-rose)', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
              4 Intentional Bugs
            </span>
          </div>

          <div className="code-container" style={{ maxHeight: '380px', fontSize: '0.82rem' }}>
{`// task-tracker.html (Buggy Snippet)
<style>
  /* BUG 1: Button moved off-screen! */
  .btn-submit { position: absolute; right: -500px; }
</style>

<form id="taskForm">
  <input type="text" id="taskInput">
  <button class="btn-submit" onclick="addTask()">Add</button>
</form>

<script>
  // BUG 4: Missing JSON.parse()
  let tasks = localStorage.getItem("tasks") || [];

  function addTask() {
    // BUG 2: Missing e.preventDefault() -> Page reloads!
    const input = document.getElementById("taskInput");
    tasks.push({ text: input.value });
    
    // BUG 3: Storing raw object -> converts to "[object Object]"
    localStorage.setItem("tasks", tasks);
  }
</script>`}
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '10px' }}>🔍 Guided Diagnostic Clues:</h4>
            {bugs.map((b) => (
              <div key={b.id} style={{ marginBottom: '10px', background: 'var(--bg-secondary)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{b.title}</span>
                  <button
                    onClick={() => toggleHint(b.id)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    {revealedHints[b.id] ? 'Hide' : 'Reveal Clue'}
                  </button>
                </div>
                {revealedHints[b.id] && (
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', marginTop: '6px' }}>
                    💡 <em>{b.clue}</em>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: AI-ASSISTED SOLUTION */}
        <div className="bug-col">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <strong style={{ color: 'var(--accent-emerald)' }}>✅ Self-Healed Solution</strong>
            <button
              className="action-btn"
              style={{ padding: '6px 14px', fontSize: '0.8rem', background: showSolution ? 'var(--accent-emerald)' : 'var(--accent-blue)' }}
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? 'Hide Solution' : 'Reveal Healed Code'}
            </button>
          </div>

          {showSolution ? (
            <div>
              <div className="code-container" style={{ maxHeight: '380px', fontSize: '0.82rem' }}>
{`// task-tracker.html (Healed Code)
<style>
  /* Fixed Bug 1: Visible, responsive styling */
  .btn-submit { position: static; cursor: pointer; }
</style>

<form id="taskForm" onsubmit="addTask(event)">
  <input type="text" id="taskInput" required>
  <button type="submit" class="btn-submit">Add Task</button>
</form>

<script>
  // Fixed Bug 4: Safe JSON parsing with fallback
  let tasks = [];
  try {
    const saved = localStorage.getItem("tasks");
    tasks = saved ? JSON.parse(saved) : [];
  } catch (err) {
    tasks = [];
  }

  function addTask(event) {
    // Fixed Bug 2: Prevent page reload
    event.preventDefault();
    const input = document.getElementById("taskInput");
    if (!input.value.trim()) return;

    tasks.push({ id: Date.now(), text: input.value.trim() });
    
    // Fixed Bug 3: Safe JSON serialization
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    input.value = "";
  }
</script>`}
              </div>

              <div style={{ marginTop: '16px', background: 'rgba(16,185,129,0.1)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <strong style={{ color: 'var(--accent-emerald)', fontSize: '0.88rem' }}>🧠 Key Learning Outcome:</strong>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Students witness firsthand that testing and inspecting edge cases (preventing reloads, JSON parsing) are essential steps in prompt-driven development.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '340px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔒</div>
              <p>Give your students 15 minutes to diagnose the bugs first!</p>
              <button className="action-btn" style={{ marginTop: '16px' }} onClick={() => setShowSolution(true)}>
                Reveal Solution Now
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
