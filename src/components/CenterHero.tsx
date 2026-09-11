'use client';

import React from 'react';
import { useDevotional } from '@/context/DevotionalContext';

export default function CenterHero() {
  const {
    activeDeity,
    currentDaySchedule,
    setActiveDeity,
    setIsLyricsOpen,
  } = useDevotional();

  return (
    <main className="center-content notranslate" translate="no">
      {/* Sub-deity switcher if day has multiple deities (e.g. Vitthal / Krishna) */}
      {currentDaySchedule.deities.length > 1 && (
        <div className="hero-deity-selector">
          {currentDaySchedule.deities.map((d) => (
            <button
              key={d.id}
              className={`hero-deity-pill ${d.id === activeDeity.id ? 'active' : ''}`}
              onClick={() => setActiveDeity(d)}
            >
              {d.name}
            </button>
          ))}
        </div>
      )}

      {/* Main Grand Sacred Typography */}
      <h1
        className="hero-title-devanagari notranslate"
        onClick={() => setIsLyricsOpen(true)}
        title="Click to open Sacred Lyrics"
        style={{ cursor: 'pointer' }}
      >
        {activeDeity.name}
      </h1>

      <div
        className="hero-subtitle"
        onClick={() => setIsLyricsOpen(true)}
        title="Click to open Sacred Lyrics"
        style={{ cursor: 'pointer' }}
      >
        {activeDeity.nameEn.toUpperCase()}
      </div>
    </main>
  );
}
