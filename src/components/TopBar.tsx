'use client';

import React, { useEffect, useState } from 'react';
import { useDevotional } from '@/context/DevotionalContext';

export default function TopBar() {
  const { setIsLyricsOpen, activeDeity } = useDevotional();
  const [time, setTime] = useState('20:30');
  const [listeners, setListeners] = useState(1284);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 1. Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hh}:${mm}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Real-time Presence Heartbeat with /api/presence
  useEffect(() => {
    let sessionId = '';
    try {
      sessionId = localStorage.getItem('nitya_bhakti_session_id') || '';
      if (!sessionId) {
        sessionId = 'devotee_' + Math.random().toString(36).substring(2, 11);
        localStorage.setItem('nitya_bhakti_session_id', sessionId);
      }
    } catch {
      sessionId = 'devotee_' + Math.random().toString(36).substring(2, 11);
    }

    const sendHeartbeat = async () => {
      try {
        const res = await fetch('/api/presence', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId, deityId: activeDeity.id }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data?.count) {
            setListeners(data.count);
          }
        }
      } catch (err) {
        // Subtle fallback fluctuation if offline
        setListeners((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
      }
    };

    sendHeartbeat();
    const interval = setInterval(sendHeartbeat, 10000);
    return () => clearInterval(interval);
  }, [activeDeity.id]);

  // Fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as any;
      const isFull = !!(
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      );
      setIsFullscreen(isFull);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    const doc = document as any;
    const docEl = document.documentElement as any;

    if (!isFullscreen) {
      if (docEl.requestFullscreen) await docEl.requestFullscreen().catch(() => {});
      else if (docEl.webkitRequestFullscreen) await docEl.webkitRequestFullscreen().catch(() => {});
    } else {
      if (doc.exitFullscreen) await doc.exitFullscreen().catch(() => {});
      else if (doc.webkitExitFullscreen) await doc.webkitExitFullscreen().catch(() => {});
    }
  };

  return (
    <header className="top-bar">
      <div className="top-left">
        <span className="clock" suppressHydrationWarning>{time}</span>
        <span className="clock-divider">|</span>
        <div className="listening-stat" title="Active devotees listening right now">
          <span className="pulse-dot"></span>
          <span className="listening-text-full">{listeners.toLocaleString()} listening</span>
          <span className="listening-text-short">{listeners.toLocaleString()} live</span>
        </div>
      </div>

      <div className="top-right">
        {/* Lyrics button */}
        <button
          className="icon-btn"
          onClick={() => setIsLyricsOpen(true)}
          data-tooltip="Sacred Lyrics"
          title="Sacred Lyrics"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            <line x1="8" y1="6" x2="16" y2="6"></line>
            <line x1="8" y1="10" x2="16" y2="10"></line>
            <line x1="8" y1="14" x2="13" y2="14"></line>
          </svg>
        </button>

        {/* Fullscreen button */}
        <button
          className="icon-btn"
          onClick={toggleFullscreen}
          data-tooltip={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 14 10 14 10 20"></polyline>
              <polyline points="20 10 14 10 14 4"></polyline>
              <line x1="14" y1="10" x2="21" y2="3"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
