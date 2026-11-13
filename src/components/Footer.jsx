import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
          AGENTIC AI & THE FUTURE OF DEVELOPMENT: 2-Day Practical Student Workshop
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Presented by <strong>Toshit Kumar</strong> • Contact:{' '}
          <a href="mailto:Kumartoshit82@gmail.com">Kumartoshit82@gmail.com</a>
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '12px' }}>
          Built with React & Google Antigravity. Designed for hands-on classroom execution.
        </p>
      </div>
    </footer>
  );
}
