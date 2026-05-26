import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

type Props = { params: Promise<{ locale: string; slug: string }> };

const POSTS: Record<
  string,
  {
    title: string;
    tag: string;
    date: string;
    readTime: string;
    excerpt: string;
    content: React.ReactNode;
  }
> = {
  'the-ultimate-guide-to-preventing-amazon-account-suspensions-in-2026': {
    title: 'The Ultimate Guide to Preventing Amazon Account Suspensions in 2026',
    tag: 'Amazon Account Protection',
    date: 'January 14, 2026',
    readTime: '12 min read',
    excerpt:
      "73% of suspensions are entirely preventable. Here's the system serious sellers use to stay protected.",
    content: (
      <>
        <p>
          <strong>73% of Amazon account suspensions are entirely preventable.</strong> Yet every
          week, sellers wake up to frozen accounts, suppressed listings, and revenue that simply
          stops. The average seller loses $50,000+ in revenue during a suspension — and spends 2–8
          weeks navigating Amazon's appeals process before recovering.
        </p>
        <p>The sellers who avoid this outcome are not lucky. They have systems.</p>

        <div className="blog-stat-row">
          <div className="blog-stat-card">
            <div className="num">$50k+</div>
            <div className="lbl">Average revenue lost per suspension</div>
          </div>
          <div className="blog-stat-card">
            <div className="num">2–8 wks</div>
            <div className="lbl">Average appeals timeline</div>
          </div>
          <div className="blog-stat-card">
            <div className="num">73%</div>
            <div className="lbl">Of suspensions are preventable</div>
          </div>
        </div>

        <h2>The Hidden Cost of Amazon Suspensions</h2>
        <p>
          The direct revenue loss is just the beginning. Suspensions trigger a cascade of secondary
          costs that most sellers underestimate:
        </p>
        <ul>
          <li>
            <strong>FBA storage fees</strong> continue accumulating on inventory you can't sell
          </li>
          <li>
            <strong>PPC campaigns</strong> stop but your competitors keep running, capturing your
            market share
          </li>
          <li>
            <strong>Review velocity</strong> drops — harder to regain than you think
          </li>
          <li>
            <strong>Ranking recovery</strong> after reinstatement typically takes 30–45 additional
            days
          </li>
          <li>
            <strong>Supplier relationships</strong> strain if you need to pause orders
          </li>
        </ul>
        <p>
          A two-week suspension for a $2M/year seller doesn't cost $77,000 (two weeks of revenue).
          It costs $77,000 plus the compounding losses from rank deterioration, competitor gains,
          and the six to twelve weeks of reduced performance that follows reinstatement.
        </p>

        <div className="blog-callout">
          The total cost of a suspension is typically 3–5× the direct revenue loss once you account
          for rank recovery time, competitive displacement, and operational disruption.
        </div>

        <h2>The 7 Most Common Suspension Triggers</h2>
        <p>
          Amazon's suspension system flags accounts against dozens of performance metrics, but the
          vast majority of preventable suspensions fall into seven categories:
        </p>
        <h3>1. Order Defect Rate (ODR) Above 1%</h3>
        <p>
          ODR includes negative feedback, A-to-Z claims, and credit card chargebacks. Amazon targets
          an ODR below 1%, but the real danger zone starts at 0.75% — that's where you'll see your
          first warnings. Monitor daily, not weekly.
        </p>
        <h3>2. Authenticity and Inauthentic Complaints</h3>
        <p>
          Authenticity complaints are the most common cause of ASIN-level suspensions and can
          escalate to account-level suspension if multiple ASINs are flagged. Keep every invoice
          from every supplier. Date them. Make sure unit counts match what you sold.
        </p>
        <h3>3. Intellectual Property Violations</h3>
        <p>
          IP complaints from brand owners — legitimate or not — trigger automated responses from
          Amazon. You can appeal, but you need documentation ready before you receive the complaint,
          not after.
        </p>
        <h3>4. Review Manipulation</h3>
        <p>
          Amazon's detection systems for review manipulation have improved dramatically. Any pattern
          that looks like incentivized reviews — even if it's a misunderstanding — can trigger
          suspension.
        </p>
        <h3>5. Price Manipulation</h3>
        <p>
          Significant price increases on high-demand products (especially during scarcity events)
          trigger Amazon's fair pricing policy. Set floor and ceiling rules in your repricing logic.
        </p>
        <h3>6. Policy Violations</h3>
        <p>
          Amazon updates its policies frequently. A listing that was compliant six months ago may
          not be compliant today. Automated scanning against current policy is the only reliable way
          to stay ahead of this.
        </p>
        <h3>7. Late Shipment Rate</h3>
        <p>
          For FBM sellers, Amazon targets a late shipment rate below 4%. Even for FBA sellers,
          stranded inventory issues can create downstream performance metrics problems.
        </p>

        <h2>Early Warning Signs: Red Flags to Watch</h2>
        <p>
          Most suspensions don't appear without warning. The signals are there — you just have to be
          looking at the right metrics, at the right frequency:
        </p>
        <ul>
          <li>
            <strong>ODR approaching 0.75%</strong> — this is your soft threshold, not 1%
          </li>
          <li>
            <strong>Increased buyer messages about product condition</strong> — often precede
            authenticity complaints
          </li>
          <li>
            <strong>Competitor IP filings in your category</strong> — visible in Brand Registry data
          </li>
          <li>
            <strong>Policy update emails from Amazon</strong> — easy to miss, costly to ignore
          </li>
          <li>
            <strong>Any account health notifications</strong> — the severity rating is not always
            reliable; treat all of them urgently
          </li>
        </ul>

        <h2>Building a Suspension Prevention System</h2>
        <p>
          The sellers who never get suspended share one characteristic: they treat compliance as a
          continuous process, not a periodic review.
        </p>
        <h3>Daily monitoring</h3>
        <ul>
          <li>Order Defect Rate</li>
          <li>Any new account health notifications</li>
          <li>Listing suppression or stranded inventory alerts</li>
          <li>A-to-Z claim filings</li>
        </ul>
        <h3>Weekly deep dive</h3>
        <ul>
          <li>Review velocity and sentiment trends by ASIN</li>
          <li>Message response rate and response time</li>
          <li>Late shipment rate and valid tracking rate</li>
          <li>IP complaint history across your catalog</li>
        </ul>
        <h3>Monthly reviews</h3>
        <ul>
          <li>Policy compliance scan against updated Amazon policies</li>
          <li>Supplier documentation audit</li>
          <li>Review all listing content against current restricted content guidelines</li>
        </ul>

        <div className="blog-callout">
          Account Guardian runs a 47-point compliance scan against your full catalog, hourly. That's
          1,128 scans per day, every day — catching the drift that manual weekly reviews miss
          entirely.
        </div>

        <h2>The ROI of Prevention</h2>
        <p>
          Every dollar spent on suspension prevention saves $10 in recovery costs. For a seller
          doing $2M/year, investing in serious compliance monitoring ($200–500/month) provides
          protection against a potential $150,000+ catastrophe.
        </p>
        <p>
          The math is straightforward. The harder question is why more sellers wait until after
          their first suspension to take it seriously.
        </p>

        <h2>Technology Solutions for Prevention</h2>
        <p>
          Manual monitoring works at small scale. At 50+ SKUs, or multiple Amazon accounts, it
          becomes humanly impossible to maintain the monitoring frequency that real protection
          requires.
        </p>
        <p>Effective technology solutions provide:</p>
        <ul>
          <li>
            <strong>Real-time account health monitoring</strong> — not daily or weekly, but
            continuous
          </li>
          <li>
            <strong>Automated policy scanning</strong> — against current Amazon policies, not last
            quarter's
          </li>
          <li>
            <strong>Predictive risk scoring</strong> — identifying ASINs at elevated risk before a
            complaint is filed
          </li>
          <li>
            <strong>Appeal documentation preparation</strong> — having the right documents ready
            before you need them
          </li>
          <li>
            <strong>Cross-signal intelligence</strong> — connecting review patterns, ODR trends, and
            policy flags into a unified risk picture
          </li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>
          Amazon suspensions are not random events. They're the predictable outcome of metrics
          drifting into danger zones that go unmonitored. The sellers who build systematic
          prevention systems — with the right monitoring frequency and the right documentation
          habits — essentially remove suspensions from the list of things they have to worry about.
        </p>
        <p>Start with your ODR. Check it today. Then build outward from there.</p>
      </>
    ),
  },
  'amazon-ppc-optimization-how-to-lower-acos-without-killing-sales': {
    title: 'Amazon PPC Optimization: How to Lower ACoS Without Killing Sales',
    tag: 'Increase Profitability',
    date: 'December 22, 2025',
    readTime: '7 min read',
    excerpt:
      'The counterintuitive approach to reducing ad spend while maintaining — or growing — your revenue.',
    content: (
      <>
        <p>
          Most sellers who try to lower their ACoS end up cutting campaigns that were actually
          working. Here is the framework for reducing wasted spend without touching the keywords
          that drive real revenue.
        </p>
        <h2>Why Blanket Bid Cuts Fail</h2>
        <p>
          When you cut bids across all campaigns by 20%, you reduce spend on your worst performers
          by 20% — but you also reduce spend on your best performers by 20%. The net result is
          usually a proportional decline in both spend and revenue, with your ACoS unchanged.
        </p>
        <p>
          Real ACoS improvement requires surgical precision: identify keywords with high spend and
          low (or zero) revenue, pause them, and reinvest that budget into keywords with proven
          conversion rates.
        </p>
        <h2>The Three-Bucket Framework</h2>
        <ul>
          <li>
            <strong>Convert and scale</strong> — Keywords with ACoS below your target AND strong
            sales velocity. These should get more budget, not less.
          </li>
          <li>
            <strong>Optimize</strong> — Keywords with ACoS above target but showing conversion.
            Adjust bids, improve the listing, or test a lower-funnel match type.
          </li>
          <li>
            <strong>Pause and harvest</strong> — Keywords with spend but zero or near-zero
            conversions over 30+ days. Cut these; use them as negative keywords in broad campaigns.
          </li>
        </ul>
        <h2>The Real Lever: Match Type Architecture</h2>
        <p>
          Most sellers run too many broad match campaigns. Broad match generates discovery at a cost
          — you pay for impressions and clicks that will never convert. The long-term PPC
          architecture that produces sustainable ACoS looks like:
        </p>
        <ul>
          <li>Automatic campaigns for discovery, monitored weekly</li>
          <li>Broad match campaigns to harvest converting search terms</li>
          <li>Exact match campaigns on proven high-converting keywords, with aggressive bids</li>
          <li>Negative keyword lists that grow every week, applied across all campaigns</li>
        </ul>
        <div className="blog-callout">
          PPC Strategist runs this analysis continuously — pausing waste, scaling winners, and
          maintaining your ACoS target automatically. Most sellers see 8–15 percentage point ACoS
          reductions in 30 days.
        </div>
        <h2>The Bottom Line</h2>
        <p>
          Lower ACoS and higher revenue are not mutually exclusive. The path to both is the same:
          more budget to proven converters, zero budget to proven non-converters, and systematic
          negative keyword management that gets sharper every week.
        </p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const post = POSTS[slug];
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} — Sydon Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: Props) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);

  const post = POSTS[slug];
  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="blog-post-header">
        <span className="blog-tag">{post.tag}</span>
        <h1>{post.title}</h1>
        <div className="blog-post-meta">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="blog-post-body">
        {post.content}

        {/* CTA */}
        <div
          style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--line)',
            borderRadius: 16,
            padding: '36px',
            marginTop: 60,
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 22,
              fontWeight: 500,
              color: 'var(--ink)',
              marginBottom: 8,
            }}
          >
            Start free with Account Guardian
          </h3>
          <p style={{ fontSize: 15, color: 'var(--ink-dim)', marginBottom: 20 }}>
            The agent that never stops watching your account. Free forever, no credit card.
          </p>
          <a href="https://go.sydon.ai/nova" className="btn btn-primary">
            Start free →
          </a>
        </div>

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
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
            ← Back to all articles
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
