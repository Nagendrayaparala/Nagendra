'use client';

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import {
  Code2,
  Layout,
  Server,
  Wrench,
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

export default function Expertise() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('frontend');

  const categoryIcons: Record<string, React.ElementType> = {
    frontend: Layout,
    'ui-styling': Layers,
    backend: Server,
    tooling: Wrench,
    motion: Sparkles,
  };

  const activeCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section id="expertise" className="py-24 md:py-32 max-w-6xl mx-auto px-6 md:px-10">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-2">
              <span>03 / Capabilities</span>
              <span className="w-8 h-px bg-accent"></span>
            </div>
            <h2 className="clamp-section font-serif font-normal text-ink tracking-tight">
              Skills &amp; Technology.
            </h2>
          </div>

          <p className="font-mono text-xs text-ink-muted max-w-xs mt-2 md:mt-0">
            Organized proficiencies verified through actual production interfaces. Zero arbitrary percent meters.
          </p>
        </div>
      </ScrollReveal>

      {/* Category Pills Navigation */}
      <ScrollReveal delayMs={60}>
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code2;
            const isSelected = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryId(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-ink text-surface font-semibold shadow-xs scale-[1.02]'
                    : 'bg-surface border border-border text-ink-muted hover:text-ink hover:border-accent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-accent' : 'text-accent'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Active Category Header */}
      <div className="mb-6 p-4 rounded-xl bg-bg-alt/40 border border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-mono text-accent uppercase tracking-wider block font-semibold">
            {activeCategory.name}
          </span>
          <p className="text-xs text-ink-muted mt-0.5">{activeCategory.description}</p>
        </div>
        <span className="text-[11px] font-mono text-ink-faint shrink-0">
          {activeCategory.skills.length} Technical Proficiencies
        </span>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {activeCategory.skills.map((skill, index) => (
          <ScrollReveal key={skill.name} delayMs={index * 50}>
            <div className="card-hover-lift h-full p-5 rounded-xl bg-surface border border-border shadow-2xs group flex flex-col justify-between hover:border-accent transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-border/60">
                  <span className="font-sans font-medium text-base text-ink group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-semibold text-accent px-2 py-0.5 rounded bg-bg-alt/60 border border-border">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed mb-3">
                  {skill.description}
                </p>
              </div>

              <div className="pt-2 border-t border-border/40 text-[11px] font-mono text-ink-faint flex items-center justify-between">
                <span>{skill.tag}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
