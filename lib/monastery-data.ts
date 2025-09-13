export interface Monastery {
  id: string
  name: string
  location: string
  established: number
  order: string
  founder: string
  description: string
  significance: string
  features: string[]
  virtualTourUrl?: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface HistoricalEvent {
  year: number
  title: string
  description: string
  monastery?: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  type: "festival" | "ceremony" | "teaching" | "pilgrimage"
}

// Main monasteries data based on official sources
export const monasteries: Monastery[] = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    established: 1734,
    order: "Karma Kagyu",
    founder: "9th Karmapa Wangchuk Dorje",
    description:
      "The Dharmachakra Centre, seat of the 17th Gyalwa Karmapa, rebuilt in traditional Tibetan style after 1959.",
    significance:
      "Most significant monastery of the Karma Kagyu lineage outside Tibet, housing precious relics and artifacts.",
    features: [
      "Golden Stupa with 16th Karmapa relics",
      "Traditional Tibetan architecture",
      "Monastery school and library",
      "Sacred ritual objects and thangkas",
      "Meditation halls and prayer wheels",
    ],
    virtualTourUrl: "/tours/rumtek",
    coordinates: { lat: 27.3389, lng: 88.5277 },
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    established: 1647,
    order: "Nyingma",
    founder: "Lama Lhatsun Chempo",
    description:
      'The "Perfect Sublime Lotus" monastery, one of the oldest and most important Nyingma monasteries in Sikkim.',
    significance:
      "Played crucial role in consecrating Sikkim's first monarch and establishing the kingdom's spiritual foundation.",
    features: [
      "Three-story structure with intricate woodwork",
      "Ancient manuscripts and scriptures",
      "Statue of Guru Padmasambhava",
      "Traditional Sikkimese architecture",
      "Panoramic Himalayan views",
    ],
    virtualTourUrl: "/tours/pemayangtse",
    coordinates: { lat: 27.3167, lng: 88.2167 },
  },
  {
    id: "dubdi",
    name: "Dubdi Monastery",
    location: "Yuksom, West Sikkim",
    established: 1701,
    order: "Nyingma",
    founder: "Lhatsun Namkha Jigme",
    description:
      'The oldest monastery in Sikkim, also known as the "Hermit\'s Cell", marking the birthplace of Sikkim as a kingdom.',
    significance:
      "Historic site where the first King of Sikkim was crowned in 1642, cornerstone of Sikkim's Buddhist heritage.",
    features: [
      "Original meditation caves",
      "Ancient prayer flags and wheels",
      "Historic coronation site nearby",
      "Traditional Nyingma artifacts",
      "Peaceful forest setting",
    ],
    virtualTourUrl: "/tours/dubdi",
    coordinates: { lat: 27.3667, lng: 88.2167 },
  },
  {
    id: "enchey",
    name: "Enchey Monastery",
    location: "Gangtok, East Sikkim",
    established: 1909,
    order: "Nyingma",
    founder: "Lama Drupthob Karpo (blessed site)",
    description:
      'The "Solitary Temple" built above Gangtok, resembling a Chinese Pagoda with unique architectural style.',
    significance:
      "Sacred site blessed by protective deities Khangchendzonga and Yabdean, where Guru Padmasambhava subdued spirits.",
    features: [
      "Chinese Pagoda-style architecture",
      "Annual Cham dance festival",
      "Sacred protective deity shrines",
      "City views from hilltop location",
      "Traditional butter sculptures",
    ],
    virtualTourUrl: "/tours/enchey",
    coordinates: { lat: 27.3389, lng: 88.6139 },
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    location: "Tashiding, West Sikkim",
    established: 1715,
    order: "Nyingma",
    founder: "Built during Chador Namgyal reign",
    description: 'The "Devoted Central Glory" monastery, part of the sacred pilgrimage circuit of West Sikkim.',
    significance:
      "Important pilgrimage site with sacred Bumchu ceremony, believed to predict the coming year's fortune.",
    features: [
      "Sacred Bumchu water vessel ceremony",
      "Hilltop location with valley views",
      "Ancient chortens and prayer flags",
      "Pilgrimage circuit connection",
      "Traditional festival celebrations",
    ],
    virtualTourUrl: "/tours/tashiding",
    coordinates: { lat: 27.35, lng: 88.2833 },
  },
]

