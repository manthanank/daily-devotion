'use client';

import React from 'react';
import { DevotionalProvider, useDevotional } from '@/context/DevotionalContext';
import TopBar from '@/components/TopBar';
import DaySelector from '@/components/DaySelector';
import CenterHero from '@/components/CenterHero';
import Player from '@/components/Player';
import SacredParticles from '@/components/SacredParticles';
import LyricsModal from '@/components/LyricsModal';
import { DAILY_SCHEDULE } from '@/data/dailyDeities';

function DevotionalScreen() {
  const { activeDeity } = useDevotional();

  return (
    <div className="app-container">
      {/* Background Scenic Artwork */}
      <div className="background-wrapper">
        <img
          src={activeDeity.bgImage}
          alt={activeDeity.nameEn}
          className="background-image"
          key={activeDeity.id}
        />
        <div className="background-overlay"></div>
      </div>

      {/* Floating Canvas Particles */}
      <SacredParticles />

      {/* Top Status Bar with Real-time Presence */}
      <TopBar />

      {/* Minimalist Day Selector */}
      <DaySelector />

      {/* Center Sacred Typography */}
      <CenterHero />

      {/* Bottom Floating Glassmorphic Player */}
      <Player />

      {/* Full Lyrics Modal */}
      <LyricsModal />
    </div>
  );
}

export default function Home() {
  return (
    <DevotionalProvider>
      <DevotionalScreen />

      {/* Crawler & Screen-Reader Accessible Complete Sacred Stotra Text (SEO) */}
      <article className="sr-only" aria-label="सम्पूर्ण नित्य भक्ति दैनिक स्तोत्र व चालीसा विवरण">
        <h1>नित्य भक्ति | Nitya Bhakti - दैनिक हिन्दू स्तोत्र, चालीसा, आरती व भक्ति संगीत संग्रह</h1>
        <p>
          नित्य भक्ति (Nitya Bhakti) एक पावन, शांत एवं ध्यानमग्न वेब मंच है जिसमें सप्ताह के सातों दिनों के आराध्य देवी-देवताओं
          की स्तुति, चालीसा, स्तोत्र एवं शुद्ध भक्ति संगीत समाहित है। यहाँ बिना किसी विज्ञापन व बाधा के उच्च कोटि का भक्ति संगीत
          (आरती, भजन, स्तोत्र, चालीसा, मंत्र) तथा बहुभाषी लिपि (देवनागरी, English, ગુજરાતી, বাংলা, తెలుగు) में पाठ उपलब्ध है।
        </p>

        {DAILY_SCHEDULE.map((day) => (
          <section key={day.dayIndex} id={day.dayNameEn.toLowerCase()}>
            <h2>
              {day.dayName} ({day.dayNameEn}) - आराध्य देवी/देवता
            </h2>
            <p>
              {day.dayNameEn} Daily Worship in Sanatana Dharma: Dedicated to{' '}
              {day.deities.map((d) => d.nameEn).join(' and ')}.
            </p>
            {day.deities.map((deity) => (
              <div key={deity.id} id={deity.id}>
                <h3>
                  {deity.name} ({deity.nameEn}) - {deity.subtitle}
                </h3>
                <p>
                  <strong>महामन्त्र / Sacred Quote:</strong> {deity.sacredQuote.sanskrit} — {deity.sacredQuote.english}
                </p>

                <h4>भक्ति संगीत संग्रह (Audio Tracks - Aarti, Bhajan, Stotra, Chalisa, Mantra):</h4>
                <ul>
                  {deity.audioTracks?.map((trk) => (
                    <li key={trk.id}>
                      <strong>[{trk.category}]</strong> {trk.title} — {trk.artist}
                    </li>
                  ))}
                </ul>

                <h4>स्तोत्र एवं चालीसा पाठ (Complete Lyrics & Meanings):</h4>
                {deity.prayers.map((prayer) => (
                  <div key={prayer.id}>
                    <h5>{prayer.title}</h5>
                    {prayer.sections.map((sec, sIdx) => (
                      <div key={sIdx}>
                        <h6>{sec.title}</h6>
                        {sec.verses.map((v, vIdx) => (
                          <div key={vIdx}>
                            <p><strong>श्लोक/चौपाई:</strong> {v.hindi}</p>
                            <p><strong>Transliteration:</strong> {v.translit}</p>
                            <p><strong>अर्थ / Meaning:</strong> {v.meaning}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </section>
        ))}

        <section id="faq">
          <h2>अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions - FAQ)</h2>
          <div>
            <h3>नित्य भक्ति में सप्ताह के किस दिन किस देवी-देवता की पूजा की जाती है?</h3>
            <p>
              हिन्दू सनातन परंपरा अनुसार: रविवार - भगवान सूर्य देव; सोमवार - देवाधिदेव महादेव शिव; मंगलवार - विघ्नहर्ता श्री गणेश एवं संकटमोचन श्री हनुमान; बुधवार - श्री विट्ठल (पांडुरंग) एवं श्री कृष्ण/विष्णु; गुरुवार - भगवान विष्णु एवं गुरु बृहस्पति; शुक्रवार - माँ महालक्ष्मी एवं माँ दुर्गा; शनिवार - कर्मफलदाता शनि देव एवं श्री हनुमान।
            </p>
          </div>
          <div>
            <h3>बुधवार को भगवान विट्ठल (पांडुरंग) की पूजा का क्या महत्व है?</h3>
            <p>
              वारकरी परंपरा एवं महाराष्ट्र-कर्नाटक में बुधवार का दिन भगवान विट्ठल को समर्पित माना जाता है। इस दिन पांडुरंगाष्टकम् एवं संत तुकाराम के अभंग "सुंदर ते ध्यान" का श्रवण करने से परम शांति एवं भगवत्कृपा प्राप्त होती है।
            </p>
          </div>
          <div>
            <h3>नित्य भक्ति में कौन-से भजन, आरती और स्तोत्र उपलब्ध हैं?</h3>
            <p>
              प्रत्येक देवता के लिए 5 मुख्य विधाओं में संगीत उपलब्ध है: आरती (Aarti), भजन (Bhajan), स्तोत्र (Shloka/Stotram), चालीसा (Chalisa), एवं मन्त्र (Mantra)।
            </p>
          </div>
          <div>
            <h3>गीतों के बोल (Lyrics) किन-किन लिपियों में पढ़े जा सकते हैं?</h3>
            <p>
              नित्य भक्ति में 5 लिपियों का समर्थन है: देवनागरी (हिन्दी/संस्कृत), English (रोमन लिप्यंतरण), ગુજરાતી (गुजराती), বাংলা (बंगाली), एवं తెలుగు (तेलुगु)।
            </p>
          </div>
        </section>
      </article>
    </DevotionalProvider>
  );
}
