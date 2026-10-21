'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

export type PoseType = 'idle' | 'greeting' | 'thinking' | 'coding';

interface AvatarContextType {
  currentPose: PoseType;
  statusMessage: string;
  isPillActive: boolean;
  setPose: (pose: PoseType, message: string) => void;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export function AvatarProvider({ children }: { children: ReactNode }) {
  const [currentPose, setCurrentPose] = useState<PoseType>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('Avatar idle: Natural breathing state');
  const [isPillActive, setIsPillActive] = useState<boolean>(false);

  // Intercept third-party browser extension errors (e.g. Emily AI) from triggering Next.js dev overlays
  useEffect(() => {
    const handleExtensionError = (e: ErrorEvent) => {
      if (
        e.filename &&
        (e.filename.startsWith('chrome-extension://') || e.filename.startsWith('moz-extension://'))
      ) {
        e.stopImmediatePropagation();
      }
    };

    window.addEventListener('error', handleExtensionError, true);
    return () => window.removeEventListener('error', handleExtensionError, true);
  }, []);

  const setPose = useCallback((pose: PoseType, message: string) => {
    setCurrentPose(pose);
    setStatusMessage(message);
    setIsPillActive(true);

    const timer = setTimeout(() => {
      setIsPillActive(false);
      if (pose !== 'idle') {
        setCurrentPose('idle');
      }
    }, pose === 'idle' ? 1000 : 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AvatarContext.Provider value={{ currentPose, statusMessage, isPillActive, setPose }}>
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatar() {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
}
