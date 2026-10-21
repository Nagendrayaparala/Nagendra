'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';
import { EXPERIENCES, EDUCATION } from '@/data/portfolioData';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Check,
  Tag,
  MapPin,
  ExternalLink,
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-alt/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-2">
                <span>04 / Trajectory</span>
                <span className="w-8 h-px bg-accent"></span>
              </div>
              <h2 className="clamp-section font-serif font-normal text-ink tracking-tight">
                Experience.
              </h2>
            </div>
            <p className="font-mono text-xs text-ink-muted max-w-xs mt-2 md:mt-0">
              Verified professional roles, architectural contributions, and academic background.
            </p>
          </div>
        </ScrollReveal>

        {/* Professional Experience Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <ScrollReveal key={exp.id} delayMs={index * 100}>
              <div className="card-hover-lift bg-surface border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-2xs group">
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-5 pb-4 border-b border-border/60">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-2xs group-hover:bg-accent group-hover:text-surface transition-colors duration-300">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-medium text-ink group-hover:text-accent transition-colors font-sans">
                        {exp.role}
                      </h3>
                      {exp.current ? (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium shadow-2xs">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
                          </span>
                          <span>Current Role</span>
                        </span>
                      ) : (
                        <span className="font-mono text-[11px] bg-bg text-ink-muted border border-border px-2.5 py-0.5 rounded-full font-medium">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <p className="text-accent font-serif text-lg mt-1 ml-11">
                      {exp.organization} · {exp.location}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted bg-bg px-3 py-1.5 rounded-full border border-border self-start md:self-auto shadow-2xs">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Key Contributions */}
                <div className="space-y-2.5 mb-5">
                  {exp.contributions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <div className="w-5 h-5 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-surface transition-colors">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-3.5 border-t border-border/50 flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-ink-faint flex items-center gap-1 mr-1">
                    <Tag className="w-3 h-3 text-accent" />
                    <span>Stack:</span>
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-bg px-2.5 py-0.5 rounded border border-border text-ink hover:border-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Academic Background */}
          {EDUCATION.map((edu, idx) => (
            <ScrollReveal key={idx} delayMs={200}>
              <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border shadow-2xs">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-3 pb-3 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-bg-alt/70 border border-border flex items-center justify-center text-accent">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-ink font-sans">{edu.degree}</h4>
                      <p className="text-accent font-serif text-base">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent font-semibold px-2.5 py-1 rounded bg-bg border border-border">
                      {edu.score}
                    </span>
                    <span className="font-mono text-xs text-ink-muted">{edu.period}</span>
                  </div>
                </div>
                <p className="text-xs text-ink-muted font-mono leading-relaxed">{edu.focus}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
