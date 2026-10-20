'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';
import {
  Layout,
  Server,
  Wrench,
  Layers,
  FileCode2,
  Globe,
  Palette,
  Cpu,
  Network,
  Database,
  Binary,
  GitBranch,
  Gauge,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 max-w-6xl mx-auto px-6 md:px-10">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-2">
              <span>03 / Capabilities</span>
              <span className="w-6 h-px bg-accent"></span>
            </div>
            <h2 className="clamp-section font-serif font-normal text-ink">Expertise.</h2>
          </div>
          <p className="text-xs font-mono text-ink-muted mt-2 md:mt-0 max-w-xs">
            No arbitrary percentage meters. Just structured proficiencies verified through real projects.
          </p>
        </div>
      </ScrollReveal>

      {/* 3-Column Structured Typographic Grouping with Staggered ScrollReveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Group 1: Frontend */}
        <ScrollReveal delayMs={0} className="flex">
          <div className="card-hover-lift w-full bg-white border border-border rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-2xs group-hover:bg-accent group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                    <Layout className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors">Frontend</h3>
                </div>
                <span className="font-mono text-xs text-accent font-semibold bg-bg-alt/50 px-2 py-0.5 rounded border border-border">
                  Core Focus
                </span>
              </div>
              <p className="text-xs text-ink-muted mb-6 leading-relaxed">
                Crafting responsive layouts, maintaining state integrity, and ensuring fast render cycles.
              </p>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    <span>React.js / Next.js</span>
                  </span>
                  <span className="text-accent text-[11px] font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <FileCode2 className="w-3.5 h-3.5 text-accent" />
                    <span>JavaScript / TypeScript</span>
                  </span>
                  <span className="text-accent text-[11px] font-semibold">Primary</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-accent" />
                    <span>HTML5 &amp; Semantic Web</span>
                  </span>
                  <span className="text-accent text-[11px] font-semibold">Standard</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-accent" />
                    <span>CSS3 / Tailwind / Bootstrap</span>
                  </span>
                  <span className="text-accent text-[11px] font-semibold">Design Tokens</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60 text-[11px] font-mono text-ink-faint flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot"></span>
              <span>Emphasis on accessibility (a11y) &amp; micro-interactions.</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Group 2: Backend & Data */}
        <ScrollReveal delayMs={120} className="flex">
          <div className="card-hover-lift w-full bg-white border border-border rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-2xs group-hover:bg-accent group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                    <Server className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors">Backend &amp; Data</h3>
                </div>
                <span className="font-mono text-xs text-ink-muted font-semibold bg-bg px-2 py-0.5 rounded border border-border">
                  Integration
                </span>
              </div>
              <p className="text-xs text-ink-muted mb-6 leading-relaxed">
                Connecting frontends to robust services, caching layers, and database schemas.
              </p>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-accent" />
                    <span>Node.js &amp; Express.js</span>
                  </span>
                  <span className="text-ink-muted text-[11px]">API Services</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-accent" />
                    <span>RESTful API Design</span>
                  </span>
                  <span className="text-ink-muted text-[11px]">Endpoints</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-accent" />
                    <span>MongoDB (Mongoose)</span>
                  </span>
                  <span className="text-ink-muted text-[11px]">NoSQL</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <Binary className="w-3.5 h-3.5 text-accent" />
                    <span>MySQL</span>
                  </span>
                  <span className="text-ink-muted text-[11px]">Relational</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60 text-[11px] font-mono text-ink-faint flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot"></span>
              <span>Full MERN flow implementation capability.</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Group 3: Tools & Quality */}
        <ScrollReveal delayMs={240} className="flex">
          <div className="card-hover-lift w-full bg-white border border-border rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-2xs group-hover:bg-accent group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors">Tools &amp; Quality</h3>
                </div>
                <span className="font-mono text-xs text-ink-muted font-semibold bg-bg px-2 py-0.5 rounded border border-border">
                  Workflow
                </span>
              </div>
              <p className="text-xs text-ink-muted mb-6 leading-relaxed">
                Modern development toolchain ensuring reproducible builds and reliable deploys.
              </p>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <GitBranch className="w-3.5 h-3.5 text-accent" />
                    <span>Git &amp; GitHub Actions</span>
                  </span>
                  <span className="text-ink-muted text-[11px]">Version Control</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <Gauge className="w-3.5 h-3.5 text-accent" />
                    <span>Chrome DevTools &amp; Audit</span>
                  </span>
                  <span className="text-ink-muted text-[11px]">Profiling</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Postman &amp; API Testing</span>
                  </span>
                  <span className="text-ink-muted text-[11px]">Validation</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg border border-border/40 hover:border-accent hover:bg-bg-alt/40 hover:translate-x-1 transition-all duration-200">
                  <span className="text-ink font-medium flex items-center gap-2">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
                    <span>VS Code &amp; ESLint</span>
                  </span>
                  <span className="text-ink-muted text-[11px]">Clean Code</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60 text-[11px] font-mono text-ink-faint flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot"></span>
              <span>Disciplined commit hygiene and semantic versioning.</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
