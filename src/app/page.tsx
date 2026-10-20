'use client';

import React from 'react';
import { AvatarProvider } from '@/context/AvatarContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Expertise from '@/components/Expertise';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <AvatarProvider>
      <div className="min-h-screen flex flex-col bg-bg text-ink selection:bg-accent/20 selection:text-ink">
        {/* Sticky 72px Navbar */}
        <Navbar />

        {/* Main Content Sections adhering to provided HTML layout */}
        <main className="flex-1">
          <Hero />
          <Projects />
          <Experience />
          <Expertise />
          <About />
          <Contact />
        </main>

        {/* Minimal Editorial Footer */}
        <Footer />
      </div>
    </AvatarProvider>
  );
}
