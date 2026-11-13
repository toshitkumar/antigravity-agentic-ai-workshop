import React, { useState, useEffect } from 'react';

export default function LiveHubPreview() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // TASK STATE (with localStorage)
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('hub_preview_tasks');
      return saved ? JSON.parse(saved) : [
        { id: 1, text: 'Complete Day 1 Portfolio Website', priority: 'High', done: true },
        { id: 2, text: 'Learn 7-Part Prompt Framework', priority: 'Medium', done: true },
        { id: 3, text: 'Test Student Innovation Hub in Antigravity', priority: 'High', done: false },
        { id: 4, text: 'Deploy to GitHub Pages', priority: 'Low', done: false },
      ];
    } catch {
      return [];
    }
  });

  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');
  const [taskFilter, setTaskFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem('hub_preview_tasks', JSON.stringify(tasks));
    } catch (e) {
      console.error(e);
    }
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: newTaskText.trim(),
      priority: newTaskPriority,
      done: false,
    };
    setTasks([newTask, ...tasks]);
    setNewTaskText('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (taskFilter === 'pending') return !t.done;
    if (taskFilter === 'completed') return t.done;
    return true;
  });

  // QUIZ ENGINE STATE
  const quizQuestions = [
    {
      q: '1. What is the fundamental difference between a chatbot and an AI Agent?',
      options: [
        'A chatbot has internet access; an agent does not',
        'An agent can plan, use tools, verify outputs, and take multi-step autonomous actions',
        'An agent only writes Python code',
        'Chatbots only run on mobile phones',
      ],
      answer: 1,
      explanation: 'Agents break high-level goals into subtasks, execute tools (terminal, browser, editor), and self-verify results.',
    },
    {
      q: '2. In Google Antigravity, what role do Artifacts play?',
      options: [
        'They are system error logs',
        'They are special structured markdown documents and interactive outputs shared with the user',
        'They delete unapproved files',
        'They are binary executables',
      ],
      answer: 1,
      explanation: 'Artifacts present plans, reports, visual designs, and actionable documents within the workspace.',
    },
    {
      q: '3. What happens if you store a JavaScript Object directly in localStorage without JSON.stringify?',
      options: [
        'It stores it as an encrypted binary',
        'It converts it into the string "[object Object]", corrupting the data',
        'It automatically creates a SQL table',
        'It throws a syntax error immediately',
      ],
      answer: 1,
      explanation: 'localStorage only accepts DOMStrings. Without JSON.stringify(), objects coerce into "[object Object]".',
    },
    {
      q: '4. Which part of the 7-Part Prompt defines what tools/languages to use and what is forbidden?',
      options: ['Role', 'Audience', 'Technology', 'Testing'],
      answer: 2,
      explanation: 'The Technology section establishes the exact tech stack, libraries, and architectural constraints.',
    },
    {
      q: '5. What is the benefit of a "Human-in-the-Loop" development model with Agentic AI?',
      options: [
        'The human does all the typing while AI watches',
        'The AI generates and verifies, but the human inspects and approves critical changes',
        'It eliminates the need for software testing',
        'It limits the code to 50 lines',
      ],
      answer: 1,
      explanation: 'Human review ensures architectural alignment, security sanity, and prevents hallucinated assumptions.',
    },
  ];

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelectOption = (idx) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === quizQuestions[currentQIndex].answer) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < quizQuestions.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  // COURSE SEARCH STATE
  const [searchQuery, setSearchQuery] = useState('');
  const [courseCategory, setCourseCategory] = useState('All');

  const courses = [
    { id: 1, title: 'Agentic AI Workflows', cat: 'AI', level: 'Intermediate', lessons: 8 },
    { id: 2, title: 'Responsive CSS Grid & Flexbox', cat: 'Web', level: 'Beginner', lessons: 10 },
    { id: 3, title: 'JavaScript DOM & LocalStorage', cat: 'Web', level: 'Beginner', lessons: 12 },
    { id: 4, title: 'Google Antigravity Tooling', cat: 'AI', level: 'Advanced', lessons: 6 },
    { id: 5, title: 'Clean UI/UX Design Systems', cat: 'Design', level: 'Intermediate', lessons: 5 },
    { id: 6, title: 'Testing & Human-in-the-Loop Verification', cat: 'DevOps', level: 'Advanced', lessons: 7 },
  ];

  const filteredCourses = courses.filter((c) => {
    const matchesCat = courseCategory === 'All' || c.cat === courseCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const completedCount = tasks.filter((t) => t.done).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <section className="container" style={{ padding: '60px 24px' }}>
      <div className="section-header">
        <span className="section-tag">Interactive Simulation</span>
        <h2 className="section-title">Live Preview: Student Innovation Hub</h2>
        <p className="section-desc">
          Test drive the live capstone web application directly inside this browser window before building it in Antigravity!
        </p>
      </div>

      <div className="preview-container">
        <div className="preview-toolbar">
          <div className="window-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="browser-url">https://student-innovation-hub.local</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>● Live Client App</div>
        </div>

        <div className="hub-app">
          {/* HUB NAVIGATION BAR */}
          <div className="hub-nav">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
              <span>🚀</span> Student Innovation Hub
            </div>
            <div className="hub-tabs">
              <button
                className={`hub-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                📊 Dashboard
              </button>
              <button
                className={`hub-tab-btn ${activeTab === 'tasks' ? 'active' : ''}`}
                onClick={() => setActiveTab('tasks')}
              >
                📝 Task Tracker ({tasks.filter(t => !t.done).length})
              </button>
              <button
                className={`hub-tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
                onClick={() => setActiveTab('quiz')}
              >
                🧠 AI Quiz
              </button>
              <button
                className={`hub-tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
                onClick={() => setActiveTab('courses')}
              >
                🔍 Course Finder
              </button>
            </div>
          </div>

          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div className="metric-card" style={{ padding: '16px' }}>
                  <div className="metric-val">{progressPercent}%</div>
                  <div className="metric-label">Tasks Completed</div>
                </div>
                <div className="metric-card" style={{ padding: '16px' }}>
                  <div className="metric-val">{tasks.length}</div>
                  <div className="metric-label">Total Assigned Tasks</div>
                </div>
                <div className="metric-card" style={{ padding: '16px' }}>
                  <div className="metric-val">{quizScore}/{quizQuestions.length}</div>
                  <div className="metric-label">Latest Quiz Score</div>
                </div>
              </div>

              {/* PROGRESS BAR */}
              <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
                  <span>Learning Milestone Progress</span>
                  <span>{completedCount} of {tasks.length} items done</span>
                </div>
                <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${progressPercent}%`,
                      height: '100%',
                      background: 'var(--gradient-glow)',
                      transition: 'width 0.4s ease',
                    }}
                  ></div>
                </div>
              </div>

              <div style={{ textAlign: 'center', padding: '20px' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  Switch to the <strong>Task Tracker</strong> or <strong>AI Quiz</strong> tabs above to interact with the application state.
                </p>
                <button className="action-btn" onClick={() => setActiveTab('tasks')}>
                  Manage Your Tasks →
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: TASKS */}
          {activeTab === 'tasks' && (
            <div>
              <form onSubmit={addTask} className="task-input-bar">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Add a new task (e.g. Test mobile drawer menu)..."
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                />
                <select
                  className="custom-input"
                  style={{ maxWidth: '120px' }}
                  value={newTaskPriority}
                  onChange={(e) => setNewTaskPriority(e.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <button type="submit" className="action-btn">
                  + Add
                </button>
              </form>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {['all', 'pending', 'completed'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setTaskFilter(f)}
                    style={{
                      background: taskFilter === f ? 'var(--accent-blue)' : 'var(--bg-secondary)',
                      color: taskFilter === f ? 'white' : 'var(--text-secondary)',
                      border: '1px solid var(--border-color)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="task-list">
                {filteredTasks.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                    No tasks found in this view.
                  </div>
                ) : (
                  filteredTasks.map((t) => (
                    <div key={t.id} className={`task-item ${t.done ? 'done' : ''}`}>
                      <div className="task-left">
                        <input
                          type="checkbox"
                          checked={t.done}
                          onChange={() => toggleTask(t.id)}
                          style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                        />
                        <span>{t.text}</span>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            background:
                              t.priority === 'High'
                                ? 'rgba(244,63,94,0.15)'
                                : t.priority === 'Medium'
                                ? 'rgba(245,158,11,0.15)'
                                : 'rgba(16,185,129,0.15)',
                            color:
                              t.priority === 'High'
                                ? 'var(--accent-rose)'
                                : t.priority === 'Medium'
                                ? 'var(--accent-amber)'
                                : 'var(--accent-emerald)',
                            fontWeight: 600,
                          }}
                        >
                          {t.priority}
                        </span>
                      </div>
                      <button className="delete-btn" onClick={() => deleteTask(t.id)} title="Delete Task">
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 3: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="quiz-box">
              {!quizFinished ? (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span>Question {currentQIndex + 1} of {quizQuestions.length}</span>
                    <span>Score: {quizScore}</span>
                  </div>

                  <h3 className="quiz-question">{quizQuestions[currentQIndex].q}</h3>

                  <div className="quiz-options">
                    {quizQuestions[currentQIndex].options.map((opt, i) => {
                      let btnClass = 'quiz-option-btn';
                      if (selectedOption !== null) {
                        if (i === quizQuestions[currentQIndex].answer) {
                          btnClass += ' correct';
                        } else if (i === selectedOption) {
                          btnClass += ' wrong';
                        }
                      }
                      return (
                        <button
                          key={i}
                          className={btnClass}
                          onClick={() => handleSelectOption(i)}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {selectedOption !== null && (
                    <div style={{ background: 'rgba(59,130,246,0.1)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginBottom: '16px', fontSize: '0.88rem' }}>
                      💡 <strong>Explanation:</strong> {quizQuestions[currentQIndex].explanation}
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      className="action-btn"
                      disabled={selectedOption === null}
                      onClick={handleNextQuestion}
                      style={{ opacity: selectedOption === null ? 0.5 : 1 }}
                    >
                      {currentQIndex + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question →'}
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '12px' }}>
                    {quizScore >= 4 ? '🎉' : '📚'}
                  </div>
                  <h3>Quiz Complete!</h3>
                  <p style={{ margin: '10px 0 20px', color: 'var(--text-secondary)' }}>
                    You scored <strong>{quizScore}</strong> out of <strong>{quizQuestions.length}</strong>!
                  </p>
                  <button className="action-btn" onClick={resetQuiz}>
                    ↺ Retry Quiz
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: COURSES */}
          {activeTab === 'courses' && (
            <div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Search courses or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ minWidth: '220px' }}
                />
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['All', 'AI', 'Web', 'Design', 'DevOps'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCourseCategory(cat)}
                      style={{
                        background: courseCategory === cat ? 'var(--accent-blue)' : 'var(--bg-secondary)',
                        color: courseCategory === cat ? 'white' : 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {filteredCourses.map((c) => (
                  <div key={c.id} className="framework-card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.75rem', background: 'rgba(59,130,246,0.15)', color: 'var(--accent-blue)', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
                        {c.cat}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.lessons} Lessons</span>
                    </div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>{c.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Difficulty: {c.level}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
