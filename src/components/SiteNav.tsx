'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '@/styles/landing.css';

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
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
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() =>{  setMenuOpen((o) => !o); }}
        >
          {menuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && <div className="nav-mobile-overlay" onClick={() =>{  setMenuOpen(false); }} />}
      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        <div className="nav-mobile-links">
          <Link href="/solutions" onClick={() =>{  setMenuOpen(false); }}>
            Solutions
          </Link>
          <Link href="/resources" onClick={() =>{  setMenuOpen(false); }}>
            Resources
          </Link>
          <Link href="/enterprises" onClick={() =>{  setMenuOpen(false); }}>
            Enterprise
          </Link>
          <Link href="/customer-stories" onClick={() =>{  setMenuOpen(false); }}>
            Customers
          </Link>
          <Link href="/about-us" onClick={() =>{  setMenuOpen(false); }}>
            About
          </Link>
        </div>
        <div className="nav-mobile-cta">
          <a href="https://go.sydon.ai/nova" className="btn btn-ghost btn-sm">
            Sign in
          </a>
          <a href="https://go.sydon.ai/nova" className="btn btn-primary btn-sm">
            Start free →
          </a>
        </div>
      </div>
    </>
  );
}
