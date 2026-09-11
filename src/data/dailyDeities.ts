// Sacred data store for 7 days of the week & presiding deities

export interface VerseItem {
  num?: string | number;
  hindi: string;
  translit: string;
  meaning: string;
}

export interface PrayerSection {
  title: string;
  titleEn: string;
  verses: VerseItem[];
}

export interface SacredPrayer {
  id: string;
  title: string;
  titleEn: string;
  composer?: string;
  sections: PrayerSection[];
}

export interface AudioTrackItem {
  id: string;
  title: string;
  titleEn?: string;
  category: 'Aarti' | 'Bhajan' | 'Shloka' | 'Chalisa' | 'Mantra';
  categoryHi: string;
  artist: string;
  duration?: string;
  src: string;
}

export interface DeityInfo {
  id: string;
  name: string;
  nameEn: string;
  subtitle: string;
  subtitleEn: string;
  dayName: string;
  dayNameEn: string;
  avatar: string;
  bgImage: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    glowColor: string;
    particleHue: number; // For dynamic particle system
    particleSecondaryHue: number;
  };
  audioTrack: AudioTrackItem;
  audioTracks: AudioTrackItem[];
  sacredQuote: {
    sanskrit: string;
    english: string;
  };
  prayers: SacredPrayer[];
}

export interface DaySchedule {
  dayIndex: number; // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  dayName: string;
  dayNameEn: string;
  deities: DeityInfo[];
}

