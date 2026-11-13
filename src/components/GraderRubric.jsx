import React, { useState } from 'react';

export default function GraderRubric() {
  const [studentName, setStudentName] = useState('Alex Rivera');
  const [teamName, setTeamName] = useState('Team Alpha AI');
  
  const [scores, setScores] = useState({
    concept: 9,
    prompts: 14,
    ui: 13,
    interactivity: 23,
    testing: 13,
    creativity: 8,
    presentation: 9,
  });

  const criteria = [
    { key: 'concept', label: 'Concept & Problem Definition', max: 10, desc: 'Clarity of the solution and target student audience' },
    { key: 'prompts', label: 'Prompt Engineering & Agent Steering', max: 15, desc: 'Proper use of 7-part prompt structure & iterative refinement' },
    { key: 'ui', label: 'UI/UX & Responsive Web Design', max: 15, desc: 'Visual polish, mobile responsiveness, color harmony, dark/light theme' },
    { key: 'interactivity', label: 'Interactive Functionality', max: 25, desc: 'CRUD operations, quiz mechanics, search filters, state mutations' },
    { key: 'testing', label: 'Testing, Debugging & State Persistence', max: 15, desc: 'localStorage reliability, zero console errors, input validation' },
    { key: 'creativity', label: 'Creativity & Innovation', max: 10, desc: 'Unique features, animations, smart micro-interactions' },
    { key: 'presentation', label: 'Final Presentation & Oral Defense', max: 10, desc: 'Explaining underlying HTML/CSS/JS without relying on AI buzzwords' },
  ];

  const handleScoreChange = (key, val) => {
    setScores((prev) => ({ ...prev, [key]: Number(val) }));
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  let gradeBadgeClass = 'grade-excellent';
  let gradeText = 'Excellent (Gold Tier)';
  if (totalScore < 75) {
    gradeBadgeClass = 'grade-developing';
    gradeText = 'Developing (Needs Refinement)';
  } else if (totalScore < 90) {
    gradeBadgeClass = 'grade-proficient';
    gradeText = 'Proficient (Silver Tier)';
  }

  return (
    <section className="container" style={{ padding: '60px 24px' }}>
      <div className="section-header">
        <span className="section-tag">Evaluation Tool</span>
        <h2 className="section-title">📊 100-Mark Capstone Grading Calculator</h2>
        <p className="section-desc">
          Live grading dashboard for Toshit Kumar to score student projects and calculate competition tier ratings in real time.
        </p>
      </div>

      <div className="rubric-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
        {/* CRITERIA TABLE */}
        <div className="bug-col">
          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
            <input
              type="text"
              className="custom-input"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <input
              type="text"
              className="custom-input"
              placeholder="Team / Project Name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>

          <table className="rubric-table">
            <thead>
              <tr>
                <th>Evaluation Area</th>
                <th>Score (/ Max)</th>
                <th>Adjust Slider</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c) => (
                <tr key={c.key}>
                  <td>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{c.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{c.desc}</div>
                  </td>
                  <td style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', minWidth: '70px' }}>
                    {scores[c.key]} / {c.max}
                  </td>
                  <td style={{ minWidth: '140px' }}>
                    <input
                      type="range"
                      className="score-slider"
                      min="0"
                      max={c.max}
                      value={scores[c.key]}
                      onChange={(e) => handleScoreChange(c.key, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SCORECARD SUMMARY */}
        <div className="bug-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Official Evaluation Card
            </span>
            <h3 style={{ fontSize: '1.4rem', margin: '8px 0 4px', color: 'var(--text-primary)' }}>{studentName || 'Student Name'}</h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '20px' }}>{teamName || 'Project Name'}</div>

            <div style={{ textAlign: 'center', padding: '24px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '3.6rem', fontWeight: 800, color: 'var(--accent-blue)', lineHeight: 1 }}>
                {totalScore}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>out of 100 Total Marks</div>
              <div style={{ marginTop: '14px' }}>
                <span className={`grade-badge ${gradeBadgeClass}`}>{gradeText}</span>
              </div>
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span>Interactivity & State:</span>
                <strong>{scores.interactivity}/25</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span>Prompt Engineering:</span>
                <strong>{scores.prompts}/15</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span>UI & Layout:</span>
                <strong>{scores.ui}/15</strong>
              </div>
            </div>
          </div>

          <button
            className="action-btn"
            style={{ width: '100%', marginTop: '24px' }}
            onClick={() => alert(`Certificate Generated for ${studentName} with score ${totalScore}/100!`)}
          >
            🎓 Generate Evaluation Summary
          </button>
        </div>
      </div>
    </section>
  );
}
