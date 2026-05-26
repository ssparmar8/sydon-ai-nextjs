import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Careers — Sydon',
  description:
    'Join the team building the future of Amazon seller intelligence. Open roles in engineering, design, and operations.',
};

const PILLARS = [
  {
    num: '01',
    title: 'Curiosity',
    desc: 'We hire people who ask why before asking how. The best solutions come from deeply understanding the problem — not jumping to the first obvious answer.',
  },
  {
    num: '02',
    title: 'Extreme Ownership',
    desc: "If something is broken, it's your problem to fix — even if it's not in your job description. We don't wait for permission to make things better.",
  },
  {
    num: '03',
    title: 'Collaboration',
    desc: 'Our agents share an intelligence layer. So do we. The best work at Sydon happens when product, engineering, and design are thinking together from day one.',
  },
  {
    num: '04',
    title: 'Cutting Edge Technology',
    desc: "We use the best tools available and invest in staying current. If there's a better way to build something, we want to know about it — and use it.",
  },
];

const ROLES = [
  {
    slug: 'senior-software-engineer',
    title: 'Senior Software Engineer',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    dept: 'Engineering',
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    dept: 'Design',
  },
  {
    slug: 'technical-support-specialist',
    title: 'Technical Support Specialist',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    dept: 'Support',
  },
  {
    slug: 'marketing-manager',
    title: 'Marketing Manager',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    dept: 'Marketing',
  },
  {
    slug: 'sales-development-representative',
    title: 'Sales Development Representative',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    dept: 'Sales',
  },
  {
    slug: 'people-operations-coordinator',
    title: 'People Operations Coordinator',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    dept: 'Operations',
  },
];

export default async function JoinTheTeamPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          Careers
        </div>
        <h1>
          We are creating the future of
          <br />
          <em>Amazon seller intelligence.</em>
        </h1>
        <p className="lead">
          Sydon is a small, ambitious team building the platform that replaces an entire category of
          tools. If that excites you, we want to hear from you.
        </p>
        <div className="page-hero-actions">
          <a href="#open-roles" className="btn btn-primary">
            See open roles →
          </a>
          <Link href="/contact" className="btn btn-ghost">
            Get in touch
          </Link>
        </div>
      </section>

      {/* What drives us */}
      <div className="page-section-alt">
        <div className="page-section-inner">
          <div className="section-label" style={{ marginBottom: 12 }}>
            <span className="dot" />
            Our culture
          </div>
          <h2 className="page-h2">What drives us at Sydon.</h2>
          <p className="page-intro">Four principles that shape how we work and who we hire.</p>
          <div className="values-grid">
            {PILLARS.map((p) => (
              <div key={p.num} className="value-card">
                <div className="value-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="page-section">
        <div className="section-label" style={{ marginBottom: 12 }}>
          <span className="dot" />
          From the team
        </div>
        <h2 className="page-h2">Hear from people at Sydon.</h2>
        <div className="testimonial-grid" style={{ marginTop: 32 }}>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              &ldquo;Building Sydon means working on genuinely hard problems — multi-agent
              coordination, real-time data pipelines, autonomous decision making. The technical bar
              is high, and the team keeps it that way.&rdquo;
            </p>
            <div className="testimonial-attr">
              <div className="testimonial-av">SS</div>
              <div>
                <div className="testimonial-name">Siddharth Sajja</div>
                <div className="testimonial-role">Founder</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              &ldquo;Platform engineering at Sydon is not maintenance work. We&apos;re designing
              systems that have to be right — agents making decisions autonomously, 24/7, across
              thousands of seller accounts.&rdquo;
            </p>
            <div className="testimonial-attr">
              <div className="testimonial-av">JW</div>
              <div>
                <div className="testimonial-name">Jessica Wu</div>
                <div className="testimonial-role">Platform Engineering Lead</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              &ldquo;The culture here is genuinely collaborative. Product, design, and engineering
              share a context layer — just like our agents. We ship faster because of it.&rdquo;
            </p>
            <div className="testimonial-attr">
              <div className="testimonial-av">AR</div>
              <div>
                <div className="testimonial-name">Amara Reyes</div>
                <div className="testimonial-role">Product Designer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <div className="page-section-alt" id="open-roles">
        <div className="page-section-inner">
          <div className="section-label" style={{ marginBottom: 12 }}>
            <span className="dot" />
            Open roles
          </div>
          <h2 className="page-h2">Join the team.</h2>
          <p className="page-intro">
            All roles are full-time. Melbourne HQ preferred, remote considered for the right
            candidate.
          </p>
          <div className="job-list">
            {ROLES.map((role) => (
              <Link key={role.slug} href={`/careers/${role.slug}`} className="job-card">
                <div className="job-info">
                  <h3>{role.title}</h3>
                  <p>
                    {role.dept} · {role.location}
                  </p>
                </div>
                <div className="job-meta">
                  <span className="job-badge">{role.type}</span>
                  <svg
                    className="job-arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Giving back */}
      <section className="page-section page-section-center">
        <div className="section-label" style={{ justifyContent: 'center', marginBottom: 12 }}>
          <span className="dot" />
          Community
        </div>
        <h2 className="page-h2">How we&apos;re giving back.</h2>
        <p className="page-intro" style={{ margin: '0 auto 40px' }}>
          We donate 1% of revenue to community initiatives, fund educational programs for
          first-generation entrepreneurs, and volunteer as mentors in the Amazon seller community.
        </p>
        <Link href="/contact" className="btn btn-ghost">
          Learn more about our mission
        </Link>
      </section>
    </PageLayout>
  );
}
