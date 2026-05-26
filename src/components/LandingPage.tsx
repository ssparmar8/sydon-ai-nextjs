'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import '@/styles/landing.css';

type PricingPeriod = 'monthly' | 'annual';
type AgentFilter = 'all' | 'protect' | 'optimize' | 'grow';
type IntCat = 'all' | 'commerce' | 'finance' | 'marketing' | 'ops';

const PRICES: Record<PricingPeriod, { free: number; seller: number; agency: number }> = {
  monthly: { free: 0, seller: 149, agency: 699 },
  annual: { free: 0, seller: 126, agency: 594 },
};

function agentCls(filter: AgentFilter, cat: Exclude<AgentFilter, 'all'>, base: string): string {
  return filter === 'all' || filter === cat ? base : `${base} hidden`;
}

function isIntVisible(cat: IntCat, name: string, activeCat: IntCat, search: string): boolean {
  const matchesCat = activeCat === 'all' || activeCat === cat;
  const q = search.toLowerCase().trim();
  return matchesCat && (!q || name.includes(q));
}

function intCls(
  cat: IntCat,
  name: string,
  activeCat: IntCat,
  search: string,
  base: string,
): string {
  return isIntVisible(cat, name, activeCat, search) ? base : `${base} hidden`;
}

const INT_DATA = [
  { id: 'amazon', cat: 'commerce' as IntCat, name: 'amazon seller central core' },
  { id: 'quickbooks', cat: 'finance' as IntCat, name: 'quickbooks accounting' },
  { id: 'googleads', cat: 'marketing' as IntCat, name: 'google ads external traffic' },
  { id: 'shipstation', cat: 'ops' as IntCat, name: 'shipstation fulfillment shipping' },
  { id: 'stripe', cat: 'finance' as IntCat, name: 'stripe payments d2c' },
  { id: 'klaviyo', cat: 'marketing' as IntCat, name: 'klaviyo email sms' },
  { id: 'hubspot', cat: 'marketing' as IntCat, name: 'hubspot crm b2b' },
  { id: 'keepa', cat: 'commerce' as IntCat, name: 'keepa price tracking' },
  { id: 'shopify', cat: 'commerce' as IntCat, name: 'shopify d2c storefront' },
  { id: 'tiktok', cat: 'commerce' as IntCat, name: 'tiktok shop social' },
  { id: 'slack', cat: 'ops' as IntCat, name: 'slack notifications team' },
  { id: 'zapier', cat: 'ops' as IntCat, name: 'zapier automation api' },
];

