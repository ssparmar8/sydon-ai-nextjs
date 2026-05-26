import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Contact — Sydon',
  description:
    'Get in touch with the Sydon team. Support available 24/7. Sales team responds within 24 hours.',
};

export default async function ContactPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-label">
          <span className="dot" />
          Contact
        </div>
        <h1>Get in touch.</h1>
        <p className="lead">
          Have a question or want to see how Sydon works for your Amazon business? We&apos;re here
          to help.
        </p>
      </section>

      {/* Contact grid */}
      <section className="page-section">
        <div className="contact-grid">
          <div>
            <div className="contact-channel">
              <div className="contact-channel-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.36 1.18 2 2 0 012.33 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.28 14l.64 2.92z" />
                </svg>
              </div>
              <div>
                <h3>Support</h3>
                <p>24/7 technical support for all plans.</p>
                <a href="mailto:support@sydon.ai">support@sydon.ai</a>
                <br />
                <a href="tel:+18773035508">1 (877) 303-5508</a>
                <div className="contact-avail" style={{ marginTop: 8 }}>
                  Available 24 / 7
                </div>
              </div>
            </div>

            <div className="contact-channel">
              <div className="contact-channel-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h3>Sales</h3>
                <p>Ready to discuss enterprise plans or custom integrations?</p>
                <a href="mailto:sales@sydon.ai">sales@sydon.ai</a>
                <div className="contact-avail" style={{ marginTop: 8 }}>
                  Responds within 24 hours
                </div>
              </div>
            </div>

            <div className="contact-channel">
              <div className="contact-channel-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3>Office</h3>
                <p>
                  630 5th Avenue, Suite 2000
                  <br />
                  New York, NY 10111
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send a message</h2>
            <p>We&apos;ll get back to you within one business day.</p>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input id="firstName" type="text" placeholder="Alex" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" type="text" placeholder="Rivera" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Work email</label>
              <input id="email" type="email" placeholder="alex@yourstore.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject">
                <option value="">Select a topic…</option>
                <option>General question</option>
                <option>Enterprise / custom plan</option>
                <option>Technical support</option>
                <option>Partnership</option>
                <option>Press inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell us about your Amazon business and what you're looking for…"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Send message →
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
