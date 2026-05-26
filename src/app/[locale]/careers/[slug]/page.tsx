import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

type Props = { params: Promise<{ locale: string; slug: string }> };

const ROLES: Record<
  string,
  {
    title: string;
    dept: string;
    type: string;
    location: string;
    about: string;
    responsibilities: string[];
    requirements: string[];
    preferred: string[];
  }
> = {
  'senior-software-engineer': {
    title: 'Senior Software Engineer',
    dept: 'Engineering',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    about:
      "We're looking for a Senior Software Engineer to help build the scalable infrastructure that powers Sydon's autonomous agents. You'll work on backend systems that process millions of Amazon data points in real time, coordinate multi-agent decision making, and interface with Amazon's SP-API at scale.",
    responsibilities: [
      'Design and build scalable backend services for the Sydon agent platform',
      'Optimize system performance and reliability for real-time data processing',
      'Collaborate closely with product and design to shape features from inception',
      'Write maintainable, well-tested code that other engineers enjoy working with',
      'Lead architectural discussions and help raise the technical bar across the team',
      'Contribute to our infrastructure and tooling to support rapid, reliable deployments',
    ],
    requirements: [
      '5+ years of backend engineering experience in production systems',
      'Deep understanding of distributed systems, concurrency, and data pipelines',
      'Experience with RESTful API design and third-party API integrations',
      'Strong proficiency in at least one backend language (Go, Node.js, Python, or similar)',
      'Comfort with cloud infrastructure (AWS, GCP, or Azure)',
      'Track record of shipping reliable systems at scale',
    ],
    preferred: [
      'Experience with Golang or Node.js in production',
      'Familiarity with Amazon SP-API or e-commerce platform APIs',
      'Background in AI/ML systems or autonomous agent architectures',
      'PostgreSQL or similar relational database experience at scale',
    ],
  },
  'product-designer': {
    title: 'Product Designer',
    dept: 'Design',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    about:
      "We're looking for a Product Designer to own the end-to-end design of Sydon's platform — from early-stage concepts to polished production interfaces. You'll work on one of the more interesting design challenges in B2B SaaS: making autonomous AI agents legible, trustworthy, and actually useful to non-technical users.",
    responsibilities: [
      'Own design for new features from initial brief to shipped product',
      'Create user flows, wireframes, prototypes, and high-fidelity designs',
      'Work closely with engineering to ensure implementations match intent',
      'Conduct user research and synthesize insights into design decisions',
      'Maintain and evolve the Sydon design system',
      'Contribute to product strategy and roadmap discussions',
    ],
    requirements: [
      '4+ years of product design experience at a software company',
      'Strong portfolio demonstrating complex B2B or data-heavy interface design',
      'Proficiency in Figma for design and prototyping',
      'Ability to communicate design rationale clearly to engineering and stakeholders',
      'User research experience — both qualitative and quantitative',
    ],
    preferred: [
      'Experience designing dashboards, analytics, or data visualization interfaces',
      'Background in designing AI or automation products',
      'Basic front-end development knowledge (HTML/CSS/React)',
    ],
  },
  'technical-support-specialist': {
    title: 'Technical Support Specialist',
    dept: 'Support',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    about:
      "Sydon customers trust us with their Amazon businesses. When something isn't working, they need fast, accurate help from someone who genuinely understands both the technical platform and the Amazon seller context. You'll be the expert they reach.",
    responsibilities: [
      'Respond to customer support requests across email, chat, and phone',
      'Diagnose technical issues across the Sydon platform and Amazon SP-API integrations',
      'Create and maintain technical documentation, FAQs, and help articles',
      'Identify patterns in support requests and escalate product issues to engineering',
      'Onboard new customers and ensure they get value from the platform quickly',
    ],
    requirements: [
      '2+ years in technical support, customer success, or a related role',
      'Ability to diagnose and explain technical issues to non-technical users',
      'Strong written communication — clear, concise, genuinely helpful',
      'Experience with CRM and support ticketing systems',
    ],
    preferred: [
      'Direct experience as an Amazon seller or working with Amazon Seller Central',
      "Familiarity with SP-API, Seller Central, or Amazon's ecosystem",
      'Experience in a SaaS startup environment',
    ],
  },
  'marketing-manager': {
    title: 'Marketing Manager',
    dept: 'Marketing',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    about:
      "We're looking for a Marketing Manager to build and execute the growth strategy for Sydon. You'll own content, demand generation, and brand — working to reach Amazon sellers at every stage from awareness to activation.",
    responsibilities: [
      'Develop and execute multi-channel marketing campaigns targeting Amazon sellers',
      'Own content strategy — blog, SEO, email, and social media',
      'Work with product to translate features into compelling seller-focused messaging',
      'Manage paid acquisition channels and optimize for CAC and LTV',
      'Track and report on marketing performance metrics',
    ],
    requirements: [
      '4+ years in B2B SaaS marketing',
      'Proven track record growing organic traffic through content and SEO',
      'Strong copywriting skills — you can write for both technical and non-technical audiences',
      'Data-driven approach to campaign planning and measurement',
    ],
    preferred: [
      'Deep familiarity with the Amazon seller ecosystem',
      'Experience marketing to small and mid-size business owners',
      'Hands-on paid acquisition experience (Google, Meta, LinkedIn)',
    ],
  },
  'sales-development-representative': {
    title: 'Sales Development Representative',
    dept: 'Sales',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    about:
      "We're hiring our first SDR to help build the top of our sales funnel. You'll identify and qualify potential Sydon customers — Amazon sellers with the scale and sophistication to benefit from the platform — and set up conversations for our account executives.",
    responsibilities: [
      'Research and identify target Amazon seller accounts',
      'Execute outbound prospecting through email, LinkedIn, and phone',
      'Qualify inbound leads and route to the appropriate account executive',
      'Maintain accurate records in our CRM',
      'Hit monthly qualified meeting targets',
    ],
    requirements: [
      '1+ years in an SDR, BDR, or outbound sales role',
      'Strong written and verbal communication',
      'Comfort with outbound prospecting and handling objections',
      'CRM proficiency (HubSpot, Salesforce, or similar)',
    ],
    preferred: [
      'Understanding of the Amazon seller ecosystem and common pain points',
      'Experience selling SaaS tools to e-commerce or retail businesses',
    ],
  },
  'people-operations-coordinator': {
    title: 'People Operations Coordinator',
    dept: 'Operations',
    type: 'Full Time',
    location: 'Melbourne HQ / Remote',
    about:
      "We're looking for a People Operations Coordinator to help build the systems, processes, and culture that will carry Sydon through its next phase of growth. You'll own HR operations, recruiting coordination, and employee experience.",
    responsibilities: [
      'Manage HR operations including onboarding, offboarding, and documentation',
      'Coordinate recruiting processes — scheduling, candidate communication, offer logistics',
      'Maintain people systems and HR data accuracy',
      'Support employee experience programs and company culture initiatives',
      'Handle benefits administration and payroll coordination',
    ],
    requirements: [
      '2+ years in HR, people operations, or recruiting coordination',
      'Highly organized with strong attention to detail',
      'Excellent interpersonal and communication skills',
      'Experience with HRIS systems',
    ],
    preferred: [
      'Experience in a fast-growing startup environment',
      'Background in both HR operations and talent acquisition',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(ROLES).map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const role = ROLES[slug];
  if (!role) {
    return {};
  }
  return {
    title: `${role.title} — Sydon Careers`,
    description: role.about,
  };
}

export default async function CareerPage(props: Props) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);

  const role = ROLES[slug];
  if (!role) {
    notFound();
  }

  return (
    <PageLayout>
      <section className="page-hero" style={{ paddingBottom: 48 }}>
        <div className="page-label">
          <span className="dot" />
          {role.dept}
        </div>
        <h1>{role.title}</h1>
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 16,
          }}
        >
          <span className="job-badge" style={{ fontSize: 13, padding: '5px 14px' }}>
            {role.type}
          </span>
          <span
            style={{
              fontSize: 14,
              color: 'var(--ink-dim)',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {role.location}
          </span>
        </div>
      </section>

      <section className="page-section">
        <div className="career-detail-grid">
          <div className="career-body">
            <h2>About the role</h2>
            <p>{role.about}</p>

            <h2>What you&apos;ll do</h2>
            <ul>
              {role.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>

            <h2>What we&apos;re looking for</h2>
            <ul>
              {role.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>

            {role.preferred.length > 0 && (
              <>
                <h2>Preferred</h2>
                <ul>
                  {role.preferred.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="career-sidebar">
            <div className="career-meta-card">
              <h3>Role details</h3>
              <div className="career-meta-row">
                <span className="key">Department</span>
                <span className="val">{role.dept}</span>
              </div>
              <div className="career-meta-row">
                <span className="key">Type</span>
                <span className="val">{role.type}</span>
              </div>
              <div className="career-meta-row">
                <span className="key">Location</span>
                <span className="val">{role.location}</span>
              </div>
            </div>

            <div className="apply-form" id="apply">
              <h3>Apply for this role</h3>
              <p>Send us your details and we&apos;ll be in touch within 5 business days.</p>
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input id="firstName" type="text" placeholder="Alex" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" type="text" placeholder="Rivera" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="alex@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="+1 555 000 0000" />
              </div>
              <div className="form-group">
                <label htmlFor="portfolio">Portfolio / LinkedIn</label>
                <input id="portfolio" type="url" placeholder="https://" />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}
              >
                Submit application →
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <Link
            href="/join-the-team"
            style={{
              fontSize: 14,
              color: 'var(--blue)',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            ← All open roles
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
