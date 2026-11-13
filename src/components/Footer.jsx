import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '8px' }}>
          AGENTVERSE AI — Next-Gen Agentic AI Learning & Training Portal
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
          Instructor & Creator: <strong>Toshit Kumar</strong> • Contact:{' '}
          <a href="mailto:Kumartoshit82@gmail.com">Kumartoshit82@gmail.com</a>
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '14px', fontStyle: 'italic' }}>
          "Don't just use AI. Learn to build with AI agents."
        </p>
      </div>
    </footer>
  );
}
