import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

type Props = { params: Promise<{ locale: string; slug: string }> };

const CUSTOMERS: Record<
  string,
  {
    name: string;
    logo: string;
    industry: string;
    size: string;
    result: string;
    quote: string;
    attribution: string;
    role: string;
    challenge: string;
    solution: string;
    outcome: string[];
  }
> = {
  lucident: {
    name: 'Lucident',
    logo: '/assets/scraped/logo-lucident-2.svg',
    industry: 'Consumer Electronics',
    size: '$4M–$8M ARR',
    result: '$1.2M revenue unlocked',
    quote:
      'Sydon replaced four tools and two VAs in the first month. The Account Guardian alone caught a policy issue that would have cost us our top SKU. It pays for itself before lunch.',
    attribution: 'Marcus Webb',
    role: 'Founder, Lucident',
    challenge:
      'Lucident was managing account compliance across 180+ SKUs with a manual review process — a weekly spreadsheet exercise that consumed 8+ hours and still missed issues that only became visible after a suppression notice arrived.',
    solution:
      'After onboarding Sydon, Account Guardian took over the continuous compliance scanning. Listing Builder handled ongoing SEO re-optimization as rankings shifted. Dynamic Pricer defended margin on their top 30 ASINs automatically.',
    outcome: [
      '$1.2M in revenue recovered from previously suppressed and underperforming ASINs',
      '4 standalone tools and 2 part-time VA contracts eliminated',
      'Zero suppression events in the 14 months since onboarding',
      'Weekly reporting time reduced from 8 hours to under 20 minutes',
    ],
  },
  invarion: {
    name: 'Invarion',
    logo: '/assets/scraped/logo-invarion.svg',
    industry: 'Industrial Supplies',
    size: '$2M–$5M ARR',
    result: '73% reduction in tool costs',
    quote:
      'We went from 6 hours of weekly reporting to 20 minutes. Profit Intelligence shows us exactly where every dollar goes — no more guessing which SKUs are actually profitable.',
    attribution: 'Sarah Chen',
    role: 'Operations Lead, Invarion',
    challenge:
      "Invarion's operations team was spending more time on reporting than on decisions. With data spread across five separate tools, a complete P&L picture required manual reconciliation that took most of Monday morning.",
    solution:
      "Profit Intelligence unified Invarion's financial picture — SP-API data, ad spend, FBA fees, and returns all flowing into a single true-margin view per SKU. PPC Strategist handled bid optimization based on actual profitability, not just ACoS targets.",
    outcome: [
      'Tool spend reduced from $4,200/month to $1,100/month (73% reduction)',
      'Weekly reporting consolidated from 5 tools into one 20-minute review',
      'Identified 23 SKUs with negative true margin — previously invisible in siloed reporting',
      'ACoS improved from 28% to 19% over 90 days',
    ],
  },
  'dunham-co': {
    name: 'Dunham & Co.',
    logo: '/assets/scraped/logo-dunhamco.svg',
    industry: 'Home & Garden',
    size: '$6M–$12M ARR',
    result: 'ACoS from 34% → 18%',
    quote:
      "The PPC Strategist cut our ACoS from 34% to 18% in 6 weeks without touching our revenue. It found waste we'd been blind to for two years.",
    attribution: 'James Dunham',
    role: 'CEO, Dunham & Co.',
    challenge:
      "After years of rapid growth, Dunham & Co's PPC structure had become unwieldy — hundreds of campaigns accumulated over three years, with significant spend on keywords that had never converted. Manual auditing was theoretically possible but practically never happened.",
    solution:
      'PPC Strategist ran a full catalog audit within 48 hours of connection. It identified $14,000/month in spend on non-converting terms, paused them systematically, and reinvested budget into exact-match campaigns on proven high-converters.',
    outcome: [
      'ACoS reduced from 34% to 18% in 6 weeks',
      '$14,000/month in wasted ad spend identified and redirected',
      'Revenue maintained within 3% throughout optimization process',
      'Campaign structure simplified from 340 campaigns to 180 tightly managed ones',
    ],
  },
  gridpoint: {
    name: 'Gridpoint',
    logo: '/assets/scraped/logo-gridpoint-2.svg',
    industry: 'Tech Accessories',
    size: '$10M–$25M ARR',
    result: '3× revenue in 14 months',
    quote:
      'Scaling to eight figures felt impossible with the tools we had. Sydon is the only platform where all the context is shared — our agents actually coordinate.',
    attribution: 'Priya Nair',
    role: 'Director of Commerce, Gridpoint',
    challenge:
      "Gridpoint was at the inflection point between 7 and 8 figures — a scale where the operational complexity of Amazon genuinely threatens the business. Their existing tool stack couldn't surface the cross-functional intelligence needed to make good decisions at speed.",
    solution:
      'All 9 Sydon agents deployed simultaneously. The shared intelligence layer meant that when Profit Intelligence identified margin compression in a product line, Dynamic Pricer and PPC Strategist both adjusted in response — without manual intervention.',
    outcome: [
      'Revenue grew from $8M to $24M ARR over 14 months',
      'Operational headcount held flat despite 3× revenue growth',
      'Time-to-decision on pricing and ad changes reduced from days to minutes',
      'Account health score maintained above 95 throughout scaling period',
    ],
  },
  morance: {
    name: 'Morance',
    logo: '/assets/scraped/logo-morance.svg',
    industry: 'Beauty & Personal Care',
    size: '$1M–$3M ARR',
    result: '0 suspensions in 18 months',
    quote:
      'Account Guardian catches policy risks before they become suspensions. We have not had a listing suppressed since we onboarded — and we run 400+ SKUs.',
    attribution: 'Tom Reeves',
    role: 'Founder, Morance',
    challenge:
      "Beauty brands face above-average policy risk on Amazon — ingredient claims, restricted substances, labeling requirements that change with little notice. Morance had experienced two ASIN suppressions in the previous year from policy updates they didn't catch in time.",
    solution:
      "Account Guardian monitors Morance's 400+ SKU catalog against Amazon's current restricted content and policy requirements — updated as Amazon's policies change. Document Intelligence keeps their compliance documentation audit-ready.",
    outcome: [
      'Zero listing suppressions in 18 months since onboarding',
      'Caught and resolved 7 potential policy violations before they triggered suppression',
      'Compliance documentation preparation time reduced from 4 hours to 20 minutes per appeal',
      'Expanded catalog from 280 to 420 SKUs with no increase in compliance overhead',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(CUSTOMERS).map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const c = CUSTOMERS[slug];
  if (!c) {
    return {};
  }
  return {
    title: `${c.name} Customer Story — Sydon`,
    description: c.quote,
  };
}

export default async function CustomerPage(props: Props) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);

  const c = CUSTOMERS[slug];
  if (!c) {
    notFound();
  }

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          Customer story
        </div>
        <Image
          src={c.logo}
          alt={c.name}
          width={160}
          height={36}
          style={{ width: 'auto', margin: '0 auto 28px', display: 'block' }}
        />
        <h1>
          <em>{c.result}</em>
        </h1>
        <p className="lead">{c.quote}</p>
        <div style={{ fontSize: 14, color: 'var(--ink-dim)', marginTop: -8 }}>
          — {c.attribution}, {c.role}
        </div>
      </section>

      <section className="page-section">
        <div className="stats-3col" style={{ marginBottom: 64 }}>
          {[
            { label: 'Industry', value: c.industry },
            { label: 'Company size', value: c.size },
            { label: 'Key result', value: c.result },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: 'var(--bg-3)',
                border: '1px solid var(--line)',
                borderRadius: 12,
                padding: '20px 24px',
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-faint)',
                  marginBottom: 6,
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)' }}>{item.value}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 28,
              fontWeight: 500,
              color: 'var(--ink)',
              marginBottom: 16,
            }}
          >
            The challenge
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-dim)', lineHeight: 1.8, marginBottom: 48 }}>
            {c.challenge}
          </p>

          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 28,
              fontWeight: 500,
              color: 'var(--ink)',
              marginBottom: 16,
            }}
          >
            The solution
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-dim)', lineHeight: 1.8, marginBottom: 48 }}>
            {c.solution}
          </p>

          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 28,
              fontWeight: 500,
              color: 'var(--ink)',
              marginBottom: 20,
            }}
          >
            The outcome
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {c.outcome.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '14px 0',
                  borderBottom: '1px solid var(--line-soft)',
                  fontSize: 16,
                  color: 'var(--ink-dim)',
                  lineHeight: 1.6,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--green)"
                  strokeWidth="2.5"
                  style={{ flexShrink: 0, marginTop: 3 }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="page-cta">
        <h2>
          Ready to write your
          <br />
          <em>own story?</em>
        </h2>
        <p>Start with Account Guardian — free forever, no credit card.</p>
        <div className="page-cta-actions">
          <a href="https://go.sydon.ai/nova" className="btn btn-primary">
            Start free →
          </a>
          <Link href="/customer-stories" className="btn btn-ghost">
            More stories
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
