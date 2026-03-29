// ╔══════════════════════════════════════════════════════════════╗
// ║                    CONFIGURATION FILE                       ║
// ║                                                              ║
// ║  Edit this file to personalise your love story website.      ║
// ║  Everything you need to change is right here — no need to    ║
// ║  touch any other files.                                      ║
// ╚══════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ──────────────────────────────────────────────
  // NAMES & DATE
  // ──────────────────────────────────────────────
  // Change these to your names and the date your relationship began.
  // The date format is: "YYYY-MM-DD" (year-month-day)
  partner1: "AJ",
  partner2: "Lily",
  startDate: "2026-01-28",

  // ──────────────────────────────────────────────
  // LOVE LETTER (bottom of the page)
  // ──────────────────────────────────────────────
  // Customise the letter at the bottom of the site.
  letter: {
    salutation: "To my Lily,",
    // Each string in this array becomes its own paragraph:
    body: [
      "Every day with you feels like a gift I never knew I needed. You are the first thought that greets me each morning and the last smile I carry into sleep.",
      "This little corner of the internet is my way of holding onto every laugh, every quiet moment, every adventure we've shared — so that years from now, we can look back and remember exactly how it felt.",
      "Thank you for choosing me. Thank you for being you.",
    ],
    closing: "Your grateful bf,",
    signature: "AJ",
  },

  // ──────────────────────────────────────────────
  // TIMELINE ENTRIES
  // ──────────────────────────────────────────────
  // Each entry appears as a card on the scrolling timeline.
  //
  // Fields:
  //   date    – Display date (any format you like)
  //   title   – Heading for the card
  //   text    – A short description / memory
  //   photo   – Path to an image file (e.g. "photos/first_date.jpg")
  //             Leave as null to show a placeholder.
  //
  // To add a new entry, just copy one of the objects below and
  // fill in your details. They will appear in the order listed.
  //
  timeline: [
    {
      date: "November 2023",
      title: "The Day We Met",
      text: "I still remember Talei sending a picture of you before Flynn's party and although technically we met at the library, I don't count it. I still remember how beautiful you were and fun to be around, a shot of espresso.",
      photo: "photos/the_day_we_met.jpg",
    },
    {
      date: "April 2025",
      title: "The Time You Came Back",
      text: "I still remember asking you to go donate blood with me. I had an amazing time, but moreover it was just nice to have you back in my life properly.",
      photo: "photos/came_back.jpg", 
    },
    {
      date: "April 2025",
      title: "Tough Talk",
      text: "We went out for a drive, I bought you Lesquisha and took a crazy photo. You set your boundaries, but I wasn't ready to give up on you yet.",
      photo: "photos/lesquisha.jpg", 
    },
    {
      date: "July 2025",
      title: "First Camping Trip",
      text: "I had the best time getting to go camping with you. I still to this day remember how you told everyone to shut up just so I could speak and not feel left out. That was when I really knew I couldn't give up on you.",
      photo: "photos/camping.jpg", 
    },
    {
      date: "October 2025",
      title: "Harrison Halloween",
      text: "A Harrison Halloween is always a blast. You looked amazing in your pink corset outfit, I was gobsmacked.",
      photo: "photos/halloween.jpg",
    },
    {
      date: "November 2025",
      title: "2XU Half Marathon",
      text: "Our half marathon. It felt amazing running by your side, achieving something not a lot of people do. It was a surreal experience.",
      photo: "photos/marathon.jpg", 
    },
    {
      date: "December 2025",
      title: "AJ's 21st",
      text: "I remember begging you to dress up as Robin Sherbatsky and I was Barney Stinson. It was like my biggest dream, and you did it. It was monumental and I loved it.",
      photo: "photos/aj_21st.jpg", 
    },
    {
      date: "January 2025",
      title: "Eden Trip",
      text: "Things had started amping up here, we started properly seeing each other and I couldn't be happier. Especially considering we got to spend multiple nights together. Plus all the sneaking around made it that much more fun.",
      photo: "photos/eden.jpg", 
    },
    {
      date: "January 2025",
      title: "When You Became My Girlfriend",
      text: "I remember I spent ages thinking about how I should do it after us talking about it and before I left for Thailand. I wanted to make it special and unique because that's what you deserved.",
      photo: "photos/fortune_cookie.jpg",
    },
  ],

  // ──────────────────────────────────────────────
  // MAP PINS (Memory Map)
  // ──────────────────────────────────────────────
  // Each pin is placed on the interactive map.
  //
  // Fields:
  //   lat, lng    – Latitude and longitude of the location
  //                 (use Google Maps to find coordinates)
  //   location    – Name of the place
  //   date        – When this memory happened
  //   description – A short memory / story
  //   photo       – Path to an image file, or null for placeholder
  //
  mapPins: [
    {
      lat: 48.8566,
      lng: 2.3522,
      location: "Paris, France",
      date: "June 2023",
      description: "Walking along the Seine at dusk, the city of love welcoming us with open arms.",
      photo: null, // PHOTO: Replace null with "photos/paris.jpg"
    },
    {
      lat: -33.8688,
      lng: 151.2093,
      location: "Sydney, Australia",
      date: "November 2023",
      description: "Watching the sunset paint the Opera House in gold. You squeezed my hand and whispered 'I'm so happy.'",
      photo: null, // PHOTO: Replace null with "photos/sydney.jpg"
    },
    {
      lat: 35.6762,
      lng: 139.6503,
      location: "Tokyo, Japan",
      date: "April 2024",
      description: "Cherry blossoms falling like confetti as we wandered through the gardens. Pure magic.",
      photo: null, // PHOTO: Replace null with "photos/tokyo.jpg"
    },
    {
      lat: 41.9028,
      lng: 12.4964,
      location: "Rome, Italy",
      date: "August 2024",
      description: "Tossing a coin into the Trevi Fountain and wishing for forever with you.",
      photo: null, // PHOTO: Replace null with "photos/rome.jpg"
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      location: "London, England",
      date: "February 2025",
      description: "Rainy streets, cozy pubs, your laughter echoing through the cobblestone lanes.",
      photo: null, // PHOTO: Replace null with "photos/london.jpg"
    },
  ],

  // ──────────────────────────────────────────────
  // MAP SETTINGS
  // ──────────────────────────────────────────────
  // Default center and zoom for the map when first loaded.
  mapCenter: [30, 10],
  mapZoom: 2,
};
