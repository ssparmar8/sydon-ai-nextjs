import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Resources — Sydon',
  description:
    'The latest product updates, Amazon policy changes, and seller intelligence from the Sydon team.',
};

const POSTS = [
  {
    slug: 'the-ultimate-guide-to-preventing-amazon-account-suspensions-in-2026',
    tag: 'Amazon Account Protection',
    title: 'The Ultimate Guide to Preventing Amazon Account Suspensions in 2026',
    excerpt:
      "73% of suspensions are entirely preventable. Here's the system serious sellers use to stay protected.",
    date: 'Jan 14, 2026',
    readTime: '12 min read',
  },
  {
    slug: 'detecting-suspicious-amazon-activity-on-your-account-72-hours-in-advance',
    tag: 'Amazon Account Protection',
    title: 'Detecting Suspicious Amazon Activity on Your Account 72 Hours in Advance',
    excerpt:
      'Early warning signals that predict account health deterioration before it shows up in your dashboard.',
    date: 'Jan 10, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'best-ppc-management-tools-for-amazon-sellers-cut-wasted-spend-and-improve-roas',
    tag: 'Increase Profitability',
    title: 'Best PPC Management Tools for Amazon Sellers: Cut Wasted Spend and Improve ROAS',
    excerpt:
      'A practical comparison of PPC tools and why the best ones share context with the rest of your operation.',
    date: 'Jan 7, 2026',
    readTime: '10 min read',
  },
  {
    slug: 'amazon-listing-optimization-in-2026-how-sellers-increase-rankings-conversions-and-sales',
    tag: 'Insights',
    title:
      'Amazon Listing Optimization in 2026: How Sellers Increase Rankings, Conversions, and Sales',
    excerpt:
      'The listing factors that actually move the needle in 2026 — and how to optimize them continuously.',
    date: 'Jan 3, 2026',
    readTime: '9 min read',
  },
  {
    slug: 'amazon-fba-seller-profitability-why-most-sellers-scale-revenue-but-lose-money',
    tag: 'Increase Profitability',
    title: 'Amazon FBA Seller Profitability: Why Most Sellers Scale Revenue But Lose Money',
    excerpt:
      'The hidden costs that eat your margins as you grow — and how to structure your operation to avoid them.',
    date: 'Dec 28, 2025',
    readTime: '11 min read',
  },
  {
    slug: 'amazon-ppc-optimization-how-to-lower-acos-without-killing-sales',
    tag: 'Increase Profitability',
    title: 'Amazon PPC Optimization: How to Lower ACoS Without Killing Sales',
    excerpt:
      'The counterintuitive approach to reducing ad spend while maintaining (or growing) your revenue.',
    date: 'Dec 22, 2025',
    readTime: '7 min read',
  },
  {
    slug: 'amazon-account-protection-how-to-prevent-suspensions-and-safeguard-your-seller-business',
    tag: 'Amazon Account Protection',
    title:
      'Amazon Account Protection: How to Prevent Suspensions and Safeguard Your Seller Business',
    excerpt:
      'A complete framework for monitoring, protecting, and recovering your Amazon seller account.',
    date: 'Dec 18, 2025',
    readTime: '13 min read',
  },
  {
    slug: 'how-ai-automation-is-transforming-business-operations-in-2025',
    tag: 'Insights',
    title: 'How AI Automation Is Transforming Amazon Seller Operations in 2025',
    excerpt:
      'What autonomous agents actually do on Amazon — and how top sellers are using them to reclaim their time.',
    date: 'Dec 14, 2025',
    readTime: '8 min read',
  },
  {
    slug: 'the-stockout-that-changed',
    tag: 'Inventory Oracle',
    title: 'The Stockout That Changed How We Think About Inventory Forecasting',
    excerpt:
      "A $180,000 lesson in demand forecasting and why reactive inventory management doesn't scale.",
    date: 'Dec 10, 2025',
    readTime: '6 min read',
  },
];

const CATEGORIES = [
  { slug: 'amazon-account-protection', label: 'Amazon Account Protection' },
  { slug: 'increase-profitability', label: 'Increase Profitability' },
  { slug: 'insights', label: 'Insights' },
  { slug: 'inventory-oracle', label: 'Inventory Oracle' },
];

export default async function ResourcesPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          Resources
        </div>
        <h1>Insights & Updates.</h1>
        <p className="lead">
          The latest product updates, Amazon policy changes, and seller intelligence from the Sydon
          team.
        </p>
      </section>

      {/* Featured CTA */}
      <section className="page-section" style={{ paddingBottom: 0 }}>
        <div
          style={{
            background: 'linear-gradient(135deg, var(--blue) 0%, var(--indigo) 100%)',
            borderRadius: 20,
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: 8,
              }}
            >
              Free download
            </div>
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 24,
                fontWeight: 500,
                color: 'white',
                marginBottom: 8,
              }}
            >
              47-Point Amazon Compliance Checklist
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
              The exact checklist Account Guardian scans hourly. Download it and run it manually —
              or let the agent do it automatically.
            </p>
          </div>
          <a
            href="https://go.sydon.ai/compliance"
            className="btn"
            style={{
              background: 'white',
              color: 'var(--blue)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              borderRadius: 8,
              padding: '12px 24px',
              fontSize: 14,
            }}
          >
            Get the checklist →
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="page-section" style={{ paddingBottom: 0 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span
            style={{
              fontWeight: 600,
              fontSize: 13,
              padding: '6px 14px',
              borderRadius: 100,
              background: 'var(--ink)',
              color: 'white',
            }}
          >
            All
          </span>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/blog-categories/${c.slug}`}
              style={{
                fontSize: 13,
                color: 'var(--ink-dim)',
                padding: '6px 14px',
                borderRadius: 100,
                border: '1px solid var(--line)',
                background: 'var(--bg-3)',
                fontWeight: 500,
              }}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Blog grid */}
      <section className="page-section">
        <div className="blog-grid">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog-posts/${post.slug}`} className="blog-card">
              <div className="blog-card-body">
                <span className="blog-tag">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              <div className="blog-card-foot">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="page-cta">
        <h2>
          Start free with <em>Account Guardian.</em>
        </h2>
        <p>
          The only agent that never stops watching your account. Connect in minutes, free forever.
        </p>
        <div className="page-cta-actions">
          <a href="https://go.sydon.ai/nova" className="btn btn-primary">
            Start free →
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
