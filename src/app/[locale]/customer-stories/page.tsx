import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Customer Stories — Sydon',
  description:
    'See how Amazon sellers use Sydon to replace their tool chaos and grow their businesses.',
};

const CUSTOMERS = [
  {
    slug: 'lucident',
    logo: '/assets/scraped/logo-lucident-2.svg',
    quote:
      'Sydon replaced four tools and two VAs in the first month. The Account Guardian alone caught a policy issue that would have cost us our top SKU.',
    name: 'Marcus Webb',
    role: 'Founder, Lucident',
    result: '$1.2M revenue unlocked',
  },
  {
    slug: 'invarion',
    logo: '/assets/scraped/logo-invarion.svg',
    quote:
      'We went from 6 hours of weekly reporting to 20 minutes. Profit Intelligence shows us exactly where every dollar goes — no more guessing which SKUs are actually profitable.',
    name: 'Sarah Chen',
    role: 'Operations Lead, Invarion',
    result: '73% reduction in tool costs',
  },
  {
    slug: 'dunham-co',
    logo: '/assets/scraped/logo-dunhamco.svg',
    quote:
      "The PPC Strategist cut our ACoS from 34% to 18% in 6 weeks without touching our revenue. It found waste we'd been blind to for two years.",
    name: 'James Dunham',
    role: 'CEO, Dunham & Co.',
    result: 'ACoS from 34% → 18%',
  },
  {
    slug: 'gridpoint',
    logo: '/assets/scraped/logo-gridpoint-2.svg',
    quote:
      'Scaling to eight figures felt impossible with the tools we had. Sydon is the only platform where all the context is shared — our agents actually coordinate.',
    name: 'Priya Nair',
    role: 'Director of Commerce, Gridpoint',
    result: '3× revenue in 14 months',
  },
  {
    slug: 'morance',
    logo: '/assets/scraped/logo-morance.svg',
    quote:
      'Account Guardian catches policy risks before they become suspensions. We have not had a listing suppressed since we onboarded — and we run 400+ SKUs.',
    name: 'Tom Reeves',
    role: 'Founder, Morance',
    result: '0 suspensions in 18 months',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'The shared intelligence layer is the thing nobody else has. Every agent knows what the others know.',
    name: 'R. Fontaine',
    role: 'Amazon seller, $8M ARR',
    av: 'RF',
  },
  {
    quote:
      'I cancelled Helium 10, Sellerboard, Teikametrics, and DataDive. One platform does all of it better.',
    name: 'K. Oduya',
    role: '7-figure brand owner',
    av: 'KO',
  },
  {
    quote:
      'Account Guardian paid for itself in the first week by catching a policy warning on our hero ASIN.',
    name: 'L. Winters',
    role: 'FBA seller, 200+ SKUs',
    av: 'LW',
  },
];

export default async function CustomerStoriesPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          Customer stories
        </div>
        <h1>Our customers.</h1>
        <p className="lead">
          Amazon sellers at every scale — from launch to nine figures — who replaced their tool
          chaos with one intelligent platform.
        </p>
      </section>

      {/* Customer grid */}
      <section className="page-section">
        <div className="customer-grid">
          {CUSTOMERS.map((c) => (
            <Link key={c.slug} href={`/customers/${c.slug}`} className="customer-card">
              <Image src={c.logo} alt={c.name} width={160} height={40} className="customer-logo" />
              <p className="customer-quote">&ldquo;{c.quote}&rdquo;</p>
              <div className="customer-attr">
                <strong>{c.name}</strong>
                <span>{c.role}</span>
              </div>
              <div className="customer-result">↑ {c.result}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <div className="page-section-alt">
        <div className="page-section-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="page-h2">What sellers say.</h2>
          </div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-attr">
                  <div className="testimonial-av">{t.av}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="page-cta">
        <h2>
          Join sellers who <em>replaced the chaos.</em>
        </h2>
        <p>Start with Account Guardian — free, forever, no credit card required.</p>
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
