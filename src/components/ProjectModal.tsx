'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types';
import {
  X,
  ExternalLink,
  Calendar,
  Layers,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Terminal,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-ink space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Project Modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-bg border border-border flex items-center justify-center text-ink-muted hover:text-ink hover:border-accent transition-all cursor-pointer shadow-2xs hover:rotate-90"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Metadata */}
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-accent mb-3 uppercase tracking-widest">
            <span className="px-2.5 py-0.5 rounded bg-bg-alt/70 border border-border">
              {project.categoryLabel}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-ink-muted">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>{project.year}</span>
            </span>
            <span>·</span>
            <span className="text-ink-muted">{project.caseStudy.role}</span>
          </div>

          <h2 id="modal-project-title" className="text-3xl sm:text-4xl md:text-5xl font-serif text-ink tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-muted mt-2 font-sans max-w-2xl leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Preview Visual */}
        <div className="relative rounded-xl overflow-hidden border border-border shadow-md bg-bg">
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            className="w-full h-auto max-h-[360px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Verified Metrics / Architecture Badges */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="p-3.5 rounded-xl bg-bg border border-border/70 text-center">
                <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider block mb-0.5">
                  {metric.label}
                </span>
                <strong className="text-base sm:text-lg font-mono text-ink font-semibold">
                  {metric.value}
                </strong>
              </div>
            ))}
          </div>
        )}

        {/* Editorial Case Study Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Problem */}
          <div className="p-5 rounded-xl bg-bg border border-border/70 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-rose-700 font-semibold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Approach */}
          <div className="p-5 rounded-xl bg-bg border border-border/70 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-accent font-semibold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span>The Architecture Approach</span>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {project.caseStudy.approach}
            </p>
          </div>

          {/* Implementation */}
          <div className="p-5 rounded-xl bg-bg border border-border/70 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-700 font-semibold uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-blue-600" />
              <span>Implementation &amp; Tech</span>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {project.caseStudy.implementation}
            </p>
          </div>

          {/* Outcome */}
          <div className="p-5 rounded-xl bg-bg border border-border/70 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-800 font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Verified Outcome</span>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {project.caseStudy.outcome}
            </p>
          </div>
        </div>

        {/* Key Engineering Highlights */}
        {project.caseStudy.highlights && project.caseStudy.highlights.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-ink font-semibold">
              Technical Contributions
            </h4>
            <div className="space-y-2">
              {project.caseStudy.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="space-y-2 pt-2 border-t border-border/60">
          <div className="flex items-center gap-1.5 text-xs font-mono text-ink-faint">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span>Technologies Utilized:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono bg-bg border border-border text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:opacity-95 text-white text-xs font-mono uppercase tracking-wider rounded-lg transition-all shadow-2xs hover:shadow-accent-glow"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-bg hover:bg-bg-alt border border-border text-ink text-xs font-mono uppercase tracking-wider rounded-lg transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-ink" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-ink-muted hover:text-ink transition-colors cursor-pointer"
          >
            Press [ESC] to close
          </button>
        </div>
      </div>
    </div>
  );
}
