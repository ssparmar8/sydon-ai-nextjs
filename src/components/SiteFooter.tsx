import Image from 'next/image';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-headline">
          <h3>
            Ten agents, working in concert,
            <br />
            for one <em>quieter</em> Monday morning.
          </h3>
          <a href="https://go.sydon.ai/nova" className="foot-headline-cta">
            Start free
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo-link">
              <Image src="/logo.png" alt="sydon" width={120} height={32} className="logo-img" />
            </Link>
            <p>
              One intelligent platform for Amazon sellers. Replacing the tool chaos that broke your
              margins.
            </p>
            <span className="foot-status">
              <span className="status-dot" />
              All systems operational
            </span>
          </div>

          <div className="foot-col">
            <h4>Platform</h4>
            <ul>
              <li>
                <Link href="/solutions">Solutions</Link>
              </li>
              <li>
                <Link href="/enterprises">Enterprise</Link>
              </li>
              <li>
                <Link href="/#integrations">Integrations</Link>
              </li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/changelog">
                  Changelog <span className="badge new">New</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="/resources">Blog</Link>
              </li>
              <li>
                <Link href="/customer-stories">Case studies</Link>
              </li>
              <li>
                <Link href="/docs">Documentation</Link>
              </li>
              <li>
                <a href="https://go.sydon.ai/compliance">Compliance Hub</a>
              </li>
              <li>
                <Link href="/api-docs">
                  API <span className="badge">v2</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about-us">About</Link>
              </li>
              <li>
                <Link href="/customer-stories">Customers</Link>
              </li>
              <li>
                <Link href="/join-the-team">Careers</Link>
              </li>
              <li>
                <Link href="/press">Press kit</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/terms-of-service">Terms of service</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
              <li>
                <Link href="/dpa">DPA</Link>
              </li>
              <li>
                <Link href="/soc2">SOC 2 report</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div className="foot-bottom-left">
            <span className="foot-copyright">© 2026 Sydon AI, Inc.</span>
            <div className="foot-bottom-links">
              <Link href="/cookie-settings">Cookie settings</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
          <div className="foot-social">
            <a href="https://linkedin.com/company/sydon-ai" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <a href="https://x.com/sydon_ai" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://instagram.com/sydon.ai" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://youtube.com/@sydonai" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="foot-brandmark" aria-hidden="true">
          <svg viewBox="0 0 1200 140" preserveAspectRatio="xMidYMid meet">
            <text x="600" y="115" textAnchor="middle" fontSize="160">
              sydon
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
