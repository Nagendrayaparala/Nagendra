'use client';

import React, { useState } from 'react';
import { useAvatar } from '@/context/AvatarContext';
import ScrollReveal from './ScrollReveal';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  FileDown,
  Clock,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function Contact() {
  const { setPose } = useAvatar();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [resumeTriggered, setResumeTriggered] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setPose('greeting', 'Copied Nagendra\'s email address to your clipboard!');
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  const handleDownloadCV = () => {
    setPose('greeting', 'Preparing Yaparala Nagendra resume for inspection...');
    setResumeTriggered(true);
    setTimeout(() => {
      setResumeTriggered(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 max-w-6xl mx-auto px-6 md:px-10">
      <ScrollReveal>
        <div className="bg-surface border border-border rounded-3xl p-8 sm:p-12 md:p-16 shadow-sm relative overflow-hidden card-hover-lift">
          {/* Subtle top animated gradient decorative bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent-light to-accent bg-[length:200%_100%] animate-gradient" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 8 cols: Typography, Copy Button & Verified Links */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
                <span>05 / Conversation</span>
                <span className="w-8 h-px bg-accent"></span>
              </div>

              <div className="space-y-3">
                <h2 className="clamp-section font-serif font-normal text-ink leading-tight">
                  Let&apos;s build something <em className="italic text-accent">thoughtful</em>.
                </h2>
                <p className="text-ink-muted text-sm sm:text-base max-w-xl leading-relaxed">
                  I am currently open to full-time frontend developer roles, technical collaborations,
                  and ambitious product challenges. If you value clean code, intuitive interactions,
                  and dependable execution, let&apos;s talk.
                </p>
              </div>

              {/* Direct Actions: Primary Email + Copy + Socials */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
                {/* Mailto Direct */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="btn-shimmer px-5 py-3.5 bg-accent hover:opacity-95 text-surface font-medium rounded-xl transition-all duration-300 flex items-center gap-2.5 shadow-2xs hover:shadow-accent-glow active:scale-95 group"
                >
                  <Mail className="w-4 h-4 text-surface" />
                  <span>Send an Email</span>
                </a>

                {/* Instant Copy Email Address */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-3.5 bg-bg hover:bg-bg-alt border border-border text-ink rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-2xs hover:border-accent active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                      <span className="text-emerald-700 font-medium">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-ink-muted" />
                      <span>{PERSONAL_INFO.email}</span>
                    </>
                  )}
                </button>

                {/* Verified GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-bg hover:bg-bg-alt border border-border text-ink rounded-xl transition-all duration-300 flex items-center gap-2 shadow-2xs hover:border-ink active:scale-95 group"
                >
                  <svg className="w-4 h-4 fill-current text-ink" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-faint group-hover:text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Verified LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-bg hover:bg-bg-alt border border-border text-ink rounded-xl transition-all duration-300 flex items-center gap-2 shadow-2xs hover:border-[#0A66C2] active:scale-95 group"
                >
                  <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-faint group-hover:text-[#0A66C2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Resume Download / Inspection */}
                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="px-4 py-3.5 bg-ink hover:opacity-90 text-surface rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-2xs hover:shadow-md active:scale-95"
                >
                  <FileDown className="w-4 h-4 text-accent" />
                  <span>Resume</span>
                </button>
              </div>

              {resumeTriggered && (
                <div className="pt-2 text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl inline-flex items-center gap-2 animate-fadeIn">
                  <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse-dot" />
                  <span>
                    Resume readiness verified: Nagendra_Yaparala_Frontend_Developer. Contact via email to receive full PDF package.
                  </span>
                </div>
              )}
            </div>

            {/* Right 4 cols: Welcoming Avatar Portrait Mini with Theme Stage */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center pt-6 lg:pt-0">
              <div
                className="w-36 h-36 rounded-full overflow-hidden border-2 border-accent shadow-theme-glow p-1 group transition-all duration-300 relative"
                style={{ background: 'var(--theme-arch-gradient)' }}
              >
                <img
                  src="/avathars/nagendra_portrait.png"
                  alt="Nagendra smiling formal portrait"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="text-center mt-3 space-y-1 font-mono">
                <span className="text-xs text-ink font-semibold block">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700">
                  <Clock className="w-3 h-3 text-emerald-600 animate-pulse-dot" />
                  <span>Response time: &lt; 24 hours</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
