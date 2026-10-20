'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-bg text-ink-muted text-xs font-mono">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-bold text-ink">NAGENDRA.</span>
          <span>—</span>
          <span>Designed &amp; engineered with React, Next.js tokens &amp; semantic HTML</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="hover:text-ink transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-5 h-5 rounded bg-white border border-border flex items-center justify-center text-accent group-hover:border-accent shadow-2xs">
              <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </a>
          <span>© 2024 Yaparala Nagendra</span>
        </div>
      </div>
    </footer>
  );
}