// Historical timeline of Sikkim Buddhism
export const historicalEvents: HistoricalEvent[] = [
  {
    year: 1642,
    title: "Kingdom of Sikkim Founded",
    description:
      "Phuntsog Namgyal crowned as first Chogyal (King) of Sikkim at Norbugang, Yuksom by three lamas including Lhatsun Namkha Jigme.",
  },
  {
    year: 1647,
    title: "Pemayangtse Founded",
    description:
      "Lama Lhatsun Chempo establishes Pemayangtse Monastery, creating the spiritual foundation of the new kingdom.",
    monastery: "Pemayangtse",
  },
  {
    year: 1701,
    title: "Dubdi Monastery Established",
    description:
      "The oldest monastery in Sikkim is founded by Lhatsun Namkha Jigme, marking the beginning of organized Buddhism.",
    monastery: "Dubdi",
  },
  {
    year: 1705,
    title: "Pemayangtse Enlarged",
    description: "Third Chogyal Chakdor Namgyal and Khenchen Rolpai Dorjee expand Pemayangtse Monastery.",
    monastery: "Pemayangtse",
  },
  {
    year: 1710,
    title: "Pemayangtse Consecrated",
    description: "Third Lhatsun Chenpo Dzogchen Jigme Pawo consecrates the enlarged Pemayangtse Monastery.",
    monastery: "Pemayangtse",
  },
  {
    year: 1715,
    title: "Tashiding Built",
    description: "Guru Lhakhang Tashiding monastery constructed during the reign of Chador Namgyal.",
    monastery: "Tashiding",
  },
  {
    year: 1734,
    title: "Original Rumtek Founded",
    description: "9th Karmapa Wangchuk Dorje establishes the original Rumtek Monastery.",
    monastery: "Rumtek",
  },
  {
    year: 1909,
    title: "Enchey Monastery Built",
    description: "Current structure of Enchey Monastery built in Chinese Pagoda style above Gangtok.",
    monastery: "Enchey",
  },
  {
    year: 1959,
    title: "Rumtek Becomes Karmapa Seat",
    description: "16th Gyalwa Karmapa chooses Rumtek as his seat in exile, beginning reconstruction.",
    monastery: "Rumtek",
  },
  {
    year: 1966,
    title: "New Rumtek Inaugurated",
    description: 'The rebuilt Rumtek Monastery, "The Dharmachakra Centre," is officially inaugurated.',
    monastery: "Rumtek",
  },
]

// Upcoming events and festivals
export const upcomingEvents: Event[] = [
  {
    id: "losar-2025",
    title: "Event i used Ai",
    date: "2025-02-29",
    time: "06:00 AM",
    location: "All Monasteries",
    description:
      "Ai",
    type: "festival",
  },
  {
    id: "losar-2025",
    title: "Tibetan New Year (Losar)",
    date: "2025-02-29",
    time: "06:00 AM",
    location: "All Monasteries",
    description:
      "Traditional Tibetan New Year celebrations with special prayers, butter sculptures, and community gatherings.",
    type: "festival",
  },
  {
    id: "bumchu-2025",
    title: "Sacred Bumchu Ceremony",
    date: "2025-03-15",
    time: "05:00 AM",
    location: "Tashiding Monastery",
    description: "Annual sacred water vessel ceremony that predicts the coming year's fortune for Sikkim.",
    type: "ceremony",
  },
  {
    id: "enchey-cham",
    title: "Enchey Cham Dance Festival",
    date: "2025-01-18",
    time: "09:00 AM",
    location: "Enchey Monastery",
    description: "Traditional masked dance performances depicting the victory of good over evil.",
    type: "festival",
  },
  {
    id: "meditation-retreat",
    title: "Winter Meditation Retreat",
    date: "2025-01-20",
    time: "06:00 AM",
    location: "Dubdi Monastery",
    description: "7-day silent meditation retreat in the peaceful hermitage setting of Sikkim's oldest monastery.",
    type: "teaching",
  },
  {
    id: "pilgrimage-circuit",
    title: "West Sikkim Pilgrimage Circuit",
    date: "2025-02-10",
    time: "07:00 AM",
    location: "Pemayangtse to Tashiding",
    description: "Guided pilgrimage covering Pemayangtse, Dubdi, and Tashiding monasteries over 3 days.",
    type: "pilgrimage",
  },
  {
    id: "dharma-teaching",
    title: "Dharma Teaching Series",
    date: "2025-01-25",
    time: "02:00 PM",
    location: "Rumtek Monastery",
    description: "Weekly teachings on Buddhist philosophy and meditation practices by senior monks.",
    type: "teaching",
  },
]

// Contact information for monasteries
export const contactInfo = {
  visitingHours: {
    general: "6:00 AM - 6:00 PM",
    prayerTimes: "6:00 AM, 12:00 PM, 6:00 PM",
  },
  guidelines: [
    "Dress modestly and remove shoes before entering prayer halls",
    "Maintain silence in meditation areas",
    "Photography may be restricted in certain areas",
    "Donations are welcome but not mandatory",
    "Respect ongoing prayers and ceremonies",
  ],
  contact: {
    phone: "+91-3592-202-XXX",
    email: "info@sikkimmonasteries.org",
    address: "Sikkim Buddhist Monastery Circuit, Sikkim, India",
  },
}
