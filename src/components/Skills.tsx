'use client';

import React from 'react';
import { SKILLS } from '@/data/portfolioData';

export default function Skills() {
  const getSkillIconSvg = (name: string) => {
    switch (name) {
      case 'react':
        return (
          <svg width="28" height="28" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
            <g stroke="#00D8FF" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        );
      case 'nextjs':
        return (
          <svg width="28" height="28" viewBox="0 0 180 180" fill="none">
            <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
              <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#mask0_next)">
              <circle cx="90" cy="90" r="90" fill="black" />
              <path
                d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                fill="white"
              />
              <rect x="115" y="54" width="12" height="72" fill="white" />
            </g>
          </svg>
        );
      case 'javascript':
        return (
          <svg width="28" height="28" viewBox="0 0 630 630">
            <rect width="630" height="630" rx="80" fill="#F7DF1E" />
            <path
              d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.3 0-28.3 11-28.3 25.4 0 17.7 11 25 35.5 35.5l14.8 6.34c50.3 21.6 79.9 44.4 79.9 92.7 0 52.8-41.4 82.9-97.7 82.9-54.6 0-90.1-26.2-107.5-68.1zm-209.8-17.8c8.9 15.6 17.3 28.7 37.2 28.7 19 0 31.3-7.6 31.3-37.2v-201.3h58.8v202.1c0 60.5-35.5 87.1-88.4 87.1-47.4 0-74.8-24.5-88.8-58.4z"
              fill="#000"
            />
          </svg>
        );
      case 'typescript':
        return (
          <svg width="28" height="28" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#3178C6" />
            <path
              d="M74.8 84.1c1.8 7.8 7.4 12.3 16.3 12.3 8.3 0 13.7-4.4 13.7-10.4 0-6.9-5.1-9.6-14.4-13.6l-4.9-2.1c-14.2-6.1-23.7-13.7-23.7-29.7 0-14.8 11.3-26.1 29-26.1 12.6 0 21.6 4.4 28.1 15.8l-15.4 9.9c-3.4-6.1-7.1-8.5-12.7-8.5-5.8 0-9.5 3.7-9.5 8.5 0 5.9 3.7 8.4 11.9 11.9l4.9 2.1c16.8 7.2 26.7 14.8 26.7 30.9 0 17.6-13.8 27.6-32.6 27.6-18.2 0-30.1-8.7-35.8-22.7zm-40.4-47.6h40.4v17h-18.7v55.8h-18v-55.8h-3.7z"
              fill="#FFF"
            />
          </svg>
        );
      case 'nodejs':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#339933">
            <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.31L4.5 8.65v8.7l7.5 4.34 7.5-4.34v-8.7L12 4.31z" />
          </svg>
        );
      case 'express':
        return (
          <div
            style={{
              fontWeight: 800,
              fontSize: '13px',
              color: '#333333',
              border: '2px solid #333333',
              borderRadius: '6px',
              padding: '2px 4px',
              lineHeight: 1,
            }}
          >
            EX
          </div>
        );
      case 'mongodb':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#47A248">
            <path d="M12 1.5C12 1.5 6.5 7.5 6.5 13.5C6.5 17.5 9 21.5 12 22.5C15 21.5 17.5 17.5 17.5 13.5C17.5 7.5 12 1.5 12 1.5ZM11.5 19.5V4C11.5 4 8 8.5 8 13.5C8 16.5 9.5 19 11.5 19.5Z" />
          </svg>
        );
      case 'mysql':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#4479A1">
            <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 21l3.54-.93C9.33 20.66 10.63 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 13.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
          </svg>
        );
      case 'git':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#F05032">
            <path d="M21.62 10.88l-8.5-8.5a2.5 2.5 0 00-3.54 0L7.4 4.56l2.87 2.87a2.12 2.12 0 012.35.48c.64.64.84 1.55.6 2.37l2.87 2.87c.82-.24 1.73-.04 2.37.6a2.12 2.12 0 010 3 2.12 2.12 0 01-3 0 2.15 2.15 0 01-.48-2.35l-2.67-2.67v5.33a2.12 2.12 0 01.48 2.35 2.12 2.12 0 01-3 0 2.12 2.12 0 010-3c.43-.43 1.02-.6 1.57-.52v-5.6c-.55.08-1.14-.09-1.57-.52a2.12 2.12 0 010-3c.43-.43 1.02-.6 1.57-.52L8.27 3.7 2.38 9.59a2.5 2.5 0 000 3.54l8.5 8.5a2.5 2.5 0 003.54 0l7.2-7.21a2.5 2.5 0 000-3.54z" />
          </svg>
        );
      case 'github':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#181717">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="site-section">
      <div className="site-container">
        {/* Section Header with inline subtitle */}
        <div className="skills-header-row">
          <div>
            <span className="section-label">SKILLS</span>
            <div className="skills-title-group">
              <h2 className="skills-title font-serif">
                Tools I <span className="italic-accent">work with.</span>
              </h2>
              <span className="skills-sep-line">|</span>
              <p className="skills-subtitle">
                A balanced set of tools to build modern web experiences.
              </p>
            </div>
          </div>
        </div>

        {/* 10 Skill Cards Row */}
        <div className="skills-deck">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-tile card-clean">
              <div className="skill-icon-box">{getSkillIconSvg(skill.iconName)}</div>
              <span className="skill-name font-sans">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-header-row {
          margin-bottom: 40px;
        }

        .skills-title-group {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 16px;
        }

        .skills-title {
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1.15;
        }

        .skills-sep-line {
          font-size: 22px;
          color: var(--border-subtle);
          display: inline-block;
        }

        .skills-subtitle {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--color-text-secondary);
        }

        .skills-deck {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
          gap: 14px;
        }

        .skill-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px 10px;
          gap: 12px;
          background: #FFFFFF;
          border-radius: 16px;
          text-align: center;
        }

        .skill-icon-box {
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-name {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--color-text-primary);
        }

        @media (max-width: 768px) {
          .skills-title-group {
            flex-direction: column;
            gap: 8px;
          }
          .skills-sep-line {
            display: none;
          }
          .skills-deck {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        @media (max-width: 520px) {
          .skills-deck {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
