'use client';

import React, { useState } from 'react';
import { useDevotional } from '@/context/DevotionalContext';
import { transliterateDevanagari, SupportedScript } from '@/lib/indic-script';

export default function LyricsModal() {
  const {
    isLyricsOpen,
    setIsLyricsOpen,
    activeDeity,
    selectedScript,
    setSelectedScript,
    fontScale,
    setFontScale,
  } = useDevotional();

  const [search, setSearch] = useState('');
  const [activePrayerId, setActivePrayerId] = useState<string | null>(null);

  if (!isLyricsOpen) return null;

  const prayers = activeDeity.prayers;
  const currentPrayer = activePrayerId
    ? prayers.find((p) => p.id === activePrayerId) || prayers[0]
    : prayers[0];

  const query = search.toLowerCase().trim();

  const filterVerse = (hindi: string, translit: string, meaning: string) => {
    if (!query) return true;
    return (
      hindi.toLowerCase().includes(query) ||
      translit.toLowerCase().includes(query) ||
      meaning.toLowerCase().includes(query)
    );
  };

  const renderScriptText = (hindiText: string, translitText: string) => {
    if (selectedScript === 'english') {
      return translitText;
    }
    return transliterateDevanagari(hindiText, selectedScript);
  };

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => e.target === e.currentTarget && setIsLyricsOpen(false)}
    >
      <div className="modal-content lyrics-modal-content">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <h2 className="modal-title">
              <span>📜</span>
              <span>{activeDeity.name} • पवित्र स्तोत्र व पाठ</span>
            </h2>
            <span className="modal-subtitle">{activeDeity.dayName} आराधना ({activeDeity.dayNameEn})</span>
          </div>

          <div className="modal-header-actions">
            {/* Font Size Adjuster */}
            <div className="font-size-adjuster" title="Adjust text size">
              <button
                className="font-btn"
                onClick={() => setFontScale((prev) => Math.max(0.85, prev - 0.1))}
                disabled={fontScale <= 0.85}
              >
                A-
              </button>
              <button
                className="font-btn"
                onClick={() => setFontScale((prev) => Math.min(1.4, prev + 0.1))}
                disabled={fontScale >= 1.4}
              >
                A+
              </button>
            </div>

            <button className="modal-close-btn" onClick={() => setIsLyricsOpen(false)} title="Close">
              &times;
            </button>
          </div>
        </div>

        {/* Script Selection Bar */}
        <div className="script-tabs-bar">
          <span className="script-label">Script:</span>
          <div className="script-buttons">
            {(
              [
                { id: 'hindi', label: 'देवनागरी (हिन्दी)' },
                { id: 'english', label: 'English' },
                { id: 'gujarati', label: 'ગુજરાતી' },
                { id: 'bengali', label: 'বাংলা' },
                { id: 'telugu', label: 'తెలుగు' },
              ] as { id: SupportedScript; label: string }[]
            ).map((s) => (
              <button
                key={s.id}
                className={`script-pill ${selectedScript === s.id ? 'active' : ''}`}
                onClick={() => setSelectedScript(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Prayer switcher tabs (if deity has multiple prayers) */}
        {prayers.length > 1 && (
          <div className="prayer-selector-tabs">
            {prayers.map((p) => (
              <button
                key={p.id}
                className={`prayer-tab-pill ${currentPrayer.id === p.id ? 'active' : ''}`}
                onClick={() => setActivePrayerId(p.id)}
              >
                {p.title}
              </button>
            ))}
          </div>
        )}

        {/* Search Bar */}
        <div className="modal-search-wrapper">
          <input
            type="text"
            className="lyrics-search-input"
            placeholder="Search verses, words, or meanings (उदा. संकट, सुख, vitthal, mangal)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear-btn" onClick={() => setSearch('')}>
              &times;
            </button>
          )}
        </div>

        {/* Body / Verses */}
        <div className="modal-body" style={{ fontSize: `${fontScale}rem` }}>
          {currentPrayer.composer && (
            <div className="composer-attribution">
              <span>रचनाकार: {currentPrayer.composer}</span>
            </div>
          )}

          {currentPrayer.sections.map((section, sIdx) => {
            const visibleVerses = section.verses.filter((v) =>
              filterVerse(v.hindi, v.translit, v.meaning)
            );

            if (visibleVerses.length === 0) return null;

            return (
              <div key={sIdx} className="prayer-section">
                <div className="section-badge-header">
                  <span className="section-title">{section.title}</span>
                  <span className="section-subtitle-en">{section.titleEn}</span>
                </div>

                <div className="verses-list">
                  {visibleVerses.map((verse, vIdx) => (
                    <div key={vIdx} className="verse-card">
                      {verse.num && (
                        <div className="verse-badge">
                          <span>#{verse.num}</span>
                        </div>
                      )}
                      <div className="verse-texts">
                        <p className="verse-indic">
                          {renderScriptText(verse.hindi, verse.translit)}
                        </p>
                        {selectedScript !== 'english' && (
                          <p className="verse-translit">{verse.translit}</p>
                        )}
                        <p className="verse-meaning">
                          <strong>भावार्थ:</strong> {verse.meaning}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
