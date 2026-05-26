import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';

type Props = { params: Promise<{ locale: string; slug: string }> };

const TEAMS: Record<
  string,
  {
    name: string;
    tagline: string;
    description: string;
    members: { name: string; role: string; bio: string; initials: string }[];
  }
> = {
  'sydon-platform-team': {
    name: 'Sydon Platform Team',
    tagline: 'The team behind the platform.',
    description:
      'We build the infrastructure, agents, and interfaces that help Amazon sellers run their businesses autonomously. A small team with high standards — we ship thoughtfully, test thoroughly, and hold the bar on quality.',
    members: [
      {
        name: 'Siddharth Sajja',
        role: 'Founder & CEO',
        bio: 'Amazon seller turned founder. Built Sydon to solve the operational chaos he lived firsthand. Focused on product vision and company strategy.',
        initials: 'SS',
      },
      {
        name: 'Jessica Wu',
        role: 'Platform Engineering Lead',
        bio: "Leads the infrastructure and agent coordination systems that power Sydon's real-time platform. Previously built data pipelines at scale in fintech.",
        initials: 'JW',
      },
      {
        name: 'Amara Reyes',
        role: 'Product Designer',
        bio: 'Owns the end-to-end product design of the Sydon platform. Passionate about making complex systems feel simple. Previously designed B2B SaaS tools at two other startups.',
        initials: 'AR',
      },
      {
        name: 'Daniel Park',
        role: 'Senior Software Engineer',
        bio: 'Backend engineer focused on the SP-API integration layer and multi-agent coordination. Go and PostgreSQL specialist.',
        initials: 'DP',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(TEAMS).map((slug) => ({ slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const team = TEAMS[slug];
  if (!team) {
    return {};
  }
  return {
    title: `${team.name} — Sydon`,
    description: team.description,
  };
}

export default async function TeamPage(props: Props) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);

  const team = TEAMS[slug];
  if (!team) {
    notFound();
  }

  return (
    <PageLayout>
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          Team
        </div>
        <h1>{team.name}</h1>
        <p className="lead">{team.description}</p>
      </section>

      <section className="page-section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {team.members.map((m) => (
            <div
              key={m.name}
              style={{
                background: 'var(--bg-3)',
                border: '1px solid var(--line)',
                borderRadius: 16,
                padding: '32px',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: 'var(--bg-2)',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--ink-dim)',
                  marginBottom: 20,
                }}
              >
                {m.initials}
              </div>
              <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>
                {m.name}
              </div>
              <div
                style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 500, marginBottom: 12 }}
              >
                {m.role}
              </div>
              <p style={{ fontSize: 14, color: 'var(--ink-dim)', lineHeight: 1.65 }}>{m.bio}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Link href="/join-the-team" className="btn btn-primary">
            Join the team →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
