import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Enterprise — Sydon',
  description:
    'Enterprise Amazon operations that scale to $100M+ without breaking. Replace 20+ tools with one intelligent platform.',
};

export default async function EnterprisesPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          Enterprise
        </div>
        <h1>
          Enterprise Amazon operations that scale
          <br />
          to <em>$100M+ without breaking.</em>
        </h1>
        <p className="lead">
          Replace 20+ tools with one intelligent platform. Sydon gives enterprise Amazon teams a
          unified operations layer — every agent sharing context, every decision compounding.
        </p>
        <div className="page-hero-actions">
          <a href="https://go.sydon.ai/nova" className="btn btn-primary">
            Apply for beta access →
          </a>
          <Link href="/contact" className="btn btn-ghost">
            Talk to our team
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="page-section">
        <div className="stat-row">
          <div className="stat-cell">
            <div className="num">
              <em>20+</em>
            </div>
            <div className="lbl">Tools replaced by one platform</div>
          </div>
          <div className="stat-cell">
            <div className="num">
              15<em>h</em>
            </div>
            <div className="lbl">Saved per seller per week</div>
          </div>
          <div className="stat-cell">
            <div className="num">
              73<em>%</em>
            </div>
            <div className="lbl">Reduction in tool costs</div>
          </div>
          <div className="stat-cell">
            <div className="num">
              3<em>×</em>
            </div>
            <div className="lbl">Average revenue increase</div>
          </div>
        </div>
      </section>

      {/* Use one platform */}
      <div className="page-section-alt">
        <div className="page-section-inner">
          <div className="two-col">
            <div className="two-col-text">
              <div className="section-label" style={{ marginBottom: 12 }}>
                <span className="dot" />
                Consolidation
              </div>
              <h2>
                Use just <em>one platform.</em>
              </h2>
              <p>
                Enterprise Amazon teams shouldn't need separate tools for advertising, repricing,
                listing management, compliance, and analytics. Sydon consolidates all of it — with
                agents that communicate instead of creating new data silos.
              </p>
              <ul>
                <li>Amazon Automation across all 10 operational pillars</li>
                <li>Unified dashboard for every marketplace and seller account</li>
                <li>Shared intelligence layer between all agents</li>
                <li>One audit log for every automated action taken</li>
                <li>Enterprise SSO and team-level permissions</li>
              </ul>
              <a
                href="https://go.sydon.ai/nova"
                className="btn btn-primary"
                style={{ display: 'inline-flex', marginTop: 8 }}
              >
                Start free →
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  icon: '⟲',
                  title: 'Amazon Automation',
                  desc: 'All 10 agents operating simultaneously with a shared context layer.',
                },
                {
                  icon: '◉',
                  title: 'Unified Dashboard',
                  desc: 'Every metric, every marketplace, every SKU — in a single view.',
                },
                {
                  icon: '◈',
                  title: 'Intelligence Ready',
                  desc: 'Predictive analytics and anomaly detection built into every signal.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'var(--bg-3)',
                    border: '1px solid var(--line)',
                    borderRadius: 14,
                    padding: '24px 28px',
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'rgba(37,99,235,0.07)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: 'var(--ink)',
                        marginBottom: 4,
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--ink-dim)', lineHeight: 1.5 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Smart automation */}
      <section className="page-section">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 12 }}>
            <span className="dot" />
            Automation protocols
          </div>
          <h2 className="page-h2">Smart automation for serious Amazon sellers.</h2>
          <p className="page-intro" style={{ margin: '0 auto' }}>
            Pre-built optimization protocols that activate based on real signals — not schedules.
          </p>
        </div>
        <div className="feature-grid">
          {[
            {
              title: 'Compliance Automation',
              desc: 'Continuous 47-point policy audit. Flags risks before suspension, prepares documentation, and logs every action for appeal readiness.',
            },
            {
              title: 'Pricing Intelligence',
              desc: 'Dynamic repricing that protects margin while winning Buy Box. Competitor monitoring and velocity-based floor adjustments.',
            },
            {
              title: 'Ad Spend Optimization',
              desc: 'Automatic bid management, keyword harvesting, and campaign restructuring — all governed by your ACoS and TACOS targets.',
            },
            {
              title: 'Inventory Forecasting',
              desc: 'Demand-based reorder recommendations that prevent stockouts and avoid long-term storage fees simultaneously.',
            },
            {
              title: 'Listing SEO',
              desc: 'Continuous A/B optimization of titles, bullets, and backend keywords. Re-optimized when rankings shift or algorithm updates.',
            },
            {
              title: 'Profit Attribution',
              desc: 'True P&L per SKU including all fees, ad spend, returns, and storage. Know exactly which products are carrying your business.',
            },
          ].map((f) => (
            <div key={f.title} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <div className="page-section-alt">
        <div className="page-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 12 }}>
              <span className="dot" />
              Security & compliance
            </div>
            <h2 className="page-h2">Enterprise-grade security.</h2>
            <p className="page-intro" style={{ margin: '0 auto' }}>
              Built to meet the requirements of large organizations and Amazon's own data policies.
            </p>
          </div>
          <div className="feature-grid-2">
            {[
              {
                title: 'SOC 2 Type II',
                desc: 'Independently audited security controls. Annual penetration testing. Formal incident response program.',
              },
              {
                title: 'Amazon Agent Policy',
                desc: "Fully compliant with Amazon's March 2026 Agent Policy. Every automated action is logged, attributable, and reversible.",
              },
              {
                title: 'Data Residency',
                desc: 'Customer data never shared between accounts. Amazon PII deleted within 30 days per SP-API requirements.',
              },
              {
                title: 'Enterprise SSO',
                desc: 'SAML 2.0 and OIDC support. Team-level role management. Full audit trail of every user action and agent decision.',
              },
            ].map((f) => (
              <div key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="page-cta">
        <h2>
          Ready to scale past <em>$100M?</em>
        </h2>
        <p>
          Talk to our enterprise team about custom onboarding, dedicated support, and volume
          pricing.
        </p>
        <div className="page-cta-actions">
          <a href="https://go.sydon.ai/nova" className="btn btn-primary">
            Apply for beta access →
          </a>
          <Link href="/contact" className="btn btn-ghost">
            Schedule a call
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
