'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '@/styles/landing.css';

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="logo-link">
        <Image src="/logo.png" alt="sydon" width={120} height={32} className="logo-img" />
      </Link>
      <div className="nav-links">
        <Link href="/solutions">Solutions</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/enterprises">Enterprise</Link>
        <Link href="/customer-stories">Customers</Link>
        <Link href="/about-us">About</Link>
      </div>
      <div className="nav-cta">
        <a href="https://go.sydon.ai/nova" className="btn btn-ghost btn-sm">
          Sign in
        </a>
        <a href="https://go.sydon.ai/nova" className="btn btn-primary btn-sm">
          Start free →
        </a>
      </div>
    </nav>
  );
}
