import React, { useState } from 'react';

export default function GitHubDeployGuide() {
  const [repoName, setRepoName] = useState('agentic-ai-antigravity-workshop');
  const [copied, setCopied] = useState(false);

  const gitCommands = `# 1. Configure your identity for Kumartoshit82@gmail.com
git config --global user.name "Toshit Kumar"
git config --global user.email "Kumartoshit82@gmail.com"

# 2. Navigate to this project folder
cd "C:\\Users\\Toshit Kumar\\.gemini\\antigravity\\scratch\\antigravity-agentic-ai-workshop"

# 3. Initialize Git & Create initial commit
git init
git add .
git commit -m "feat: 2-Day Practical Workshop Platform - Agentic AI with Google Antigravity"

# 4. Authenticate GitHub CLI & Create Remote Repository
gh auth login
gh repo create ${repoName} --public --source=. --remote=origin --push

# 5. Build and Deploy to GitHub Pages (or free on Vercel)
npm run build`;

  const copyCode = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="container" style={{ padding: '60px 24px' }}>
      <div className="section-header">
        <span className="section-tag">Deployment & Hosting</span>
        <h2 className="section-title">🐙 Launch on GitHub</h2>
        <p className="section-desc">
          Ready-to-run setup to push this interactive React workshop platform to GitHub under <strong>Kumartoshit82@gmail.com</strong>.
        </p>
      </div>

      <div className="bug-sandbox">
        <div className="bug-col">
          <h3 style={{ fontSize: '1.15rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
            ⚙️ Step-by-Step GitHub Launch Steps
          </h3>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <li>
              <strong>Configure Git Identity:</strong> Link your commits to your email <code>Kumartoshit82@gmail.com</code> and name <code>Toshit Kumar</code>.
            </li>
            <li>
              <strong>Authenticate GitHub:</strong> Because GitHub requires personal access tokens (PAT) or browser OAuth via <code>gh auth login</code>, run the command in your PowerShell terminal.
            </li>
            <li>
              <strong>Create & Push:</strong> Use GitHub CLI <code>gh repo create</code> to publish the repository directly to your public GitHub profile.
            </li>
            <li>
              <strong>Free 1-Click Hosting:</strong> Connect this repository to <strong>GitHub Pages</strong> or <strong>Vercel</strong> for automatic worldwide deployment so your students can access it from their laptops and phones!
            </li>
          </ol>

          <div style={{ marginTop: '24px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>GitHub Repository Name:</label>
            <input
              type="text"
              className="custom-input"
              style={{ marginTop: '6px' }}
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
            />
          </div>
        </div>

        <div className="bug-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <strong style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>Terminal Commands (PowerShell / Bash)</strong>
              <button className="copy-btn" onClick={copyCode}>
                {copied ? '✓ Copied Commands!' : '📋 Copy All Commands'}
              </button>
            </div>
            <div className="code-container" style={{ maxHeight: '360px', fontSize: '0.82rem' }}>
              {gitCommands}
            </div>
          </div>

          <div style={{ background: 'rgba(59,130,246,0.1)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(59,130,246,0.2)', marginTop: '16px' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent-blue)', fontSize: '0.85rem' }}>🚀 Student Distribution URL:</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Once pushed, students can clone with:
              <br />
              <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>
                git clone https://github.com/toshitkumar/{repoName}.git
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
