import React, { useState } from 'react';
import { CopyIcon, CheckIcon, ZapIcon, SparklesIcon } from './Icons';

export default function PromptBuilder() {
  const [copied, setCopied] = useState(false);

  const [promptData, setPromptData] = useState({
    role: 'Senior Full-Stack Web Developer & UI Architect',
    goal: 'Build an interactive web application with client-side state',
    audience: 'Students, instructors, and hackathon evaluators',
    technology: 'Semantic HTML5, CSS3 (Flexbox/Grid), Vanilla ES6+ JavaScript, localStorage',
    features: 'Dashboard overview, CRUD task tracker, interactive quiz with scoring, dark/light theme switch',
    design: 'Clean, modern typography, responsive mobile drawer, accessible WCAG AA contrast',
    testing: 'Validate zero console errors, verify button event handlers and storage persistence in browser',
  });

  const handleChange = (field, val) => {
    setPromptData((prev) => ({ ...prev, [field]: val }));
  };

  const generatedPrompt = `Act as an expert ${promptData.role}.

1. ROLE: You are a ${promptData.role}.
2. GOAL: ${promptData.goal}.
3. TARGET AUDIENCE: ${promptData.audience}.
4. TECHNOLOGY & CONSTRAINTS: ${promptData.technology}.
5. CORE FEATURES:
${promptData.features}
6. UI/UX & DESIGN SYSTEM:
${promptData.design}
7. VERIFICATION & TESTING:
${promptData.testing}. Check all buttons, forms, and browser storage.`;

  // Calculate prompt quality score based on length and detail
  const filledCount = Object.values(promptData).filter((v) => v.trim().length > 10).length;
  const promptScore = Math.min(100, Math.round((filledCount / 7) * 100));

  const copyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="container section-anchor" id="promptbuilder" style={{ padding: '60px 20px' }}>
      <div className="section-header">
        <span className="section-tag">Interactive AI Lab 02</span>
        <h2 className="section-title">Visual Prompt Engineering Playground</h2>
        <p className="section-desc">
          Build bulletproof, production-grade 7-part development prompts interactively. Watch your prompt quality score rise
          and export directly to Google Antigravity!
        </p>
      </div>

      <div className="bug-sandbox">
        {/* LEFT: 7-PART VISUAL BUILDER FORM */}
        <div className="bug-col">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              🛠️ 7-Part Prompt Parameters
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quality Score:</span>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: promptScore >= 85 ? 'rgba(5, 150, 105, 0.15)' : 'rgba(217, 119, 6, 0.15)',
                  color: promptScore >= 85 ? 'var(--accent-emerald)' : 'var(--accent-amber)',
                }}
              >
                {promptScore}/100
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                1. Role (Who should the AI act as?)
              </label>
              <input
                type="text"
                className="custom-input"
                style={{ width: '100%', marginTop: '4px' }}
                value={promptData.role}
                onChange={(e) => handleChange('role', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                2. Goal (What should it build?)
              </label>
              <input
                type="text"
                className="custom-input"
                style={{ width: '100%', marginTop: '4px' }}
                value={promptData.goal}
                onChange={(e) => handleChange('goal', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                3. Audience (Who will use it?)
              </label>
              <input
                type="text"
                className="custom-input"
                style={{ width: '100%', marginTop: '4px' }}
                value={promptData.audience}
                onChange={(e) => handleChange('audience', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                4. Technology (Which languages & constraints?)
              </label>
              <input
                type="text"
                className="custom-input"
                style={{ width: '100%', marginTop: '4px' }}
                value={promptData.technology}
                onChange={(e) => handleChange('technology', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                5. Features (What functionality is required?)
              </label>
              <textarea
                className="custom-input"
                rows="2"
                style={{ width: '100%', marginTop: '4px', resize: 'none' }}
                value={promptData.features}
                onChange={(e) => handleChange('features', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                6. Design (Visual style, colors, and layout)
              </label>
              <input
                type="text"
                className="custom-input"
                style={{ width: '100%', marginTop: '4px' }}
                value={promptData.design}
                onChange={(e) => handleChange('design', e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                7. Testing (How should the agent verify?)
              </label>
              <input
                type="text"
                className="custom-input"
                style={{ width: '100%', marginTop: '4px' }}
                value={promptData.testing}
                onChange={(e) => handleChange('testing', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* RIGHT: LIVE GENERATED PROMPT PREVIEW */}
        <div className="bug-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ZapIcon size={18} color="var(--accent-blue)" />
                <strong style={{ fontSize: '0.96rem', color: 'var(--text-primary)' }}>Generated Antigravity Prompt</strong>
              </div>
              <button className="copy-btn" onClick={copyPrompt} style={{ padding: '6px 16px', fontSize: '0.84rem' }}>
                {copied ? (
                  <>
                    <CheckIcon size={15} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon size={15} />
                    <span>Copy Prompt</span>
                  </>
                )}
              </button>
            </div>

            <div className="code-container" style={{ maxHeight: '420px', fontSize: '0.84rem' }}>
              {generatedPrompt}
            </div>
          </div>

          <div style={{ background: 'var(--gradient-accent-soft)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-color)', marginTop: '20px' }}>
            <div style={{ fontWeight: 800, color: 'var(--accent-blue)', fontSize: '0.88rem' }}>
              💡 Pro-Tip for Toshit's Students:
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.5 }}>
              Agents produce 10x better code when you provide explicit <strong>Technology constraints</strong> and <strong>Testing criteria</strong> instead of vague 1-line prompts!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
