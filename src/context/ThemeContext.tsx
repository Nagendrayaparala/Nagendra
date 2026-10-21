'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PaletteId = 'ivory' | 'forest' | 'cherry' | 'indigo' | 'plum' | 'orange';

export interface PaletteInfo {
  id: PaletteId;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  description: string;
}

export const PALETTES: PaletteInfo[] = [
  {
    id: 'ivory',
    name: 'Ivory & Caramel',
    primaryColor: '#B98550',
    secondaryColor: '#FAF7F0',
    description: 'Warm editorial ivory with caramelized bronze accents',
  },
  {
    id: 'forest',
    name: 'Forest & Leaf',
    primaryColor: '#064734',
    secondaryColor: '#E0FFC2',
    description: 'Deep forest green paired with vibrant matcha leaf',
  },
  {
    id: 'cherry',
    name: 'Cherry & Alabaster',
    primaryColor: '#890149',
    secondaryColor: '#F3F3E7',
    description: 'Rich berry cherry paired with elegant alabaster',
  },
  {
    id: 'indigo',
    name: 'Midnight & Vanilla',
    primaryColor: '#282B4A',
    secondaryColor: '#EEEBDA',
    description: 'Deep midnight indigo paired with soft warm vanilla',
  },
  {
    id: 'plum',
    name: 'Plum & Milk',
    primaryColor: '#381932',
    secondaryColor: '#FFF3E6',
    description: 'Velvety deep plum paired with creamy peachy milk',
  },
  {
    id: 'orange',
    name: 'Orange & Milk',
    primaryColor: '#EC5E27',
    secondaryColor: '#FDFDF1',
    description: 'Vibrant terracotta orange paired with soft milk white',
  },
];

interface ThemeContextType {
  palette: PaletteId;
  isDark: boolean;
  setPalette: (id: PaletteId) => void;
  toggleDark: () => void;
  activePaletteInfo: PaletteInfo;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [palette, setPaletteState] = useState<PaletteId>('ivory');
  const [isDark, setIsDarkState] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Load persisted theme
    const savedPalette = localStorage.getItem('nagendra_portfolio_palette') as PaletteId | null;
    const savedMode = localStorage.getItem('nagendra_portfolio_mode');

    if (savedPalette && PALETTES.some((p) => p.id === savedPalette)) {
      setPaletteState(savedPalette);
    }
    if (savedMode === 'dark') {
      setIsDarkState(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', palette);
    document.documentElement.setAttribute('data-mode', isDark ? 'dark' : 'light');
    localStorage.setItem('nagendra_portfolio_palette', palette);
    localStorage.setItem('nagendra_portfolio_mode', isDark ? 'dark' : 'light');
  }, [palette, isDark, mounted]);

  const setPalette = (id: PaletteId) => {
    setPaletteState(id);
  };

  const toggleDark = () => {
    setIsDarkState((prev) => !prev);
  };

  const activePaletteInfo =
    PALETTES.find((p) => p.id === palette) || PALETTES[0];

  return (
    <ThemeContext.Provider
      value={{
        palette,
        isDark,
        setPalette,
        toggleDark,
        activePaletteInfo,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