export default function LandingPage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [pricingPeriod, setPricingPeriod] = useState<PricingPeriod>('monthly');
  const [agentFilter, setAgentFilter] = useState<AgentFilter>('all');
  const [intSearch, setIntSearch] = useState('');
  const [intCat, setIntCat] = useState<IntCat>('all');

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollPct(pct);
      setNavScrolled(h.scrollTop > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    for (const el of document.querySelectorAll('.reveal:not(.in)')) {
      io.observe(el);
    }
    return () => {
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const faqs = document.querySelectorAll('details.faq');
    const cleanups: (() => void)[] = [];
    for (const d of faqs) {
      const handler = () => {
        if ((d as HTMLDetailsElement).open) {
          for (const o of faqs) {
            if (o !== d) {
              (o as HTMLDetailsElement).open = false;
            }
          }
        }
      };
      d.addEventListener('toggle', handler);
      cleanups.push(() => {
        d.removeEventListener('toggle', handler);
      });
    }
    return () => {
      for (const fn of cleanups) {
        fn();
      }
    };
  }, []);

  const prices = PRICES[pricingPeriod];
  const periodLabel = pricingPeriod === 'annual' ? ' / mo, billed yearly' : ' / month';

  const visibleIntCount = INT_DATA.filter((i) =>
    isIntVisible(i.cat, i.name, intCat, intSearch),
  ).length;

  return (
    <div className="landing">
      {/* Shared SVG gradient defs */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="petalGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="60%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
          <linearGradient id="sparkFillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="connLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#4338ca" />
          </linearGradient>
        </defs>
      </svg>

      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      {/* Announcement bar */}
      <div className="announce">
        <div className="announce-inner">
          <span className="pulse" />
          Sydon v2.0 is live — fully compliant with Amazon&apos;s March 2026 Agent Policy
          <a href="#">Read the announcement →</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={navScrolled ? 'scrolled' : ''}>
        <a href="#" className="logo-link">
          <img src="/logo.png" alt="sydon" className="logo-img" />
        </a>
        <div className="nav-links">
          <a href="#agents">Agents</a>
          <a href="#how">How it works</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-cta">
          <ThemeToggle />
          <a href="#" className="btn btn-ghost btn-sm">
            Sign in
          </a>
          <a href="#pricing" className="btn btn-primary btn-sm">
            Start free →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="mesh a" />
          <div className="mesh b" />
          <div className="mesh c" />
        </div>
        <div className="hero-grid">
          <div className="hero-top">
            <div>
              <div className="eyebrow reveal in">
                <span className="eyebrow-pill">New</span>
                <span>10 autonomous AI agents · One platform</span>
              </div>
              <h1 className="headline reveal in d1">
                Stop managing your
                <br />
                Amazon business.
                <br />
                Let the <em>agents</em> <span className="strike">manage</span>
                <em>run it.</em>
              </h1>
              <p className="hero-sub reveal in d2">
                Ten autonomous AI agents covering{' '}
                <b>
                  product research, listing optimization, PPC, repricing, account protection, and
                  profit analytics
                </b>{' '}
                — sharing one intelligence layer where every signal feeds every decision. Not
                alerts. Action.
              </p>
              <div className="hero-actions reveal in d3">
                <a href="#pricing" className="btn btn-primary">
                  Start free — no credit card →
                </a>
                <a href="#how" className="btn btn-ghost">
                  See how it works
                </a>
              </div>
              <div className="trust-row reveal in d4">
                <div className="trust-avatars">
                  <div className="av">JR</div>
                  <div className="av">MK</div>
                  <div className="av">AC</div>
                  <div className="av">DP</div>
                </div>
                <div>
                  <div className="stars">★★★★★</div>
                  <div style={{ fontSize: '12px', color: 'var(--ink-faint)', marginTop: '2px' }}>
                    Trusted by 2,400+ Amazon sellers
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal in d3">
              <div className="dash-preview">
                <div className="dash-head">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="dash-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="dash-title">Sydon · Live activity</span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '10px',
                      color: 'var(--green)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        background: 'var(--green)',
                        borderRadius: '50%',
                        boxShadow: '0 0 8px var(--green)',
                        animation: 'livePulse 2s infinite',
                      }}
                    />
                    LIVE
                  </span>
                </div>

                <div className="live-feed">
                  <div className="feed-item">
                    <div className="feed-ico">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div className="feed-body">
                      <div className="feed-agent">PPC Strategist</div>
                      <div className="feed-action">
                        Paused 3 underperforming keywords · saving $42/day
                      </div>
                    </div>
                    <span className="feed-time">now</span>
                  </div>
                  <div className="feed-item">
                    <div className="feed-ico warn">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <div className="feed-body">
                      <div className="feed-agent">Account Guardian</div>
                      <div className="feed-action">
                        Risk detected on ASIN B08X · awaiting approval
                      </div>
                    </div>
                    <span className="feed-time">2m</span>
                  </div>
                  <div className="feed-item">
                    <div className="feed-ico ok">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="feed-body">
                      <div className="feed-agent">Dynamic Pricer</div>
                      <div className="feed-action">Won Buy Box on 14 SKUs · margin preserved</div>
                    </div>
                    <span className="feed-time">8m</span>
                  </div>
                  <div className="feed-item">
                    <div className="feed-ico">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div className="feed-body">
                      <div className="feed-agent">Listing Builder</div>
                      <div className="feed-action">Re-optimized 6 titles · projected +12% CTR</div>
                    </div>
                    <span className="feed-time">15m</span>
                  </div>
                </div>

                <div className="dash-stats">
                  <div className="dash-stat">
                    <div className="v pos">+$12.4k</div>
                    <div className="l">This week</div>
                  </div>
                  <div className="dash-stat">
                    <div className="v">14.2%</div>
                    <div className="l">ACoS</div>
                  </div>
                  <div className="dash-stat">
                    <div className="v">98</div>
                    <div className="l">Health score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-stats reveal in d5">
            <div className="stat">
              <div className="stat-num">
                <em>10</em>
              </div>
              <div className="stat-label">Autonomous agents working in parallel</div>
            </div>
            <div className="stat">
              <div className="stat-num">
                47<em>pt</em>
              </div>
              <div className="stat-label">Compliance checklist, scanned hourly</div>
            </div>
            <div className="stat">
              <div className="stat-num">
                24<em>/</em>7
              </div>
              <div className="stat-label">Account Guardian, never sleeps</div>
            </div>
            <div className="stat">
              <div className="stat-num">∞</div>
              <div className="stat-label">SKUs monitored per account</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="marquee-section">
        <div className="marquee-label">Powering Amazon brands from launch to nine figures</div>
        <div className="marquee">
          <div className="marquee-track">
            {[
              'Northwind Co',
              'Aurora Labs',
              'Marblefield',
              'Vellum & Vine',
              'Holdfast',
              'Cascadia Goods',
              'Riverstone',
              'Halcyon',
              'Northwind Co',
              'Aurora Labs',
              'Marblefield',
              'Vellum & Vine',
              'Holdfast',
              'Cascadia Goods',
              'Riverstone',
              'Halcyon',
            ].map((brand, i) => (
              <span key={i} className="brand">
                <span className="brand-dot" />
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="agents block" id="agents">
        <div className="container">
          <div className="agents-head">
            <div className="agents-meta">
              <div className="section-label reveal">
                <span className="dot" />
                01 · The workforce
              </div>
              <h2 className="reveal d1">
                Ten agents. Every layer of your business. <em>Acting, not alerting.</em>
              </h2>
              <p className="section-intro reveal d2">
                Most sellers pay for tools that don&apos;t know the others exist. Sydon&apos;s
                agents share one intelligence layer — every signal feeds every decision,
                automatically.
              </p>
            </div>
            <div className="reveal d3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className="agent-filters">
                {(['all', 'protect', 'optimize', 'grow'] as const).map((cat) => (
                  <button
                    key={cat}
                    className={agentFilter === cat ? 'active' : ''}
                    onClick={() => {
                      setAgentFilter(cat);
                    }}
                  >
                    {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}{' '}
                    <span className="count">{cat === 'all' ? 9 : 3}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="agent-bento">
            {/* Account Guardian (2x2) */}
            <div
              className={agentCls(agentFilter, 'protect', 'agent size-lg reveal')}
              data-cat="protect"
            >
              <div className="agent-top">
                <div className="agent-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="agent-cat-pill">
                  <span className="cat-dot" />
                  Protect
                </span>
              </div>
              <h3 className="agent-name">Account Guardian</h3>
              <p className="agent-desc">
                Acts on 47 risk factors automatically. Suppressed listings, IP complaints,
                restricted ASINs — flagged and resolved before suspension. Never wake up to a frozen
                account again.
              </p>
              <div className="agent-activity">
                <div className="activity-head">
                  <span className="activity-label">Last 24 hours</span>
                  <span className="activity-live">LIVE</span>
                </div>
                <div className="activity-rows">
                  <div className="activity-row">
                    <span className="check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="label">Resolved IP complaint on ASIN B08X</span>
                    <span className="val">2h ago</span>
                  </div>
                  <div className="activity-row">
                    <span className="check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="label">Flagged 3 keyword policy risks</span>
                    <span className="val">6h ago</span>
                  </div>
                  <div className="activity-row pending">
                    <span className="check" />
                    <span className="label">Scanning category restrictions…</span>
                    <span className="val">now</span>
                  </div>
                </div>
              </div>
              <div className="agent-foot">
                <span className="agent-status">Actively Scanning</span>
                <span className="agent-tag">A-01 →</span>
              </div>
            </div>

            {/* Profit Intelligence (2x1) */}
            <div
              className={agentCls(agentFilter, 'optimize', 'agent size-md reveal d1')}
              data-cat="optimize"
            >
              <div className="agent-top">
                <div className="agent-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                </div>
                <span className="agent-cat-pill">
                  <span className="cat-dot" />
                  Optimize
                </span>
              </div>
              <h3 className="agent-name">Profit Intelligence</h3>
              <p className="agent-desc">
                Real-time true profit across SKUs, fees, ads, returns. Every dollar — to the penny.
              </p>
              <div className="agent-spark">
                <svg viewBox="0 0 200 36" preserveAspectRatio="none">
                  <path
                    className="spark-fill"
                    d="M0,28 L12,24 L24,26 L36,20 L48,22 L60,16 L72,18 L84,12 L96,14 L108,8 L120,10 L132,6 L144,4 L156,8 L168,5 L180,3 L192,5 L200,2 L200,36 L0,36 Z"
                  />
                  <path
                    className="spark-line"
                    d="M0,28 L12,24 L24,26 L36,20 L48,22 L60,16 L72,18 L84,12 L96,14 L108,8 L120,10 L132,6 L144,4 L156,8 L168,5 L180,3 L192,5 L200,2"
                  />
                </svg>
              </div>
              <div className="agent-foot">
                <span className="agent-status">Tracking · +$12.4k wk</span>
                <span className="agent-tag">A-02 →</span>
              </div>
            </div>

            {/* PPC Strategist (1x1) */}
            <div
              className={agentCls(agentFilter, 'optimize', 'agent size-sm reveal d2')}
              data-cat="optimize"
            >
              <div className="agent-top">
                <div className="agent-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <span className="agent-arrow">↗</span>
              </div>
              <h3 className="agent-name">PPC Strategist</h3>
              <p className="agent-desc">Pauses waste. Scales winners. Defends ACoS.</p>
              <div className="agent-mini-stat">
                <span className="v">14.2%</span>
                <span className="l">
                  Avg ACoS
                  <br />
                  across portfolio
                </span>
              </div>
            </div>

            {/* Dynamic Pricer (1x1) */}
            <div
              className={agentCls(agentFilter, 'optimize', 'agent size-sm reveal d3')}
              data-cat="optimize"
            >
              <div className="agent-top">
                <div className="agent-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="agent-arrow">↗</span>
              </div>
              <h3 className="agent-name">Dynamic Pricer</h3>
              <p className="agent-desc">Wins the Buy Box without giving up margin.</p>
              <div className="agent-mini-stat">
                <span className="v">94%</span>
                <span className="l">
                  Buy Box win
                  <br />
                  rate (7-day)
                </span>
              </div>
            </div>

            {/* Listing Builder (2x1) */}
            <div className={agentCls(agentFilter, 'grow', 'agent size-md reveal')} data-cat="grow">
              <div className="agent-top">
                <div className="agent-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <span className="agent-cat-pill">
                  <span className="cat-dot" />
                  Grow
                </span>
              </div>
              <h3 className="agent-name">Listing Builder</h3>
              <p className="agent-desc">
                AI-written titles, bullets, descriptions, and backend keywords. Re-optimized when
                your rankings shift or competitors update theirs.
              </p>
              <div className="agent-foot">
                <span className="agent-status">Rewriting · 6 listings today</span>
                <span className="agent-tag">A-04 →</span>
              </div>
            </div>

            {/* Review Guardian (1x1) */}
            <div
              className={agentCls(agentFilter, 'protect', 'agent size-sm reveal d1')}
              data-cat="protect"
            >
              <div className="agent-top">
                <div className="agent-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <span className="agent-arrow">↗</span>
              </div>
              <h3 className="agent-name">Review Guardian</h3>
              <p className="agent-desc">Catches negative review patterns early.</p>
              <div className="agent-mini-stat">
                <span className="v">4.7★</span>
                <span className="l">
                  Avg rating
                  <br />
                  +0.3 since launch
                </span>
              </div>
            </div>

            {/* Product Scout (1x1) */}
            <div
              className={agentCls(agentFilter, 'grow', 'agent size-sm reveal d2')}
              data-cat="grow"
            >
              <div className="agent-top">
                <div className="agent-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <span className="agent-arrow">↗</span>
              </div>
              <h3 className="agent-name">Product Scout</h3>
              <p className="agent-desc">Finds white-space from real demand signals.</p>
              <div className="agent-mini-stat">
                <span className="v">23</span>
                <span className="l">
                  Opportunities
                  <br />
                  surfaced this mo.
                </span>
              </div>
            </div>

            {/* Fulfillment Manager (1x1) */}
            <div
              className={agentCls(agentFilter, 'optimize', 'agent size-sm reveal d3')}
              data-cat="optimize"
            >
              <div className="agent-top">
                <div className="agent-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <span className="agent-arrow">↗</span>
              </div>
              <h3 className="agent-name">Fulfillment Manager</h3>
              <p className="agent-desc">Routes FBA / FBM / 3PL by velocity.</p>
              <div className="agent-mini-stat">
                <span className="v">0</span>
                <span className="l">
                  Stranded units
                  <br />
                  last 30 days
                </span>
              </div>
            </div>

            {/* Document Intelligence (2x1) */}
            <div
              className={agentCls(agentFilter, 'protect', 'agent size-md reveal')}
              data-cat="protect"
            >
              <div className="agent-top">
                <div className="agent-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="13" y2="17" />
                  </svg>
                </div>
                <span className="agent-cat-pill">
                  <span className="cat-dot" />
                  Protect
                </span>
              </div>
              <h3 className="agent-name">Document Intelligence</h3>
              <p className="agent-desc">
                Reads invoices, GTINs, brand registry filings, and supplier docs. Prepares appeal
                documentation, keeps records audit-ready.
              </p>
              <div className="agent-foot">
                <span className="agent-status">Processing · 142 docs indexed</span>
                <span className="agent-tag">A-09 →</span>
              </div>
            </div>
          </div>

          <div className="agents-connect reveal d2">
            <div className="connect-left">
              <div className="connect-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="18" r="3" />
                  <line x1="9" y1="6" x2="15" y2="6" />
                  <line x1="6" y1="9" x2="6" y2="15" />
                  <line x1="18" y1="9" x2="18" y2="15" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                  <line x1="8.1" y1="8.1" x2="15.9" y2="15.9" strokeDasharray="2 2" />
                </svg>
              </div>
              <div className="connect-text">
                <strong>Every agent talks to the next.</strong>
                <span>
                  A Buy Box loss informs the repricer · which informs PPC · which informs the
                  listing builder.
                </span>
              </div>
            </div>
            <a href="#how" className="connect-link">
              See how it works →
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="block" id="how">
        <div className="container">
          <div className="how-grid">
            <div className="how-sticky">
              <div className="section-label reveal">
                <span className="dot" />
                02 · Onboarding
              </div>
              <h2 className="reveal d1">
                Connect once.
                <br />
                <em>Let the agents run.</em>
              </h2>
              <p className="section-intro reveal d2" style={{ marginBottom: '32px' }}>
                Setup takes less time than reading this section. The agents do the rest — surfacing
                what needs fixing and waiting for your approval on anything irreversible.
              </p>
              <div className="reveal d3">
                <a href="#pricing" className="btn btn-primary">
                  Get started — free →
                </a>
              </div>
            </div>

            <div className="steps">
              <div className="step reveal">
                <div className="step-num">i</div>
                <div className="step-body">
                  <h3>Connect your Amazon account</h3>
                  <p>
                    One-click OAuth via Amazon SP-API. Enterprise-grade security, scoped
                    permissions, revoke anytime from Seller Central. No passwords stored, ever.
                  </p>
                </div>
              </div>
              <div className="step reveal d1">
                <div className="step-num">ii</div>
                <div className="step-body">
                  <h3>Agents scan your full catalog</h3>
                  <p>
                    Within minutes, all ten agents have indexed your listings, ad campaigns,
                    inventory, financials, and account health. Compliance checklist runs first.
                  </p>
                </div>
              </div>
              <div className="step reveal d2">
                <div className="step-num">iii</div>
                <div className="step-body">
                  <h3>You review. Agents execute.</h3>
                  <p>
                    Agents queue actions by impact — biggest wins surface first. Approve in one
                    click, or let trusted categories run on auto. You stay in command.
                  </p>
                </div>
              </div>
              <div className="step reveal d3">
                <div className="step-num">iv</div>
                <div className="step-body">
                  <h3>Start free. Scale when ready.</h3>
                  <p>
                    Account Guardian is free forever — no credit card. Unlock the rest of the
                    workforce when the numbers make the decision for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations block" id="integrations">
        <div className="container">
          <div className="int-hero">
            <div className="ecosystem reveal">
              <svg className="ecosystem-svg" viewBox="0 0 400 400">
                <circle className="orbit-ring" cx="200" cy="200" r="120" />
                <circle className="orbit-ring" cx="200" cy="200" r="170" />
                <line className="orbit-line" x1="200" y1="200" x2="200" y2="40" />
                <line className="orbit-line" x1="200" y1="200" x2="320" y2="100" />
                <line className="orbit-line" x1="200" y1="200" x2="360" y2="200" />
                <line className="orbit-line" x1="200" y1="200" x2="320" y2="300" />
                <line className="orbit-line" x1="200" y1="200" x2="200" y2="360" />
                <line className="orbit-line" x1="200" y1="200" x2="80" y2="300" />
                <line className="orbit-line" x1="200" y1="200" x2="40" y2="200" />
                <line className="orbit-line" x1="200" y1="200" x2="80" y2="100" />
              </svg>

              <div className="eco-center">
                <svg
                  className="core-mark"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20"
                    cy="8"
                    rx="5"
                    ry="9"
                    transform="rotate(45 20 8)"
                    fill="white"
                    opacity="0.95"
                  />
                  <ellipse
                    cx="32"
                    cy="20"
                    rx="5"
                    ry="9"
                    transform="rotate(135 32 20)"
                    fill="white"
                    opacity="0.95"
                  />
                  <ellipse
                    cx="20"
                    cy="32"
                    rx="5"
                    ry="9"
                    transform="rotate(225 20 32)"
                    fill="white"
                    opacity="0.95"
                  />
                  <ellipse
                    cx="8"
                    cy="20"
                    rx="5"
                    ry="9"
                    transform="rotate(315 8 20)"
                    fill="white"
                    opacity="0.95"
                  />
                  <path d="M20 16 L24 20 L20 24 L16 20 Z" fill="#0a0e1a" />
                </svg>
                <span className="core-label">Sydon</span>
              </div>

              <div className="eco-node pos-n" title="Amazon">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="3" y="6" width="26" height="18" rx="3" fill="#ff9900" />
                  <path
                    d="M8 18 Q16 24 24 18"
                    stroke="#232f3e"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="22" cy="20" r="1.5" fill="#232f3e" />
                </svg>
                <span className="tip">Amazon Seller Central</span>
              </div>
              <div className="eco-node pos-ne" title="QuickBooks">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="13" fill="#2ca01c" />
                  <path
                    d="M16 8v16M10 11.5h12"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="tip">QuickBooks</span>
              </div>
              <div className="eco-node pos-e" title="Google Ads">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 4 L28 24 L20 24 L12 10 Z" fill="#fbbc04" />
                  <path d="M4 24 L16 4 L20 10 L10 24 Z" fill="#4285f4" />
                  <circle cx="20" cy="24" r="3" fill="#34a853" />
                </svg>
                <span className="tip">Google Ads</span>
              </div>
              <div className="eco-node pos-se" title="ShipStation">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="10" width="20" height="12" rx="2" fill="#0066b2" />
                  <polygon points="24,12 28,16 24,20" fill="#0066b2" />
                  <circle cx="9" cy="24" r="2.5" fill="#1a1f2e" />
                  <circle cx="21" cy="24" r="2.5" fill="#1a1f2e" />
                </svg>
                <span className="tip">ShipStation</span>
              </div>
              <div className="eco-node pos-s" title="Stripe">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="3" y="6" width="26" height="20" rx="4" fill="#635bff" />
                  <path
                    d="M11 14c0-1 1-1.5 2.5-1.5s3 .5 4 1l1-3c-1.5-.7-3-1-5-1-3 0-5 1.5-5 4 0 4 6 3 6 5 0 1-1 1.5-2.5 1.5-1.8 0-3.5-.7-4.5-1.3l-1 3.3c1.5.8 3.5 1.3 5.5 1.3 3.2 0 5.5-1.5 5.5-4.2 0-4-6-3-6-5z"
                    fill="white"
                  />
                </svg>
                <span className="tip">Stripe</span>
              </div>
              <div className="eco-node pos-sw" title="Klaviyo">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="6" fill="#1a1f2e" />
                  <path d="M16 8 L24 20 L20 20 L16 14 L12 20 L8 20 Z" fill="white" />
                  <circle cx="16" cy="23" r="2" fill="white" />
                </svg>
                <span className="tip">Klaviyo</span>
              </div>
              <div className="eco-node pos-w" title="HubSpot">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle cx="22" cy="20" r="6" fill="none" stroke="#ff7a59" strokeWidth="2.5" />
                  <circle cx="22" cy="20" r="2" fill="#ff7a59" />
                  <line x1="22" y1="14" x2="22" y2="8" stroke="#ff7a59" strokeWidth="2.5" />
                  <circle cx="22" cy="6" r="2.5" fill="none" stroke="#ff7a59" strokeWidth="2.5" />
                  <line x1="16" y1="20" x2="8" y2="20" stroke="#ff7a59" strokeWidth="2.5" />
                </svg>
                <span className="tip">HubSpot</span>
              </div>
              <div className="eco-node pos-nw" title="Keepa">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="6" fill="#e94646" />
                  <path
                    d="M6 22 L11 16 L15 19 L21 11 L26 13"
                    stroke="white"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="26" cy="13" r="2" fill="white" />
                </svg>
                <span className="tip">Keepa</span>
              </div>
            </div>

            <div className="int-hero-content">
              <div className="section-label reveal">
                <span className="dot" />
                03 · Integrations
              </div>
              <h2 className="reveal d1">
                Keep the tools you love. <em>Replace the ones that don&apos;t talk.</em>
              </h2>
              <p className="section-intro reveal d2">
                Sydon connects to the rest of your stack so context flows both ways. Your accounting
                sees your ad spend. Your CRM sees your reviews.{' '}
                <b style={{ color: 'var(--ink)' }}>Everything finally lines up.</b>
              </p>
              <div className="int-tags reveal d3">
                <span className="int-tag">
                  <span className="tag-dot" />8 native integrations
                </span>
                <span className="int-tag">
                  <span className="tag-dot" style={{ background: 'var(--blue)' }} />
                  Zapier · 5000+ apps
                </span>
                <span className="int-tag">
                  <span className="tag-dot" style={{ background: '#7c3aed' }} />
                  Open REST API
                </span>
              </div>
            </div>
          </div>

          <div className="int-controls reveal">
            <div className="int-search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search integrations…"
                value={intSearch}
                onChange={(e) => {
                  setIntSearch(e.target.value);
                }}
              />
            </div>
            <div className="int-cat-tabs">
              {(['all', 'commerce', 'finance', 'marketing', 'ops'] as const).map((cat) => (
                <button
                  key={cat}
                  className={intCat === cat ? 'active' : ''}
                  onClick={() => {
                    setIntCat(cat);
                  }}
                >
                  {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <div className="int-count-pill">
              <b>{visibleIntCount}</b> integrations
            </div>
          </div>

          <div className="int-bento">
            {/* Amazon (featured 2x2) */}
            <div
              className={intCls(
                'commerce',
                'amazon seller central core',
                intCat,
                intSearch,
                'int featured reveal',
              )}
              data-cat="commerce"
              data-name="amazon seller central core"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect x="3" y="6" width="26" height="18" rx="3" fill="#ff9900" />
                    <path
                      d="M8 18 Q16 24 24 18"
                      stroke="#232f3e"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx="22" cy="20" r="1.5" fill="#232f3e" />
                  </svg>
                </div>
                <span className="int-badge connected">Connected · core</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Commerce platform</span>
                <h3 className="int-name">Amazon Seller Central</h3>
              </div>
              <p className="int-desc">
                The foundation. SP-API delivers orders, inventory, financials, brand registry, FBA
                data, and ad metrics — all in real time. Every other agent and integration builds on
                top of this connection.
              </p>
              <div className="int-flow">
                <div className="flow-row">
                  <span className="from">Orders</span>
                  <span className="arrow">→</span>
                  <span className="label">Reconciled in QuickBooks</span>
                </div>
                <div className="flow-row">
                  <span className="from">Ad spend</span>
                  <span className="arrow">→</span>
                  <span className="label">Synced to Google Ads</span>
                </div>
                <div className="flow-row">
                  <span className="from">Buyer signals</span>
                  <span className="arrow">→</span>
                  <span className="label">Trigger Klaviyo flows</span>
                </div>
              </div>
              <div className="int-sync">
                <span>SYNC · LIVE · LAST 12s AGO</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* QuickBooks */}
            <div
              className={intCls(
                'finance',
                'quickbooks accounting',
                intCat,
                intSearch,
                'int reveal d1',
              )}
              data-cat="finance"
              data-name="quickbooks accounting"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="13" fill="#2ca01c" />
                    <path
                      d="M16 8v16M10 11.5h12"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="int-badge connected">Live</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Finance</span>
                <h3 className="int-name">QuickBooks</h3>
              </div>
              <p className="int-desc">Auto-categorized Amazon fees, ad spend reconciliation.</p>
              <div className="int-sync">
                <span>2-WAY · NIGHTLY</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* Google Ads */}
            <div
              className={intCls(
                'marketing',
                'google ads external traffic',
                intCat,
                intSearch,
                'int reveal d2',
              )}
              data-cat="marketing"
              data-name="google ads external traffic"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path d="M16 4 L28 24 L20 24 L12 10 Z" fill="#fbbc04" />
                    <path d="M4 24 L16 4 L20 10 L10 24 Z" fill="#4285f4" />
                    <circle cx="20" cy="24" r="3" fill="#34a853" />
                  </svg>
                </div>
                <span className="int-badge connected">Live</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Marketing</span>
                <h3 className="int-name">Google Ads</h3>
              </div>
              <p className="int-desc">External traffic + brand-building campaigns.</p>
              <div className="int-sync">
                <span>2-WAY · HOURLY</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* ShipStation */}
            <div
              className={intCls(
                'ops',
                'shipstation fulfillment shipping',
                intCat,
                intSearch,
                'int reveal',
              )}
              data-cat="ops"
              data-name="shipstation fulfillment shipping"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="10" width="20" height="12" rx="2" fill="#0066b2" />
                    <polygon points="24,12 28,16 24,20" fill="#0066b2" />
                    <circle cx="9" cy="24" r="2.5" fill="#1a1f2e" />
                    <circle cx="21" cy="24" r="2.5" fill="#1a1f2e" />
                  </svg>
                </div>
                <span className="int-badge connected">Live</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Operations</span>
                <h3 className="int-name">ShipStation</h3>
              </div>
              <p className="int-desc">FBM routing, label generation, fulfillment.</p>
              <div className="int-sync">
                <span>2-WAY · REALTIME</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* Stripe */}
            <div
              className={intCls(
                'finance',
                'stripe payments d2c',
                intCat,
                intSearch,
                'int reveal d1',
              )}
              data-cat="finance"
              data-name="stripe payments d2c"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect x="3" y="6" width="26" height="20" rx="4" fill="#635bff" />
                    <path
                      d="M11 14c0-1 1-1.5 2.5-1.5s3 .5 4 1l1-3c-1.5-.7-3-1-5-1-3 0-5 1.5-5 4 0 4 6 3 6 5 0 1-1 1.5-2.5 1.5-1.8 0-3.5-.7-4.5-1.3l-1 3.3c1.5.8 3.5 1.3 5.5 1.3 3.2 0 5.5-1.5 5.5-4.2 0-4-6-3-6-5z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="int-badge connected">Live</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Payments</span>
                <h3 className="int-name">Stripe</h3>
              </div>
              <p className="int-desc">Off-Amazon payments — D2C, wholesale, subs.</p>
              <div className="int-sync">
                <span>2-WAY · REALTIME</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* Klaviyo */}
            <div
              className={intCls(
                'marketing',
                'klaviyo email sms',
                intCat,
                intSearch,
                'int reveal d2',
              )}
              data-cat="marketing"
              data-name="klaviyo email sms"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="6" fill="#1a1f2e" />
                    <path d="M16 8 L24 20 L20 20 L16 14 L12 20 L8 20 Z" fill="white" />
                    <circle cx="16" cy="23" r="2" fill="white" />
                  </svg>
                </div>
                <span className="int-badge connected">Live</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Marketing</span>
                <h3 className="int-name">Klaviyo</h3>
              </div>
              <p className="int-desc">Email & SMS triggered by buyer behavior.</p>
              <div className="int-sync">
                <span>1-WAY · REALTIME</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* HubSpot */}
            <div
              className={intCls('marketing', 'hubspot crm b2b', intCat, intSearch, 'int reveal')}
              data-cat="marketing"
              data-name="hubspot crm b2b"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <circle cx="22" cy="20" r="6" fill="none" stroke="#ff7a59" strokeWidth="2.5" />
                    <circle cx="22" cy="20" r="2" fill="#ff7a59" />
                    <line x1="22" y1="14" x2="22" y2="8" stroke="#ff7a59" strokeWidth="2.5" />
                    <circle cx="22" cy="6" r="2.5" fill="none" stroke="#ff7a59" strokeWidth="2.5" />
                    <line x1="16" y1="20" x2="8" y2="20" stroke="#ff7a59" strokeWidth="2.5" />
                  </svg>
                </div>
                <span className="int-badge available">Available</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">CRM</span>
                <h3 className="int-name">HubSpot</h3>
              </div>
              <p className="int-desc">B2B pipeline, wholesale relationships.</p>
              <div className="int-sync">
                <span>2-WAY · 15-MIN</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* Keepa */}
            <div
              className={intCls(
                'commerce',
                'keepa price tracking',
                intCat,
                intSearch,
                'int reveal d1',
              )}
              data-cat="commerce"
              data-name="keepa price tracking"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="6" fill="#e94646" />
                    <path
                      d="M6 22 L11 16 L15 19 L21 11 L26 13"
                      stroke="white"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="26" cy="13" r="2" fill="white" />
                  </svg>
                </div>
                <span className="int-badge connected">Live</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Market data</span>
                <h3 className="int-name">Keepa</h3>
              </div>
              <p className="int-desc">Price history, competitor tracking for repricer.</p>
              <div className="int-sync">
                <span>1-WAY · HOURLY</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* Shopify */}
            <div
              className={intCls(
                'commerce',
                'shopify d2c storefront',
                intCat,
                intSearch,
                'int reveal d2',
              )}
              data-cat="commerce"
              data-name="shopify d2c storefront"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path
                      d="M22 8c-1-2-3-3-5-3-2.5 0-4.5 2-6 5-1 0-2 0.5-2 0.5L7 26l16 2 2-18s-2-1-3-2z"
                      fill="#95bf47"
                    />
                    <path d="M22 8c-1-2-3-3-5-3v23l6 0.5 2-18s-2-1-3-2z" fill="#5e8e3e" />
                    <text
                      x="16"
                      y="22"
                      fontFamily="Arial"
                      fontSize="10"
                      fontWeight="bold"
                      fill="white"
                      textAnchor="middle"
                    >
                      S
                    </text>
                  </svg>
                </div>
                <span className="int-badge soon">Q2 2026</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Commerce</span>
                <h3 className="int-name">Shopify</h3>
              </div>
              <p className="int-desc">D2C storefront unified with your Amazon ops.</p>
              <div className="int-sync">
                <span>WAITLIST OPEN</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* TikTok Shop */}
            <div
              className={intCls(
                'commerce',
                'tiktok shop social',
                intCat,
                intSearch,
                'int reveal d3',
              )}
              data-cat="commerce"
              data-name="tiktok shop social"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="6" fill="#010101" />
                    <path
                      d="M19 7v10c0 2-1.5 3.5-3.5 3.5S12 19 12 17s1.5-3.5 3.5-3.5h1v3h-1c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5V7h3z"
                      fill="#fe2c55"
                    />
                    <path
                      d="M20 7v10c0 2-1.5 3.5-3.5 3.5S13 19 13 17s1.5-3.5 3.5-3.5h1v3h-1c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5V7h3z"
                      fill="#25f4ee"
                      opacity="0.7"
                    />
                    <path
                      d="M19.5 7v10c0 2-1.5 3.5-3.5 3.5s-3.5-1.5-3.5-3.5 1.5-3.5 3.5-3.5h1v3h-1c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5V7h3z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="int-badge soon">Q3 2026</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Social commerce</span>
                <h3 className="int-name">TikTok Shop</h3>
              </div>
              <p className="int-desc">Cross-channel inventory and ad analytics.</p>
              <div className="int-sync">
                <span>WAITLIST OPEN</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* Slack */}
            <div
              className={intCls('ops', 'slack notifications team', intCat, intSearch, 'int reveal')}
              data-cat="ops"
              data-name="slack notifications team"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect x="13" y="4" width="6" height="11" rx="3" fill="#e01e5a" />
                    <rect x="17" y="13" width="11" height="6" rx="3" fill="#36c5f0" />
                    <rect x="13" y="17" width="6" height="11" rx="3" fill="#2eb67d" />
                    <rect x="4" y="13" width="11" height="6" rx="3" fill="#ecb22e" />
                  </svg>
                </div>
                <span className="int-badge connected">Live</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Operations</span>
                <h3 className="int-name">Slack</h3>
              </div>
              <p className="int-desc">Agent alerts and approvals in your team channel.</p>
              <div className="int-sync">
                <span>1-WAY · REALTIME</span>
                <span className="arrow">↗</span>
              </div>
            </div>

            {/* Zapier */}
            <div
              className={intCls('ops', 'zapier automation api', intCat, intSearch, 'int reveal d1')}
              data-cat="ops"
              data-name="zapier automation api"
            >
              <div className="int-head">
                <div className="int-icon">
                  <svg viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="6" fill="#ff4f00" />
                    <circle cx="16" cy="16" r="5" fill="white" />
                    <path
                      d="M16 4v6M16 22v6M4 16h6M22 16h6M8 8l4 4M20 20l4 4M8 24l4-4M20 12l4-4"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="int-badge connected">Live</span>
              </div>
              <div className="int-meta">
                <span className="int-cat">Automation</span>
                <h3 className="int-name">Zapier</h3>
              </div>
              <p className="int-desc">Connect to 5000+ other apps via Zaps.</p>
              <div className="int-sync">
                <span>2-WAY · TRIGGER</span>
                <span className="arrow">↗</span>
              </div>
            </div>
          </div>

          <div className="int-cta-card reveal d2">
            <div className="left">
              <div className="int-cta-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <div>
                <strong>Don&apos;t see your tool?</strong>
                <span className="sub">
                  We ship native integrations monthly — or hook into anything via our open REST API
                  &amp; webhooks.
                </span>
              </div>
            </div>
            <a href="#" className="btn btn-ghost btn-sm">
              Request an integration →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="quote-card reveal">
          <span className="quote-mark">&ldquo;</span>
          <p className="quote-text">
            We replaced four tools and two VAs with Sydon in the first month. The Account Guardian
            alone caught a policy issue that would have cost us our top SKU.{' '}
            <em>It pays for itself before lunch.</em>
          </p>
          <div className="quote-attr">
            <div className="av">JR</div>
            <div className="quote-name">
              <strong>Jordan Reeves</strong>
              <span>Founder, Northwind Co · $4.2M ARR on Amazon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="block" id="pricing">
        <div className="container">
          <div
            className="section-head"
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className="section-label reveal">
              <span className="dot" />
              04 · Pricing
            </div>
            <h2 className="reveal d1" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Pricing that <em>doesn&apos;t punish</em> you for growing.
            </h2>
            <p className="section-intro reveal d2" style={{ marginBottom: '36px' }}>
              One platform, one bill, ten agents — priced the way it should have been the whole
              time.
            </p>
            <div className="pricing-toggle reveal d3">
              <button
                className={pricingPeriod === 'monthly' ? 'active' : ''}
                onClick={() => {
                  setPricingPeriod('monthly');
                }}
              >
                Monthly
              </button>
              <button
                className={pricingPeriod === 'annual' ? 'active' : ''}
                onClick={() => {
                  setPricingPeriod('annual');
                }}
              >
                Annual <span className="save">−15%</span>
              </button>
            </div>
          </div>

          <div className="pricing-grid">
            <div className="price-card reveal">
              <div className="price-tier">Free forever</div>
              <h3 className="price-name">
                Account <em>Guardian</em>
              </h3>
              <div className="price-amount">
                <span className="currency">$</span>
                <span key={`${pricingPeriod}-free`} className="num">
                  {prices.free}
                </span>
                <span className="period">{periodLabel}</span>
              </div>
              <p className="price-tagline">
                For sellers who want to protect their account before committing to anything else.
              </p>
              <ul className="price-features">
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Account health protection
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  47-point risk factor scanning
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Compliance &amp; policy checks
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  SP-API connection
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Community support
                </li>
              </ul>
              <a href="#" className="btn btn-ghost price-cta">
                Start free
              </a>
              <div className="price-foot">No credit card · No time limit</div>
            </div>

            <div className="price-card feature reveal d1">
              <div className="price-tier">For sellers</div>
              <h3 className="price-name">
                The <em>Full Workforce</em>
              </h3>
              <div className="price-amount">
                <span className="currency">$</span>
                <span key={`${pricingPeriod}-seller`} className="num">
                  {prices.seller}
                </span>
                <span className="period">{periodLabel}</span>
              </div>
              <p className="price-tagline">
                For Amazon sellers running and scaling their own business.
              </p>
              <ul className="price-features">
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  All 10 autonomous agents
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Full platform access
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Automated actions with approval
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Profit intelligence dashboard
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Priority human support
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  14-day full trial
                </li>
              </ul>
              <a href="#" className="btn btn-primary price-cta">
                Start free trial →
              </a>
              <div className="price-foot">Cancel anytime</div>
            </div>

            <div className="price-card reveal d2">
              <div className="price-tier">For agencies</div>
              <h3 className="price-name">
                For <em>Agencies</em>
              </h3>
              <div className="price-amount">
                <span className="currency">$</span>
                <span key={`${pricingPeriod}-agency`} className="num">
                  {prices.agency}
                </span>
                <span className="period">{periodLabel}</span>
              </div>
              <p className="price-tagline">
                For agencies managing multiple seller accounts under one roof.
              </p>
              <ul className="price-features">
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  All 10 agents per account
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Up to 20 accounts · $1,199 for 50
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Unified agency dashboard
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Client-level reporting
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Dedicated onboarding
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Slack-connect support
                </li>
              </ul>
              <a href="#" className="btn btn-ghost price-cta">
                Schedule a call →
              </a>
              <div className="price-foot">White-glove migration included</div>
            </div>
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: '36px',
              fontSize: '13px',
              color: 'var(--ink-faint)',
            }}
          >
            All plans connect via Amazon SP-API · Fully compliant with Amazon&apos;s March 2026
            Agent Policy
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="block"
        id="faq"
        style={{
          background: 'var(--bg-2)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="container">
          <div className="faq-wrap">
            <div
              className="section-head"
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div className="section-label reveal">
                <span className="dot" />
                05 · FAQ
              </div>
              <h2 className="reveal d1" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                The honest <em>answers.</em>
              </h2>
            </div>

            <div className="faq-list">
              <details className="faq reveal" open>
                <summary>
                  How is this different from Helium 10 + Keepa + QuickBooks together?
                </summary>
                <div className="answer">
                  Those tools don&apos;t talk to each other. You see seven dashboards, copy numbers
                  between them, and still miss the signal. Sydon&apos;s agents share one
                  intelligence layer — so when Account Guardian sees a policy risk, the Listing
                  Builder doesn&apos;t ship a change that makes it worse.
                </div>
              </details>
              <details className="faq reveal d1">
                <summary>How quickly will I see results?</summary>
                <div className="answer">
                  Account Guardian starts scanning the moment you connect — most sellers see their
                  first risk surfaced within minutes. PPC optimization and listing improvements
                  surface within your first week as the agents finish indexing your catalog.
                </div>
              </details>
              <details className="faq reveal d2">
                <summary>What happens to my data if I cancel?</summary>
                <div className="answer">
                  You own your data completely. Export everything anytime as CSV or JSON, and
                  we&apos;ll help you transition smoothly. No lock-in, no hostage situations. Revoke
                  SP-API access from Seller Central at any moment.
                </div>
              </details>
              <details className="faq reveal d3">
                <summary>Do I have to stop using my other tools?</summary>
                <div className="answer">
                  Not at all. Sydon connects with Seller Central, QuickBooks, ShipStation, Stripe,
                  Klaviyo, HubSpot, Keepa, and Google Ads. Keep your workflows; we read alongside
                  them. Most sellers retire 3–5 redundant tools by month two — on their schedule,
                  not ours.
                </div>
              </details>
              <details className="faq reveal d4">
                <summary>Is this too advanced for smaller sellers?</summary>
                <div className="answer">
                  Sydon scales with your business. Whether you&apos;re at $100K or $10M annually,
                  the platform adapts. Start with the free Account Guardian, unlock more agents as
                  the math justifies it.
                </div>
              </details>
              <details className="faq reveal d5">
                <summary>What Amazon data does Sydon access through SP-API?</summary>
                <div className="answer">
                  The same business data you see in your Seller Central Dashboard — orders,
                  inventory, financial reports, performance metrics, and listing content. We never
                  access buyer personal information. No changes happen without your explicit
                  approval.
                </div>
              </details>
              <details className="faq reveal d6">
                <summary>Are you compliant with Amazon&apos;s new agent policy?</summary>
                <div className="answer">
                  Yes — Sydon was built from day one for Amazon&apos;s March 2026 Agent Policy,
                  including the new transparency, approval, and audit-log requirements. Every agent
                  action is logged, attributable, and reversible.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-mark reveal">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="20"
                cy="8"
                rx="5"
                ry="9"
                transform="rotate(45 20 8)"
                fill="url(#petalGrad)"
              />
              <ellipse
                cx="32"
                cy="20"
                rx="5"
                ry="9"
                transform="rotate(135 32 20)"
                fill="url(#petalGrad)"
              />
              <ellipse
                cx="20"
                cy="32"
                rx="5"
                ry="9"
                transform="rotate(225 20 32)"
                fill="url(#petalGrad)"
              />
              <ellipse
                cx="8"
                cy="20"
                rx="5"
                ry="9"
                transform="rotate(315 8 20)"
                fill="url(#petalGrad)"
              />
              <path d="M20 16 L24 20 L20 24 L16 20 Z" fill="#0a0e1a" />
            </svg>
          </div>
          <div className="cta-eyebrow reveal d1">Get started</div>
          <h2 className="reveal d2">
            Your Amazon business.
            <br />
            <em>Almost on autopilot.</em>
          </h2>
          <p className="cta-sub reveal d3">
            Connect via SP-API in minutes. Account Guardian scans your full catalog instantly. Free
            forever — no credit card, no sales call.
          </p>
          <div className="cta-actions reveal d4">
            <a href="#" className="btn btn-primary">
              Start free
            </a>
            <a href="#" className="cta-text-link">
              Get the compliance checklist
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <div className="cta-trust reveal d5">
            <span>Free forever</span>
            <span>No credit card</span>
            <span>SP-API certified</span>
            <span>SOC 2 Type II</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="foot-inner">
          <div className="foot-headline">
            <h3>
              Ten agents, working in concert,
              <br />
              for one <em>quieter</em> Monday morning.
            </h3>
            <a href="#" className="foot-headline-cta">
              Start free
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          <div className="foot-grid">
            <div className="foot-brand">
              <a href="#" className="logo-link">
                <img src="/logo.png" alt="sydon" className="logo-img" />
              </a>
              <p>
                One intelligent platform for Amazon sellers. Replacing the tool chaos that broke
                your margins.
              </p>
              <a href="#" className="foot-status">
                <span className="status-dot" />
                All systems operational
              </a>
            </div>

            <div className="foot-col">
              <h4>Platform</h4>
              <ul>
                <li>
                  <a href="#agents">Agents</a>
                </li>
                <li>
                  <a href="#how">How it works</a>
                </li>
                <li>
                  <a href="#integrations">Integrations</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#">
                    Changelog <span className="badge new">New</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Compliance Hub</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Case studies</a>
                </li>
                <li>
                  <a href="#">
                    API <span className="badge">v2</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press kit</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="foot-col">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">DPA</a>
                </li>
                <li>
                  <a href="#">SOC 2 report</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <div className="foot-bottom-left">
              <span className="foot-copyright">© 2026 Sydon AI, Inc.</span>
              <div className="foot-bottom-links">
                <a href="#">Cookie settings</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
            <div className="foot-social">
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="foot-brandmark" aria-hidden="true">
            <svg viewBox="0 0 1200 140" preserveAspectRatio="xMidYMid meet">
              <text x="600" y="115" textAnchor="middle" fontSize="160">
                sydon
              </text>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
