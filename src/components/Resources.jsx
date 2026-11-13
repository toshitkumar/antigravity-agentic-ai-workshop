import React from 'react';

export default function Resources() {
  const links = [
    {
      title: 'Google Antigravity — Official Getting Started',
      url: 'https://antigravity.google/docs/getting-started',
      tag: 'Documentation',
      desc: 'Official platform guide covering workspaces, agent instructions, terminal actions, and code approvals.',
    },
    {
      title: 'Google Codelabs: Building with Google Antigravity',
      url: 'https://codelabs.developers.google.com/building-with-google-antigravity',
      tag: 'Google Codelab',
      desc: 'Step-by-step hands-on tutorial for agent-first coding, multi-turn task verification, and artifact inspection.',
    },
    {
      title: 'Google Antigravity Download & Setup',
      url: 'https://antigravity.google/download',
      tag: 'Official Installer',
      desc: 'Install the native Antigravity IDE and configure local developer accounts.',
    },
    {
      title: 'From Code Nostalgia to AI-Driven Futures',
      url: 'https://medium.com/@manojvns/from-code-nostalgia-to-ai-driven-futures-lessons-from-testing-google-antigravity-79f2e4fa4934',
      tag: 'Case Study',
      desc: 'Lessons and architectural breakthroughs from testing Google Antigravity in production environments.',
    },
    {
      title: 'Landscape of Vibe Coding & Agentic AI Tools in 2026',
      url: 'https://medium.com',
      tag: 'Industry Analysis',
      desc: 'Understanding where Agentic AI development stands compared to traditional code completion tools.',
    },
  ];

  return (
    <section className="container" style={{ padding: '60px 24px' }}>
      <div className="section-header">
        <span className="section-tag">Essential Links & Reading</span>
        <h2 className="section-title">📚 Official Developer Resources</h2>
        <p className="section-desc">
          Official Google documentation, codelabs, and student reading assignments for the workshop.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        {links.map((l, i) => (
          <a
            key={i}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="framework-card"
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <span style={{ fontSize: '0.72rem', background: 'rgba(59,130,246,0.15)', color: 'var(--accent-blue)', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
                {l.tag}
              </span>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '8px', fontSize: '1rem' }}>
                {l.title} ↗
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                {l.desc}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
