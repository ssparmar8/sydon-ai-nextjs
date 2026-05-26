import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'About Us — Sydon',
  description:
    'Built by Amazon sellers for Amazon sellers. Learn about our mission to eliminate the anxiety and uncertainty from selling on Amazon.',
};

const VALUES = [
  {
    num: '01',
    title: 'Intelligence Over Information',
    desc: 'Dashboards full of data are not insights. We build agents that interpret signals, connect the dots across your entire operation, and tell you what to do — not just what happened.',
  },
  {
    num: '02',
    title: 'Proactive Over Reactive',
    desc: "The best intervention is the one that happens before the problem exists. Every Sydon agent is designed to act upstream — catching risks and opportunities before they're visible in your metrics.",
  },
  {
    num: '03',
    title: 'Automation Over Administration',
    desc: 'Amazon sellers should spend their time on strategy, relationships, and growth — not copying numbers between dashboards. We automate the work that has no business being manual.',
  },
  {
    num: '04',
    title: 'Transparency Over Black Boxes',
    desc: 'Every action an agent takes is logged, attributable, and reversible. You always know what Sydon did, why it did it, and how to override it. Full control, zero opacity.',
  },
];

export default async function AboutPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          Our story
        </div>
        <h1>
          Built by Amazon sellers
          <br />
          <em>for sellers.</em>
        </h1>
        <p className="lead">
          We lived the problem — seven tools, zero coordination, and a Sunday night spent
          reconciling spreadsheets instead of running a business. So we built the platform we wished
          existed.
        </p>
      </section>

      {/* Origin story */}
      <div className="page-section-alt">
        <div className="page-section-inner">
          <div className="two-col">
            <div className="two-col-text">
              <div className="section-label" style={{ marginBottom: 12 }}>
                <span className="dot" />
                The problem we solved
              </div>
              <h2>
                We built Sydon because we <em>lived the problem.</em>
              </h2>
              <p>
                Amazon sellers manage an average of 7 disconnected tools. Each one sees a different
                slice of the business. None of them talk to each other. The seller becomes the
                integration layer — spending hours copying data between dashboards while the real
                decisions wait.
              </p>
              <p>
                Sydon replaces that fragmented stack with 10 interconnected agents sharing a single
                intelligence layer. When Account Guardian sees a policy risk, the Listing Builder
                doesn't ship a change that makes it worse. When the Dynamic Pricer wins the Buy Box,
                PPC Strategist adjusts bids accordingly.
              </p>
              <p>Every signal feeds every decision. Automatically.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { num: '20+', label: 'Tools replaced by one platform' },
                { num: '15h', label: 'Saved per seller per week' },
                { num: '73%', label: 'Reduction in tool costs' },
                { num: '3×', label: 'Average revenue increase' },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: 'var(--bg-3)',
                    border: '1px solid var(--line)',
                    borderRadius: 14,
                    padding: '28px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 40,
                      fontWeight: 500,
                      color: 'var(--ink)',
                      marginBottom: 6,
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="page-section page-section-center">
        <div className="page-label" style={{ justifyContent: 'center' }}>
          <span className="dot" />
          Mission
        </div>
        <h2
          className="page-h2"
          style={{ maxWidth: 760, margin: '0 auto 20px', textAlign: 'center' }}
        >
          To eliminate the anxiety and uncertainty from Amazon selling by creating AI agents that
          proactively protect and grow your business 24/7.
        </h2>
      </section>

      {/* Values */}
      <div className="page-section-alt">
        <div className="page-section-inner">
          <div className="section-label" style={{ marginBottom: 12 }}>
            <span className="dot" />
            Core values
          </div>
          <h2 className="page-h2">What we believe.</h2>
          <p className="page-intro">Four principles that shape every product decision we make.</p>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.num} className="value-card">
                <div className="value-num">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform */}
      <section className="page-section">
        <div className="section-label" style={{ marginBottom: 12 }}>
          <span className="dot" />
          Technology
        </div>
        <h2 className="page-h2">
          Data and AI platform built to act.
          <br />
          <em>Built to last.</em>
        </h2>
        <p className="page-intro">
          Enterprise-grade infrastructure under the hood. SP-API certified, SOC 2 Type II compliant,
          and built from day one for Amazon's March 2026 Agent Policy.
        </p>
        <div className="feature-grid">
          {[
            {
              title: 'SP-API Native',
              desc: 'Direct integration with Amazon Selling Partner API — real data, real time, no screen-scraping or unofficial endpoints.',
            },
            {
              title: 'SOC 2 Type II',
              desc: 'Independently audited security controls for data handling, access management, and incident response.',
            },
            {
              title: 'Amazon Agent Policy',
              desc: "Built from day one to comply with Amazon's March 2026 Agent Policy — every action is logged, attributable, and reversible.",
            },
            {
              title: 'Multi-marketplace',
              desc: 'Operate across US, UK, EU, CA, AU, and JP simultaneously. One dashboard. All your marketplaces.',
            },
            {
              title: 'Real-time processing',
              desc: 'Sub-minute latency on critical signals like account health changes, Buy Box losses, and review velocity spikes.',
            },
            {
              title: 'Predictive analytics',
              desc: 'Machine learning models trained on billions of Amazon data points to anticipate trends before they appear in your metrics.',
            },
          ].map((f) => (
            <div key={f.title} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="page-cta">
        <h2>
          Start for free.
          <br />
          <em>No credit card required.</em>
        </h2>
        <p>
          Join thousands of Amazon sellers who replaced their tool chaos with one intelligent
          platform.
        </p>
        <div className="page-cta-actions">
          <a href="https://go.sydon.ai/nova" className="btn btn-primary">
            Start free →
          </a>
          <Link href="/contact" className="btn btn-ghost">
            Talk to us
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
