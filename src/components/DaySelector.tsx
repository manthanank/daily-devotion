'use client';

import React from 'react';
import { DAILY_SCHEDULE } from '@/data/dailyDeities';
import { useDevotional } from '@/context/DevotionalContext';

export default function DaySelector() {
  const { activeDay, setActiveDay } = useDevotional();
  const realTodayIndex = new Date().getDay();

  const dayLabels = [
    { hindi: 'रवि', en: 'Sun' },
    { hindi: 'सोम', en: 'Mon' },
    { hindi: 'मंगल', en: 'Tue' },
    { hindi: 'बुध', en: 'Wed' },
    { hindi: 'गुरु', en: 'Thu' },
    { hindi: 'शुक्र', en: 'Fri' },
    { hindi: 'शनि', en: 'Sat' },
  ];

  return (
    <nav className="day-selector-minimal" aria-label="Days navigation">
      <div className="day-selector-inner">
        {DAILY_SCHEDULE.map((schedule) => {
          const isSelected = activeDay === schedule.dayIndex;
          const isToday = schedule.dayIndex === realTodayIndex;
          const label = dayLabels[schedule.dayIndex] || { hindi: schedule.dayName, en: schedule.dayNameEn };

          return (
            <button
              key={schedule.dayIndex}
              onClick={() => setActiveDay(schedule.dayIndex)}
              className={`day-minimal-pill ${isSelected ? 'active' : ''}`}
              title={`${schedule.dayName} (${schedule.dayNameEn})`}
            >
              <span className="day-text-hi">{label.hindi}</span>
              {isToday && <span className="today-dot" title="Today"></span>}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
