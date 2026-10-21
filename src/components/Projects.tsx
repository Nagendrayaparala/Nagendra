'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Project, ProjectCategory } from '@/types';
import { PROJECTS } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  LayoutList,
  LayoutGrid,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Code2,
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [viewMode, setViewMode] = useState<'editorial' | 'canvas'>('editorial');
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const listRef = useRef<HTMLDivElement>(null);

  // Smooth lerp pointer physics for floating preview canvas on desktop
  useEffect(() => {
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const updateCursor = () => {
      setCursorPos((prev) => ({
        x: lerp(prev.x, mousePos.x, 0.15),
        y: lerp(prev.y, mousePos.y, 0.15),
      }));
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    animationFrameId = requestAnimationFrame(updateCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (listRef.current) {
      const rect = listRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 md:py-32 max-w-6xl mx-auto px-6 md:px-10 relative">
      {/* Editorial Section Header */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-2">
              <span>01 / Selected Works</span>
              <span className="w-8 h-px bg-accent"></span>
            </div>
            <h2 className="clamp-section font-serif font-normal text-ink tracking-tight">
              Selected Projects.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
            {/* View Mode Toggle: Minimal Editorial List vs Visual Canvas */}
            <div className="inline-flex items-center p-1 rounded-lg bg-surface border border-border text-xs font-mono shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('editorial')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'editorial'
                    ? 'bg-ink text-surface font-semibold shadow-xs'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span>Editorial Index</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('canvas')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'canvas'
                    ? 'bg-ink text-surface font-semibold shadow-xs'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Visual Canvas</span>
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Category Filter Pills */}
      <ScrollReveal delayMs={60}>
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {(
            [
              { id: 'all', label: 'All Projects' },
              { id: 'product', label: 'Product UI' },
              { id: 'webapp', label: 'Web Applications' },
              { id: 'mobile', label: 'Mobile Android' },
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-accent text-surface font-medium shadow-2xs'
                  : 'bg-surface/80 border border-border text-ink-muted hover:text-ink hover:border-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* =====================================================================
          VIEW MODE 1: MINIMAL EDITORIAL INDEX (aarya.wtf inspired)
          Typography-driven list with interactive cursor-following preview canvas
          ===================================================================== */}
      {viewMode === 'editorial' ? (
        <div
          ref={listRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredProject(null)}
          className="relative divide-y divide-border border-y border-border"
        >
          {/* Floating Pointer-Following Preview Canvas (Desktop only) */}
          {hoveredProject && (
            <div
              className="hidden lg:block pointer-events-none fixed z-40 w-80 h-52 rounded-xl overflow-hidden border border-border shadow-2xl transition-opacity duration-300"
              style={{
                top: `${cursorPos.y}px`,
                left: `${cursorPos.x + 36}px`,
                transform: 'translate3d(0, -50%, 0)',
                boxShadow: '0 20px 50px -10px var(--theme-glow)',
              }}
            >
              <div className="relative w-full h-full bg-surface">
                <img
                  src={hoveredProject.image}
                  alt={hoveredProject.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="font-mono text-[10px] uppercase text-accent-light tracking-wider block">
                    {hoveredProject.categoryLabel}
                  </span>
                  <span className="font-serif text-lg leading-tight block">
                    {hoveredProject.title}
                  </span>
                </div>
              </div>
            </div>
          )}

          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project)}
              onClick={() => setActiveModalProject(project)}
              className="group py-7 sm:py-8 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:bg-bg-alt/30 cursor-pointer"
            >
              {/* Left: Index & Large Typography Title */}
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-xs text-accent font-semibold shrink-0">
                  0{idx + 1}
                </span>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-ink tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-bg border border-border text-ink-muted">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-muted mt-1 max-w-xl line-clamp-1 group-hover:text-ink transition-colors">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Right: Category, Tech Stack & Action Arrow */}
              <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-2 md:pt-0">
                <div className="hidden sm:flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-ink-muted">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-bg/80 border border-border/70"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-ink-faint">+{project.tags.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-ink-muted group-hover:text-accent transition-colors">
                  <span className="hidden sm:inline">View Case Study</span>
                  <div className="w-8 h-8 rounded-full border border-border bg-surface flex items-center justify-center text-ink group-hover:border-accent group-hover:bg-accent group-hover:text-surface transition-all duration-300 group-hover:translate-x-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* =====================================================================
           VIEW MODE 2: VISUAL CANVAS SHOWCASE
           High-definition cards with simulated browser chome and live metric pills
           ===================================================================== */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delayMs={idx * 80}>
              <div
                onClick={() => setActiveModalProject(project)}
                className="card-hover-lift h-full flex flex-col justify-between bg-surface border border-border rounded-2xl overflow-hidden shadow-sm group hover:border-accent hover:shadow-theme-glow transition-all duration-500 cursor-pointer"
              >
                {/* Visual Image Header with Ambient Theme Overlay */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-bg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-surface/90 border border-border text-ink backdrop-blur-md shadow-2xs">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 font-mono text-[10px] px-2.5 py-1 rounded-full bg-surface/90 border border-border text-ink backdrop-blur-md shadow-2xs">
                    {project.year}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Verified Metrics Pills */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/60 text-[10px] font-mono">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-2 rounded bg-bg border border-border/50 text-center"
                        >
                          <span className="text-ink-muted block text-[9px]">{m.label}</span>
                          <strong className="text-ink block">{m.value}</strong>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags & Action */}
                  <div className="pt-2 flex items-center justify-between border-t border-border/40 text-xs font-mono">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-bg-alt/50 border border-border text-ink-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-accent font-medium flex items-center gap-0.5">
                      Details <span>&rsaquo;</span>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
