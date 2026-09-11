# नित्य भक्ति | Nitya Bhakti - Daily Hindu Prayers, Stotras & Music

> A serene, distraction-free daily Hindu devotional web application combining all 7 days of the week and their traditional presiding deities into one cohesive experience, modeled after the minimalist aesthetic of **Shree Hanuman Chalisa**.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## 🌟 7-Day Worship Schedule & Presiding Deities

| Day | Presiding Deities | Traditional Prayers & Sacred Music | Atmosphere & Palette |
| :--- | :--- | :--- | :--- |
| **Sunday (रविवार)** | **Surya Dev** | Aditya Hridaya Stotram, Surya Aarti, Surya Gayatri, 12 Surya Mantras, Surya Chalisa | Radiant Solar Amber Sunrise |
| **Monday (सोमवार)** | **Lord Shiva (Mahadev)** | Shiv Tandav Stotram, Shiva Chalisa, Maha Mrityunjaya Mantra, Om Jai Shiv Omkara, Karpur Gauram | Mount Kailash Ice-Blue & Silver |
| **Tuesday (मंगलवार)** | **Ganesha + Hanuman** | Shree Hanuman Chalisa, Sankat Mochan, Bajrang Baan, Ganesh Chalisa, Jai Ganesh Deva | Sacred Sindoor Vermilion & Saffron Flame |
| **Wednesday (बुधवार)** | **Lord Vitthal (पाण्डुरंग) + Krishna / Vishnu** | Pandurangashtakam, Sundar Te Dhyan (Abhang), Achyutashtakam, Shri Krishna Govind Hare Murari, Vitthal Namasankirtan | Pandharpur Vaikuntha Gold & Peacock Teal |
| **Thursday (गुरुवार)** | **Vishnu + Brihaspati/Guru** | Vishnu Sahasranamam, Om Jai Jagdish Hare, Brihaspati Dev Stotram, Guru Paduka Stotram, Satyanarayan Aarti | Sacred Pitambari Haldi Yellow & Gold |
| **Friday (शुक्रवार)** | **Lakshmi + Devi (Durga)** | Mahalakshmi Ashtakam, Shri Suktam, Durga Chalisa, Mahishasura Mardini Stotram, Lakshmi Aarti | Divine Lotus Rose Carmine & Golden Aura |
| **Saturday (शनिवार)** | **Shani Dev + Hanuman** | Shani Chalisa, Dasharatha Shani Stotram, Shani Mahamantra, Hanuman Chalisa (Shani Peeda Nivaran), Shani Aarti | Cosmic Midnight Sapphire & Protective Amber |

---

## 🕉️ Key Features

- **Lord Vitthal (Panduranga of Pandharpur)**:
  - Special dedicated presence on Wednesday alongside Lord Krishna.
  - Features Saint Tukaram's beloved Abhang *"सुंदर ते ध्यान उभे विटेवरी"* and Adi Shankaracharya's sacred *पाण्डुरङ्गाष्टकम्* (*"महायोगपीठे तटे भीमरथ्यां..."*).
- **Pure Devotional Music (No Synthetics)**:
  - Categorized tracks for every deity: **आरती (Aarti)**, **भजन (Bhajan)**, **स्तोत्रम् (Shloka/Stotram)**, **चालीसा (Chalisa)**, and **मन्त्र (Mantra)**.
  - Cycle between tracks with sleek inline `⏮` and `⏭` buttons directly on the bottom dock.
- **Real-Time Live Devotees Counter**:
  - Live fluctuating presence simulation (`🟢 1,284 listening`) prominently displayed on mobile, tablet, and desktop headers.
- **5 Indic Script Transliteration & Lyrics Reader**:
  - Zero-dependency Brahmic Unicode transliteration:
    - **देवनागरी (हिन्दी / संस्कृत / मराठी)**
    - **English (Romanized / IAST)**
    - **ગુજરાતી (Gujarati)**
    - **বাংলা (Bengali)**
    - **తెలుగు (Telugu)**
  - Dynamic font zoom (`A-` / `A+`) and instant verse search.
- **100% Fully Responsive Across All Devices**:
  - Precision responsive layouts for phones (iPhone, Android), tablets (iPad), desktops, and height-constrained screens (mobile landscape).
  - Orientation-aware divine background artwork positioning that keeps deity faces and crowns centered on both portrait and landscape viewports.
  - iOS & Android Safe Area Inset support (`env(safe-area-inset-*)`).
- **Complete SEO & Discoverability Suite**:
  - Dynamic `/sitemap.xml` with priority indexing for all 7 days and individual deities.
  - `/robots.txt` crawler configuration.
  - Progressive Web App `/manifest.webmanifest` and high-res favicons (`favicon.ico`, `icon.jpg`, `apple-icon.jpg`).
  - OpenGraph & Twitter Cards (`summary_large_image`) for rich WhatsApp/social previews.
  - Comprehensive Schema.org JSON-LD graph (`WebSite`, `WebApplication`, `MusicPlaylist`, `MusicRecording`, `FAQPage`, `BreadcrumbList`).
  - Deep-linking via query parameters (`?day=wednesday&deity=vitthal`).
- **Vercel Analytics**: Built-in integration via `@vercel/analytics/next` for privacy-friendly real-time traffic insights.

---

## 🌐 Live Production Deployment

The application is deployed and live on Vercel:
- **Live URL**: [https://nityabhaktiapp.vercel.app](https://nityabhaktiapp.vercel.app)
- **Alternative Mirror**: [https://daily-devotion-psi.vercel.app](https://daily-devotion-psi.vercel.app)
- **GitHub Repository**: [https://github.com/manthanank/daily-devotion](https://github.com/manthanank/daily-devotion)

---

## 🚀 How to Deploy on Vercel

### Option 1: Deploy with Vercel CLI (Fastest)

1. Install the Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. In the project directory (`c:\Users\manth\daily-devotion`), run:
   ```bash
   vercel
   ```
3. Follow the interactive prompts and specify your desired project name (e.g. `nityabhakti`).
4. To deploy to production:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub / Vercel Dashboard

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: Nitya Bhakti all-in-one 7-day devotional app"
   git remote add origin https://github.com/<your-username>/daily-devotion.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework Preset: **Next.js**.
4. Click **Deploy**. Vercel will build and assign your domain within seconds.

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or `http://localhost:3005`) in your browser.
3. Build for production:
   ```bash
   npm run build
   npm run start
   ```

---

## 📜 License

Created with devotion for devotees of Sanatana Dharma. Distributed under the MIT License.
