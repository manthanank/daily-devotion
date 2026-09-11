'use client';

import React from 'react';
import { useDevotional } from '@/context/DevotionalContext';

export default function Player() {
  const {
    isPlaying,
    currentTimeText,
    durationText,
    progressPercent,
    volume,
    isMuted,
    togglePlay,
    seekTo,
    setVolume,
    toggleMute,
    nextTrack,
    prevTrack,
    currentTrack,
    currentTrackIndex,
    tracks,
    duration,
    activeDeity,
  } = useDevotional();

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    seekTo(pct * duration);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
  };

  return (
    <footer className="bottom-dock">
      <div className="player-card" id="playerCard">
        {/* Deity Avatar Thumbnail */}
        <div className="player-left">
          <div
            className="avatar-wrapper"
            title={`${activeDeity.name} • Track ${currentTrackIndex + 1}/${tracks.length}`}
            onClick={nextTrack}
            style={{ cursor: 'pointer' }}
          >
            <div className={`avatar-glow ${isPlaying ? 'active-glow' : ''}`}></div>
            <img
              src={activeDeity.avatar}
              alt={activeDeity.nameEn}
              className="player-avatar"
            />
          </div>

          {/* Metadata & Scrubber */}
          <div className="track-info-scrubber">
            <div className="track-texts">
              <div className="track-title-row">
                {currentTrack.categoryHi && (
                  <span className="track-genre-badge" title={`Category: ${currentTrack.category}`}>
                    {currentTrack.categoryHi}
                  </span>
                )}
                <span
                  className="track-title"
                  onClick={nextTrack}
                  title="Click to switch to next Bhajan, Aarti, or Shloka"
                  style={{ cursor: 'pointer' }}
                >
                  {currentTrack.title}
                </span>
              </div>
              <span className="track-artist">
                {activeDeity.name} • {currentTrack.artist} ({currentTrackIndex + 1}/{tracks.length})
              </span>
            </div>

            <div className="scrubber-container">
              <span className="time-label">{currentTimeText}</span>
              <div className="progress-bar" onClick={handleSeek} title="Click to seek">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <span className="time-label">{durationText}</span>
            </div>
          </div>
        </div>

        {/* Controls Cluster */}
        <div className="player-right">
          {/* Previous Track */}
          <button
            className="track-nav-btn"
            onClick={prevTrack}
            title="Previous Track (←)"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="19 20 9 12 19 4 19 20"></polygon>
              <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" strokeWidth="2.5"></line>
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            className="play-pause-btn"
            onClick={togglePlay}
            title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
          >
            {isPlaying ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                <rect x="14" y="4" width="4" height="16" rx="1"></rect>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginLeft: 2 }}
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>

          {/* Next Track */}
          <button
            className="track-nav-btn"
            onClick={nextTrack}
            title="Next Track (→)"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2.5"></line>
            </svg>
          </button>

          {/* Volume Control */}
          <div className="volume-control-wrapper">
            <button
              className="control-btn"
              onClick={toggleMute}
              style={{ opacity: isMuted || volume === 0 ? 0.4 : 1 }}
              title="Volume"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            </button>
            <div className="volume-slider-popup">
              <input
                type="range"
                className="volume-slider"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-text">
        made with <span className="heart">❤️</span> for Devotees
      </div>
    </footer>
  );
}
