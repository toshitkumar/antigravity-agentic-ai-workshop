import React, { useState } from 'react';
import { SparklesIcon, ZapIcon, RocketIcon, CheckIcon } from './Icons';

export default function AgenticConcepts() {
  const [selectedConcept, setSelectedConcept] = useState('agentic');

  const comparisonData = [
    {
      type: 'Traditional Automation',
      desc: 'Static, deterministic if-else rules or fixed cron jobs.',
      action: 'Sends birthday emails, runs preset scripts on fixed triggers.',
      limitation: 'Cannot handle ambiguity, unexpected errors, or reasoning.',
      badge: 'Rule-Based',
    },
    {
      type: 'Generative AI (Chatbots)',
      desc: 'LLMs predicting tokens based on prompt input.',
      action: 'Answers questions, summarizes text, writes sample snippets.',
      limitation: 'Stateless, no environment tools, cannot test or verify its own code.',
      badge: 'Single-Turn',
    },
    {
      type: 'Agentic AI (Autonomous Agents)',
      desc: 'Goal-driven systems with cognitive loops, tools, and memory.',
      action: 'Decomposes goals, invokes editors & terminals, inspects outputs, and self-heals.',
      limitation: 'Requires human-in-the-loop oversight for consequential approval.',
      badge: 'Autonomous',
      highlight: true,
    },
  ];

  const pillars = [
    {
      title: '1. Goal & Context',
      desc: 'The user defines a high-level intent. The agent extracts constraints, dependencies, and success criteria.',
      icon: '🎯',
    },
    {
      title: '2. Autonomous Planning',
      desc: 'The agent splits the objective into a Directed Acyclic Graph (DAG) of actionable, sequential subtasks.',
      icon: '🧠',
    },
    {
      title: '3. Tool Execution',
      desc: 'The agent actively interacts with development environments: reading/writing files, compiling code, running tests.',
      icon: '⚙️',
    },
    {
      title: '4. Memory & State',
      desc: 'Maintains short-term conversation context and persistent long-term repository knowledge across multi-turn interactions.',
      icon: '💾',
    },
    {
      title: '5. Observation & Verification',
      desc: 'Inspects terminal exit codes and browser DOM results. If an error occurs, the agent self-heals before concluding.',
      icon: '🔍',
    },
  ];

  return (
    <section className="container section-anchor" id="concepts" style={{ padding: '60px 20px' }}>
      <div className="section-header">
        <span className="section-tag">Core Fundamentals</span>
        <h2 className="section-title">Understanding Agentic AI Architecture</h2>
        <p className="section-desc">
          Move beyond conversational chatbots. Learn how autonomous AI agents plan, invoke developer tools, verify outputs,
          and build real applications in Google Antigravity.
        </p>
      </div>

      {/* COMPARISON CARDS */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px' }}>
        AI Evolution: Automation vs Chatbots vs Agents
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {comparisonData.map((item, idx) => (
          <div
            key={idx}
            className="framework-card"
            style={{
              borderColor: item.highlight ? 'var(--accent-blue)' : 'var(--border-color)',
              background: item.highlight ? 'var(--gradient-card)' : 'var(--bg-card)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {item.highlight && (
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--gradient-glow)', color: 'white', fontSize: '0.72rem', fontWeight: 800, padding: '3px 12px', borderBottomLeftRadius: 'var(--radius-sm)' }}>
                THE AGENTIC ERA
              </div>
            )}
            <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '3px 10px', borderRadius: 'var(--radius-full)', background: item.highlight ? 'var(--accent-blue-subtle)' : 'var(--bg-primary)', color: item.highlight ? 'var(--accent-blue)' : 'var(--text-muted)', border: '1px solid var(--border-color)', display: 'inline-block', marginBottom: '12px' }}>
              {item.badge}
            </span>
            <h4 style={{ fontSize: '1.18rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)' }}>
              {item.type}
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
              {item.desc}
            </p>
            <div style={{ fontSize: '0.82rem', background: 'var(--bg-primary)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '10px' }}>
              <strong>Execution:</strong> {item.action}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <strong>Boundaries:</strong> {item.limitation}
            </div>
          </div>
        ))}
      </div>

      {/* THE 5 AGENT PILLARS */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px' }}>
        The 5 Pillars of an Autonomous Agent
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
        {pillars.map((p, idx) => (
          <div key={idx} className="metric-card" style={{ textAlign: 'left', padding: '22px 18px' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{p.icon}</div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
              {p.title}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
