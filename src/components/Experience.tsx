'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Check,
  Tag,
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-bg-alt/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-2">
              <span>02 / Career</span>
              <span className="w-6 h-px bg-accent"></span>
            </div>
            <h2 className="clamp-section font-serif font-normal text-ink">Experience.</h2>
            <p className="text-ink-muted text-sm mt-2">
              Scannable history focused on production UI development, design system implementation, and clean API
              integrations.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact Recruiter Timeline with ScrollReveal */}
        <div className="space-y-6 max-w-4xl">
          {/* Role 1: Current Frontend Role */}
          <ScrollReveal delayMs={100}>
            <div className="card-hover-lift bg-surface border border-border rounded-xl p-6 md:p-8 transition-all duration-300 shadow-2xs group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-5 pb-4 border-b border-border/50">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-2xs group-hover:bg-accent group-hover:text-surface transition-colors duration-300">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xl font-medium text-ink group-hover:text-accent transition-colors">
                      Frontend Developer
                    </h3>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium shadow-2xs">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
                      </span>
                      <span>Current Role</span>
                    </span>
                  </div>
                  <p className="text-accent font-serif text-lg mt-1 ml-10">Web Applications &amp; Client UI</p>
                </div>

                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted bg-bg px-3 py-1.5 rounded-full border border-border self-start md:self-auto shadow-2xs group-hover:border-accent/40 transition-colors">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span>2023 — Present · Full-Time</span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-ink-muted leading-relaxed">
                <li className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-surface transition-colors">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>
                    Architected responsive, accessible UI modules using <strong className="text-ink">React.js</strong>{' '}
                    and <strong className="text-ink">Next.js</strong>, achieving 95+ Google Lighthouse performance scores.
                  </span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-surface transition-colors">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>
                    Spearheaded design token centralization and created a modular component library used across 12+
                    product views to prevent UI regressions.
                  </span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-surface transition-colors">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>
                    Integrated complex REST APIs, client-side caching, and optimistic mutations with resilient error
                    states and skeleton loaders.
                  </span>
                </li>
              </ul>

              <div className="mt-5 pt-3.5 border-t border-border/40 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-muted">
                <span className="text-ink-faint flex items-center gap-1">
                  <Tag className="w-3 h-3 text-accent" />
                  <span>Tech:</span>
                </span>
                <span className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent hover:-translate-y-0.5 transition-all">
                  React.js
                </span>
                <span className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent hover:-translate-y-0.5 transition-all">
                  Next.js
                </span>
                <span className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent hover:-translate-y-0.5 transition-all">
                  TypeScript
                </span>
                <span className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent hover:-translate-y-0.5 transition-all">
                  Tailwind CSS
                </span>
                <span className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent hover:-translate-y-0.5 transition-all">
                  REST APIs
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Role 2: Frontend Engineering Internship */}
          <ScrollReveal delayMs={200}>
            <div className="card-hover-lift bg-surface border border-border rounded-xl p-6 md:p-8 transition-all duration-300 shadow-2xs group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-5 pb-4 border-b border-border/50">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-bg-alt/70 border border-border flex items-center justify-center text-accent shadow-2xs group-hover:bg-accent group-hover:text-surface transition-colors duration-300">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xl font-medium text-ink group-hover:text-accent transition-colors">
                      Frontend Development Intern
                    </h3>
                    <span className="font-mono text-[11px] bg-bg text-ink-muted border border-border px-2.5 py-0.5 rounded-full font-medium shadow-2xs">
                      Internship
                    </span>
                  </div>
                  <p className="text-accent font-serif text-lg mt-1 ml-10">Software Engineering Practice</p>
                </div>

                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted bg-bg px-3 py-1.5 rounded-full border border-border self-start md:self-auto shadow-2xs group-hover:border-accent/40 transition-colors">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span>2022 — 2023 · Verified</span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-ink-muted leading-relaxed">
                <li className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-surface transition-colors">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>
                    Developed cross-browser responsive interfaces from Figma prototypes using semantic HTML5, modern
                    CSS3, and JavaScript ES6+.
                  </span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-surface transition-colors">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>
                    Collaborated with senior engineers on component testing, resolving DOM rendering bottlenecks, and
                    maintaining clean Git pull requests.
                  </span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-surface transition-colors">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>
                    Assisted in backend REST endpoint consumption and dynamic form validations for client onboarding
                    dashboards.
                  </span>
                </li>
              </ul>

              <div className="mt-5 pt-3.5 border-t border-border/40 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-muted">
                <span className="text-ink-faint flex items-center gap-1">
                  <Tag className="w-3 h-3 text-accent" />
                  <span>Tech:</span>
                </span>
                <span className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent hover:-translate-y-0.5 transition-all">
                  JavaScript (ES6+)
                </span>
                <span className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent hover:-translate-y-0.5 transition-all">
                  Bootstrap
                </span>
                <span className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent hover:-translate-y-0.5 transition-all">
                  Responsive Design
                </span>
                <span className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent hover:-translate-y-0.5 transition-all">
                  Git &amp; GitHub
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
