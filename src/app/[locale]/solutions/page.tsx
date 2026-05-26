import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Solutions — Sydon',
  description:
    '10 autonomous AI agents covering every layer of your Amazon business. Account Guardian, PPC Strategist, Dynamic Pricer, Listing Builder, and more.',
};

const AGENTS = [
  {
    cat: 'Protect',
    name: 'Account Guardian',
    desc: 'Acts on 47 risk factors automatically. Suppressed listings, IP complaints, restricted ASINs — flagged and resolved before suspension. Never wake up to a frozen account again.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    cat: 'Protect',
    name: 'Document Intelligence',
    desc: 'Reads invoices, GTINs, brand registry filings, and supplier docs. Prepares appeal documentation and keeps records audit-ready for any compliance review.',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
  },
  {
    cat: 'Protect',
    name: 'Review Guardian',
    desc: 'Catches negative review patterns early. Identifies manipulation attempts, monitors sentiment shifts, and surfaces actionable product feedback before ratings decline.',
    icon: (
      <>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </>
    ),
  },
  {
    cat: 'Optimize',
    name: 'Profit Intelligence',
    desc: 'Real-time true profit across SKUs, fees, ads, and returns. Every dollar — to the penny. See exactly where your margins are going and where to recover them.',
    icon: (
      <>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </>
    ),
  },
  {
    cat: 'Optimize',
    name: 'PPC Strategist',
    desc: 'Pauses waste. Scales winners. Defends ACoS. Continuous bid optimization across campaigns, keywords, and match types — without the daily manual grind.',
    icon: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
  },
  {
    cat: 'Optimize',
    name: 'Dynamic Pricer',
    desc: 'Wins the Buy Box without giving up margin. Monitors competitor pricing in real time and adjusts your prices to stay competitive while protecting profitability.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    cat: 'Grow',
    name: 'Listing Builder',
    desc: 'AI-written titles, bullets, descriptions, and backend keywords. Re-optimized when your rankings shift or competitors update theirs. Always search-relevant.',
    icon: (
      <>
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </>
    ),
  },
  {
    cat: 'Grow',
    name: 'Product Scout',
    desc: "Finds white-space from real demand signals. Analyzes search trends, competitor gaps, and market velocity to surface opportunities before they're crowded.",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
  },
  {
    cat: 'Grow',
    name: 'Fulfillment Manager',
    desc: 'Routes FBA / FBM / 3PL by velocity. Prevents stockouts, optimizes reorder timing, and keeps your IPI score healthy across all fulfillment channels.',
    icon: (
      <>
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </>
    ),
  },
] as const;

const catColor: Record<string, string> = {
  Protect: 'var(--cyan)',
  Optimize: 'var(--blue)',
  Grow: 'var(--green)',
};

