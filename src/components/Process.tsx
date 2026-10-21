'use client';

import React from 'react';
import { Search, ClipboardList, BarChart2, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '@/data/portfolioData';

export default function Process() {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'search':
        return <Search size={18} />;
      case 'clipboard':
        return <ClipboardList size={18} />;
      case 'bar-chart':
        return <BarChart2 size={18} />;
      case 'code':
        return <Code2 size={18} />;
      case 'check-circle':
        return <CheckCircle2 size={18} />;
      default:
        return <CheckCircle2 size={18} />;
    }
  };

  return (
    <section id="process" className="site-section">
      <div className="site-container">
        <div className="process-layout">
          {/* Left Column: Title & CTA */}
          <div className="process-left">
            <span className="section-label">MY PROCESS</span>
            <h2 className="process-title font-serif">
              Good engineering
              <br />
              starts with <span className="italic-accent">asking why.</span>
            </h2>
            <div style={{ marginTop: '24px' }}>
              <a href="#work" className="btn-primary">
                <span>See My Process</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: 5 Connected Circles */}
          <div className="process-stepper-wrap">
            <div className="stepper-track-line" />

            <div className="process-steps-row">
              {PROCESS_STEPS.map((step: { id: string; iconName: string; title: string }) => (
                <div key={step.id} className="process-step-node">
                  <div className="step-circle-icon">{getStepIcon(step.iconName)}</div>
                  <span className="step-node-text font-sans">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .process-layout {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 48px;
        }

        .process-title {
          font-size: clamp(36px, 4.2vw, 50px);
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1.12;
        }

        .process-stepper-wrap {
          position: relative;
          padding: 20px 0;
        }

        .stepper-track-line {
          position: absolute;
          top: 44px;
          left: 30px;
          right: 30px;
          height: 1px;
          background: var(--border-subtle);
          z-index: 1;
        }

        .process-steps-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          position: relative;
          z-index: 2;
          gap: 12px;
        }

        .process-step-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
        }

        .step-circle-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }

        .process-step-node:hover .step-circle-icon {
          background-color: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
          transform: scale(1.08);
          box-shadow: var(--shadow-md);
        }

        .step-node-text {
          font-size: 12px;
          font-weight: 500;
          line-height: 1.35;
          color: var(--color-text-primary);
          max-width: 90px;
        }

        @media (max-width: 960px) {
          .process-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .process-steps-row {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        @media (max-width: 600px) {
          .stepper-track-line {
            display: none;
          }

          .process-steps-row {
            grid-template-columns: 1fr;
            gap: 20px;
            align-items: flex-start;
          }

          .process-step-node {
            flex-direction: row;
            text-align: left;
          }

          .step-node-text {
            max-width: none;
            font-size: 13.5px;
          }
        }
      `}</style>
    </section>
  );
}
