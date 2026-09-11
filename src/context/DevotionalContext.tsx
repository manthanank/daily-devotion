'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { DAILY_SCHEDULE, DaySchedule, DeityInfo, AudioTrackItem, getTodaySchedule } from '@/data/dailyDeities';
import { SupportedScript } from '@/lib/indic-script';

interface DevotionalContextType {
  // Day & Deity State
  activeDay: number;
  setActiveDay: (day: number) => void;
  activeDeity: DeityInfo;
  setActiveDeity: (deity: DeityInfo) => void;
  currentDaySchedule: DaySchedule;

  // Audio Playback with Multi-Music per God
  tracks: AudioTrackItem[];
  currentTrackIndex: number;
  currentTrack: AudioTrackItem;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  currentTimeText: string;
  durationText: string;
  progressPercent: number;
  volume: number;
  isMuted: boolean;
  togglePlay: () => void;
  seekTo: (seconds: number) => void;
  setVolume: (val: number) => void;
  toggleMute: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  selectTrack: (index: number) => void;

  // Preferences & Modals
  selectedScript: SupportedScript;
  setSelectedScript: (script: SupportedScript) => void;
  fontScale: number;
  setFontScale: React.Dispatch<React.SetStateAction<number>>;
  isLyricsOpen: boolean;
  setIsLyricsOpen: (open: boolean) => void;
}

const DevotionalContext = createContext<DevotionalContextType | undefined>(undefined);