export const DAILY_SCHEDULE: DaySchedule[] = [
  // --------------------------------------------------------------------------
  // SUNDAY: SURYA DEV (रविवार)
  // --------------------------------------------------------------------------
  {
    dayIndex: 0,
    dayName: 'रविवार',
    dayNameEn: 'Sunday',
    deities: [
      {
        id: 'surya-dev',
        name: 'श्री सूर्य देव',
        nameEn: 'Bhagwan Surya Dev',
        subtitle: 'प्रत्यक्ष देव एवं आरोग्य प्रदाता',
        subtitleEn: 'The Supreme Solar Divinity & Giver of Radiance',
        dayName: 'रविवार',
        dayNameEn: 'Sunday',
        avatar: '/assets/images/surya-avatar.jpg',
        bgImage: '/assets/images/surya-bg.jpg',
        theme: {
          primaryColor: '#ff9800',
          secondaryColor: '#f4511e',
          glowColor: 'rgba(255, 152, 0, 0.5)',
          particleHue: 35,
          particleSecondaryHue: 15,
        },
        audioTrack: {
          "id": "aditya-hridaya",
          "title": "Aditya Hridaya Stotram (आदित्य हृदय स्तोत्रम्)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Maharishi Agastya Chant",
          "duration": "6:24",
          "src": "/assets/audio/surya-dev.mp3"
},
        audioTracks: [
          {
                    "id": "aditya-hridaya",
                    "title": "Aditya Hridaya Stotram (आदित्य हृदय स्तोत्रम्)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Maharishi Agastya Chant",
                    "duration": "6:24",
                    "src": "/assets/audio/surya-dev.mp3"
          },
          {
                    "id": "surya-aarti",
                    "title": "Shri Surya Dev Aarti (जय कश्यप नंदन)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Traditional Temple Aarti",
                    "duration": "4:15",
                    "src": "/assets/audio/surya-dev.mp3"
          },
          {
                    "id": "surya-gayatri",
                    "title": "Surya Gayatri Mantra (ॐ आदित्याय विद्महे)",
                    "category": "Mantra",
                    "categoryHi": "मन्त्र",
                    "artist": "Vedic Chants",
                    "duration": "5:08",
                    "src": "/assets/audio/surya-dev.mp3"
          },
          {
                    "id": "surya-namaskar",
                    "title": "12 Surya Namaskar Mantras (द्वादश सूर्य मन्त्राः)",
                    "category": "Shloka",
                    "categoryHi": "श्लोक",
                    "artist": "Yogic Solar Chants",
                    "duration": "4:42",
                    "src": "/assets/audio/surya-dev.mp3"
          },
          {
                    "id": "surya-chalisa",
                    "title": "Shri Surya Chalisa (कनक बदन कुण्डल मकर)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "Divine Chants Choir",
                    "duration": "7:30",
                    "src": "/assets/audio/surya-dev.mp3"
          },
          {
          "id": "surya-ashtakam",
          "title": "Surya Ashtakam (सूर्याष्टकम् - आदिदेव नमस्तुभ्यं)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Samba Purana Vedic Chants",
          "duration": "5:12",
          "src": "/assets/audio/surya-dev.mp3"
},
          {
          "id": "chakshushopanishad",
          "title": "Chakshushopanishad (चक्षुषोपनिषद् - नेत्र ज्योति स्तोत्र)",
          "category": "Mantra",
          "categoryHi": "मन्त्र",
          "artist": "Vedic Rhythms",
          "duration": "4:20",
          "src": "/assets/audio/surya-dev.mp3"
}
],
        sacredQuote: {
          sanskrit: 'ॐ आदित्याय विद्महे प्रभाकराय धीमहि तन्नः सूर्यः प्रचोदयात्॥',
          english: 'Salutations to the Golden Sun, source of cosmic illumination and vitality.',
        },
        prayers: [
          {
            id: 'aditya-hridaya',
            title: 'आदित्य हृदय स्तोत्रम् (Aditya Hridaya Stotram)',
            titleEn: 'Sacred Hymn of the Solar Heart (Valmiki Ramayana)',
            composer: 'महर्षि अगस्त्य (Maharishi Agastya)',
            sections: [
              {
                title: 'आरम्भिक श्लोक',
                titleEn: 'Opening Invocation',
                verses: [
                  {
                    num: 1,
                    hindi: 'ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम्। रावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम्॥',
                    translit: 'Tato yuddha-parishrantam samare chintaya sthitam | Ravanam chāgrato d加shtva yuddhāya samupasthitam ||',
                    meaning: 'Beholding Sri Rama standing exhausted on the battlefield contemplating the war, with Ravana standing before him ready for combat.',
                  },
                  {
                    num: 2,
                    hindi: 'दैवतैश्च समागम्य द्रष्टुमभ्यागतो रणम्। उपगम्याब्रवीद्राममगस्त्यो भगवान् ऋषिः॥',
                    translit: 'Daivataishcha samāgamya drashtum-abhyāgato ranam | Upagamyā-bravīd-Rāmam-Agastyo bhagavān rishih ||',
                    meaning: 'The venerable sage Agastya, who had come in the company of the gods to witness the battle, approached Rama and spoke these words.',
                  },
                  {
                    num: 3,
                    hindi: 'राम राम महाबाहो शृणु गुह्यं सनातनम्। येन सर्वानरीन् वत्स समरे विजयिष्यसि॥',
                    translit: 'Rama Rama mahābāho shrinu guhyam sanātanam | Yena sarvān-arīn vatsa samare vijayishyasi ||',
                    meaning: 'O mighty-armed Rama, listen to this eternal secret by which you will vanquish all your foes in battle.',
                  },
                  {
                    num: 4,
                    hindi: 'आदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम्। जयावहं जपेन्नित्यमक्षयं परमं शिवम्॥',
                    translit: 'Aditya-hridayam punyam sarva-shatru-vināshanam | Jayāvaham japen-nityam-akshayam paramam shivam ||',
                    meaning: 'This holy hymn called Aditya Hridaya destroys all enemies, bestows victory, and should be chanted daily for everlasting auspiciousness.',
                  },
                ],
              },
              {
                title: 'सूर्य देव स्तुति',
                titleEn: 'Praise of the Sun God',
                verses: [
                  {
                    num: 5,
                    hindi: 'सर्वमङ्गलमाङ्गल्यं सर्वपापप्रणाशनम्। चिन्ताशोकप्रशमनमायुर्वर्धनमुत्तमम्॥',
                    translit: 'Sarva-mangala-māngalyam sarva-pāpa-pranāshanam | Chintā-shoka-prashamanam-āyur-vardhanam-uttamam ||',
                    meaning: 'It is the most auspicious of all blessings, eradicates all sins, dispels anxiety and sorrow, and enhances lifespan.',
                  },
                  {
                    num: 6,
                    hindi: 'नमः सवित्रे जगदेकचक्षुषे जगत्प्रसूतिस्थितिनाशहेतवे। त्रयीमयाय त्रिगुणात्मधारिणे विरिञ्चिनारायणशङ्करात्मने॥',
                    translit: 'Namah savitre jagad-eka-chakshushe jagat-prasūti-sthiti-nāsha-hetave | Trayī-mayāya tri-gunātma-dhārine virinchi-nārāyana-shankarātmane ||',
                    meaning: 'Salutations to the Sun, the sole eye of the universe, cause of creation, preservation, and dissolution, embodying Brahma, Vishnu, and Shiva.',
                  },
                ],
              },
            ],
          },
          {
            id: 'surya-aarti',
            title: 'श्री सूर्य देव जी की आरती',
            titleEn: 'Aarti of Lord Surya Dev',
            sections: [
              {
                title: 'आरती',
                titleEn: 'Sacred Aarti',
                verses: [
                  {
                    num: 1,
                    hindi: 'जय कश्यप-नंदन, ॐ जय अदिति-नंदन। त्रिभुवन-तिमिर-निकंदन, भक्त-हृदय-चंदन॥ ॐ जय सूर्य भगवान॥',
                    translit: 'Jai Kashyapa-nandana, Om Jai Aditi-nandana | Tribhuvana-timira-nikandana, bhakta-hridaya-chandana || Om Jai Surya Bhagwan ||',
                    meaning: 'Glory to the son of Sage Kashyapa and mother Aditi, who banishes the darkness of the three realms and soothes devotees hearts.',
                  },
                  {
                    num: 2,
                    hindi: 'सप्त-अश्वरथ राजित, एक चक्र धारी। दुःखहारी, सुखकारी, मानस-मल-हारी॥ ॐ जय सूर्य भगवान॥',
                    translit: 'Sapta-ashva-ratha rājita, eka chakra dhārī | Dukhahārī, sukhakārī, mānasa-mala-hārī || Om Jai Surya Bhagwan ||',
                    meaning: 'Seated upon a chariot driven by seven radiant steeds, possessing a single cosmic wheel, removing all misery and gifting supreme bliss.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // MONDAY: LORD SHIVA (सोमवार)
  // --------------------------------------------------------------------------
  {
    dayIndex: 1,
    dayName: 'सोमवार',
    dayNameEn: 'Monday',
    deities: [
      {
        id: 'shiva',
        name: 'भगवान शिव (महादेव)',
        nameEn: 'Lord Shiva (Mahadev)',
        subtitle: 'भोलेनाथ, देवाधिदेव एवं महाकाल',
        subtitleEn: 'The Lord of Kailash, Compassionate Mahadev & Destroyer of Time',
        dayName: 'सोमवार',
        dayNameEn: 'Monday',
        avatar: '/assets/images/shiva-avatar.jpg',
        bgImage: '/assets/images/shiva-bg.jpg',
        theme: {
          primaryColor: '#38bdf8',
          secondaryColor: '#1e40af',
          glowColor: 'rgba(56, 189, 248, 0.45)',
          particleHue: 200,
          particleSecondaryHue: 220,
        },
        audioTrack: {
          "id": "shiv-tandav",
          "title": "Shiv Tandav Stotram (शिव ताण्डव स्तोत्रम्)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Ravana Virachitam",
          "duration": "5:45",
          "src": "/assets/audio/shiva.mp3"
},
        audioTracks: [
          {
                    "id": "shiv-tandav",
                    "title": "Shiv Tandav Stotram (शिव ताण्डव स्तोत्रम्)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Ravana Virachitam",
                    "duration": "5:45",
                    "src": "/assets/audio/shiva.mp3"
          },
          {
                    "id": "shiva-chalisa",
                    "title": "Shri Shiva Chalisa (जय गणेश गिरिजा सुवन)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "Complete 40 Chaupais",
                    "duration": "8:12",
                    "src": "/assets/audio/shiva.mp3"
          },
          {
                    "id": "maha-mrityunjaya",
                    "title": "Maha Mrityunjaya Mantra (ॐ त्र्यम्बकं यजामहे)",
                    "category": "Mantra",
                    "categoryHi": "मन्त्र",
                    "artist": "Sacred 108 Japa",
                    "duration": "11:20",
                    "src": "/assets/audio/shiva.mp3"
          },
          {
                    "id": "shiv-aarti",
                    "title": "Om Jai Shiv Omkara (ॐ जय शिव ओंकारा)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Traditional Shiva Aarti",
                    "duration": "4:50",
                    "src": "/assets/audio/shiva.mp3"
          },
          {
                    "id": "karpur-gauram",
                    "title": "Karpur Gauram Karunavataram (कर्पूरगौरं)",
                    "category": "Bhajan",
                    "categoryHi": "भजन",
                    "artist": "Shiva Dhyan Stuti",
                    "duration": "3:35",
                    "src": "/assets/audio/shiva.mp3"
          },
          {
          "id": "lingashtakam",
          "title": "Lingashtakam (ब्रह्ममुरारिसुरार्चितलिङ्गम्)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Adi Shankaracharya Parampara",
          "duration": "6:15",
          "src": "/assets/audio/shiva.mp3"
},
          {
          "id": "nirvana-shatakam",
          "title": "Nirvana Shatakam (शिवोऽहम् - मनोबुद्ध्यहंकार)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Traditional Meditation Chants",
          "duration": "7:08",
          "src": "/assets/audio/shiva.mp3"
}
],
        sacredQuote: {
          sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥',
          english: 'We meditate upon the Three-Eyed Lord, fragrant and nourishing all beings; may He liberate us from death and bondages.',
        },
        prayers: [
          {
            id: 'shiv-tandav',
            title: 'शिव ताण्डव स्तोत्रम् (Shiv Tandav Stotram)',
            titleEn: 'The Cosmic Dance of Lord Shiva',
            composer: 'दशानन रावण (Lankesh Ravana)',
            sections: [
              {
                title: 'स्तोत्रम्',
                titleEn: 'Sacred Verses',
                verses: [
                  {
                    num: 1,
                    hindi: 'जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्। डमड्डमड्डमड्डमन्निनादवड्डमर्वयं चकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥',
                    translit: 'Jatātavī-galaj-jala-pravāha-pāvita-sthale gale avalambya lambitām bhujanga-tunga-mālikām | Damad-damad-damad-daman-ninādavad-damarvayam chakāra chanda-tāndavam tanotu nah shivah shivam ||',
                    meaning: 'With his neck purified by the flow of water cascading from his thick forest of matted locks, wearing a garland of mighty serpents, playing the damaru with a rhythmic beat, Lord Shiva performs his fierce Tandava dance.',
                  },
                  {
                    num: 2,
                    hindi: 'जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी-विलोलवीचिवल्लरीविराजमानमूर्धनि। धगद्धगद्धगज्ज्वलल्ललाटपट्टपावके किशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम॥',
                    translit: 'Jatā-katāha-sambhrama-bhraman-nilimpa-nirjharī vilola-vīchi-vallarī-virājamāna-mūrdhani | Dhagad-dhagad-dhagaj-jvalal-lalāta-patta-pāvake kishora-chandra-shekhare ratih pratikshanam mama ||',
                    meaning: 'My delight surges every moment for Lord Shiva, upon whose head shines the celestial river Ganga swirling through matted locks, whose forehead blazes with brilliant fire, and who is crowned by the youthful crescent moon.',
                  },
                ],
              },
            ],
          },
          {
            id: 'shiva-chalisa',
            title: 'श्री शिव चालीसा (Shri Shiva Chalisa)',
            titleEn: 'Forty Hymns of Praise to Lord Shiva',
            sections: [
              {
                title: 'दोहा',
                titleEn: 'Opening Doha',
                verses: [
                  {
                    num: 1,
                    hindi: 'जय गणेश गिरिजा सुवन, मंगल मूल सुजान। कहत अयोध्यादास तुम, देहु अभय वरदान॥',
                    translit: 'Jai Ganesh Girijā suvan, mangal mūla sujān | Kahat Ayodhyādās tum, dehu abhay vardān ||',
                    meaning: 'Glory to Ganesha, the son of Parvati, the root of all auspiciousness and supreme wisdom. Grant your devotee the boon of fearlessness.',
                  },
                ],
              },
              {
                title: 'चौपाई',
                titleEn: 'Chaupais',
                verses: [
                  {
                    num: 1,
                    hindi: 'जय गिरिजा पति दीन दयाला। सदा करत सन्तन प्रतिपाला॥',
                    translit: 'Jai Girijā pati dīna dayālā | Sadā karat santan pratipālā ||',
                    meaning: 'Glory to the consort of Parvati, compassionate to the humble, who perpetually nurtures and protects the virtuous.',
                  },
                  {
                    num: 2,
                    hindi: 'भाल चन्द्रमा सोहत नीके। कानन कुण्डल नागफनी के॥',
                    translit: 'Bhāla chandramā sohat nīke | Kānan kundal nāgaphanī ke ||',
                    meaning: 'The crescent moon adorns your graceful forehead, and serpents coil elegantly as your earrings.',
                  },
                  {
                    num: 3,
                    hindi: 'अंग गौर शिर गंग बहाये। मुण्डमाल तन क्षार लगाये॥',
                    translit: 'Anga gaura shira ganga bahāye | Munda-māla tana kshāra lagāye ||',
                    meaning: 'With fair radiant form, the holy Ganga streams from your head; wearing a garland of skulls and body smeared with sacred ashes.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TUESDAY: GANESHA + HANUMAN (मंगलवार)
  // --------------------------------------------------------------------------
  {
    dayIndex: 2,
    dayName: 'मंगलवार',
    dayNameEn: 'Tuesday',
    deities: [
      {
        id: 'hanuman',
        name: 'श्री हनुमान जी',
        nameEn: 'Lord Hanuman',
        subtitle: 'संकटमोचन, पवनपुत्र एवं अष्टसिद्धि दाता',
        subtitleEn: 'Remover of Obstacles, Son of Wind & Giver of Supreme Strength',
        dayName: 'मंगलवार',
        dayNameEn: 'Tuesday',
        avatar: '/assets/images/avatar.jpg',
        bgImage: '/assets/images/background.jpg',
        theme: {
          primaryColor: '#f97316',
          secondaryColor: '#dc2626',
          glowColor: 'rgba(249, 115, 22, 0.5)',
          particleHue: 28,
          particleSecondaryHue: 10,
        },
        audioTrack: {
          "id": "hanuman-chalisa-hariharan",
          "title": "Shree Hanuman Chalisa (श्री हनुमान चालीसा)",
          "category": "Chalisa",
          "categoryHi": "चालीसा",
          "artist": "Hariharan • Gulshan Kumar",
          "duration": "9:41",
          "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
},
        audioTracks: [
          {
                    "id": "hanuman-chalisa-hariharan",
                    "title": "Shree Hanuman Chalisa (श्री हनुमान चालीसा)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "Hariharan • Gulshan Kumar",
                    "duration": "9:41",
                    "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
          },
          {
                    "id": "sankat-mochan",
                    "title": "Sankat Mochan Hanumanashtak (संकट मोचन हनुमानाष्टक)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Hariharan • Goswami Tulsidas",
                    "duration": "5:22",
                    "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
          },
          {
                    "id": "bajrang-baan",
                    "title": "Shri Bajrang Baan (श्री बजरंग बाण)",
                    "category": "Bhajan",
                    "categoryHi": "भजन",
                    "artist": "Devotional Choirs",
                    "duration": "6:15",
                    "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
          },
          {
                    "id": "hanuman-aarti",
                    "title": "Aarti Kije Hanuman Lala Ki (आरती कीजै हनुमान लला की)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Traditional Aarti",
                    "duration": "4:05",
                    "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
          },
          {
                    "id": "maruti-stotra",
                    "title": "Maruti Stotra (भीमरूपी महारुद्रा मारुती)",
                    "category": "Shloka",
                    "categoryHi": "श्लोक",
                    "artist": "Samarth Ramdas Stotra",
                    "duration": "3:50",
                    "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
          },
          {
          "id": "hanuman-bahuk",
          "title": "Shri Hanuman Bahuk (हनुमान बाहुक - पीड़ा नाशक)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Goswami Tulsidas Vani",
          "duration": "9:25",
          "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
},
          {
          "id": "hanuman-vadavanala",
          "title": "Hanuman Vadavanala Stotram (वडवानल स्तोत्रम्)",
          "category": "Mantra",
          "categoryHi": "मन्त्र",
          "artist": "Vibheeshana Rachitam",
          "duration": "6:18",
          "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
}
],
        sacredQuote: {
          sanskrit: 'मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥',
          english: 'I take refuge in Sri Hanuman, swift as the mind, equal in speed to the wind, master of the senses, foremost among the wise.',
        },
        prayers: [
          {
            id: 'hanuman-chalisa',
            title: 'सम्पूर्ण श्री हनुमान चालीसा',
            titleEn: 'Shree Hanuman Chalisa (Mahakavi Goswami Tulsidas)',
            composer: 'गोस्वामी तुलसीदास जी',
            sections: [
              {
                title: 'आरम्भिक दोहा',
                titleEn: 'Opening Doha',
                verses: [
                  {
                    num: 1,
                    hindi: 'श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि। बरनउँ रघुबर बिमल जसु जो दायकु फल चारि॥',
                    translit: 'Shree guru charan saroj raj nij manu mukuru sudhāri | Baranau raghubar bimal jasu jo dāyaku phal chāri ||',
                    meaning: 'Cleansing the mirror of my mind with the sacred dust of the Guru lotus feet, I recount the immaculate glory of Sri Rama, which bestows the four fruits of life.',
                  },
                  {
                    num: 2,
                    hindi: 'बुद्धिहीन तनु जानिके सुमिरौ पवन-कुमार। बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥',
                    translit: 'Buddhi-hīna tanu jānike sumirau pawan-kumār | Bal budhi bidyā dehu mohi harahu kales bikār ||',
                    meaning: 'Knowing myself to be devoid of wisdom, I meditate upon the Son of Wind. Bestow upon me strength, wisdom, and knowledge, and dispel my afflictions.',
                  },
                ],
              },
              {
                title: 'चालीस चौपाई',
                titleEn: 'Forty Chaupais',
                verses: [
                  {
                    num: 1,
                    hindi: 'जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥',
                    translit: 'Jai hanumān gyān gun sāgar | Jai kapīs tihu lok ujāgar ||',
                    meaning: 'Victory to Hanuman, boundless ocean of wisdom and virtues. Hail Commander of Monkeys, illuminated across all three realms.',
                  },
                  {
                    num: 2,
                    hindi: 'राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥',
                    translit: 'Rām dūt atulit bal dhāmā | Anjani-putra pawansut nāmā ||',
                    meaning: 'Envoy of Lord Rama, repository of immeasurable strength, known as Anjanis son and child of the Wind.',
                  },
                  {
                    num: 3,
                    hindi: 'महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥',
                    translit: 'Mahābīr bikram bajarangī | Kumati nivār sumati ke sangī ||',
                    meaning: 'Valiant warrior with limbs strong as a thunderbolt, dispeller of evil intellect and companion of divine wisdom.',
                  },
                  {
                    num: 4,
                    hindi: 'कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥',
                    translit: 'Kanchan baran birāj subesā | Kānan kundal kunchit kesā ||',
                    meaning: 'Golden complexioned and elegantly attired, with sparkling earrings and rich curly locks.',
                  },
                ],
              },
              {
                title: 'समापन दोहा',
                titleEn: 'Closing Doha',
                verses: [
                  {
                    num: 1,
                    hindi: 'पवनतनय संकट हरन मंगल मूरति रूप। राम लखन सीता सहित हृदय बसहु सुर भूप॥',
                    translit: 'Pawan tanay sankat haran mangal mūrati rūp | Rām lakhan sītā sahit hriday basahu sur bhūp ||',
                    meaning: 'O Son of the Wind, redeemer of miseries, embodiment of auspiciousness, dwell eternally in my heart along with Rama, Lakshmana, and Sita.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'ganesha',
        name: 'श्री गणेश जी',
        nameEn: 'Lord Ganesha (Ganapati)',
        subtitle: 'विघ्नहर्ता, प्रथम पूज्य एवं सिद्धिदाता',
        subtitleEn: 'Remover of Obstacles, First Worshipped & Giver of Auspiciousness',
        dayName: 'मंगलवार',
        dayNameEn: 'Tuesday',
        avatar: '/assets/images/ganesha-avatar.jpg',
        bgImage: '/assets/images/ganesha-bg.jpg',
        theme: {
          primaryColor: '#e11d48',
          secondaryColor: '#f59e0b',
          glowColor: 'rgba(225, 29, 72, 0.45)',
          particleHue: 350,
          particleSecondaryHue: 30,
        },
        audioTrack: {
          "id": "ganesh-aarti",
          "title": "Jai Ganesh Jai Ganesh Deva (जय गणेश देवा)",
          "category": "Aarti",
          "categoryHi": "आरती",
          "artist": "Universal Ganesh Aarti",
          "duration": "4:32",
          "src": "/assets/audio/ganesha.mp3"
},
        audioTracks: [
          {
                    "id": "ganesh-aarti",
                    "title": "Jai Ganesh Jai Ganesh Deva (जय गणेश देवा)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Universal Ganesh Aarti",
                    "duration": "4:32",
                    "src": "/assets/audio/ganesha.mp3"
          },
          {
                    "id": "ganesh-chalisa",
                    "title": "Shri Ganesh Chalisa (जय गणपति सदगुण सदन)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "40 Chaupais",
                    "duration": "7:45",
                    "src": "/assets/audio/ganesha.mp3"
          },
          {
                    "id": "sankat-nashan-ganesh",
                    "title": "Sankat Nashan Ganesh Stotram (प्रणम्य शिरसा देवं)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Narada Purana",
                    "duration": "4:18",
                    "src": "/assets/audio/ganesha.mp3"
          },
          {
                    "id": "vakratunda",
                    "title": "Vakratunda Mahakaya Mantra (वक्रतुण्ड महाकाय)",
                    "category": "Mantra",
                    "categoryHi": "मन्त्र",
                    "artist": "Sacred Meditation",
                    "duration": "5:12",
                    "src": "/assets/audio/ganesha.mp3"
          },
          {
                    "id": "sukhkarta-dukhharta",
                    "title": "Sukhkarta Dukh Harta (सुखकर्ता दुखहर्ता)",
                    "category": "Bhajan",
                    "categoryHi": "भजन",
                    "artist": "Samarth Ramdas Aarti",
                    "duration": "3:58",
                    "src": "/assets/audio/ganesha.mp3"
          },
          {
          "id": "ganapati-atharvashirsha",
          "title": "Ganapati Atharvashirsha (गणपति अथर्वशीर्ष उपनिषद्)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Atharva Vedic Chants",
          "duration": "8:40",
          "src": "/assets/audio/ganesha.mp3"
},
          {
          "id": "ganesh-pancharatnam",
          "title": "Ganesha Pancharatnam (मुदाकरात्तमोदकं)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Adi Shankaracharya Chants",
          "duration": "5:10",
          "src": "/assets/audio/ganesha.mp3"
}
],
        sacredQuote: {
          sanskrit: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
          english: 'O Lord with the curved trunk and immense form, shining with the radiance of millions of suns, make all my endeavors free of obstacles forever.',
        },
        prayers: [
          {
            id: 'ganesh-aarti',
            title: 'श्री गणेश आरती (Jai Ganesh Jai Ganesh Deva)',
            titleEn: 'Traditional Ganesha Aarti',
            sections: [
              {
                title: 'आरती',
                titleEn: 'Sacred Verses',
                verses: [
                  {
                    num: 1,
                    hindi: 'जय गणेश जय गणेश जय गणेश देवा। माता जाकी पार्वती पिता महादेवा॥',
                    translit: 'Jai Ganesh Jai Ganesh Jai Ganesh Devā | Mātā jākī Pārvatī pitā Mahādevā ||',
                    meaning: 'Hail Lord Ganesha, beloved son of Mother Parvati and Supreme Mahadev.',
                  },
                  {
                    num: 2,
                    hindi: 'एक दन्त दयावन्त चार भुजा धारी। माथे सिन्दूर सोहे मूसे की सवारी॥',
                    translit: 'Ek danta dayāvanta chār bhujā dhārī | Māthe sindūra sohe mūse kī savārī ||',
                    meaning: 'Single-tusked, boundless in mercy, with four hands, adorned with vermilion on the forehead and riding the mouse.',
                  },
                  {
                    num: 3,
                    hindi: 'पान चढ़े फूल चढ़े और चढ़े मेवा। लड्डुअन का भोग लगे संत करें सेवा॥',
                    translit: 'Pān charhe phūl charhe aur charhe mevā | Ladduan kā bhog lage sant kare sevā ||',
                    meaning: 'Offering betel leaves, fresh blossoms, and dry fruits; relishing sweet modaks while saints and sages serve in devotion.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // WEDNESDAY: KRISHNA / VISHNU + LORD VITTHAL (पाण्डुरंग) (बुधवार)
  // --------------------------------------------------------------------------
  {
    dayIndex: 3,
    dayName: 'बुधवार',
    dayNameEn: 'Wednesday',
    deities: [
      {
        id: 'vitthal',
        name: 'श्री विठ्ठल (पाण्डुरंग)',
        nameEn: 'Lord Vitthal (Panduranga)',
        subtitle: 'पंढरपुर निवासी, भक्ताभिमानी एवं हरि-विट्ठल',
        subtitleEn: 'The Beloved Sovereign of Pandharpur standing on the Brick',
        dayName: 'बुधवार',
        dayNameEn: 'Wednesday',
        avatar: '/assets/images/vitthal-avatar.jpg',
        bgImage: '/assets/images/vitthal-bg.jpg',
        theme: {
          primaryColor: '#eab308',
          secondaryColor: '#0f766e',
          glowColor: 'rgba(234, 179, 8, 0.5)',
          particleHue: 45,
          particleSecondaryHue: 175,
        },
        audioTrack: {
          "id": "pandurangashtakam",
          "title": "Pandurangashtakam (महायोगपीठे तटे भीमरथ्यां)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Adi Shankaracharya Stotra",
          "duration": "5:15",
          "src": "/assets/audio/vitthal.mp3"
},
        audioTracks: [
          {
                    "id": "pandurangashtakam",
                    "title": "Pandurangashtakam (महायोगपीठे तटे भीमरथ्यां)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Adi Shankaracharya Stotra",
                    "duration": "5:15",
                    "src": "/assets/audio/vitthal.mp3"
          },
          {
                    "id": "sundar-te-dhyan",
                    "title": "Sundar Te Dhyan (सुंदर ते ध्यान उभे विटेवरी)",
                    "category": "Bhajan",
                    "categoryHi": "भजन",
                    "artist": "Sant Tukaram Maharaj Abhang",
                    "duration": "6:20",
                    "src": "/assets/audio/vitthal.mp3"
          },
          {
                    "id": "roop-pahata",
                    "title": "Roop Pahata Lochani (रूप पाहतां लोचनीं सुख जालें)",
                    "category": "Bhajan",
                    "categoryHi": "भजन",
                    "artist": "Sant Dnyaneshwar Abhang",
                    "duration": "5:40",
                    "src": "/assets/audio/vitthal.mp3"
          },
          {
                    "id": "yei-o-vitthale",
                    "title": "Yei O Vitthale Majhe Mauliye (येई ओ विठ्ठले माझे माउलिये)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Sant Namdev Aarti",
                    "duration": "4:48",
                    "src": "/assets/audio/vitthal.mp3"
          },
          {
                    "id": "vitthal-namasankirtan",
                    "title": "Vitthal Vitthal Vitthala (जय जय रामकृष्ण हरि)",
                    "category": "Mantra",
                    "categoryHi": "मन्त्र",
                    "artist": "Pandharpur Warkari Chants",
                    "duration": "8:35",
                    "src": "/assets/audio/vitthal.mp3"
          },
          {
          "id": "majhe-maher-pandhari",
          "title": "Majhe Maher Pandhari (माझे माहेर पंढरी)",
          "category": "Bhajan",
          "categoryHi": "भजन",
          "artist": "Sant Eknath Maharaj Abhang",
          "duration": "6:45",
          "src": "/assets/audio/vitthal.mp3"
},
          {
          "id": "kanada-raja-pandharicha",
          "title": "Kanada Raja Pandharicha (कानडा राजा पंढरीचा)",
          "category": "Bhajan",
          "categoryHi": "भजन",
          "artist": "Traditional Varkari Bhakti",
          "duration": "7:12",
          "src": "/assets/audio/vitthal.mp3"
}
],
        sacredQuote: {
          sanskrit: 'महायोगपीठे तटे भीमरथ्यां वरं पुण्डरीकाय दातुं मुनीन्द्रैः। समागत्य तिष्ठन्तमानन्दकन्दं परब्रह्मलिङ्गं भजे पाण्डुरङ्गम्॥',
          english: 'At the great seat of Mahayoga on the banks of Bhimarathi, who arrived with holy sages to grant boons to Pundalika, I worship that supreme Brahman Panduranga.',
        },
        prayers: [
          {
            id: 'pandurangashtakam',
            title: 'पाण्डुरङ्गाष्टकम् (Pandurangashtakam)',
            titleEn: 'Eight Verses in Adoration of Panduranga',
            composer: 'आदि शंकराचार्य (Adi Shankaracharya)',
            sections: [
              {
                title: 'अष्टकम्',
                titleEn: 'Sacred Octet',
                verses: [
                  {
                    num: 1,
                    hindi: 'महायोगपीठे तटे भीमरथ्यां वरं पुण्डरीकाय दातुं मुनीन्द्रैः। समागत्य तिष्ठन्तमानन्दकन्दं परब्रह्मलिङ्गं भजे पाण्डुरङ्गम्॥',
                    translit: 'Mahā-yoga-pīthe tate bhīmarathyām varam pundarīkāya dātum munīndraih | Samāgatya tishthantam-ānanda-kandam parabrahma-lingam bhaje pāndurangam ||',
                    meaning: 'I venerate Lord Panduranga, the source of supreme bliss and embodiment of Supreme Truth, standing upon the brick on the holy banks of Bhimarathi.',
                  },
                  {
                    num: 2,
                    hindi: 'तडिद्वाससं नीलमेघावभासं रमामन्दिरं सुन्दरं चित्प्रकाशम्। वरं त्विष्टिकायां समन्यस्तपादं परब्रह्मलिङ्गं भजे पाण्डुरङ्गम्॥',
                    translit: 'Tadid-vāsasam nīla-meghā-vabhāsam ramā-mandiram sundaram chit-prakāsham | Varam tvishtikāyām samanyasta-pādam parabrahma-lingam bhaje pāndurangam ||',
                    meaning: 'Clad in lightning-yellow garments, radiating the hue of dark rain clouds, abode of Lakshmi and embodiment of pure consciousness, resting His feet upon the brick.',
                  },
                  {
                    num: 3,
                    hindi: 'प्रमाणं भवाब्धेरिदं मामकानां नितम्बः कराभ्यां धृतो येन तस्मात्। विधातुर्वसत्यै समस्तं च सृष्टं परब्रह्मलिङ्गं भजे पाण्डुरङ्गम्॥',
                    translit: 'Pramānam bhavābdher-idam māmakānām nitambah karābhyām dhrito yena tasmāt | Vidhātur-vasatyai samastam cha s加shtam parabrahma-lingam bhaje pāndurangam ||',
                    meaning: 'With His hands tenderly placed upon His hips, assuring devotees that the ocean of worldly sorrows reaches only up to the waist for those who surrender.',
                  },
                ],
              },
            ],
          },
          {
            id: 'sundar-te-dhyan',
            title: 'सुंदर ते ध्यान (Sundar Te Dhyan - Vitthal Abhang)',
            titleEn: 'Beloved Abhang of Sant Tukaram Maharaj',
            composer: 'संत तुकाराम महाराज (Sant Tukaram)',
            sections: [
              {
                title: 'अभंग',
                titleEn: 'Sacred Abhang',
                verses: [
                  {
                    num: 1,
                    hindi: 'सुंदर ते ध्यान उभे विटेवरी। कर कटावरी ठेवोनियां॥',
                    translit: 'Sundar te dhyāna ubhe vitevarī | Kara katāvarī thevoniyā ||',
                    meaning: 'Exquisite is the divine form standing serenely on the brick, resting His lotus hands gracefully on His hips.',
                  },
                  {
                    num: 2,
                    hindi: 'तुळसीचे हार गळां कासे पितांबर। आवडे निरंतर हेचि ध्यान॥',
                    translit: 'Tulasīche hāra galām kāse pītāmbara | Āvade nirantara hechi dhyāna ||',
                    meaning: 'Adorned with fragrant garlands of holy Tulsi around His neck and golden yellow silk garments; my heart yearns perpetually for this meditative vision.',
                  },
                  {
                    num: 3,
                    hindi: 'मकरकुंडले तळपती श्रवणीं। कंठी कौस्तुभमणी विराजित॥',
                    translit: 'Makara-kundale talapatī shravanīm | Kanthī kaustubha-manī virājita ||',
                    meaning: 'Fish-shaped earrings shimmer in His ears, and the resplendent Kaustubha jewel gleams upon His sacred chest.',
                  },
                  {
                    num: 4,
                    hindi: 'तुका म्हणे माझे हेचि सर्व सुख। पाहीन श्रीमुख आवडीने॥',
                    translit: 'Tukā mhane mājhe hechi sarva sukha | Pāhīna shrī-mukha āvadīne ||',
                    meaning: 'Sant Tukaram declares: This alone is all my joy and fulfilment—to lovingly behold that divine face forever.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'krishna',
        name: 'भगवान श्रीकृष्ण',
        nameEn: 'Lord Krishna',
        subtitle: 'यशोदानंदन, जगद्गुरु एवं मुरलीधर',
        subtitleEn: 'The Divine Flutist, Universal Teacher & Supreme Enchanter',
        dayName: 'बुधवार',
        dayNameEn: 'Wednesday',
        avatar: '/assets/images/krishna-avatar.jpg',
        bgImage: '/assets/images/krishna-bg.jpg',
        theme: {
          primaryColor: '#0284c7',
          secondaryColor: '#10b981',
          glowColor: 'rgba(2, 132, 199, 0.45)',
          particleHue: 195,
          particleSecondaryHue: 155,
        },
        audioTrack: {
          "id": "madhurashtakam",
          "title": "Madhurashtakam (अधरं मधुरं वदनं मधुरं)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Sri Vallabhacharya",
          "duration": "5:10",
          "src": "/assets/audio/krishna.mp3"
},
        audioTracks: [
          {
                    "id": "madhurashtakam",
                    "title": "Madhurashtakam (अधरं मधुरं वदनं मधुरं)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Sri Vallabhacharya",
                    "duration": "5:10",
                    "src": "/assets/audio/krishna.mp3"
          },
          {
                    "id": "achyutam-keshavam",
                    "title": "Achyutam Keshavam (अच्युतं केशवं रामनारायणं)",
                    "category": "Bhajan",
                    "categoryHi": "भजन",
                    "artist": "Pure Sacred Melodies",
                    "duration": "5:50",
                    "src": "/assets/audio/krishna.mp3"
          },
          {
                    "id": "kunj-bihari-aarti",
                    "title": "Aarti Kunj Bihari Ki (आरती कुंजबिहारी की)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Traditional Krishna Aarti",
                    "duration": "4:30",
                    "src": "/assets/audio/krishna.mp3"
          },
          {
                    "id": "krishna-govind",
                    "title": "Shri Krishna Govind Hare Murari (श्री कृष्ण गोविंद हरे मुरारी)",
                    "category": "Bhajan",
                    "categoryHi": "भजन",
                    "artist": "Divine Chants",
                    "duration": "7:15",
                    "src": "/assets/audio/krishna.mp3"
          },
          {
                    "id": "krishna-dhyan",
                    "title": "Vasudeva Sutam Devam (वसुदेवसुतं देवं ध्यान श्लोक)",
                    "category": "Shloka",
                    "categoryHi": "श्लोक",
                    "artist": "Adi Shankaracharya",
                    "duration": "4:20",
                    "src": "/assets/audio/krishna.mp3"
          },
          {
          "id": "govind-bolo-hari",
          "title": "Govind Bolo Hari Gopal Bolo (गोविन्द बोलो)",
          "category": "Bhajan",
          "categoryHi": "भजन",
          "artist": "Vaishnava Kirtan",
          "duration": "7:40",
          "src": "/assets/audio/krishna.mp3"
},
          {
          "id": "bhaja-govindam",
          "title": "Bhaja Govindam (भज गोविन्दम् - मोहमुद्गरः)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Adi Shankaracharya Chants",
          "duration": "8:15",
          "src": "/assets/audio/krishna.mp3"
}
],
        sacredQuote: {
          sanskrit: 'वसुदेवसुतं देवं कंसचाणूरमर्दनम्। देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम्॥',
          english: 'I salute Lord Krishna, the son of Vasudeva, destroyer of Kamsa, supreme joy of Devaki, and universal teacher of creation.',
        },
        prayers: [
          {
            id: 'madhurashtakam',
            title: 'मधुराष्टकम् (Madhurashtakam)',
            titleEn: 'Eight Sweet Verses of Lord Krishna',
            composer: 'श्री वल्लभाचार्य (Vallabhacharya)',
            sections: [
              {
                title: 'अष्टकम्',
                titleEn: 'Sacred Verses',
                verses: [
                  {
                    num: 1,
                    hindi: 'अधरं मधुरं वदनं मधुरं नयनं मधुरं हसितं मधुरम्। हृदयं मधुरं गमनं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
                    translit: 'Adharam madhuram vadanam madhuram nayanam madhuram hasitam madhuram | Hridayam madhuram gamanam madhuram madhurādhipater-akhilam madhuram ||',
                    meaning: 'His lips are sweet, His face is sweet, His eyes are sweet, His smile is sweet, His heart is sweet, His gait is sweet; everything about the Lord of Sweetness is utterly sweet.',
                  },
                  {
                    num: 2,
                    hindi: 'वचनं मधुरं चरितं मधुरं वसनं मधुरं वलितं मधुरम्। चलितं मधुरं भ्रमितं मधुरं मधुराधिपतेरखिलं मधुरम्॥',
                    translit: 'Vachanam madhuram charitam madhuram vasanam madhuram valitam madhuram | Chalitam madhuram bhramitam madhuram madhurādhipater-akhilam madhuram ||',
                    meaning: 'His speech is sweet, His deeds are sweet, His robes are sweet, His posture is sweet, His movements are sweet; everything about the Lord of Sweetness is utterly sweet.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // THURSDAY: VISHNU + BRIHASPATI/GURU (गुरुवार)
  // --------------------------------------------------------------------------
  {
    dayIndex: 4,
    dayName: 'गुरुवार',
    dayNameEn: 'Thursday',
    deities: [
      {
        id: 'vishnu',
        name: 'भगवान श्री विष्णु',
        nameEn: 'Lord Vishnu (Narayana)',
        subtitle: 'सृष्टि पालक, पीताम्बरधारी एवं लक्ष्मीपति',
        subtitleEn: 'The Preserver of the Cosmos & Consort of Goddess Lakshmi',
        dayName: 'गुरुवार',
        dayNameEn: 'Thursday',
        avatar: '/assets/images/vishnu-avatar.jpg',
        bgImage: '/assets/images/vishnu-bg.jpg',
        theme: {
          primaryColor: '#f59e0b',
          secondaryColor: '#d97706',
          glowColor: 'rgba(245, 158, 11, 0.45)',
          particleHue: 42,
          particleSecondaryHue: 35,
        },
        audioTrack: {
          "id": "om-jai-jagdish",
          "title": "Om Jai Jagdish Hare (ॐ जय जगदीश हरे)",
          "category": "Aarti",
          "categoryHi": "आरती",
          "artist": "Universal Aarti Collection",
          "duration": "5:25",
          "src": "/assets/audio/vishnu.mp3"
},
        audioTracks: [
          {
                    "id": "om-jai-jagdish",
                    "title": "Om Jai Jagdish Hare (ॐ जय जगदीश हरे)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Universal Aarti Collection",
                    "duration": "5:25",
                    "src": "/assets/audio/vishnu.mp3"
          },
          {
                    "id": "vishnu-sahasranamam",
                    "title": "Vishnu Sahasranamam Stuti (शुक्लाम्बरधरं विष्णुं)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Vedic Chants",
                    "duration": "8:10",
                    "src": "/assets/audio/vishnu.mp3"
          },
          {
                    "id": "vishnu-chalisa",
                    "title": "Shri Vishnu Chalisa (जय जय विष्णु भगवान हरी)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "Complete Chaupais",
                    "duration": "7:20",
                    "src": "/assets/audio/vishnu.mp3"
          },
          {
                    "id": "shantakaram",
                    "title": "Shantakaram Bhujagashayanam (शान्ताकारं भुजगशयनं)",
                    "category": "Shloka",
                    "categoryHi": "श्लोक",
                    "artist": "Cosmic Vishnu Dhyanam",
                    "duration": "4:15",
                    "src": "/assets/audio/vishnu.mp3"
          },
          {
                    "id": "satyanarayan-aarti",
                    "title": "Shri Satyanarayan Aarti (जय लक्ष्मीरमणा श्री)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Traditional Aarti",
                    "duration": "4:40",
                    "src": "/assets/audio/vishnu.mp3"
          },
          {
          "id": "narayana-kavacham",
          "title": "Shri Narayana Kavacham (श्री नारायण कवचम्)",
          "category": "Mantra",
          "categoryHi": "मन्त्र",
          "artist": "Shrimad Bhagavatam Vedic Chants",
          "duration": "8:55",
          "src": "/assets/audio/vishnu.mp3"
},
          {
          "id": "damodarashtakam",
          "title": "Damodarashtakam (नमामीश्वरं सच्चिदानन्दरूपं)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Padma Purana Hymns",
          "duration": "6:30",
          "src": "/assets/audio/vishnu.mp3"
}
],
        sacredQuote: {
          sanskrit: 'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्। लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्॥',
          english: 'I revere Lord Vishnu, of peaceful demeanor, resting on the cosmic serpent, lotus-naveled, lord of gods, foundation of the universe.',
        },
        prayers: [
          {
            id: 'jagdish-aarti',
            title: 'ॐ जय जगदीश हरे (Om Jai Jagdish Hare)',
            titleEn: 'Universal Aarti to Lord Jagdish (Vishnu)',
            composer: 'पंडित श्रद्धाराम फिल्लौरी',
            sections: [
              {
                title: 'आरती',
                titleEn: 'Sacred Verses',
                verses: [
                  {
                    num: 1,
                    hindi: 'ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे। भक्त जनों के संकट, दास जनों के संकट, क्षण में दूर करे॥ ॐ जय जगदीश हरे॥',
                    translit: 'Om Jai Jagadīsha Hare, Swāmī Jai Jagadīsha Hare | Bhakta janon ke sankat, dāsa janon ke sankat, kshana mein dūra kare || Om Jai Jagadīsha Hare ||',
                    meaning: 'Hail to the Lord of the Universe, who in an instant dispels the trials and distresses of His devotees.',
                  },
                  {
                    num: 2,
                    hindi: 'जो ध्यावे फल पावे, दुःख बिनसे मन का। स्वामी दुःख बिनसे मन का। सुख सम्पत्ति घर आवे, कष्ट मिटे तन का॥ ॐ जय जगदीश हरे॥',
                    translit: 'Jo dhyāve phala pāve, dukha binase mana kā | Swāmī dukha binase mana kā | Sukha sampatti ghara āve, kashta mite tana kā || Om Jai Jagadīsha Hare ||',
                    meaning: 'Whoever contemplates upon You obtains divine fruits; sorrows of the heart vanish, prosperity graces the home, and afflictions dissolve.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'guru-brihaspati',
        name: 'बृहस्पति देव (गुरुदेव)',
        nameEn: 'Lord Brihaspati (Guru Dev)',
        subtitle: 'देवगुरु, ज्ञान प्रदाता एवं नवग्रह स्वामी',
        subtitleEn: 'Preceptor of the Devas, Master of Wisdom & Lord of Jupiter',
        dayName: 'गुरुवार',
        dayNameEn: 'Thursday',
        avatar: '/assets/images/brihaspati-avatar.jpg',
        bgImage: '/assets/images/brihaspati-bg.jpg',
        theme: {
          primaryColor: '#eab308',
          secondaryColor: '#ca8a04',
          glowColor: 'rgba(234, 179, 8, 0.45)',
          particleHue: 48,
          particleSecondaryHue: 55,
        },
        audioTrack: {
          "id": "brihaspati-aarti",
          "title": "Brihaspati Dev Aarti (जय बृहस्पति देवा ॐ)",
          "category": "Aarti",
          "categoryHi": "आरती",
          "artist": "Traditional Guru Aarti",
          "duration": "4:35",
          "src": "/assets/audio/brihaspati.mp3"
},
        audioTracks: [
          {
                    "id": "brihaspati-aarti",
                    "title": "Brihaspati Dev Aarti (जय बृहस्पति देवा ॐ)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Traditional Guru Aarti",
                    "duration": "4:35",
                    "src": "/assets/audio/brihaspati.mp3"
          },
          {
                    "id": "guru-stotram",
                    "title": "Shri Guru Stotram (गुरुर्ब्रह्मा गुरुर्विष्णुः)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Skanda Purana",
                    "duration": "5:15",
                    "src": "/assets/audio/brihaspati.mp3"
          },
          {
                    "id": "brihaspati-gayatri",
                    "title": "Brihaspati Gayatri & Beej Mantra (ॐ ग्रां ग्रीं ग्रौं)",
                    "category": "Mantra",
                    "categoryHi": "मन्त्र",
                    "artist": "Navagraha Japa",
                    "duration": "6:05",
                    "src": "/assets/audio/brihaspati.mp3"
          },
          {
                    "id": "guru-paduka",
                    "title": "Guru Paduka Stotram (अनन्तसंसार समुद्रतार)",
                    "category": "Shloka",
                    "categoryHi": "श्लोक",
                    "artist": "Adi Shankaracharya",
                    "duration": "6:20",
                    "src": "/assets/audio/brihaspati.mp3"
          },
          {
                    "id": "brihaspati-chalisa",
                    "title": "Shri Brihaspati Chalisa (जय जय बृहस्पति देव)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "Thursday Chalisa",
                    "duration": "7:10",
                    "src": "/assets/audio/brihaspati.mp3"
          },
          {
          "id": "guru-ashtakam",
          "title": "Guru Ashtakam (गुर्वष्टकम् - शरीरं सुरूपं)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Adi Shankaracharya Chants",
          "duration": "5:45",
          "src": "/assets/audio/brihaspati.mp3"
},
          {
          "id": "brihaspati-kavacham",
          "title": "Brihaspati Kavacham (बृहस्पति कवचम्)",
          "category": "Mantra",
          "categoryHi": "मन्त्र",
          "artist": "Vedic Navagraha Stotram",
          "duration": "4:50",
          "src": "/assets/audio/brihaspati.mp3"
}
],
        sacredQuote: {
          sanskrit: 'गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः। गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः॥',
          english: 'The Guru is Brahma, the Guru is Vishnu, the Guru is Lord Shiva; the Guru is the Supreme Brahman manifest. Salutations to that Guru.',
        },
        prayers: [
          {
            id: 'guru-stotram',
            title: 'श्री गुरु स्तोत्रम् (Guru Stotram)',
            titleEn: 'Hymn in Adoration of the Divine Teacher',
            composer: 'स्कन्द पुराण (Skanda Purana)',
            sections: [
              {
                title: 'स्तोत्रम्',
                titleEn: 'Sacred Shlokas',
                verses: [
                  {
                    num: 1,
                    hindi: 'अखण्डमण्डलाकारं व्याप्तं येन चराचरम्। तत्पदं दर्शितं येन तस्मै श्रीगुरवे नमः॥',
                    translit: 'Akhanda-mandalākāram vyāptam yena charācharam | Tat-padam darshitam yena tasmai shrī-gurave namah ||',
                    meaning: 'Salutations to the noble Guru who revealed the Supreme Truth that pervades the undivided cosmic expanse of animate and inanimate creation.',
                  },
                  {
                    num: 2,
                    hindi: 'अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशलाकया। चक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः॥',
                    translit: 'Agyāna-timirāndhasya gyānānjana-shalākayā | Chakshur-unmīlitam yena tasmai shrī-gurave namah ||',
                    meaning: 'Salutations to the holy Guru who opens the eyes blinded by the darkness of ignorance with the salve of spiritual illumination.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // FRIDAY: LAKSHMI + DEVI (शुक्रवार)
  // --------------------------------------------------------------------------
  {
    dayIndex: 5,
    dayName: 'शुक्रवार',
    dayNameEn: 'Friday',
    deities: [
      {
        id: 'lakshmi',
        name: 'माँ महालक्ष्मी',
        nameEn: 'Goddess Mahalakshmi',
        subtitle: 'धन, धान्य, समृद्धि एवं अष्टलक्ष्मी प्रदात्री',
        subtitleEn: 'Bestower of Prosperity, Abundance, Spiritual Wealth & Grace',
        dayName: 'शुक्रवार',
        dayNameEn: 'Friday',
        avatar: '/assets/images/lakshmi-avatar.jpg',
        bgImage: '/assets/images/lakshmi-bg.jpg',
        theme: {
          primaryColor: '#f43f5e',
          secondaryColor: '#fb7185',
          glowColor: 'rgba(244, 63, 94, 0.45)',
          particleHue: 345,
          particleSecondaryHue: 330,
        },
        audioTrack: {
          "id": "mahalakshmi-ashtakam",
          "title": "Shri Mahalakshmi Ashtakam (नमस्तेऽस्तु महामाये)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Indra Deva Stotra",
          "duration": "4:50",
          "src": "/assets/audio/lakshmi.mp3"
},
        audioTracks: [
          {
                    "id": "mahalakshmi-ashtakam",
                    "title": "Shri Mahalakshmi Ashtakam (नमस्तेऽस्तु महामाये)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Indra Deva Stotra",
                    "duration": "4:50",
                    "src": "/assets/audio/lakshmi.mp3"
          },
          {
                    "id": "lakshmi-aarti",
                    "title": "Om Jai Lakshmi Mata (ॐ जय लक्ष्मी माता)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Traditional Lakshmi Aarti",
                    "duration": "5:12",
                    "src": "/assets/audio/lakshmi.mp3"
          },
          {
                    "id": "lakshmi-chalisa",
                    "title": "Shri Lakshmi Chalisa (मातु लक्ष्मी करि कृपा)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "40 Chaupais",
                    "duration": "7:35",
                    "src": "/assets/audio/lakshmi.mp3"
          },
          {
                    "id": "kanakadhara",
                    "title": "Kanakadhara Stotram (अङ्कं हरेः पुलकभूषणम्)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Adi Shankaracharya",
                    "duration": "8:45",
                    "src": "/assets/audio/lakshmi.mp3"
          },
          {
                    "id": "lakshmi-gayatri",
                    "title": "Mahalakshmi Gayatri Mantra (ॐ महालक्ष्म्यै च विद्महे)",
                    "category": "Mantra",
                    "categoryHi": "मन्त्र",
                    "artist": "Vedic Prosperity Japa",
                    "duration": "5:30",
                    "src": "/assets/audio/lakshmi.mp3"
          },
          {
          "id": "kanakadhara-stotram",
          "title": "Kanakadhara Stotram (कनकधारा स्तोत्रम्)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Adi Shankaracharya Hymn of Golden Rain",
          "duration": "9:10",
          "src": "/assets/audio/lakshmi.mp3"
},
          {
          "id": "ashta-lakshmi-stotram",
          "title": "Ashta Lakshmi Stotram (अष्टलक्ष्मी स्तोत्रम्)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Divine Devi Chants",
          "duration": "7:55",
          "src": "/assets/audio/lakshmi.mp3"
}
],
        sacredQuote: {
          sanskrit: 'नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते। शङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तु ते॥',
          english: 'Salutations to Mother Mahamaya, seated in the holy seat worshipped by the celestials, holding conch, discus and mace; salutations to Mahalakshmi.',
        },
        prayers: [
          {
            id: 'mahalakshmi-ashtakam',
            title: 'श्री महालक्ष्मी अष्टकम् (Mahalakshmi Ashtakam)',
            titleEn: 'Eight Hymns of Adoration to Mother Mahalakshmi',
            composer: 'देवराज इन्द्र (Indra Deva)',
            sections: [
              {
                title: 'अष्टकम्',
                titleEn: 'Sacred Verses',
                verses: [
                  {
                    num: 1,
                    hindi: 'नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते। शङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तु ते॥',
                    translit: 'Namaste astu mahāmāye shrīpīthe surapūjite | Shankha-chakra-gadā-haste mahālakshmi namo astu te ||',
                    meaning: 'Salutations to the Supreme Mother Mahamaya, sanctifying the altar worshipped by gods, holding the conch, discus, and mace.',
                  },
                  {
                    num: 2,
                    hindi: 'नमस्ते गरुडारूढे कोलासुरभयङ्करि। सर्वपापहरे देवि महालक्ष्मि नमोऽस्तु ते॥',
                    translit: 'Namaste garudārūdhe kolāsura-bhayankari | Sarva-pāpa-hare devi mahālakshmi namo astu te ||',
                    meaning: 'Salutations to You who ride upon Garuda, terrifying to the demon Kolasura, the remover of all afflictions and sins.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'durga',
        name: 'माँ दुर्गा (देवी)',
        nameEn: 'Maa Durga (Adishakti)',
        subtitle: 'दुर्गतिनाशिनी, महिषासुरमर्दिनी एवं जगन्माता',
        subtitleEn: 'Destroyer of Distress, Conqueror of Evil & Cosmic Mother',
        dayName: 'शुक्रवार',
        dayNameEn: 'Friday',
        avatar: '/assets/images/durga-avatar.jpg',
        bgImage: '/assets/images/durga-bg.jpg',
        theme: {
          primaryColor: '#e11d48',
          secondaryColor: '#be123c',
          glowColor: 'rgba(225, 29, 72, 0.45)',
          particleHue: 348,
          particleSecondaryHue: 12,
        },
        audioTrack: {
          "id": "durga-chalisa",
          "title": "Shri Durga Chalisa (नमो नमो दुर्गे सुख करनी)",
          "category": "Chalisa",
          "categoryHi": "चालीसा",
          "artist": "40 Chaupais",
          "duration": "8:05",
          "src": "/assets/audio/durga.mp3"
},
        audioTracks: [
          {
                    "id": "durga-chalisa",
                    "title": "Shri Durga Chalisa (नमो नमो दुर्गे सुख करनी)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "40 Chaupais",
                    "duration": "8:05",
                    "src": "/assets/audio/durga.mp3"
          },
          {
                    "id": "mahishasura-mardini",
                    "title": "Aigiri Nandini / Mahishasura Mardini (अयि गिरिनन्दिनि)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Adi Shankaracharya",
                    "duration": "9:15",
                    "src": "/assets/audio/durga.mp3"
          },
          {
                    "id": "ambe-tu-hai",
                    "title": "Ambe Tu Hai Jagdambe Kali (अम्बे तू है जगदम्बे काली)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Traditional Durga Aarti",
                    "duration": "4:45",
                    "src": "/assets/audio/durga.mp3"
          },
          {
                    "id": "ya-devi",
                    "title": "Ya Devi Sarva Bhuteshu (या देवी सर्वभूतेषु शक्तिरूपेण)",
                    "category": "Shloka",
                    "categoryHi": "श्लोक",
                    "artist": "Devi Suktam Chandi Path",
                    "duration": "5:20",
                    "src": "/assets/audio/durga.mp3"
          },
          {
                    "id": "navarna-mantra",
                    "title": "Navarna Mantra (ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे)",
                    "category": "Mantra",
                    "categoryHi": "मन्त्र",
                    "artist": "Sacred Shakti 108 Japa",
                    "duration": "11:00",
                    "src": "/assets/audio/durga.mp3"
          },
          {
          "id": "siddha-kunjika",
          "title": "Siddha Kunjika Stotram (सिद्धकुञ्जिकास्तोत्रम्)",
          "category": "Mantra",
          "categoryHi": "मन्त्र",
          "artist": "Rudrayamala Durga Saptashati",
          "duration": "6:35",
          "src": "/assets/audio/durga.mp3"
},
          {
          "id": "argala-stotram",
          "title": "Argala Stotram (जयन्ती मङ्गला काली - रूपं देहि)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Markandeya Purana Chants",
          "duration": "7:20",
          "src": "/assets/audio/durga.mp3"
}
],
        sacredQuote: {
          sanskrit: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥',
          english: 'O auspicious Mother, giver of all good, fulfiller of all desires, refuge of the helpless, three-eyed Gauri, salutations to You.',
        },
        prayers: [
          {
            id: 'durga-chalisa',
            title: 'श्री दुर्गा चालीसा (Shri Durga Chalisa)',
            titleEn: 'Forty Hymns of Divine Shakti',
            sections: [
              {
                title: 'चौपाई',
                titleEn: 'Sacred Chaupais',
                verses: [
                  {
                    num: 1,
                    hindi: 'नमो नमो दुर्गे सुख करनी। नमो नमो अम्बे दुःख हरनी॥',
                    translit: 'Namo namo Durge sukha karanī | Namo namo Ambe dukha haranī ||',
                    meaning: 'Salutations again and again to Goddess Durga, source of happiness; salutations to Mother Amba, remover of all suffering.',
                  },
                  {
                    num: 2,
                    hindi: 'निरंकार है ज्योति तुम्हारी। तिहूँ लोक फैली उजियारी॥',
                    translit: 'Nirankār hai jyoti tumhārī | Tihū loka phailī ujiyārī ||',
                    meaning: 'Your effulgence is formless and infinite, illuminating the entire expanse of the three realms.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // SATURDAY: SHANI DEV + HANUMAN (शनिवार)
  // --------------------------------------------------------------------------
  {
    dayIndex: 6,
    dayName: 'शनिवार',
    dayNameEn: 'Saturday',
    deities: [
      {
        id: 'shani-dev',
        name: 'श्री शनि देव',
        nameEn: 'Lord Shani Dev',
        subtitle: 'कर्मफल दाता, सूर्यपुत्र एवं न्यायप्रिय देव',
        subtitleEn: 'Lord of Karma & Justice, Son of Surya & Dispeller of Iniquity',
        dayName: 'शनिवार',
        dayNameEn: 'Saturday',
        avatar: '/assets/images/shani-avatar.jpg',
        bgImage: '/assets/images/shani-bg.jpg',
        theme: {
          primaryColor: '#6366f1',
          secondaryColor: '#312e81',
          glowColor: 'rgba(99, 102, 241, 0.45)',
          particleHue: 245,
          particleSecondaryHue: 270,
        },
        audioTrack: {
          "id": "shani-chalisa",
          "title": "Shri Shani Chalisa (जय जय श्री शनिदेव प्रभु)",
          "category": "Chalisa",
          "categoryHi": "चालीसा",
          "artist": "40 Chaupais",
          "duration": "8:15",
          "src": "/assets/audio/shani.mp3"
},
        audioTracks: [
          {
                    "id": "shani-chalisa",
                    "title": "Shri Shani Chalisa (जय जय श्री शनिदेव प्रभु)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "40 Chaupais",
                    "duration": "8:15",
                    "src": "/assets/audio/shani.mp3"
          },
          {
                    "id": "shani-aarti",
                    "title": "Shri Shani Aarti (जय जय श्री शनिदेव भक्तन हितकारी)",
                    "category": "Aarti",
                    "categoryHi": "आरती",
                    "artist": "Traditional Shani Aarti",
                    "duration": "4:40",
                    "src": "/assets/audio/shani.mp3"
          },
          {
                    "id": "shani-mahamantra",
                    "title": "Shani Mahamantra & Beej Mantra (ॐ शं शनैश्चराय नमः)",
                    "category": "Mantra",
                    "categoryHi": "मन्त्र",
                    "artist": "Protective Planetary Japa",
                    "duration": "6:30",
                    "src": "/assets/audio/shani.mp3"
          },
          {
                    "id": "dasharatha-shani",
                    "title": "Dasharatha Krit Shani Stotram (कोणस्थः पिंगलो बभ्रुः)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "King Dasharatha Hymn",
                    "duration": "6:15",
                    "src": "/assets/audio/shani.mp3"
          },
          {
                    "id": "shani-gayatri",
                    "title": "Shani Gayatri Mantra (ॐ भगभवाय विद्महे)",
                    "category": "Mantra",
                    "categoryHi": "मन्त्र",
                    "artist": "Vedic Planetary Chants",
                    "duration": "5:10",
                    "src": "/assets/audio/shani.mp3"
          },
          {
          "id": "shani-vajrapanjara",
          "title": "Shani Vajrapanjara Kavacham (शनि वज्रपञ्जर कवचम्)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Brahmanda Purana Hymns",
          "duration": "6:15",
          "src": "/assets/audio/shani.mp3"
},
          {
          "id": "shani-stuti",
          "title": "Pippalada Shani Stuti (पिप्पलाद कृत शनि स्तुति)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Sage Pippalada Chants",
          "duration": "5:30",
          "src": "/assets/audio/shani.mp3"
}
],
        sacredQuote: {
          sanskrit: 'नीलांजन समाभासं रविपुत्रं यमाग्रजम्। छायामार्तण्ड सम्भूतं तं नमामि शनैश्चरम्॥',
          english: 'Resplendent like blue collyrium, son of the Sun, elder brother of Yama, born of Chhaya and Martanda, I bow before Lord Shani.',
        },
        prayers: [
          {
            id: 'shani-chalisa',
            title: 'श्री शनि चालीसा (Shri Shani Chalisa)',
            titleEn: 'Forty Hymns of Praise to Lord Shani Dev',
            sections: [
              {
                title: 'दोहा',
                titleEn: 'Opening Doha',
                verses: [
                  {
                    num: 1,
                    hindi: 'जय गणेश गिरिजा सुवन, मंगल करण कृपाल। दीनन के दुःख दूर करि, कीजै नाथ निहाल॥',
                    translit: 'Jai Ganesh Girijā suvan, mangal karan kripāl | Dīnan ke dukha dūr kari, kījai nāth nihāl ||',
                    meaning: 'Victory to Ganesha, son of Parvati, merciful creator of auspiciousness; remove the afflictions of the humble and bless us.',
                  },
                ],
              },
              {
                title: 'चौपाई',
                titleEn: 'Sacred Chaupais',
                verses: [
                  {
                    num: 1,
                    hindi: 'जय जय श्री शनिदेव प्रभु, सुनहु विनय महाराज। करहु कृपा हे रवि तनय, राखहु जन की लाज॥',
                    translit: 'Jai jai shrī Shani-dev prabhu, sunahu vinay mahārāj | Karahu kripā he ravi tanay, rākhahu jan kī lāj ||',
                    meaning: 'Glory to Lord Shani Dev, hear our humble prayer, O king of righteousness; shower grace O son of the Sun and protect your devotees honour.',
                  },
                  {
                    num: 2,
                    hindi: 'जयति जयति शनिदेव दयाला। करत सदा भक्तन प्रतिपाला॥',
                    translit: 'Jayati jayati Shani-dev dayālā | Karat sadā bhaktan pratipālā ||',
                    meaning: 'Victory, all victory to merciful Shani Dev, who constantly protects and safeguards his surrender devotees.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'hanuman-shani',
        name: 'श्री हनुमान जी (शनि पीड़ा हरण)',
        nameEn: 'Lord Hanuman (Dispeller of Shani Afflictions)',
        subtitle: 'शनि कृपा प्रदाता एवं परम रक्षक',
        subtitleEn: 'Beloved Protector whose worship pleases Lord Shani Dev',
        dayName: 'शनिवार',
        dayNameEn: 'Saturday',
        avatar: '/assets/images/avatar.jpg',
        bgImage: '/assets/images/background.jpg',
        theme: {
          primaryColor: '#f97316',
          secondaryColor: '#4338ca',
          glowColor: 'rgba(249, 115, 22, 0.45)',
          particleHue: 25,
          particleSecondaryHue: 240,
        },
        audioTrack: {
          "id": "hanuman-chalisa-sat",
          "title": "Shree Hanuman Chalisa (शनि पीड़ा हरण सम्पूर्ण पाठ)",
          "category": "Chalisa",
          "categoryHi": "चालीसा",
          "artist": "Hariharan • Gulshan Kumar",
          "duration": "9:41",
          "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
},
        audioTracks: [
          {
                    "id": "hanuman-chalisa-sat",
                    "title": "Shree Hanuman Chalisa (शनि पीड़ा हरण सम्पूर्ण पाठ)",
                    "category": "Chalisa",
                    "categoryHi": "चालीसा",
                    "artist": "Hariharan • Gulshan Kumar",
                    "duration": "9:41",
                    "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
          },
          {
                    "id": "bajrang-baan-sat",
                    "title": "Shri Bajrang Baan (संकट निवारण बजरंग बाण)",
                    "category": "Bhajan",
                    "categoryHi": "भजन",
                    "artist": "Devotional Choirs",
                    "duration": "6:15",
                    "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
          },
          {
                    "id": "sankat-mochan-sat",
                    "title": "Sankat Mochan Hanumanashtak (संकट मोचन हनुमानाष्टक)",
                    "category": "Shloka",
                    "categoryHi": "स्तोत्रम्",
                    "artist": "Hariharan • Tulsidas",
                    "duration": "5:22",
                    "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
          },
          {
                    "id": "maruti-stotra-sat",
                    "title": "Maruti Stotra (भीमरूपी महारुद्रा मारुती)",
                    "category": "Shloka",
                    "categoryHi": "श्लोक",
                    "artist": "Samarth Ramdas",
                    "duration": "3:50",
                    "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
          },
          {
          "id": "hanuman-chalisa-shani",
          "title": "Hanuman Chalisa (शनि दोष निवारण पाठ)",
          "category": "Chalisa",
          "categoryHi": "चालीसा",
          "artist": "Traditional Temple Recitation",
          "duration": "9:41",
          "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
},
          {
          "id": "maruti-stotra-shani",
          "title": "Maruti Stotra (भीमरूपी महारुद्रा)",
          "category": "Shloka",
          "categoryHi": "स्तोत्रम्",
          "artist": "Samarth Ramdas Vani",
          "duration": "4:18",
          "src": "/assets/audio/hanuman-chalisa-hariharan.mp3"
}
],
        sacredQuote: {
          sanskrit: 'भूत पिशाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥',
          english: 'No negative forces or suffering can approach one who chants the sacred name of Mahaveer Hanuman.',
        },
        prayers: [
          {
            id: 'hanuman-chalisa-sat',
            title: 'सम्पूर्ण श्री हनुमान चालीसा',
            titleEn: 'Shree Hanuman Chalisa (Shani Peeda Nivaran)',
            composer: 'गोस्वामी तुलसीदास जी',
            sections: [
              {
                title: 'चौपाई',
                titleEn: 'Chaupais of Protection',
                verses: [
                  {
                    num: 1,
                    hindi: 'नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥',
                    translit: 'Nāsai rog harai sab pīrā | Japat nirantar hanumat bīrā ||',
                    meaning: 'All illnesses vanish and all sufferings are eradicated for those who constantly chant the valiant name of Hanuman.',
                  },
                  {
                    num: 2,
                    hindi: 'संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥',
                    translit: 'Sankat te hanumān chhudāvai | Man kram bachan dhyān jo lāvai ||',
                    meaning: 'Hanuman delivers from all predicaments whoever meditates upon Him in thought, deed, and word.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getTodaySchedule(): DaySchedule {
  const dayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, ...
  return DAILY_SCHEDULE.find((s) => s.dayIndex === dayIndex) || DAILY_SCHEDULE[0];
}
