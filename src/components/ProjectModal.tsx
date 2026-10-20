'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { X, ExternalLink } from 'lucide-react';

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
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(36, 37, 34, 0.65)',
        backdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          background: '#FFFFFF',
          borderRadius: '18px',
          padding: '32px',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-subtle)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        <h3 className="font-sans" style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', marginBottom: '20px' }}>
          {project.description}
        </p>

        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '20px' }}>
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={340}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="pill-tag">
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ width: '100%' }}
          >
            <span>Visit Project</span>
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
