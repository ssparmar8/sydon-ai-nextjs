import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — Sydon',
  description:
    'Sydon AI Terms of Service. Read the terms governing your use of the Sydon platform.',
};

export default async function TermsPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      <div className="legal-wrap">
        <h1>Terms of Service</h1>
        <p className="legal-meta">
          Last updated: September 16, 2025 · Effective date: September 16, 2025
        </p>

        <div className="legal-toc">
          <h3>Contents</h3>
          <ol>
            <li>Agreement to Terms</li>
            <li>Description of Service</li>
            <li>Account Registration and Security</li>
            <li>Subscription Plans and Payment</li>
            <li>Acceptable Use Policy</li>
            <li>Intellectual Property Rights</li>
            <li>Data Use and Privacy</li>
            <li>Service Limitations and Disclaimers</li>
            <li>Limitation of Liability</li>
            <li>Indemnification</li>
            <li>Termination</li>
            <li>Third-Party Services</li>
            <li>Changes to Terms</li>
            <li>Dispute Resolution</li>
            <li>General Provisions</li>
            <li>Contact Information</li>
          </ol>
        </div>

        <div className="legal-body">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the Sydon platform ("Service"), you agree to be bound by these
            Terms of Service ("Terms"). If you do not agree to these Terms, do not access or use the
            Service. These Terms constitute a legally binding agreement between you and Sydon AI,
            Inc. ("Sydon," "we," "us," or "our").
          </p>
          <p>
            If you are using the Service on behalf of an organization, you represent and warrant
            that you have the authority to bind that organization to these Terms.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Sydon provides an AI-powered platform for Amazon sellers that includes autonomous agents
            for account protection, listing optimization, PPC management, dynamic pricing, inventory
            management, and business intelligence ("Platform").
          </p>
          <p>
            The Service integrates with Amazon's Selling Partner API (SP-API) and other third-party
            services to provide automated actions and insights. Service availability is subject to
            Amazon's SP-API availability and our platform infrastructure. We target 99.9% uptime but
            do not guarantee uninterrupted service.
          </p>

          <h2>3. Account Registration and Security</h2>
          <p>
            You must provide accurate, complete, and current information when creating an account.
            You are responsible for maintaining the confidentiality of your account credentials and
            for all activity that occurs under your account.
          </p>
          <p>
            Amazon Integration: By connecting your Amazon Seller account, you authorize Sydon to
            access your Seller Central data, execute automated actions within the permissions
            granted by SP-API, and store necessary data to provide the Service. You may revoke this
            authorization at any time through Amazon Seller Central.
          </p>
          <p>
            You must notify us immediately at <a href="mailto:support@sydon.ai">support@sydon.ai</a>{' '}
            if you become aware of any unauthorized use of your account.
          </p>

          <h2>4. Subscription Plans and Payment</h2>
          <p>
            Sydon offers multiple subscription tiers including a free plan. Paid plans are billed in
            advance on a monthly or annual basis. All fees are non-refundable except as required by
            law or as explicitly stated in these Terms.
          </p>
          <p>
            Free Trial: New accounts may be eligible for a free trial period. At the end of the
            trial, your account will automatically convert to the free plan unless you select a paid
            plan. We reserve the right to modify or discontinue free trial offerings at any time.
          </p>
          <p>
            Cancellation: You may cancel your subscription at any time. Cancellation takes effect at
            the end of your current billing period. You will retain access to paid features until
            that date.
          </p>
          <p>
            Price Changes: We will provide at least 30 days' notice of any price changes. Continued
            use of the Service after the effective date constitutes acceptance of the new pricing.
          </p>

          <h2>5. Acceptable Use Policy</h2>
          <p>
            You may use the Service only for lawful purposes and in accordance with these Terms. You
            agree not to:
          </p>
          <ul>
            <li>
              Violate Amazon's Seller Terms of Service, Selling Policies, or any applicable laws
            </li>
            <li>
              Use the Service to manipulate reviews, artificially inflate sales rank, or engage in
              deceptive practices
            </li>
            <li>Attempt to reverse engineer, decompile, or extract source code from the Service</li>
            <li>Use automated means to access the Service beyond the functionality we provide</li>
            <li>
              Share access credentials with third parties or resell the Service without
              authorization
            </li>
            <li>Introduce malware or any code intended to disrupt the Service</li>
            <li>Circumvent or disable any security features of the Service</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate this policy without
            prior notice.
          </p>

          <h2>6. Intellectual Property Rights</h2>
          <p>
            The Service and its original content, features, and functionality are owned by Sydon AI,
            Inc. and are protected by international copyright, trademark, patent, trade secret, and
            other intellectual property laws.
          </p>
          <p>
            Amazon Data: Data obtained through Amazon's SP-API remains subject to Amazon's Data
            Protection Policy and Developer Agreement. You retain ownership of your seller data.
            Sydon processes this data solely to provide the Service.
          </p>
          <p>
            Your Content: You retain ownership of any content you provide to the Service. By
            providing content, you grant Sydon a limited license to use, store, and process it to
            operate and improve the Service.
          </p>

          <h2>7. Data Use and Privacy</h2>
          <p>
            Our collection and use of personal information is governed by our{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>, which is incorporated into these
            Terms by reference.
          </p>
          <p>
            Amazon Data Security: We implement industry-standard security measures including TLS 1.3
            minimum for data transmission. Amazon customer PII is deleted within 30 days per
            Amazon's requirements. We maintain SOC 2 Type II certification and conduct annual
            penetration testing.
          </p>
          <p>
            AI Processing: Your data may be used to train and improve our AI models on an
            aggregated, anonymized basis. We do not share individual seller data with other sellers
            or third parties except as required to provide the Service.
          </p>

          <h2>8. Service Limitations and Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that: (a) the Service will be uninterrupted or error-free; (b) any
            automated actions taken by the Service will achieve desired outcomes; (c) the Service
            will be compatible with all third-party systems; or (d) any specific business results
            will be achieved.
          </p>
          <p>
            Amazon Relationship: Sydon is an independent service provider and is not affiliated
            with, endorsed by, or officially connected with Amazon. Amazon policies and SP-API terms
            are subject to change at Amazon's discretion.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SYDON SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
            LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING
            FROM YOUR USE OF THE SERVICE.
          </p>
          <p>
            Our total liability to you for any claims arising under these Terms shall not exceed the
            greater of (a) the amount you paid to Sydon in the twelve months preceding the claim, or
            (b) one hundred US dollars ($100).
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Sydon and its officers, directors,
            employees, and agents from any claims, liabilities, damages, judgments, awards, losses,
            costs, expenses, or fees (including reasonable attorneys' fees) arising out of or
            relating to: (a) your use of the Service; (b) your violation of these Terms; (c) your
            violation of any third-party rights; or (d) your violation of Amazon's terms or
            policies.
          </p>

          <h2>11. Termination</h2>
          <p>
            By You: You may terminate your account at any time by contacting us at{' '}
            <a href="mailto:support@sydon.ai">support@sydon.ai</a> or through your account settings.
            Termination takes effect immediately for free accounts and at the end of the current
            billing period for paid accounts.
          </p>
          <p>
            By Sydon: We may suspend or terminate your account immediately if you violate these
            Terms, engage in fraudulent activity, or if required by law or Amazon policy.
          </p>
          <p>
            Effect of Termination: Upon termination, your right to use the Service immediately
            ceases. We will delete your data within 90 days of termination, except as required by
            law or Amazon's data retention requirements.
          </p>

          <h2>12. Third-Party Services</h2>
          <p>
            The Service integrates with third-party services including Amazon SP-API, QuickBooks,
            ShipStation, Stripe, Klaviyo, HubSpot, Keepa, and Google Ads. Your use of these
            integrations is subject to each provider's terms of service. We are not responsible for
            the practices of any third-party services.
          </p>

          <h2>13. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes by
            email and by posting a notice on the Service at least 30 days before the effective date.
            Your continued use of the Service after the effective date constitutes your acceptance
            of the updated Terms.
          </p>

          <h2>14. Dispute Resolution</h2>
          <p>
            Governing Law: These Terms shall be governed by the laws of the State of Georgia, United
            States, without regard to conflict of law principles.
          </p>
          <p>
            Arbitration: Any dispute arising out of or relating to these Terms or the Service shall
            be resolved by binding arbitration administered by the American Arbitration Association
            under its Commercial Arbitration Rules. The arbitration shall take place in Atlanta,
            Georgia.
          </p>
          <p>
            Class Action Waiver: You waive any right to bring or participate in a class action
            lawsuit or class-wide arbitration against Sydon.
          </p>

          <h2>15. General Provisions</h2>
          <p>
            These Terms constitute the entire agreement between you and Sydon regarding the Service.
            If any provision of these Terms is found to be unenforceable, the remaining provisions
            will continue in full force and effect. Our failure to enforce any right or provision
            does not constitute a waiver of that right or provision.
          </p>

          <h2>16. Contact Information</h2>
          <p>If you have questions about these Terms, please contact us:</p>
          <ul>
            <li>
              Email: <a href="mailto:legal@sydon.ai">legal@sydon.ai</a>
            </li>
            <li>Phone: +1 (877) 303-5508</li>
            <li>Address: 630 5th Avenue, Suite 2000, New York, NY 10111</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
