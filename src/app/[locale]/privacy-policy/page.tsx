import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — Sydon',
  description: 'Sydon AI Privacy Policy. How we collect, use, and protect your data.',
};

export default async function PrivacyPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      <div className="legal-wrap">
        <h1>Privacy Policy</h1>
        <p className="legal-meta">
          Effective date: September 16, 2025 · Contact:{' '}
          <a href="mailto:privacy@sydon.ai" style={{ color: 'var(--blue)' }}>
            privacy@sydon.ai
          </a>
        </p>

        <div className="legal-body">
          <h2>1. Introduction</h2>
          <p>
            Sydon AI, Inc. ("Sydon," "we," "us," or "our") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard information
            when you use our platform, with particular attention to our practices regarding Amazon
            SP-API data.
          </p>
          <p>
            This policy complies with the Amazon Selling Partner API Data Protection Policy, GDPR,
            CCPA, and other applicable privacy laws.
          </p>

          <h2>2. Amazon SP-API Data Processing</h2>
          <p>
            As an Amazon SP-API developer, we handle seller and order data subject to Amazon's
            strict data protection requirements:
          </p>
          <ul>
            <li>
              <strong>Permitted use:</strong> SP-API data is used exclusively to provide the Sydon
              platform services you have authorized
            </li>
            <li>
              <strong>Data minimization:</strong> We access only the SP-API data elements necessary
              to provide requested features
            </li>
            <li>
              <strong>No unauthorized sharing:</strong> SP-API data is never sold, shared with third
              parties, or used for advertising
            </li>
            <li>
              <strong>Customer PII retention:</strong> Amazon customer personally identifiable
              information (name, address, email, phone) is retained for a maximum of 30 days after
              order delivery, strictly for tax calculation and fulfillment purposes
            </li>
            <li>
              <strong>Audit logging:</strong> All SP-API data access is logged with timestamps and
              purpose codes
            </li>
          </ul>

          <h2>3. Data Controller and Processor Roles</h2>
          <p>
            For your seller account data: Sydon acts as a data processor on your behalf. You are the
            data controller and determine how your data is used within the parameters of Amazon's
            policies and these Terms.
          </p>
          <p>
            For platform usage data: Sydon acts as a data controller for data we collect about how
            you use the Sydon platform itself.
          </p>

          <h2>4. Information We Collect</h2>
          <h3>Account Information</h3>
          <ul>
            <li>Name, email address, and password when you register</li>
            <li>
              Billing information (processed by our payment provider; we store only the last 4
              digits of your payment method)
            </li>
            <li>Company name and Amazon Seller ID</li>
          </ul>
          <h3>Amazon Seller Data (via SP-API)</h3>
          <ul>
            <li>Product listings, inventory levels, and pricing data</li>
            <li>Order information (with customer PII limited to 30-day retention)</li>
            <li>Advertising campaign data and performance metrics</li>
            <li>Account health metrics and policy notifications</li>
            <li>Financial data including fees, settlements, and refunds</li>
          </ul>
          <h3>Usage Data</h3>
          <ul>
            <li>Platform activity logs, feature usage, and session data</li>
            <li>IP address and browser/device type for security purposes</li>
            <li>Performance data on automated actions taken by our agents</li>
          </ul>

          <h2>5. Legal Basis for Processing</h2>
          <p>Under GDPR Article 6, we process your data based on:</p>
          <ul>
            <li>
              <strong>Contract performance (Art. 6(1)(b)):</strong> Processing necessary to provide
              the Service you have subscribed to
            </li>
            <li>
              <strong>Legitimate interests (Art. 6(1)(f)):</strong> Platform security, fraud
              prevention, and service improvement
            </li>
            <li>
              <strong>Legal obligation (Art. 6(1)(c)):</strong> Compliance with tax, financial, and
              Amazon SP-API requirements
            </li>
            <li>
              <strong>Consent (Art. 6(1)(a)):</strong> Marketing communications (you may withdraw
              consent at any time)
            </li>
          </ul>

          <h2>6. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Operate and improve the Sydon platform and its AI agents</li>
            <li>Execute automated actions on your Amazon account as authorized by you</li>
            <li>Send transactional emails (account activity, alerts, invoices)</li>
            <li>Provide customer support</li>
            <li>Detect and prevent fraud and security incidents</li>
            <li>Comply with legal obligations and Amazon's SP-API requirements</li>
            <li>Send marketing communications (with your consent; you can opt out at any time)</li>
          </ul>
          <p>
            We do not use your data to train AI models that serve other sellers without explicit
            consent and anonymization.
          </p>

          <h2>7. Amazon SP-API Data Protection Policy Compliance</h2>
          <p>
            Sydon maintains full compliance with Amazon's Selling Partner API Data Protection
            Policy:
          </p>
          <ul>
            <li>Annual security assessments and penetration testing</li>
            <li>Employee training on data handling procedures</li>
            <li>
              Incident response plan with 24-hour Amazon notification requirement for data breaches
            </li>
            <li>Data processing records maintained per Article 30 GDPR</li>
            <li>Regular audits of data access and usage</li>
          </ul>

          <h2>8. Information Security</h2>
          <p>We implement comprehensive security measures:</p>
          <ul>
            <li>
              <strong>Encryption:</strong> TLS 1.3 minimum for all data in transit; AES-256 for data
              at rest
            </li>
            <li>
              <strong>Access control:</strong> Role-based access, multi-factor authentication
              required for all staff with data access
            </li>
            <li>
              <strong>Infrastructure:</strong> SOC 2 Type II certified cloud infrastructure with
              continuous monitoring
            </li>
            <li>
              <strong>Vulnerability management:</strong> Annual third-party penetration testing and
              bug bounty program
            </li>
            <li>
              <strong>Physical security:</strong> Data centers with biometric access control and
              24/7 monitoring
            </li>
          </ul>

          <h2>9. Incident Response and Breach Notification</h2>
          <p>In the event of a data breach, we will:</p>
          <ul>
            <li>Notify Amazon within 24 hours as required by SP-API terms</li>
            <li>Notify affected users within 72 hours as required by GDPR</li>
            <li>Notify relevant supervisory authorities as required by applicable law</li>
            <li>
              Provide a detailed incident report including scope, impact, and remediation steps
            </li>
          </ul>

          <h2>10. Information Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul>
            <li>
              <strong>Service providers:</strong> Cloud infrastructure, payment processors, and
              analytics vendors who process data on our behalf under strict data processing
              agreements
            </li>
            <li>
              <strong>Amazon:</strong> As required by SP-API terms and to provide the integrations
              you have authorized
            </li>
            <li>
              <strong>Legal requirements:</strong> When required by applicable law, court order, or
              government authority
            </li>
            <li>
              <strong>Business transfers:</strong> In connection with a merger, acquisition, or sale
              of assets (with advance notice to you)
            </li>
          </ul>

          <h2>11. International Data Transfers</h2>
          <p>
            Your data may be processed in the United States and other countries. For transfers from
            the European Economic Area, we rely on Standard Contractual Clauses (SCCs) approved by
            the European Commission. For UK data transfers, we use the UK International Data
            Transfer Addendum.
          </p>

          <h2>12. Data Retention</h2>
          <ul>
            <li>
              <strong>Account data:</strong> Retained while your account is active and for 90 days
              after deletion
            </li>
            <li>
              <strong>Amazon customer PII:</strong> Maximum 30 days after order delivery
            </li>
            <li>
              <strong>Financial records:</strong> 7 years as required by US tax law
            </li>
            <li>
              <strong>Security logs:</strong> 12 months for incident investigation purposes
            </li>
            <li>
              <strong>Aggregated analytics:</strong> Indefinitely (not personally identifiable)
            </li>
          </ul>

          <h2>13. Your Rights and Choices</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of personal data we hold about you
            </li>
            <li>
              <strong>Rectification:</strong> Request correction of inaccurate data
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your personal data (subject to legal
              retention requirements)
            </li>
            <li>
              <strong>Portability:</strong> Receive your data in a machine-readable format
            </li>
            <li>
              <strong>Objection:</strong> Object to processing based on legitimate interests
            </li>
            <li>
              <strong>Restriction:</strong> Request that we limit how we use your data
            </li>
            <li>
              <strong>Withdraw consent:</strong> For processing based on consent, at any time
            </li>
          </ul>
          <p>
            To exercise these rights, contact <a href="mailto:privacy@sydon.ai">privacy@sydon.ai</a>
            . We respond within 30 days.
          </p>

          <h2>14. Regional Privacy Rights</h2>
          <h3>California (CCPA/CPRA)</h3>
          <p>
            California residents have additional rights including the right to know what personal
            information is collected, the right to delete personal information, and the right to opt
            out of the sale of personal information (we do not sell personal information). To submit
            a California privacy request, email{' '}
            <a href="mailto:privacy@sydon.ai">privacy@sydon.ai</a>.
          </p>
          <h3>European Union (GDPR)</h3>
          <p>
            EU residents may lodge complaints with their local supervisory authority. Our EU
            representative can be reached at <a href="mailto:privacy@sydon.ai">privacy@sydon.ai</a>.
          </p>

          <h2>15. Cookies and Tracking</h2>
          <p>
            We use essential cookies required for the Service to function. We use analytics cookies
            (with consent) to understand how the platform is used. You can manage cookie preferences
            through your browser settings or our cookie consent tool.
          </p>

          <h2>16. Children's Privacy</h2>
          <p>
            The Service is not directed to children under 13. We do not knowingly collect personal
            information from children under 13. If you believe we have collected such information,
            contact us immediately at <a href="mailto:privacy@sydon.ai">privacy@sydon.ai</a>.
          </p>

          <h2>17. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material
            changes by email and by posting a notice on our platform at least 30 days before the
            effective date. Your continued use of the Service after the effective date constitutes
            acceptance of the updated policy.
          </p>

          <h2>18. Contact Information</h2>
          <p>For privacy inquiries, data subject requests, or concerns:</p>
          <ul>
            <li>
              <strong>Privacy Officer:</strong>{' '}
              <a href="mailto:privacy@sydon.ai">privacy@sydon.ai</a>
            </li>
            <li>
              <strong>Phone:</strong> +1 (877) 303-5508
            </li>
            <li>
              <strong>Address:</strong> 630 5th Avenue, Suite 2000, New York, NY 10111
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
