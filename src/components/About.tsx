'use client';

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  Sparkles,
  Compass,
  Layers,
  Zap,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Code2,
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'timeline'>('philosophy');

  const principles = [
    {
      number: '01',
      title: 'Atomic Boundaries',
      description:
        'Map out clear single-source-of-truth component boundaries, explicit props contracts, and resilient error boundaries before touching styling.',
      tag: 'Architecture',
    },
    {
      number: '02',
      title: 'Invisible Latency',
      description:
        'Care deeply about actual user latency: eliminating cumulative layout shifts (CLS: 0), pruning render churn, and keeping interaction to next paint (INP) instantaneous.',
      tag: 'Performance',
    },
    {
      number: '03',
      title: 'Ergonomic Accessibility',
      description:
        'Prioritize semantic HTML landmarks, logical tabindex traversal, and high-contrast color pairings from day zero so every user enjoys the product.',
      tag: 'Accessibility (a11y)',
    },
    {
      number: '04',
      title: 'Design Sensitivity',
      description:
        'Treat typography, micro-spacing, and transition physics as first-class engineering responsibilities, translating creative direction into robust code.',
      tag: 'Interaction Craft',
    },
  ];

  const milestones = [
    {
      year: '2024 — Present',
      title: 'Frontend Developer at MockWin',
      description:
        'Engineering candidate assessment simulator interfaces, centralized design tokens, and real-time scorecards in React, Next.js, and TypeScript.',
      icon: Briefcase,
      tag: 'Current Role',
    },
    {
      year: '2022 — 2023',
      title: 'Web Development Internship',
      description:
        'Developed responsive cross-browser web layouts from Figma design specifications, conducted component testing, and participated in Git PR reviews.',
      icon: Code2,
      tag: 'Professional Practice',
    },
    {
      year: '2019 — 2023',
      title: 'B.Tech in Computer Science · RGUKT',
      description:
        'Graduated with an 8.76 CGPA, building strong foundations in data structures, algorithms, database systems, and modern web architectures.',
      icon: GraduationCap,
      tag: 'CGPA: 8.76',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-alt/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-2">
                <span>02 / Perspective</span>
                <span className="w-8 h-px bg-accent"></span>
              </div>
              <h2 className="clamp-section font-serif font-normal text-ink tracking-tight">
                About &amp; Approach.
              </h2>
            </div>

            <p className="font-mono text-xs text-ink-muted max-w-xs mt-2 md:mt-0">
              Frontend engineering where design sensitivity meets computational discipline.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Portrait with Architectural Dual-Tone Stage */}
          <ScrollReveal delayMs={0} className="lg:col-span-5 flex flex-col items-center">
            <div
              className="card-hover-lift relative w-64 h-72 sm:w-80 sm:h-96 rounded-3xl border border-border p-5 shadow-md flex flex-col items-center justify-end overflow-hidden group hover:shadow-theme-glow transition-all duration-500"
              style={{ background: 'var(--theme-arch-gradient)' }}
            >
              <div
                className="animate-halo-breathe absolute inset-4 rounded-full blur-2xl -z-10"
                style={{ background: 'radial-gradient(circle, var(--theme-glow) 0%, transparent 70%)' }}
              />

              <img
                src="/avathars/nagendra_portrait.png"
                alt="Nagendra Yaparala - Frontend developer portrait"
                className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute top-4 left-4 z-20 bg-surface/90 border border-border px-3 py-1.5 rounded-full text-[10px] font-mono text-ink flex items-center gap-2 shadow-2xs backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-accent animate-pulse-dot" />
                <span>Frontend Developer · MockWin</span>
              </div>
            </div>

            <div className="mt-6 text-center space-y-1">
              <span className="font-mono text-xs text-ink font-semibold block">
                Nagendra Yaparala
              </span>
              <p className="font-mono text-[11px] text-ink-faint italic max-w-xs">
                &ldquo;Good frontend code makes complex systems feel completely natural to the user.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column (7 cols): Editorial Typography & Interactive Tab Switcher */}
          <ScrollReveal delayMs={100} className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
                I build digital interfaces with deliberate care, high responsiveness, and zero fluff.
              </h3>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                {PERSONAL_INFO.aboutIntro} With approximately 1 year of professional frontend experience,
                I currently engineer product interfaces at <strong className="text-ink font-medium">MockWin</strong>,
                specializing in technical assessment runners, design systems, and responsive MERN/Next.js architectures.
              </p>

              <div className="p-4 rounded-xl bg-surface border border-border/80 text-xs font-mono text-ink-muted space-y-2">
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>What I Am Currently Exploring:</span>
                </div>
                <p className="leading-relaxed">
                  Next.js App Router performance optimizations, micro-interaction physics, accessible keyboard focus rings,
                  and headless UI component contracts.
                </p>
              </div>
            </div>

            {/* Toggle Tabs: Principles vs Timeline */}
            <div className="pt-2">
              <div className="flex items-center gap-3 border-b border-border pb-3 mb-6 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('philosophy')}
                  className={`pb-1 transition-all cursor-pointer relative ${
                    activeTab === 'philosophy'
                      ? 'text-ink font-bold border-b-2 border-accent'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  Core Engineering Principles
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('timeline')}
                  className={`pb-1 transition-all cursor-pointer relative ${
                    activeTab === 'timeline'
                      ? 'text-ink font-bold border-b-2 border-accent'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  Professional Milestones
                </button>
              </div>

              {activeTab === 'philosophy' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {principles.map((p) => (
                    <div
                      key={p.number}
                      className="card-hover-lift p-5 rounded-xl bg-surface border border-border shadow-2xs group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs text-accent font-semibold">
                          {p.number}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg border border-border text-ink-muted">
                          {p.tag}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg text-ink group-hover:text-accent transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-xs text-ink-muted leading-relaxed mt-1.5">
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {milestones.map((m) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={m.title}
                        className="p-5 rounded-xl bg-surface border border-border shadow-2xs flex items-start gap-4"
                      >
                        <div className="w-9 h-9 rounded-lg bg-bg border border-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-sans font-medium text-sm text-ink">{m.title}</h4>
                            <span className="font-mono text-[11px] text-accent font-medium">
                              {m.year}
                            </span>
                          </div>
                          <p className="text-xs text-ink-muted leading-relaxed">{m.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
