'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme, PALETTES, PaletteId } from '@/context/ThemeContext';
import { Palette, Check, Sun, Moon, ChevronDown } from 'lucide-react';

export default function ThemeSwitcher() {
  const { palette, isDark, setPalette, toggleDark, activePaletteInfo } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block text-left z-50">
      {/* Top Toggle Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Change Color Theme"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/90 hover:border-accent text-ink text-xs font-mono shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group"
      >
        {/* Two-Tone Split Swatch Preview */}
        <span className="relative w-4 h-4 rounded-full overflow-hidden border border-border/80 shrink-0 shadow-xs flex">
          <span
            className="w-1/2 h-full"
            style={{ backgroundColor: activePaletteInfo.primaryColor }}
          />
          <span
            className="w-1/2 h-full"
            style={{ backgroundColor: activePaletteInfo.secondaryColor }}
          />
        </span>

        <span className="font-medium hidden sm:inline text-[11px] uppercase tracking-wider">
          {activePaletteInfo.name}
        </span>

        <ChevronDown
          className={`w-3.5 h-3.5 text-ink-muted transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-accent' : 'group-hover:text-ink'
          }`}
        />
      </button>

      {/* Floating Theme Menu Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl border border-border bg-surface shadow-2xl p-3 z-50 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-border/60 px-1">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono font-semibold text-ink uppercase tracking-wider">
                Color Palettes
              </span>
            </div>

            {/* Mode Switch (Light / Dark) */}
            <button
              type="button"
              onClick={toggleDark}
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-mono border border-border bg-bg hover:border-accent text-ink transition-colors cursor-pointer"
            >
              {isDark ? (
                <>
                  <Moon className="w-3 h-3 text-accent" />
                  <span>Deep</span>
                </>
              ) : (
                <>
                  <Sun className="w-3 h-3 text-amber-500" />
                  <span>Light</span>
                </>
              )}
            </button>
          </div>

          {/* Palette List */}
          <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-0.5">
            {PALETTES.map((item) => {
              const isSelected = item.id === palette;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setPalette(item.id);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-bg-alt/70 border border-accent shadow-xs'
                      : 'hover:bg-bg-alt/30 border border-transparent hover:border-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Split Circular Swatch */}
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-border/80 shadow-xs flex shrink-0 ring-1 ring-black/5">
                      <div
                        className="w-1/2 h-full"
                        style={{ backgroundColor: item.primaryColor }}
                      />
                      <div
                        className="w-1/2 h-full"
                        style={{ backgroundColor: item.secondaryColor }}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold font-sans text-ink">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-ink-muted">
                        <span className="opacity-90">{item.primaryColor}</span>
                        <span className="mx-1 text-ink-faint">/</span>
                        <span className="opacity-90">{item.secondaryColor}</span>
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-accent text-surface flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Caption */}
          <div className="mt-2.5 pt-2 border-t border-border/60 px-1 text-[10px] font-mono text-ink-faint flex items-center justify-between">
            <span>Instant Full-Site Theme</span>
            <span>6 Designer Schemes</span>
          </div>
        </div>
      )}
    </div>
  );
}
