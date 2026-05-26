import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

type Props = { params: Promise<{ locale: string; slug: string }> };

const CATEGORIES: Record<
  string,
  {
    label: string;
    description: string;
    posts: { slug: string; title: string; excerpt: string; date: string; readTime: string }[];
  }
> = {
  'amazon-account-protection': {
    label: 'Amazon Account Protection',
    description:
      "Guides on preventing suspensions, monitoring account health, and staying compliant with Amazon's evolving policies.",
    posts: [
      {
        slug: 'the-ultimate-guide-to-preventing-amazon-account-suspensions-in-2026',
        title: 'The Ultimate Guide to Preventing Amazon Account Suspensions in 2026',
        excerpt:
          "73% of suspensions are entirely preventable. Here's the system serious sellers use to stay protected.",
        date: 'Jan 14, 2026',
        readTime: '12 min read',
      },
      {
        slug: 'detecting-suspicious-amazon-activity-on-your-account-72-hours-in-advance',
        title: 'Detecting Suspicious Amazon Activity on Your Account 72 Hours in Advance',
        excerpt:
          'Early warning signals that predict account health deterioration before it shows up in your dashboard.',
        date: 'Jan 10, 2026',
        readTime: '8 min read',
      },
      {
        slug: 'amazon-account-protection-how-to-prevent-suspensions-and-safeguard-your-seller-business',
        title:
          'Amazon Account Protection: How to Prevent Suspensions and Safeguard Your Seller Business',
        excerpt:
          'A complete framework for monitoring, protecting, and recovering your Amazon seller account.',
        date: 'Dec 18, 2025',
        readTime: '13 min read',
      },
    ],
  },
  'increase-profitability': {
    label: 'Increase Profitability',
    description:
      'Strategies for improving margins, reducing costs, and optimizing your Amazon P&L across PPC, pricing, and operations.',
    posts: [
      {
        slug: 'best-ppc-management-tools-for-amazon-sellers-cut-wasted-spend-and-improve-roas',
        title: 'Best PPC Management Tools for Amazon Sellers: Cut Wasted Spend and Improve ROAS',
        excerpt:
          'A practical comparison of PPC tools and why the best ones share context with the rest of your operation.',
        date: 'Jan 7, 2026',
        readTime: '10 min read',
      },
      {
        slug: 'amazon-fba-seller-profitability-why-most-sellers-scale-revenue-but-lose-money',
        title: 'Amazon FBA Seller Profitability: Why Most Sellers Scale Revenue But Lose Money',
        excerpt:
          'The hidden costs that eat your margins as you grow — and how to structure your operation to avoid them.',
        date: 'Dec 28, 2025',
        readTime: '11 min read',
      },
      {
        slug: 'amazon-ppc-optimization-how-to-lower-acos-without-killing-sales',
        title: 'Amazon PPC Optimization: How to Lower ACoS Without Killing Sales',
        excerpt:
          'The counterintuitive approach to reducing ad spend while maintaining (or growing) your revenue.',
        date: 'Dec 22, 2025',
        readTime: '7 min read',
      },
    ],
  },
  insights: {
    label: 'Insights',
    description:
      'Analysis of Amazon marketplace trends, algorithm changes, and what they mean for serious sellers.',
    posts: [
      {
        slug: 'amazon-listing-optimization-in-2026-how-sellers-increase-rankings-conversions-and-sales',
        title:
          'Amazon Listing Optimization in 2026: How Sellers Increase Rankings, Conversions, and Sales',
        excerpt:
          'The listing factors that actually move the needle in 2026 — and how to optimize them continuously.',
        date: 'Jan 3, 2026',
        readTime: '9 min read',
      },
      {
        slug: 'how-ai-automation-is-transforming-business-operations-in-2025',
        title: 'How AI Automation Is Transforming Amazon Seller Operations in 2025',
        excerpt:
          'What autonomous agents actually do on Amazon — and how top sellers are using them to reclaim their time.',
        date: 'Dec 14, 2025',
        readTime: '8 min read',
      },
    ],
  },
  'inventory-oracle': {
    label: 'Inventory Oracle',
    description:
      'Demand forecasting, reorder optimization, and strategies for eliminating stockouts and long-term storage fees.',
    posts: [
      {
        slug: 'the-stockout-that-changed',
        title: 'The Stockout That Changed How We Think About Inventory Forecasting',
        excerpt:
          "A $180,000 lesson in demand forecasting and why reactive inventory management doesn't scale.",
        date: 'Dec 10, 2025',
        readTime: '6 min read',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const cat = CATEGORIES[slug];
  if (!cat) {
    return {};
  }
  return {
    title: `${cat.label} — Sydon Blog`,
    description: cat.description,
  };
}

export default async function BlogCategoryPage(props: Props) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);

  const cat = CATEGORIES[slug];
  if (!cat) {
    notFound();
  }

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          {cat.label}
        </div>
        <h1>{cat.label}</h1>
        <p className="lead">{cat.description}</p>
      </section>

      <section className="page-section">
        <div className="blog-grid">
          {cat.posts.map((post) => (
            <Link key={post.slug} href={`/blog-posts/${post.slug}`} className="blog-card">
              <div className="blog-card-body">
                <span className="blog-tag">{cat.label}</span>
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

        <div style={{ marginTop: 48 }}>
          <Link
            href="/resources"
            style={{
              fontSize: 14,
              color: 'var(--blue)',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            ← All articles
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