export function DevotionalProvider({ children }: { children: React.ReactNode }) {
  // 1. Initialize with today's schedule
  const todaySched = getTodaySchedule();
  const [activeDay, setActiveDayState] = useState<number>(todaySched.dayIndex);
  const [activeDeity, setActiveDeityState] = useState<DeityInfo>(todaySched.deities[0]);

  // Playlist & track index
  const tracks: AudioTrackItem[] = activeDeity.audioTracks || [activeDeity.audioTrack];
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  // Modals & UI preferences
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);
  const [selectedScript, setSelectedScript] = useState<SupportedScript>('hindi');
  const [fontScale, setFontScale] = useState<number>(1.0);

  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(581);
  const [currentTimeText, setCurrentTimeText] = useState('0:00');
  const [durationText, setDurationText] = useState('9:41');
  const [progressPercent, setProgressPercent] = useState(0);
  const [volume, setVolumeState] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentDaySchedule = DAILY_SCHEDULE.find((s) => s.dayIndex === activeDay) || todaySched;

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const DAY_SLUG_MAP: Record<string, number> = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
  };

  // On mount: check URL parameters for deep-linking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dayParam = params.get('day')?.toLowerCase();
      const deityParam = params.get('deity')?.toLowerCase();

      if (dayParam && DAY_SLUG_MAP[dayParam] !== undefined) {
        const targetDay = DAY_SLUG_MAP[dayParam];
        const sched = DAILY_SCHEDULE.find((s) => s.dayIndex === targetDay);
        if (sched) {
          setActiveDayState(targetDay);
          if (deityParam) {
            const matchedDeity = sched.deities.find(
              (d) => d.id.toLowerCase() === deityParam || d.nameEn.toLowerCase().includes(deityParam)
            );
            if (matchedDeity) {
              setActiveDeityState(matchedDeity);
              return;
            }
          }
          setActiveDeityState(sched.deities[0]);
        }
      } else if (deityParam) {
        for (const sched of DAILY_SCHEDULE) {
          const matched = sched.deities.find(
            (d) => d.id.toLowerCase() === deityParam || d.nameEn.toLowerCase().includes(deityParam)
          );
          if (matched) {
            setActiveDayState(sched.dayIndex);
            setActiveDeityState(matched);
            break;
          }
        }
      }
    }
  }, []);

  // Sync state to URL for deep-linking and SEO
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const daySlug = dayNames[activeDay];
      const deitySlug = activeDeity.id;
      const targetQuery = `?day=${daySlug}&deity=${deitySlug}`;
      if (window.location.search !== targetQuery) {
        window.history.replaceState(null, '', targetQuery);
      }
    }
  }, [activeDay, activeDeity.id]);

  const setActiveDay = (dayIndex: number) => {
    const sched = DAILY_SCHEDULE.find((s) => s.dayIndex === dayIndex);
    if (sched) {
      setActiveDayState(dayIndex);
      setActiveDeityState(sched.deities[0]);
      setCurrentTrackIndex(0);
    }
  };

  const setActiveDeity = (deity: DeityInfo) => {
    setActiveDeityState(deity);
    setCurrentTrackIndex(0);
  };

  const selectTrack = (index: number) => {
    if (index >= 0 && index < tracks.length) {
      setCurrentTrackIndex(index);
      const audio = audioRef.current;
      if (audio) {
        audio.src = tracks[index].src;
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    }
  };

  const nextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % tracks.length;
    selectTrack(nextIdx);
  };

  const prevTrack = () => {
    const prevIdx = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    selectTrack(prevIdx);
  };

  // When active deity or track changes, load audio
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;
    const wasPlaying = isPlaying;

    audio.src = currentTrack.src;
    audio.load();
    setCurrentTime(0);
    setProgressPercent(0);
    setCurrentTimeText('0:00');

    if (wasPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }

    // Media Session
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTrack.title,
        artist: `${activeDeity.name} • ${currentTrack.artist}`,
        album: `Nitya Bhakti (${activeDeity.dayNameEn})`,
        artwork: [{ src: activeDeity.avatar, sizes: '512x512', type: 'image/jpeg' }],
      });
    }
  }, [activeDeity.id, currentTrack.id]);

  // Audio element listeners
  useEffect(() => {
    const audio = audioRef.current || new Audio(currentTrack.src);
    audioRef.current = audio;
    audio.volume = volume;

    const onTimeUpdate = () => {
      if (!audio.duration) return;
      const cur = audio.currentTime;
      const dur = audio.duration;
      setCurrentTime(cur);
      setProgressPercent((cur / dur) * 100);
      setCurrentTimeText(formatTime(cur));
    };

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
        setDurationText(formatTime(audio.duration));
      }
    };

    const onEnded = () => {
      nextTrack();
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => audio.play().catch(() => {}));
      navigator.mediaSession.setActionHandler('pause', () => audio.pause());
      navigator.mediaSession.setActionHandler('nexttrack', () => nextTrack());
      navigator.mediaSession.setActionHandler('previoustrack', () => prevTrack());
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.code === 'Space') {
        e.preventDefault();
        if (audio.paused) {
          audio.play().catch(() => {});
        } else {
          audio.pause();
        }
      } else if (e.code === 'KeyM') {
        toggleMute();
      } else if (e.code === 'ArrowRight') {
        nextTrack();
      } else if (e.code === 'ArrowLeft') {
        prevTrack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [currentTrackIndex, tracks.length]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.ended || (audio.duration && audio.currentTime >= audio.duration)) {
      audio.currentTime = 0;
    }
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const seekTo = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const clamped = Math.max(0, Math.min(audio.duration || duration, seconds));
    audio.currentTime = clamped;
    setCurrentTime(clamped);
    if (audio.paused) {
      audio.play().catch(() => {});
    }
  };

  const setVolume = (val: number) => {
    setVolumeState(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const next = !isMuted;
    setIsMuted(next);
    audioRef.current.muted = next;
  };

  return (
    <DevotionalContext.Provider
      value={{
        activeDay,
        setActiveDay,
        activeDeity,
        setActiveDeity,
        currentDaySchedule,
        tracks,
        currentTrackIndex,
        currentTrack,
        isPlaying,
        currentTime,
        duration,
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
        selectTrack,
        selectedScript,
        setSelectedScript,
        fontScale,
        setFontScale,
        isLyricsOpen,
        setIsLyricsOpen,
      }}
    >
      {children}
    </DevotionalContext.Provider>
  );
}

export function useDevotional() {
  const context = useContext(DevotionalContext);
  if (!context) {
    throw new Error('useDevotional must be used within a DevotionalProvider');
  }
  return context;
}
