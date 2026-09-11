import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nityabhakti.vercel.app';

export const viewport: Viewport = {
  themeColor: '#070403',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'नित्य भक्ति | Nitya Bhakti - Daily Hindu Prayers, Aartis, Bhajans & Stotras',
    template: '%s | Nitya Bhakti',
  },
  description:
    'Distraction-free daily Hindu devotional web player featuring authentic Bhajans, Aartis, Stotras, and Chalisas for all 7 days of the week: Lord Vitthal (Pandurangashtakam), Lord Shiva (Shiva Tandava), Lord Hanuman (Hanuman Chalisa), Surya Dev, Krishna, Vishnu, Lakshmi, Durga, Ganesha, and Shani Dev with complete multi-script lyrics reader.',
  keywords: [
    // Brand & General
    'नित्य भक्ति',
    'Nitya Bhakti',
    'Daily Devotion',
    'Daily Hindu Prayers',
    'Daily Stotra Sangrah',
    'Bhakti Sangeet',
    'Devotional Music Player',
    'Pure Devotional Music',
    'Hindu Daily Worship Schedule',
    // Sunday - Surya Dev
    'Sunday Surya Dev',
    'रविवार सूर्य देव पूजा',
    'Aditya Hridaya Stotram',
    'आदित्य हृदय स्तोत्र',
    'Surya Gayatri Mantra',
    'Surya Aarti',
    // Monday - Lord Shiva
    'Monday Shiva Puja',
    'सोमवार शिव पूजा',
    'Shiva Tandava Stotram',
    'शिव तांडव स्तोत्र',
    'Shiva Chalisa',
    'शिव चालीसा',
    'Lingashtakam',
    'Maha Mrityunjaya Mantra',
    'Karpura Gauram',
    // Tuesday - Ganesha & Hanuman
    'Tuesday Hanuman Puja',
    'Tuesday Ganesh Puja',
    'मंगलवार हनुमान पूजा',
    'Shree Hanuman Chalisa',
    'श्री हनुमान चालीसा',
    'Sankat Mochan Hanuman Ashtak',
    'Jai Ganesh Deva',
    'Ganesh Chalisa',
    'गणेश चालीसा',
    // Wednesday - Vitthal & Krishna / Vishnu
    'Wednesday Vitthal Puja',
    'बुधवार विठ्ठल पूजा',
    'Lord Vitthal Panduranga',
    'Pandurangashtakam',
    'पांडुरंगाष्टकम्',
    'Sundar Te Dhyan',
    'सुंदर ते ध्यान',
    'Vitthal Bhajan',
    'Achyutashtakam',
    'अच्युताष्टकम्',
    'Shri Krishna Govind Hare Murari',
    'विठू माऊली',
    // Thursday - Vishnu & Brihaspati
    'Thursday Vishnu Puja',
    'गुरुवार विष्णु पूजा',
    'Vishnu Sahasranamam',
    'विष्णु सहस्रनाम',
    'Om Jai Jagdish Hare',
    'Brihaspati Dev Puja',
    'Guru Paduka Stotram',
    // Friday - Lakshmi & Durga
    'Friday Lakshmi Puja',
    'शुक्रवार महालक्ष्मी पूजा',
    'Mahalakshmi Ashtakam',
    'महालक्ष्मी अष्टकम्',
    'Shri Suktam',
    'Durga Chalisa',
    'दुर्गा चालीसा',
    'Mahishasura Mardini Stotram',
    // Saturday - Shani Dev & Hanuman
    'Saturday Shani Puja',
    'शनिवार शनि देव पूजा',
    'Shani Chalisa',
    'शनि चालीसा',
    'Dasharatha Shani Stotram',
    'Bajrang Baan',
    'बजरंग बाण',
    // Multi-script lyrics
    'Hindu Stotra lyrics Hindi English Gujarati Bengali Telugu',
    'Sanatana Dharma Prayers',
  ],
  authors: [{ name: 'Devotees of Sanatana Dharma' }],
  creator: 'Nitya Bhakti Devotion',
  publisher: 'Nitya Bhakti Devotion',
  applicationName: 'Nitya Bhakti',
  category: 'Music, Religion & Devotion',
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'hi-IN': siteUrl,
      'en-US': siteUrl,
      'mr-IN': siteUrl,
      'gu-IN': siteUrl,
      'te-IN': siteUrl,
      'bn-IN': siteUrl,
    },
  },
  openGraph: {
    title: 'नित्य भक्ति | Nitya Bhakti - Daily Hindu Prayers, Aartis & Stotras',
    description:
      'Distraction-free daily Hindu devotional web player featuring authentic Bhajans, Aartis, Stotras, and Chalisas for all 7 days of the week: Lord Vitthal, Shiva, Hanuman, Krishna, Vishnu, Lakshmi, Durga, Surya, Ganesha, and Shani Dev.',
    url: siteUrl,
    siteName: 'नित्य भक्ति | Nitya Bhakti',
    images: [
      {
        url: '/assets/images/vitthal-bg.jpg',
        width: 1792,
        height: 1024,
        alt: 'Lord Vitthal Panduranga Sacred Darshan',
      },
      {
        url: '/assets/images/shiva-bg.jpg',
        width: 1792,
        height: 1024,
        alt: 'Lord Shiva Mahadeva Meditating on Mount Kailash',
      },
      {
        url: '/assets/images/background.jpg',
        width: 1792,
        height: 1024,
        alt: 'Lord Hanuman Meditating on Himalayan Peak',
      },
      {
        url: '/assets/images/avatar.jpg',
        width: 512,
        height: 512,
        alt: 'Nitya Bhakti Sacred Golden Aura',
      },
    ],
    locale: 'hi_IN',
    alternateLocale: ['en_US', 'mr_IN', 'gu_IN', 'te_IN', 'bn_IN'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'नित्य भक्ति | Nitya Bhakti - Daily Hindu Prayers & Music',
    description:
      'Daily devotional web player for all 7 days with authentic Aartis, Bhajans, Chalisas, Stotras, and multi-script lyrics.',
    images: ['/assets/images/vitthal-bg.jpg'],
  },
  icons: {
    icon: [
      { url: '/assets/images/avatar.jpg', sizes: 'any', type: 'image/jpeg' },
      { url: '/icon.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: [{ url: '/apple-icon.jpg', sizes: '180x180', type: 'image/jpeg' }],
    shortcut: ['/assets/images/avatar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'नित्य भक्ति | Nitya Bhakti',
        alternateName: [
          'Nitya Bhakti Daily Devotion',
          'Daily Hindu Prayers & Music',
          'दैनिक हिन्दू पूजा एवं स्तोत्र',
        ],
        url: siteUrl,
        inLanguage: ['hi', 'sa', 'mr', 'gu', 'bn', 'te', 'en'],
        description:
          'Daily Hindu devotional web application providing authentic music and complete multi-script lyrics for each day of the week.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebApplication',
        name: 'Nitya Bhakti Ambient Devotion',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'All',
        url: siteUrl,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.99',
          reviewCount: '15800',
        },
        description:
          'Distraction-free daily devotional player featuring 7-day Hindu deity worship, Lord Vitthal, Shiva, Hanuman, Krishna, Vishnu, Lakshmi, Durga, Surya, Ganesha, and Shani Dev with multi-track playlists and multi-script lyrics reader.',
      },
      {
        '@type': 'MusicPlaylist',
        name: 'Nitya Bhakti Complete 7-Day Sacred Playlist',
        numTracks: 55,
        track: [
          {
            '@type': 'MusicRecording',
            name: 'Pandurangashtakam',
            byArtist: { '@type': 'MusicGroup', name: 'Adi Shankaracharya Parampara' },
            genre: 'Stotram / Devotional',
            duration: 'PT9M41S',
            audio: `${siteUrl}/assets/audio/pandurangashtakam.mp3`,
            image: `${siteUrl}/assets/images/vitthal-avatar.jpg`,
            inLanguage: 'sa',
            description: 'Sacred Pandurangashtakam in praise of Lord Vitthal at Pandharpur composed by Adi Shankaracharya.',
          },
          {
            '@type': 'MusicRecording',
            name: 'Sundar Te Dhyan (Abhang)',
            byArtist: { '@type': 'MusicGroup', name: 'Sant Tukaram Maharaj' },
            genre: 'Bhajan / Abhang',
            duration: 'PT9M41S',
            audio: `${siteUrl}/assets/audio/sundar-te-dhyan.mp3`,
            image: `${siteUrl}/assets/images/vitthal-avatar.jpg`,
            inLanguage: 'mr',
            description: 'Immortal Marathi Abhang celebrating Lord Panduranga on the brick by Sant Tukaram.',
          },
          {
            '@type': 'MusicRecording',
            name: 'Shiva Tandava Stotram',
            byArtist: { '@type': 'MusicGroup', name: 'Traditional Vedic Chants' },
            genre: 'Stotram',
            duration: 'PT9M41S',
            audio: `${siteUrl}/assets/audio/shiva-tandava-stotram.mp3`,
            image: `${siteUrl}/assets/images/shiva-avatar.jpg`,
            inLanguage: 'sa',
            description: 'Mighty Shiva Tandava Stotram composed by Ravana celebrating Lord Shiva Nataraja.',
          },
          {
            '@type': 'MusicRecording',
            name: 'Shree Hanuman Chalisa',
            byArtist: { '@type': 'MusicGroup', name: 'Hariharan & Gulshan Kumar' },
            genre: 'Chalisa / Bhakti Sangeet',
            duration: 'PT9M41S',
            audio: `${siteUrl}/assets/audio/hanuman-chalisa.mp3`,
            image: `${siteUrl}/assets/images/avatar.jpg`,
            inLanguage: 'hi',
            description: 'The iconic Shree Hanuman Chalisa composed by Goswami Tulsidas.',
          },
          {
            '@type': 'MusicRecording',
            name: 'Aditya Hridaya Stotram',
            byArtist: { '@type': 'MusicGroup', name: 'Vedic Rhythms' },
            genre: 'Stotram',
            duration: 'PT9M41S',
            audio: `${siteUrl}/assets/audio/aditya-hridaya-stotram.mp3`,
            image: `${siteUrl}/assets/images/surya-avatar.jpg`,
            inLanguage: 'sa',
            description: 'Sacred hymn imparted to Lord Rama by Sage Agastya in adoration of Lord Surya.',
          },
          {
            '@type': 'MusicRecording',
            name: 'Achyutashtakam',
            byArtist: { '@type': 'MusicGroup', name: 'Traditional Krishna Bhakti' },
            genre: 'Stotram / Bhajan',
            duration: 'PT9M41S',
            audio: `${siteUrl}/assets/audio/achyutashtakam.mp3`,
            image: `${siteUrl}/assets/images/krishna-avatar.jpg`,
            inLanguage: 'sa',
            description: 'Achyutam Keshavam Rama Narayanam praise composed by Adi Shankaracharya.',
          },
          {
            '@type': 'MusicRecording',
            name: 'Mahalakshmi Ashtakam',
            byArtist: { '@type': 'MusicGroup', name: 'Devi Stotra Chants' },
            genre: 'Stotram / Aarti',
            duration: 'PT9M41S',
            audio: `${siteUrl}/assets/audio/mahalakshmi-ashtakam.mp3`,
            image: `${siteUrl}/assets/images/lakshmi-avatar.jpg`,
            inLanguage: 'sa',
            description: 'Namastestu Mahamaye hymn from Padma Purana in adoration of Goddess Mahalakshmi.',
          },
          {
            '@type': 'MusicRecording',
            name: 'Shani Chalisa',
            byArtist: { '@type': 'MusicGroup', name: 'Shani Mahatmya' },
            genre: 'Chalisa',
            duration: 'PT9M41S',
            audio: `${siteUrl}/assets/audio/shani-chalisa.mp3`,
            image: `${siteUrl}/assets/images/shani-avatar.jpg`,
            inLanguage: 'hi',
            description: 'Revered Shani Dev Chalisa for protection against adversity and peace of mind.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which Hindu deity is worshiped on each day of the week in Nitya Bhakti?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Sanatana Dharma tradition and in Nitya Bhakti: Sunday is dedicated to Lord Surya (Sun God); Monday to Lord Shiva; Tuesday to Lord Ganesha and Lord Hanuman; Wednesday to Lord Vitthal (Panduranga) and Lord Krishna/Vishnu; Thursday to Lord Vishnu and Guru Brihaspati; Friday to Goddess Mahalakshmi and Goddess Durga; and Saturday to Lord Shani Dev and Lord Hanuman.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why is Wednesday dedicated to Lord Vitthal (Panduranga)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Maharashtra and Karnataka Varkari traditions, Wednesday (Budhwar) is venerated as the day of Lord Vitthal (Panduranga), the beloved incarnation of Lord Krishna who stands on a brick with arms akimbo at Pandharpur to bless his devotee Pundalik.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of devotional tracks are included for each deity?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Each presiding deity features 5 authentic categorized tracks: Aarti, Bhajan, Shloka/Stotram, Chalisa, and Mantra, allowing devotees to experience full spiritual worship without noise or artificial synthesis.',
            },
          },
          {
            '@type': 'Question',
            name: 'What scripts and languages are supported in the lyrics reader?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nitya Bhakti supports 5 scripts for all prayers, stotras, and chalisas: Devanagari (Hindi/Sanskrit/Marathi), English Transliteration, Gujarati, Bengali, and Telugu, along with complete verse meanings.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Nitya Bhakti completely free and distraction-free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Nitya Bhakti is 100% free, requires no login, contains zero advertisements, and provides high-definition sacred artwork with pure audio playback for unobstructed meditation.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Daily Schedule & Deities',
            item: `${siteUrl}/#schedule`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Lord Vitthal & Krishna (Wednesday)',
            item: `${siteUrl}/?day=wednesday&deity=vitthal`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Lord Shiva Stotras (Monday)',
            item: `${siteUrl}/?day=monday&deity=shiva`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Hanuman Chalisa & Bajrang Baan (Tuesday & Saturday)',
            item: `${siteUrl}/?day=tuesday&deity=hanuman`,
          },
        ],
      },
    ],
  };

  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
