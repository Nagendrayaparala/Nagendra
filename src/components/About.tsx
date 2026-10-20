'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';
import {
  Search,
  Boxes,
  Code2,
  Gauge,
  Sparkles,
  MapPin,
  Globe,
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-bg-alt/40 border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 5 cols: Avatar Thinking / Process Pose with ScrollReveal */}
          <ScrollReveal delayMs={0} className="lg:col-span-5 flex flex-col items-center">
            <div className="card-hover-lift relative w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-white border border-border p-4 shadow-sm flex flex-col items-center justify-end overflow-hidden group">
              <img
                src="/avathars/nagendra_portrait.png"
                alt="Yaparala Nagendra - Process portrait"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-white/95 border border-border px-3 py-1 rounded-full text-[10px] font-mono text-ink-muted flex items-center gap-1.5 shadow-2xs group-hover:border-accent transition-colors">
                <Sparkles className="w-3 h-3 text-accent animate-pulse-dot" />
                <span>Focus: Clean Architecture</span>
              </div>
            </div>
            <p className="font-mono text-xs text-ink-faint mt-3 text-center italic">
              &ldquo;Good frontend code makes complexity invisible to the user.&rdquo;
            </p>
          </ScrollReveal>

          {/* Right 7 cols: Philosophy & How I Work */}
          <ScrollReveal delayMs={100} className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
              <span>04 / Philosophy</span>
              <span className="w-6 h-px bg-accent"></span>
            </div>

            <h2 className="clamp-section font-serif font-normal text-ink">
              A little about how I work.
            </h2>

            <p className="text-ink-muted leading-relaxed text-sm md:text-base">
              I believe that great user interfaces are not born from decorative trends, but from disciplined engineering
              and thoughtful empathy. My workflow follows a straightforward five-stage cycle:
            </p>

            {/* 4 Steps Process Grid with Staggered ScrollReveal & Lift Animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="card-hover-lift bg-white p-5 rounded-xl border border-border shadow-2xs group">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-accent font-semibold group-hover:text-ink transition-colors">
                    01 · Understand
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-medium text-sm text-ink mb-1 group-hover:text-accent transition-colors">
                  Grasp requirements
                </h4>
                <p className="text-xs text-ink-muted leading-normal">
                  Deep dive into user intent, edge cases, and design specifications before touching code.
                </p>
              </div>

              <div className="card-hover-lift bg-white p-5 rounded-xl border border-border shadow-2xs group">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-accent font-semibold group-hover:text-ink transition-colors">
                    02 · Structure
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Boxes className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-medium text-sm text-ink mb-1 group-hover:text-accent transition-colors">
                  Reusable components
                </h4>
                <p className="text-xs text-ink-muted leading-normal">
                  Map out atomic UI boundaries, props contracts, and single sources of truth.
                </p>
              </div>

              <div className="card-hover-lift bg-white p-5 rounded-xl border border-border shadow-2xs group">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-accent font-semibold group-hover:text-ink transition-colors">
                    03 · Build
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-medium text-sm text-ink mb-1 group-hover:text-accent transition-colors">
                  Responsive layouts
                </h4>
                <p className="text-xs text-ink-muted leading-normal">
                  Code fluid, accessible, mobile-first layouts without layout shifts or overflow.
                </p>
              </div>

              <div className="card-hover-lift bg-white p-5 rounded-xl border border-border shadow-2xs group">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-accent font-semibold group-hover:text-ink transition-colors">
                    04 · Test &amp; Refine
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Gauge className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-medium text-sm text-ink mb-1 group-hover:text-accent transition-colors">
                  Verify real behavior
                </h4>
                <p className="text-xs text-ink-muted leading-normal">
                  Stress-test interactions, latency states, screen sizes, and keyboard navigation.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-ink-muted flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-medium shadow-2xs">
                <MapPin className="w-3 h-3 text-emerald-700 animate-pulse-dot" />
                <span>Based in India</span>
              </span>
              <span className="text-ink-faint">·</span>
              <span className="inline-flex items-center gap-1.5 text-ink">
                <Globe className="w-3.5 h-3.5 text-accent" />
                <span>Available worldwide for Remote roles &amp; high-impact contracts</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