export default async function SolutionsPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          The Platform
        </div>
        <h1>
          10 agents. Every layer of your
          <br />
          <em>Amazon business.</em>
        </h1>
        <p className="lead">
          One intelligent platform where every agent shares context — so when Account Guardian sees
          a policy risk, Listing Builder doesn't ship a change that makes it worse.
        </p>
        <div className="page-hero-actions">
          <a href="https://go.sydon.ai/nova" className="btn btn-primary">
            Start free — no credit card →
          </a>
          <a href="https://go.sydon.ai/compliance" className="btn btn-ghost">
            Get compliance checklist
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="page-section">
        <div className="stat-row">
          <div className="stat-cell">
            <div className="num">
              <em>10</em>
            </div>
            <div className="lbl">Autonomous agents working in parallel</div>
          </div>
          <div className="stat-cell">
            <div className="num">
              47<em>pt</em>
            </div>
            <div className="lbl">Compliance checklist, scanned hourly</div>
          </div>
          <div className="stat-cell">
            <div className="num">
              24<em>/7</em>
            </div>
            <div className="lbl">Account Guardian, never sleeps</div>
          </div>
          <div className="stat-cell">
            <div className="num">∞</div>
            <div className="lbl">SKUs monitored per account</div>
          </div>
        </div>

        {/* Agent grid */}
        <div style={{ marginBottom: 24 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>
            <span className="dot" />
            All agents
          </div>
          <h2 className="page-h2">
            Every layer of your business. <em>Acting, not alerting.</em>
          </h2>
          <p className="page-intro">
            Each agent is autonomous — it takes action, not just alerts. Together they share one
            intelligence layer where every signal informs every decision.
          </p>
        </div>

        <div className="feature-grid">
          {AGENTS.map((agent) => (
            <div key={agent.name} className="feature-card">
              <div className="feature-cat" style={{ color: catColor[agent.cat] }}>
                {agent.cat}
              </div>
              <div className="feature-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  {agent.icon}
                </svg>
              </div>
              <h3>{agent.name}</h3>
              <p>{agent.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intelligence Layer */}
      <div className="page-section-alt">
        <div className="page-section-inner">
          <div className="two-col">
            <div className="two-col-text">
              <div className="section-label" style={{ marginBottom: 12 }}>
                <span className="dot" />
                Shared intelligence
              </div>
              <h2>
                One brain. <em>Nine agents.</em>
              </h2>
              <p>
                Most tools operate in silos. Sydon's agents share a single intelligence layer — your
                account health data, pricing signals, and ad performance all flow into every
                decision simultaneously.
              </p>
              <ul>
                <li>Account Guardian flags a policy warning → Listing Builder holds its update</li>
                <li>PPC Strategist detects a traffic spike → Dynamic Pricer raises the floor</li>
                <li>Review Guardian spots a quality issue → Fulfillment Manager flags the SKU</li>
                <li>Profit Intelligence recalculates → all agents re-prioritize automatically</li>
              </ul>
              <a
                href="https://go.sydon.ai/nova"
                className="btn btn-primary"
                style={{ display: 'inline-flex', marginTop: 8 }}
              >
                Start free →
              </a>
            </div>
            <div
              className="two-col-visual"
              style={{
                padding: '32px',
                background: 'var(--bg-dark)',
                borderColor: 'var(--line-dark)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  color: 'var(--ink-faint)',
                  marginBottom: 16,
                }}
              >
                Sydon · Live activity
              </div>
              {[
                {
                  agent: 'Account Guardian',
                  action: 'Policy scan complete — no flags',
                  status: 'ok',
                  time: '1m',
                },
                {
                  agent: 'Dynamic Pricer',
                  action: 'Won Buy Box on 14 SKUs · margin preserved',
                  status: 'ok',
                  time: '8m',
                },
                {
                  agent: 'PPC Strategist',
                  action: 'Paused 3 under-performing keywords',
                  status: 'warn',
                  time: '12m',
                },
                {
                  agent: 'Listing Builder',
                  action: 'Re-optimized 6 titles · projected +12% CTR',
                  status: 'ok',
                  time: '15m',
                },
              ].map((item) => (
                <div
                  key={item.agent}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    padding: '10px 0',
                    borderBottom: '1px solid var(--line-dark)',
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background:
                        item.status === 'ok' ? 'rgba(16,185,129,0.15)' : 'rgba(251,191,36,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={item.status === 'ok' ? 'var(--green)' : '#fbbf24'}
                      strokeWidth="2.5"
                    >
                      {item.status === 'ok' ? (
                        <polyline points="20 6 9 17 4 12" />
                      ) : (
                        <>
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 11,
                        color: 'var(--ink-faint)',
                        fontFamily: 'var(--mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: 2,
                      }}
                    >
                      {item.agent}
                    </div>
                    <div style={{ fontSize: 13, color: '#e2e8f0', fontWeight: 500 }}>
                      {item.action}
                    </div>
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--ink-faint)', flexShrink: 0 }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="page-cta">
        <h2>
          Your Amazon business.
          <br />
          <em>Almost on autopilot.</em>
        </h2>
        <p>
          Connect via SP-API in minutes. Account Guardian scans your full catalog instantly. Free
          forever — no credit card, no sales call.
        </p>
        <div className="page-cta-actions">
          <a href="https://go.sydon.ai/nova" className="btn btn-primary">
            Start free — no credit card →
          </a>
          <a href="https://go.sydon.ai/compliance" className="btn btn-ghost">
            Get the compliance checklist
          </a>
        </div>
        <div className="trust-row-sm" style={{ marginTop: 20 }}>
          <span>✓ Free forever plan</span>
          <span>✓ No credit card</span>
          <span>✓ SP-API certified</span>
          <span>✓ SOC 2 Type II</span>
        </div>
      </div>
    </PageLayout>
  );
}
