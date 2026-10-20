'use client';

import React, { useState, useEffect } from 'react';
import { useAvatar, PoseType } from '@/context/AvatarContext';
import {
  ArrowUpRight,
  Sparkles,
  Workflow,
  Smile,
  Brain,
  Code2,
  FileCode2,
  Layers,
} from 'lucide-react';

export default function Hero() {
  const { currentPose, statusMessage, isPillActive, setPose } = useAvatar();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasRipple, setHasRipple] = useState(false);

  // Trigger ripple ring whenever pose changes away from idle
  useEffect(() => {
    if (currentPose !== 'idle') {
      setHasRipple(true);
      const timer = setTimeout(() => setHasRipple(false), 1800);
      return () => clearTimeout(timer);
    }
  }, [currentPose]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getPoseTransform = (pose: PoseType) => {
    switch (pose) {
      case 'greeting':
        return 'scale(1.06) rotate(1.5deg) translateY(-4px)';
      case 'thinking':
        return 'scale(1.03) rotate(-2deg) translateY(-2px)';
      case 'coding':
        return 'scale(1.04) translateY(-3px)';
      default:
        return 'scale(1) rotate(0deg) translateY(0px)';
    }
  };

  const getPoseLabel = (pose: PoseType) => {
    switch (pose) {
      case 'greeting':
        return 'pose: welcoming_smile';
      case 'thinking':
        return 'pose: architectural_focus';
      case 'coding':
        return 'pose: deep_dev_state';
      default:
        return 'pose: idle_neutral';
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-12 md:pt-16 pb-20 md:pb-28 border-b border-border/60 overflow-hidden"
    >
      {/* Subtle technical grid background */}
      <div className="absolute inset-0 grid-bg-subtle pointer-events-none opacity-60"></div>

      {/* Interactive mouse spotlight ambient glow */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-100"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(223, 190, 153, 0.18), transparent 75%)`,
          }}
        />
      )}

      <div className="max-w-6xl w-full mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 bg-white border border-border px-2.5 py-1 rounded text-accent font-mono text-[11px] font-medium uppercase tracking-[0.18em] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot"></span>
                <span>Frontend Developer</span>
              </div>
              <span className="h-px w-8 bg-accent/30"></span>
              <span className="font-mono text-[11px] text-ink-muted">React · Next.js · TS</span>
            </div>

            <h1 className="clamp-hero font-serif font-normal text-ink tracking-tight">
              I build digital experiences that feel <em className="italic text-accent">effortless</em>.
            </h1>

            <p className="clamp-sub text-ink-muted max-w-xl font-normal leading-relaxed">
              I&apos;m <span className="text-ink font-medium">Yaparala Nagendra</span>, a frontend developer dedicated to
              crafting thoughtful user interfaces, reliable component architectures, and fluid web experiences that
              elevate real products.
            </p>

            {/* Core Tech Line with Bespoke Indicators */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-ink-muted">
              <span className="text-ink-faint flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-accent" />
                <span>Core stack:</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-border rounded text-ink font-medium shadow-2xs hover:border-accent hover:-translate-y-0.5 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-[#61DAFB] animate-pulse-dot"></span>
                <span>React.js</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-border rounded text-ink font-medium shadow-2xs hover:border-accent hover:-translate-y-0.5 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-ink"></span>
                <span>Next.js</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-border rounded text-ink font-medium shadow-2xs hover:border-accent hover:-translate-y-0.5 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7DF1E]"></span>
                <span>JavaScript</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-border rounded text-ink font-medium shadow-2xs hover:border-accent hover:-translate-y-0.5 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3178C6]"></span>
                <span>TypeScript</span>
              </span>
            </div>

            {/* CTAs & Interactive Avatar Triggers */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="btn-shimmer inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-white text-sm font-medium hover:bg-accent transition-all duration-300 rounded shadow-sm hover:shadow-accent-glow active:scale-[0.98] group"
              >
                <span>Explore my work</span>
                <ArrowUpRight className="w-4 h-4 text-accent-light transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <button
                type="button"
                onClick={() =>
                  setPose('greeting', 'Nagendra smiles and waves: "Hello there! Pleased to meet you."')
                }
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-border hover:border-accent text-ink text-sm font-medium hover:bg-bg-alt/30 transition-all rounded shadow-2xs hover:shadow-md active:scale-[0.98] cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span>Say hello</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setPose('thinking', 'Nagendra enters architect mode: Analyzing specs & performance budgets...')
                }
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono text-ink-muted hover:text-ink transition-colors underline decoration-border hover:decoration-accent underline-offset-4 cursor-pointer group"
              >
                <Workflow className="w-3.5 h-3.5 text-accent group-hover:rotate-45 transition-transform duration-300" />
                <span>Explore my process</span>
              </button>
            </div>

            {/* Interaction status toast */}
            <div
              id="avatar-status-pill"
              className={`inline-flex items-center gap-2 text-[11px] font-mono text-ink-muted px-3.5 py-1.5 rounded-full w-fit transition-all duration-300 shadow-2xs ${
                isPillActive
                  ? 'bg-accent/10 border border-accent text-accent scale-[1.02]'
                  : 'bg-white/80 border border-border/80'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span id="avatar-status-text">{statusMessage}</span>
            </div>
          </div>

          {/* Right Column: Bespoke Avatar + Layered Code Window */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Layered code-editor element with gentle float animation */}
              <div className="animate-code-float absolute -top-4 -right-2 md:-right-6 w-64 md:w-72 bg-white/95 backdrop-blur-md rounded-lg border border-border shadow-lg p-3.5 font-mono text-[11px] text-ink z-0 select-none pointer-events-none transition-transform duration-500 hover:rotate-0">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/60 text-ink-muted text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1 text-ink-muted">
                    <FileCode2 className="w-3 h-3 text-accent" />
                    <span>Nagendra.tsx</span>
                  </div>
                </div>
                <p className="text-ink-muted">
                  <span className="text-accent font-semibold">const</span> developer = &#123;
                </p>
                <p className="pl-3 text-ink-muted">
                  name: <span className="text-[#9B6A33] font-medium">&apos;Yaparala Nagendra&apos;</span>,
                </p>
                <p className="pl-3 text-ink-muted">
                  role: <span className="text-[#9B6A33] font-medium">&apos;Frontend Dev&apos;</span>,
                </p>
                <p className="pl-3 text-ink-muted">
                  passion: <span className="text-[#9B6A33] font-medium">&apos;Craft &amp; UI Precision&apos;</span>,
                </p>
                <p className="pl-3 text-ink-muted">
                  openToWork: <span className="text-emerald-700 font-semibold">true</span>
                  <span className="inline-block w-1.5 h-3 bg-emerald-600 animate-cursor ml-1 align-middle"></span>
                </p>
                <p className="text-ink-muted">&#125;;</p>
              </div>

              {/* Ambient circular breathing halo */}
              <div className="animate-halo-breathe absolute inset-4 rounded-full bg-gradient-to-tr from-accent/20 via-bg-alt to-accent/15 blur-2xl -z-10"></div>

              {/* Avatar Wrapper with Dynamic Poses & Physics */}
              <div
                id="avatar-container"
                onClick={() =>
                  setPose('greeting', 'Nagendra smiles: "Thanks for inspecting! Let\'s build something great."')
                }
                className="animate-avatar-float relative z-10 w-full flex flex-col items-center group cursor-pointer transition-transform duration-500 hover:scale-[1.03]"
              >
                {/* Transparent Cutout Portrait with Ripple Ring Effect */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden flex items-end justify-center rounded-2xl bg-white/40 border border-border/40 shadow-xs">
                  {hasRipple && (
                    <div className="animate-ripple absolute inset-0 rounded-2xl border-2 border-accent pointer-events-none" />
                  )}

                  <img
                    id="avatar-img"
                    src="/avathars/nagendra_portrait.png"
                    alt="Yaparala Nagendra avatar portrait in formal white shirt"
                    className="w-full h-full object-cover object-top drop-shadow-md transition-all duration-500 transform origin-bottom group-hover:scale-105"
                    style={{ transform: getPoseTransform(currentPose) }}
                  />

                  {/* Pose badge overlay */}
                  <div
                    id="pose-tag"
                    className="absolute bottom-2 bg-ink/90 text-white font-mono text-[10px] px-2.5 py-0.5 rounded-full backdrop-blur-sm opacity-90 shadow inline-flex items-center gap-1.5 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot"></span>
                    <span>{getPoseLabel(currentPose)}</span>
                  </div>
                </div>

                {/* Quick Pose Selector Bar with Bespoke Icons */}
                <div
                  className="mt-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm border border-border p-1 rounded-full shadow-2xs text-[11px] font-mono"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setPose('idle', 'Nagendra in relaxed idle posture')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                      currentPose === 'idle'
                        ? 'bg-bg-alt text-ink font-semibold shadow-2xs scale-[1.02]'
                        : 'text-ink-muted hover:text-ink hover:bg-bg-alt/60'
                    }`}
                  >
                    <Smile className="w-3 h-3 text-accent" />
                    <span>Idle</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPose('greeting', 'Nagendra greets you warmly')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                      currentPose === 'greeting'
                        ? 'bg-bg-alt text-ink font-semibold shadow-2xs scale-[1.02]'
                        : 'text-ink-muted hover:text-ink hover:bg-bg-alt/60'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Wave</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPose('thinking', 'Nagendra reviewing layout architecture')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                      currentPose === 'thinking'
                        ? 'bg-bg-alt text-ink font-semibold shadow-2xs scale-[1.02]'
                        : 'text-ink-muted hover:text-ink hover:bg-bg-alt/60'
                    }`}
                  >
                    <Brain className="w-3 h-3 text-accent" />
                    <span>Think</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPose('coding', 'Nagendra in focused code mode')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                      currentPose === 'coding'
                        ? 'bg-bg-alt text-ink font-semibold shadow-2xs scale-[1.02]'
                        : 'text-ink-muted hover:text-ink hover:bg-bg-alt/60'
                    }`}
                  >
                    <Code2 className="w-3 h-3 text-accent" />
                    <span>Code</span>
                  </button>
                </div>

                <span className="text-[10px] font-mono text-ink-faint mt-1.5">
                  Interactive Avatar Signature · Click to inspect
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
