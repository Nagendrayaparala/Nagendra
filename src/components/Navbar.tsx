'use client';

import React, { useState, useEffect } from 'react';
import { useAvatar } from '@/context/AvatarContext';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setPose } = useAvatar();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    setPose('greeting', 'Ready to connect! Clicked Resume button.');
  };

  return (
    <header
      id="main-nav"
      className={`sticky top-0 z-50 h-[72px] flex items-center transition-all duration-300 border-b border-border/40 ${
        isScrolled ? 'nav-scrolled' : 'bg-bg/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl w-full mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#hero" className="group flex items-center gap-2.5 tracking-tight">
          <div className="w-8 h-8 rounded bg-ink text-white flex items-center justify-center font-mono font-bold text-xs group-hover:bg-accent transition-colors shadow-2xs">
            YN
          </div>
          <span className="font-sans font-bold text-lg tracking-wider text-ink group-hover:text-accent transition-colors">
            NAGENDRA.
          </span>
          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg-alt/70 text-ink-muted border border-border">
            DEV
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[13px] font-medium tracking-wide">
          <a
            href="#work"
            className="text-ink-muted hover:text-ink transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent hover:after:w-full after:transition-all"
          >
            Work
          </a>
          <a
            href="#experience"
            className="text-ink-muted hover:text-ink transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent hover:after:w-full after:transition-all"
          >
            Experience
          </a>
          <a
            href="#expertise"
            className="text-ink-muted hover:text-ink transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent hover:after:w-full after:transition-all"
          >
            Expertise
          </a>
          <a
            href="#about"
            className="text-ink-muted hover:text-ink transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent hover:after:w-full after:transition-all"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-ink-muted hover:text-ink transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Right Meta Status & Resume */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2.5 bg-white/80 border border-border px-3 py-1.5 rounded-full text-xs font-mono text-ink-muted shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>Open to opportunities</span>
          </div>

          <a
            href="#contact"
            onClick={handleResumeClick}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-medium px-4 py-2 bg-ink text-white hover:bg-accent transition-colors duration-200 rounded shadow-2xs group"
          >
            <FileText className="w-3.5 h-3.5 text-accent-light group-hover:text-white transition-colors" />
            <span>Resume</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            className="md:hidden w-9 h-9 rounded-md border border-border bg-white flex items-center justify-center text-ink hover:text-accent hover:border-accent transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-bg border-b border-border p-6 shadow-xl flex flex-col space-y-4 font-medium text-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted pb-2 border-b border-border/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>Open to Frontend roles</span>
          </div>
          <a
            href="#work"
            className="flex items-center justify-between text-ink hover:text-accent transition-colors py-1"
            onClick={closeMobileMenu}
          >
            <span>Work</span>
            <ArrowUpRight className="w-4 h-4 text-ink-faint" />
          </a>
          <a
            href="#experience"
            className="flex items-center justify-between text-ink hover:text-accent transition-colors py-1"
            onClick={closeMobileMenu}
          >
            <span>Experience</span>
            <ArrowUpRight className="w-4 h-4 text-ink-faint" />
          </a>
          <a
            href="#expertise"
            className="flex items-center justify-between text-ink hover:text-accent transition-colors py-1"
            onClick={closeMobileMenu}
          >
            <span>Expertise</span>
            <ArrowUpRight className="w-4 h-4 text-ink-faint" />
          </a>
          <a
            href="#about"
            className="flex items-center justify-between text-ink hover:text-accent transition-colors py-1"
            onClick={closeMobileMenu}
          >
            <span>About</span>
            <ArrowUpRight className="w-4 h-4 text-ink-faint" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-between text-ink hover:text-accent transition-colors py-1"
            onClick={closeMobileMenu}
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4 text-ink-faint" />
          </a>
        </div>
      )}
    </header>
  );
}
