'use client';

import React, { useState } from 'react';
import { useAvatar } from '@/context/AvatarContext';
import ScrollReveal from './ScrollReveal';
import {
  Layers,
  Globe,
  Layout,
  Smartphone,
  ArrowUpRight,
  ExternalLink,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ShoppingCart,
  CreditCard,
  Radio,
  Wifi,
  Battery,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';

type CategoryType = 'all' | 'webapp' | 'product' | 'mobile';

interface Project {
  id: string;
  title: string;
  category: CategoryType;
  categoryLabel: string;
  year: string;
  description: string;
  tags: string[];
  colSpan: string;
  pose: 'coding' | 'thinking' | 'greeting';
  poseMessage: string;
  footerLabel: string;
  actionText: string;
  actionHref: string;
  preview: React.ReactNode;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const { setPose } = useAvatar();

  const projects: Project[] = [
    {
      id: 'mockwin',
      title: 'MockWin',
      category: 'product',
      categoryLabel: 'Product UI · Recruitment',
      year: '2024',
      description:
        'End-to-end recruitment and candidate assessment product experience with high-fidelity test simulations, role benchmarking, and real-time candidate scorecards.',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'REST API'],
      colSpan: 'md:col-span-7',
      pose: 'coding',
      poseMessage: 'Inspecting MockWin assessment engine UI architecture',
      footerLabel: 'View Architecture & Case Study',
      actionText: 'Demo / Inquire',
      actionHref: '#contact',
      preview: (
        <div className="w-full bg-surface rounded-xl border border-border shadow-sm overflow-hidden transform group-hover:scale-[1.02] group-hover:border-accent group-hover:shadow-theme-glow transition-all duration-500">
          {/* Simulated Browser Bar with Jewel Controls */}
          <div className="bg-bg px-3.5 py-2.5 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block"></span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface border border-border px-2.5 py-0.5 rounded text-[10px] font-mono text-ink-muted shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot"></span>
              <span>mockwin.app/candidate/live-assessment</span>
            </div>
            <div className="w-8"></div>
          </div>

          {/* Project Screenshot Visual with Theme Overlay */}
          <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-bg">
            <img
              src="/projects/mockwin.jpg"
              alt="MockWin recruitment candidate assessment engine interface"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
            <div className="absolute top-3 right-3 inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-surface/95 border border-emerald-200 px-2.5 py-0.5 rounded font-semibold shadow-2xs backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Score: 94/100</span>
            </div>
          </div>

          <div className="p-4 space-y-3 bg-surface border-t border-border/40">
            <div className="grid grid-cols-3 gap-2.5 text-[10px] font-mono">
              <div className="bg-bg p-2.5 rounded border border-border/60 hover:border-accent transition-colors">
                <div className="flex items-center gap-1 text-ink-muted mb-0.5">
                  <Zap className="w-3 h-3 text-amber-600 animate-pulse-dot" />
                  <span>React Speed</span>
                </div>
                <strong className="text-ink text-xs block">98ms avg</strong>
              </div>

              <div className="bg-bg p-2.5 rounded border border-border/60 hover:border-accent transition-colors">
                <div className="flex items-center gap-1 text-ink-muted mb-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Accessibility</span>
                </div>
                <strong className="text-ink text-xs block">AA Compliant</strong>
              </div>

              <div className="bg-bg p-2.5 rounded border border-border/60 hover:border-accent transition-colors">
                <div className="flex items-center gap-1 text-ink-muted mb-0.5">
                  <CheckCircle2 className="w-3 h-3 text-blue-600" />
                  <span>State Precision</span>
                </div>
                <strong className="text-ink text-xs block">Zero leaks</strong>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ecom-rkv',
      title: 'Ecom-RKV',
      category: 'webapp',
      categoryLabel: 'Web App · MERN',
      year: '2023',
      description:
        'Production-grade full-stack MERN e-commerce application featuring authenticated workflows, dynamic product filtering, cart persistence, and Stripe checkout integration.',
      tags: ['React.js', 'Node / Express', 'MongoDB'],
      colSpan: 'md:col-span-5',
      pose: 'coding',
      poseMessage: 'Checking Ecom-RKV fullstack cart state and API logic',
      footerLabel: 'Fullstack Repository',
      actionText: 'GitHub Source',
      actionHref: 'https://github.com',
      preview: (
        <div className="w-full bg-surface rounded-xl border border-border shadow-sm overflow-hidden transform group-hover:scale-[1.02] group-hover:border-accent group-hover:shadow-theme-glow transition-all duration-500">
          {/* Project Screenshot Visual with Theme Overlay */}
          <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-bg">
            <img
              src="/projects/ecom_rkv.jpg"
              alt="Ecom-RKV full-stack storefront interface"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"></div>
            <div className="absolute top-3 left-3 flex items-center gap-2 bg-surface/90 border border-border px-2.5 py-1 rounded-full backdrop-blur-md shadow-2xs">
              <div className="w-5 h-5 rounded bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <ShoppingCart className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-mono text-ink font-medium">Cart: 3 Items</span>
            </div>
            <span className="absolute top-3 right-3 text-xs font-bold text-accent font-mono bg-surface/90 px-2.5 py-1 rounded-full border border-border backdrop-blur-md shadow-2xs">
              $184.50
            </span>
          </div>

          <div className="p-4 bg-surface space-y-2 border-t border-border/40">
            <div className="flex justify-between text-[10px] font-mono text-ink-muted">
              <span>Checkout Flow Progress</span>
              <span className="text-emerald-700 font-semibold">85% Complete</span>
            </div>
            <div className="h-1.5 w-full bg-bg rounded-full overflow-hidden border border-border/50">
              <div className="h-full bg-accent stripe-animated rounded-full w-4/5"></div>
            </div>

            <div className="text-[11px] font-mono text-ink-muted flex items-center justify-between pt-1">
              <span className="inline-flex items-center gap-1">
                <CreditCard className="w-3 h-3 text-accent" />
                <span>Stripe 3DS: Active</span>
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                <ShieldCheck className="w-3 h-3" />
                <span>Optimized Flow</span>
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'mirror-news',
      title: 'Mirror News',
      category: 'mobile',
      categoryLabel: 'Mobile · Android',
      year: '2023',
      description:
        'Native Android news aggregation application delivering categorized global news feeds with offline cache management, push notifications, and customizable bookmarks.',
      tags: ['Java', 'XML Layouts', 'NewsAPI', 'Firebase'],
      colSpan: 'md:col-span-6',
      pose: 'thinking',
      poseMessage: 'Reviewing Mirror News asynchronous feeds and offline caching',
      footerLabel: 'Native Mobile Architecture',
      actionText: 'Repository',
      actionHref: 'https://github.com',
      preview: (
        <div className="w-full bg-surface rounded-xl border border-border shadow-sm overflow-hidden transform group-hover:scale-[1.01] group-hover:border-accent group-hover:shadow-theme-glow transition-all duration-500">
          <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-bg">
            <img
              src="/projects/mirror_news.jpg"
              alt="Mirror News Android mobile news application"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"></div>
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-surface/90 border border-border px-2.5 py-1 rounded-full backdrop-blur-md shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
              </span>
              <span className="text-[10px] font-mono text-rose-700 font-semibold uppercase tracking-wider">
                Live Newsfeed
              </span>
            </div>
            <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-mono text-ink bg-surface/90 px-2 py-1 rounded border border-border backdrop-blur-md">
              <Wifi className="w-3 h-3 text-ink" />
              <span>9:41</span>
            </div>
          </div>

          <div className="p-3.5 bg-surface text-[10px] font-mono text-ink-muted flex items-center justify-between border-t border-border/40">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse-dot"></span>
              <span>Android Client · NewsAPI Live</span>
            </span>
            <span className="text-accent font-medium">Offline SQLite Cache</span>
          </div>
        </div>
      ),
    },
    {
      id: 'raraa',
      title: 'Raraa E-commerce',
      category: 'webapp',
      categoryLabel: 'Web App · UI Boutique',
      year: '2022',
      description:
        'Lightweight, fast-loading apparel boutique storefront with custom CSS grid layouts, dynamic filtering, vanilla JavaScript cart state, and responsive checkout drawer.',
      tags: ['HTML5 Semantic', 'Modern CSS', 'Vanilla JS'],
      colSpan: 'md:col-span-6',
      pose: 'greeting',
      poseMessage: 'Exploring Raraa responsive boutique store layout',
      footerLabel: 'Frontend Performance Showcase',
      actionText: 'Live Demo',
      actionHref: 'https://github.com',
      preview: (
        <div className="w-full bg-surface rounded-xl border border-border shadow-sm overflow-hidden transform group-hover:scale-[1.01] group-hover:border-accent group-hover:shadow-theme-glow transition-all duration-500">
          <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-bg">
            <img
              src="/projects/canvas_studio.jpg"
              alt="Raraa Boutique apparel lookbook storefront"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"></div>
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-surface/90 border border-border px-2.5 py-1 rounded-full backdrop-blur-md shadow-2xs">
              <ShoppingBag className="w-3.5 h-3.5 text-accent" />
              <span className="text-[10px] font-mono text-ink font-medium">Boutique Lookbook Catalog</span>
            </div>
            <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-accent text-[11px] font-mono font-semibold bg-surface/90 px-2 py-0.5 rounded border border-border backdrop-blur-md shadow-2xs">
              <Sparkles className="w-3 h-3 text-accent animate-pulse-dot" />
              <span>100% Native DOM</span>
            </span>
          </div>

          <div className="p-3 bg-surface grid grid-cols-3 gap-2 text-[10px] font-mono text-ink-muted border-t border-border/40">
            <div className="bg-bg p-1.5 rounded border border-border/40 text-center hover:border-accent transition-colors">
              0 Layout Shifts
            </div>
            <div className="bg-bg p-1.5 rounded border border-border/40 text-center hover:border-accent transition-colors">
              Vanilla State
            </div>
            <div className="bg-bg p-1.5 rounded border border-border/40 text-center hover:border-accent transition-colors">
              100 Lighthouse
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-28 max-w-6xl mx-auto px-6 md:px-10">
      <ScrollReveal>
        {/* Section Header with Editorial Counter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-2">
              <span>01 / Portfolio</span>
              <span className="w-6 h-px bg-accent"></span>
            </div>
            <h2 className="clamp-section font-serif font-normal text-ink">Selected work.</h2>
          </div>

          {/* Category Filter Tabs with Micro-Interactions */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border transition-all duration-300 cursor-pointer shadow-2xs active:scale-95 ${
                activeCategory === 'all'
                  ? 'border-ink bg-ink text-surface font-medium shadow-accent-glow'
                  : 'border-border bg-surface text-ink-muted hover:text-ink hover:border-ink hover:bg-bg-alt/30'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All (4)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('webapp')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border transition-all duration-300 cursor-pointer shadow-2xs active:scale-95 ${
                activeCategory === 'webapp'
                  ? 'border-ink bg-ink text-surface font-medium shadow-accent-glow'
                  : 'border-border bg-surface text-ink-muted hover:text-ink hover:border-ink hover:bg-bg-alt/30'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Web apps</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('product')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border transition-all duration-300 cursor-pointer shadow-2xs active:scale-95 ${
                activeCategory === 'product'
                  ? 'border-ink bg-ink text-surface font-medium shadow-accent-glow'
                  : 'border-border bg-surface text-ink-muted hover:text-ink hover:border-ink hover:bg-bg-alt/30'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Product UI</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('mobile')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border transition-all duration-300 cursor-pointer shadow-2xs active:scale-95 ${
                activeCategory === 'mobile'
                  ? 'border-ink bg-ink text-surface font-medium shadow-accent-glow'
                  : 'border-border bg-surface text-ink-muted hover:text-ink hover:border-ink hover:bg-bg-alt/30'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Editorial Project Gallery Grid with Staggered ScrollReveal & Lift Physics */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        {filteredProjects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            delayMs={index * 120}
            className={`${project.colSpan} flex`}
          >
            <article
              onClick={() => setPose(project.pose, project.poseMessage)}
              className="card-hover-lift w-full bg-surface border border-border rounded-xl overflow-hidden group flex flex-col justify-between cursor-pointer"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-3">
                  <span className="uppercase tracking-wider text-accent font-semibold">{project.categoryLabel}</span>
                  <span className="text-ink-faint">{project.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-ink mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <div className="w-7 h-7 rounded-full bg-bg border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-surface transition-all shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-ink-muted mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-bg px-2.5 py-1 rounded border border-border text-ink group-hover:border-border/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphic Container */}
              <div className="bg-bg-alt/40 border-t border-border p-6 md:p-8 flex items-center justify-center overflow-hidden">
                {project.preview}
              </div>

              <div className="px-6 py-3.5 bg-surface border-t border-border flex justify-between items-center text-xs font-mono">
                <span className="text-ink-muted">{project.footerLabel}</span>
                <a
                  href={project.actionHref}
                  onClick={(e) => e.stopPropagation()}
                  target={project.actionHref.startsWith('http') ? '_blank' : undefined}
                  rel={project.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-light font-semibold transition-colors group-hover:underline"
                >
                  <span>{project.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
