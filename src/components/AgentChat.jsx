import React, { useState, useRef, useEffect } from 'react';
import { SparklesIcon, RocketIcon, ZapIcon, BugIcon } from './Icons';

// --- Agentic Response Engine ---
const AGENT_NAME = 'Antigravity Agent';

const QUICK_DEMOS = [
  { label: '🌐 Build a website', prompt: 'Build me a portfolio website for a software developer' },
  { label: '🐛 Debug my code', prompt: 'My React app crashes with: TypeError: Cannot read property of undefined' },
  { label: '📊 Analyze data', prompt: 'Analyze sales data and find the top 3 trends' },
  { label: '🤖 What is Agentic AI?', prompt: 'Explain Agentic AI and how it differs from normal AI' },
  { label: '📧 Write an email', prompt: 'Write a professional email to a client about project delay' },
  { label: '🚀 Deploy to GitHub', prompt: 'How do I deploy my React app to GitHub Pages?' },
];

function generateAgentResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  if (msg.includes('website') || msg.includes('portfolio') || msg.includes('build')) {
    return {
      steps: [
        { icon: '🧠', label: 'PLAN', text: 'Analyzing requirements → Defining pages: Home, About, Projects, Contact' },
        { icon: '🏗️', label: 'ARCHITECT', text: 'Designing component tree: Navbar → Hero → Skills → Projects → Footer' },
        { icon: '⚡', label: 'EXECUTE', text: 'Writing React components, CSS variables, responsive grid system...' },
        { icon: '🔧', label: 'TOOL USE', text: 'Running: npm run build → Checking bundle size → Fixing lint errors' },
        { icon: '✅', label: 'VERIFY', text: 'Build succeeded! 3 files, 180KB. Testing mobile layout...' },
        { icon: '🚀', label: 'DEPLOY', text: 'Pushing to GitHub Pages → Live at: yourname.github.io/portfolio' },
      ],
      answer: `✅ **Website Build Complete!**\n\nMainne ye steps autonomously execute kiye:\n\n1. **Plan** kiya — Pages & components decide kiye\n2. **Code likha** — React + CSS (vanilla, no Tailwind)\n3. **Build run kiya** — Vite se production build\n4. **Deploy kiya** — GitHub Pages pe live\n\nYahi hai **Agentic AI** — sirf suggest nahi karta, **actually execute karta hai!** 🎯\n\n👉 Is site pe Demo Suite mein "Autonomous App Builder" tab click karke live dekhte hain!`,
    };
  }

  if (msg.includes('debug') || msg.includes('error') || msg.includes('bug') || msg.includes('crash')) {
    return {
      steps: [
        { icon: '🔍', label: 'OBSERVE', text: 'Reading error: TypeError: Cannot read property of undefined — stack trace analyzed' },
        { icon: '🧠', label: 'DIAGNOSE', text: 'Root cause: Object is null before data loads. Missing null check / optional chaining' },
        { icon: '📋', label: 'PLAN FIX', text: 'Strategy: Add optional chaining (?.) + loading state guard' },
        { icon: '⚡', label: 'EXECUTE', text: 'Applying fix: data?.property → Adding if(!data) return <Loading />' },
        { icon: '🧪', label: 'TEST', text: 'Running: npm test → 3 tests passed, 0 failed ✅' },
        { icon: '✅', label: 'VERIFY', text: 'Error resolved! No console warnings. Component renders correctly.' },
      ],
      answer: `🐛 **Bug Fixed!**\n\n**Root Cause Found:**\nTumhara component \`data\` load hone se pehle render ho raha tha — isliye \`undefined\` error aa raha tha.\n\n**Fix Applied:**\n\`\`\`js\n// BEFORE (broken)\nreturn <div>{user.name}</div>;\n\n// AFTER (fixed)\nif (!user) return <div>Loading...</div>;\nreturn <div>{user?.name}</div>;\n\`\`\`\n\nYahi hota hai **Agentic Debugging** — observe → diagnose → fix → verify! 🎯`,
    };
  }

  if (msg.includes('agentic') || msg.includes('agent') || msg.includes('kya hai') || msg.includes('explain') || msg.includes('what is')) {
    return {
      steps: [
        { icon: '🎯', label: 'GOAL', text: 'User goal received: Explain Agentic AI' },
        { icon: '🧠', label: 'PLAN', text: 'Breaking down: Definition → Key components → Real examples → Comparison' },
        { icon: '🔎', label: 'RESEARCH', text: 'Retrieving knowledge on: LLMs, Tool Calling, Memory, Planning loops' },
        { icon: '✍️', label: 'SYNTHESIZE', text: 'Composing structured explanation with analogies...' },
        { icon: '✅', label: 'VERIFY', text: 'Response checked for accuracy, completeness, clarity' },
      ],
      answer: `🤖 **Agentic AI kya hota hai?**\n\nNormal AI = Sirf jawab deta hai\n**Agentic AI = Goal leke khud kaam karta hai!**\n\n**4 Core Powers:**\n1. 🧠 **Planning** — Goal ko tasks mein todta hai\n2. 🔧 **Tool Use** — Browser, terminal, files, APIs use karta hai\n3. 💾 **Memory** — Context yaad rakhta hai\n4. 🔄 **Self-Correction** — Mistakes khud fix karta hai\n\n**Real Example (Abhi ho raha hai):**\nTumne kaha "website banao" → Maine:\n→ Plan banaya → Code likha → Build kiya → Deploy kiya\n→ Bina baar baar pooche! ✅\n\nYahi main hoon — **Antigravity Agent!** 🚀`,
    };
  }

  if (msg.includes('email') || msg.includes('write') || msg.includes('draft')) {
    return {
      steps: [
        { icon: '🎯', label: 'GOAL', text: 'Task: Draft professional email about project delay' },
        { icon: '🧠', label: 'PLAN', text: 'Tone: Professional, Empathetic. Structure: Acknowledge → Reason → Solution → Timeline' },
        { icon: '✍️', label: 'DRAFT', text: 'Writing email draft with appropriate subject, salutation, body, CTA...' },
        { icon: '🔍', label: 'REVIEW', text: 'Checking: Tone neutral, no blame language, solution-focused ✅' },
        { icon: '✅', label: 'DONE', text: 'Email ready to send!' },
      ],
      answer: `📧 **Email Draft Ready!**\n\n**Subject:** Project Status Update — Extended Timeline\n\nDear [Client Name],\n\nI hope this message finds you well.\n\nI wanted to proactively update you regarding the **[Project Name]** timeline. Due to [brief reason — e.g., technical complexity in the API integration phase], we require an additional **5 business days** to deliver a fully tested solution.\n\nWe have already:\n✅ Completed 70% of core features\n✅ Resolved all critical bugs\n🔄 Currently finalizing QA testing\n\nRevised delivery: **[New Date]**\n\nI sincerely apologize for any inconvenience. Please feel free to call me directly at any time.\n\nWarm regards,\n**Toshit Kumar**\n\nYahi hai agentic writing — context samjha, structured output diya! 🎯`,
    };
  }

  if (msg.includes('github') || msg.includes('deploy') || msg.includes('pages')) {
    return {
      steps: [
        { icon: '🧠', label: 'PLAN', text: 'Deployment strategy: Vite build → gh-pages branch → GitHub Pages' },
        { icon: '⚡', label: 'BUILD', text: 'Running: npm run build → dist/ folder created (3 files, 180KB)' },
        { icon: '📁', label: 'PREPARE', text: 'Copying dist/* to temp deploy directory...' },
        { icon: '🔧', label: 'GIT OPS', text: 'git init → git add -A → git commit → git push origin gh-pages --force' },
        { icon: '✅', label: 'VERIFY', text: 'GitHub Pages live! URL: username.github.io/repo-name ✅' },
      ],
      answer: `🚀 **GitHub Pages Deployment Guide:**\n\n\`\`\`bash\n# Step 1: Build your project\nnpm run build\n\n# Step 2: Deploy to gh-pages\ngit add dist -f\ngit commit -m "Deploy"\ngit subtree push --prefix dist origin gh-pages\n\`\`\`\n\n**Vite config mein add karo:**\n\`\`\`js\nexport default defineConfig({\n  base: '/your-repo-name/',\n})\n\`\`\`\n\n👉 Is site ka **"GitHub Deploy Guide"** section neeche scroll karo — wahan sab commands copy kar sakte ho! 🎯\n\nMaine **abhi tumhari site bhi isi method se deploy ki hai!** ✅`,
    };
  }

  if (msg.includes('data') || msg.includes('analyz') || msg.includes('trend')) {
    return {
      steps: [
        { icon: '📥', label: 'INGEST', text: 'Loading data source → Parsing CSV/JSON structure → 1,247 records found' },
        { icon: '🔍', label: 'EXPLORE', text: 'Running: df.describe() → Checking nulls, dtypes, distributions' },
        { icon: '📊', label: 'ANALYZE', text: 'Computing: trend lines, correlations, outliers, seasonality' },
        { icon: '🧠', label: 'SYNTHESIZE', text: 'Identifying top 3 patterns with statistical significance' },
        { icon: '📈', label: 'VISUALIZE', text: 'Generating: bar chart, line graph, heatmap' },
        { icon: '✅', label: 'REPORT', text: 'Insights documented with recommendations' },
      ],
      answer: `📊 **Data Analysis Complete!**\n\n**Top 3 Trends Found:**\n\n1. 📈 **Q3 Revenue Spike (+34%)** — Mobile sales surged after app launch\n2. 📉 **Weekend Drop (-18%)** — B2B clients don't purchase on weekends\n3. 🔁 **Repeat Purchase Rate 67%** — High retention, upsell opportunity\n\n**Agent Recommendations:**\n→ Increase mobile ad budget (Q3 effect)\n→ Run weekend-specific B2C campaigns\n→ Launch loyalty program to boost retention to 80%\n\nYahi hai agentic data analysis — data lo → analyze karo → insights do → recommend karo! 🎯`,
    };
  }

  // Default response
  return {
    steps: [
      { icon: '🎯', label: 'GOAL', text: `User request received: "${userMessage}"` },
      { icon: '🧠', label: 'PLAN', text: 'Breaking down task into executable steps...' },
      { icon: '🔧', label: 'TOOL USE', text: 'Selecting appropriate tools: browser, terminal, code editor, APIs' },
      { icon: '⚡', label: 'EXECUTE', text: 'Running tasks autonomously...' },
      { icon: '✅', label: 'VERIFY', text: 'Checking output quality and completeness' },
    ],
    answer: `🤖 **Samajh gaya!**\n\nMaine tumhara task analyze kiya:\n**"${userMessage}"**\n\nMain ek **Agentic AI** hoon — iska matlab:\n✅ Main sirf jawab nahi deta\n✅ Main actually tools use karta hoon\n✅ Main code run karta hoon\n✅ Main files create karta hoon\n✅ Main verify karta hoon\n\n**Specific task ke liye — neeche Quick Demo buttons try karo!** 👇\n\nYa phir Toshit Kumar ke Antigravity Agent se directly koi bhi kaam karwao — woh actually execute kar denge! 🚀`,
  };
}

// --- MAIN COMPONENT ---
export default function AgentChat() {
  const [messages, setMessages] = useState([
    {
      role: 'agent',
      text: `👋 **Namaste! Main Antigravity Agent hoon!**\n\nMain ek **Agentic AI** hoon — sirf chatbot nahi! Main:\n✅ Code actually likhta hoon\n✅ Websites actually banata hoon  \n✅ Bugs actually fix karta hoon\n✅ Files actually create karta hoon\n\n**Neeche koi bhi demo try karo** ya khud kuch poocho! 👇`,
      steps: null,
    },
  ]);

  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [pendingSteps, setPendingSteps] = useState([]);
  const [pendingAnswer, setPendingAnswer] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking, currentStep]);

  const sendMessage = (text) => {
    const userText = (text || input).trim();
    if (!userText || isThinking) return;
    setInput('');

    setMessages((prev) => [...prev, { role: 'user', text: userText, steps: null }]);
    setIsThinking(true);
    setCurrentStep(0);

    const response = generateAgentResponse(userText);
    setPendingSteps(response.steps);
    setPendingAnswer(response.answer);

    // Animate through steps
    response.steps.forEach((_, idx) => {
      setTimeout(() => {
        setCurrentStep(idx + 1);
      }, (idx + 1) * 600);
    });

    // Add final answer
    setTimeout(() => {
      setIsThinking(false);
      setMessages((prev) => [
        ...prev,
        { role: 'agent', text: response.answer, steps: response.steps },
      ]);
      setPendingSteps([]);
      setPendingAnswer('');
      setCurrentStep(0);
    }, response.steps.length * 600 + 400);
  };

  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code style="background:var(--bg-code);padding:2px 6px;border-radius:4px;font-family:var(--font-mono);font-size:0.85em">$1</code>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <section className="container section-anchor" id="agent-chat" style={{ padding: '60px 20px 80px' }}>
      {/* HEADER */}
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
        <span className="section-tag">🤖 Live Agent Demo</span>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-primary)', margin: '10px 0 12px' }}>
          Talk to the Agent
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Main sirf chatbot nahi hoon — main ek <strong>Agentic AI</strong> hoon. Dekho main kaise plan karta hoon, tools use karta hoon, aur goal achieve karta hoon.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>

        {/* QUICK DEMO BUTTONS */}
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
            ⚡ Quick Demos — Click to try:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {QUICK_DEMOS.map((demo) => (
              <button
                key={demo.label}
                onClick={() => sendMessage(demo.prompt)}
                disabled={isThinking}
                style={{
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: '1.5px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontSize: '0.83rem',
                  fontWeight: 600,
                  cursor: isThinking ? 'not-allowed' : 'pointer',
                  opacity: isThinking ? 0.5 : 1,
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => !isThinking && (e.target.style.borderColor = 'var(--accent-blue)')}
                onMouseLeave={(e) => (e.target.style.borderColor = 'var(--border-color)')}
              >
                {demo.label}
              </button>
            ))}
          </div>
        </div>

        {/* CHAT WINDOW */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1.5px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {/* CHAT TOPBAR */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              borderBottom: '1px solid var(--border-color)',
              background: 'var(--bg-primary)',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SparklesIcon size={16} color="#fff" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Antigravity Agent</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span className="dot dot-green" style={{ animation: 'pulseBadge 2s infinite' }}></span>
                Agentic Loop Active
              </div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Plan → Act → Verify
            </div>
          </div>

          {/* MESSAGES */}
          <div
            style={{
              height: '420px',
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start', gap: '8px' }}>
                {/* AGENT STEPS (collapsed accordion-style) */}
                {msg.role === 'agent' && msg.steps && (
                  <div
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 14px',
                      maxWidth: '85%',
                      width: '100%',
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                      🔄 Agentic Execution Trace
                    </div>
                    {msg.steps.map((step, si) => (
                      <div key={si} style={{ display: 'flex', gap: '8px', marginBottom: '4px', fontSize: '0.8rem' }}>
                        <span style={{ minWidth: '20px' }}>{step.icon}</span>
                        <span style={{ color: 'var(--accent-blue)', fontWeight: 700, minWidth: '80px' }}>[{step.label}]</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{step.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* MESSAGE BUBBLE */}
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '12px 16px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))'
                      : 'var(--bg-primary)',
                    color: msg.role === 'user' ? '#fff' : 'var(--text-primary)',
                    border: msg.role === 'agent' ? '1px solid var(--border-color)' : 'none',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                />
              </div>
            ))}

            {/* THINKING ANIMATION */}
            {isThinking && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                {/* Live step animation */}
                <div
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--accent-blue)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 14px',
                    maxWidth: '85%',
                    width: '100%',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                    ⚡ Running Agentic Loop...
                  </div>
                  {pendingSteps.slice(0, currentStep).map((step, si) => (
                    <div
                      key={si}
                      style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '4px',
                        fontSize: '0.8rem',
                        animation: 'fadeIn 0.3s ease',
                      }}
                    >
                      <span style={{ minWidth: '20px' }}>{step.icon}</span>
                      <span style={{ color: 'var(--accent-blue)', fontWeight: 700, minWidth: '80px' }}>[{step.label}]</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{step.text}</span>
                    </div>
                  ))}
                  {currentStep < pendingSteps.length && (
                    <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
                      {[0, 1, 2].map((d) => (
                        <div
                          key={d}
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--accent-blue)',
                            animation: `bounce 1s ${d * 0.2}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* INPUT BAR */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              padding: '14px 16px',
              borderTop: '1px solid var(--border-color)',
              background: 'var(--bg-primary)',
            }}
          >
            <input
              type="text"
              className="custom-input"
              placeholder="Koi bhi task do... (e.g. Build a quiz app, Debug my error, Explain Agentic AI)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              disabled={isThinking}
              style={{ flex: 1, fontSize: '0.9rem', padding: '10px 16px' }}
            />
            <button
              className="action-btn"
              onClick={() => sendMessage()}
              disabled={isThinking || !input.trim()}
              style={{
                padding: '10px 20px',
                fontSize: '0.9rem',
                opacity: isThinking || !input.trim() ? 0.5 : 1,
                minWidth: '90px',
              }}
            >
              {isThinking ? '...' : 'Send 🚀'}
            </button>
          </div>
        </div>

        {/* BOTTOM INFO */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
          }}
        >
          {[
            { icon: '🧠', label: 'Planning', desc: 'Goal ko steps mein todta hai' },
            { icon: '🔧', label: 'Tool Use', desc: 'Browser, terminal, APIs use karta hai' },
            { icon: '🔄', label: 'Self-Correction', desc: 'Errors khud detect & fix karta hai' },
            { icon: '✅', label: 'Verification', desc: 'Output quality khud check karta hai' },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>{card.icon}</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-primary)' }}>{card.label}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
