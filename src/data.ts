import { Program, Trainer, Facility, Review, OpeningHour } from './types';

export const GYM_INFO = {
  name: "Level Up Gym",
  tagline: "Train. Improve. Level Up.",
  address: "Ground Floor, Samruddhi Building, beside Renuka Mata Mandir, Pandurangwadi, SBI Colony, Dombivli East, Kalyan, Maharashtra 421201, India",
  phone: "089766 45170",
  phoneClean: "+918976645170",
  location: "Dombivli East, Maharashtra",
  mapsQuery: "Level+Up+Gym+Pandurangwadi+Dombivli+East+Maharashtra",
  googleMapsUrl: "https://maps.google.com/?q=Ground+Floor+Samruddhi+Building+Pandurangwadi+Dombivli+East+Maharashtra+421201",
  languages: ["Hindi", "English"],
  amenities: [
    "Air Conditioning",
    "Modern Fitness Equipment",
    "Lockers",
    "Parking",
    "Showers",
    "Wi-Fi",
    "Drinking Water"
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    tagline: "Build muscle and power",
    description: "Build muscle, improve strength, and develop better physical performance with heavy weights, free weights, and power racks.",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    benefits: ["Hypertrophy & muscle toning", "Increased bone density", "Enhanced metabolic rate", "Compound lift guidance"],
    recommendedFor: "Intermediate & Advanced lifters seeking serious progress."
  },
  {
    id: "weight-training",
    title: "Weight Training",
    tagline: "Structured body sculpting",
    description: "Structured workouts for beginners and experienced members focusing on form, progressive overload, and balanced muscle development.",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    benefits: ["Correct form & posture", "Customized split routines", "Fat loss & muscle gain", "Injury prevention"],
    recommendedFor: "All fitness levels looking for aesthetic and strength gains."
  },
  {
    id: "cardio-fitness",
    title: "Cardio Fitness",
    tagline: "Endurance & heart health",
    description: "Improve stamina, endurance, and cardiovascular fitness using state-of-the-art treadmills, ellipticals, and stationary bikes.",
    iconName: "HeartPulse",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    benefits: ["Improved heart health", "Stamina & lung capacity", "Effective calorie burning", "Post-workout recovery boost"],
    recommendedFor: "Anyone looking to burn fat and boost daily energy levels."
  },
  {
    id: "beginner-program",
    title: "Beginner Program",
    tagline: "Your confident first step",
    description: "A simple starting point for people new to gym training. Get comfortable with equipment, movements, and basic fitness habits.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    benefits: ["Zero intimidation environment", "Step-by-step guidance", "Foundational movement mastery", "Introductory diet tips"],
    recommendedFor: "Absolute beginners starting their fitness journey in Dombivli."
  },
  {
    id: "personal-training",
    title: "Personal Training",
    tagline: "1-on-1 dedicated coaching",
    description: "Personalized guidance based on individual fitness goals with customized workout regimes, nutritional advice, and constant motivation.",
    iconName: "UserCheck",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    benefits: ["100% customized attention", "Faster goal achievement", "Diet & supplement advice", "Accountability & progress tracking"],
    recommendedFor: "Members with specific goals (fat loss, bodybuilding, rehab)."
  },
  {
    id: "general-fitness",
    title: "General Fitness & Guidance",
    tagline: "Stay healthy and active",
    description: "Comprehensive fitness guidance designed for overall well-being, flexibility, daily energy, and sustainable healthy living.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
    benefits: ["Overall vitality & health", "Stress relief", "Mobility & flexibility", "Daily habit coaching"],
    recommendedFor: "Busy professionals and students in Dombivli East."
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "trainer-1",
    name: "Rahul Sharma",
    role: "Head Strength Coach",
    specialties: ["Strength & Conditioning", "Hypertrophy", "Powerlifting"],
    experience: "7+ Years Experience",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
    bio: "Certified fitness professional specializing in heavy compound lifts, safe form correction, and aggressive muscle building transformations."
  },
  {
    id: "trainer-2",
    name: "Pooja Patil",
    role: "Personal Trainer & Fat Loss Specialist",
    specialties: ["Weight Training", "Functional Training", "Fat Loss"],
    experience: "5+ Years Experience",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
    bio: "Passionate about empowering women and beginners to overcome gym intimidation, tone muscle, and achieve sustainable fat loss."
  },
  {
    id: "trainer-3",
    name: "Amit Deshmukh",
    role: "General Fitness & Beginner Trainer",
    specialties: ["Beginner Guidance", "Cardio Conditioning", "Mobility"],
    experience: "4+ Years Experience",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Expert in introducing newcomers to fitness with patience, structured routines, and energetic daily motivation."
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "fac-1",
    title: "Strength Equipment",
    category: "Equipment",
    description: "Heavy-duty power racks, Olympic barbells, plate-loaded machines, and dumbbells up to 50kg.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-2",
    title: "Cardio Zone",
    category: "Equipment",
    description: "Commercial treadmills, stationary bikes, and ellipticals for endurance training.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-3",
    title: "Spacious Workout Floor",
    category: "Floor",
    description: "Clean, well-ventilated rubber flooring optimized for functional training and core work.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-4",
    title: "Air-Conditioned Environment",
    category: "Amenity",
    description: "Powerful cooling systems ensuring a comfortable workout climate throughout the year.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-5",
    title: "Lockers & Changing Rooms",
    category: "Amenity",
    description: "Secure individual lockers to keep your belongings safe while you train.",
    image: "https://images.unsplash.com/photo-1590486849292-1c21043a3d5e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-6",
    title: "Clean Showers & Hygiene",
    category: "Amenity",
    description: "Well-maintained washrooms and shower facilities for post-workout freshness.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-7",
    title: "Parking Space",
    category: "Amenity",
    description: "Convenient parking area right outside Samruddhi Building for bikes and cars.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac-8",
    title: "Drinking Water Station",
    category: "Amenity",
    description: "Purified cold drinking water available to keep you hydrated during intense sets.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Siddhesh Kulkarni",
    rating: 5,
    date: "2 weeks ago",
    theme: "Professional trainers",
    memberType: "Regular Member (1 Year)",
    comment: "Level Up Gym is the best gym in Dombivli East! Rahul sir and the team are extremely knowledgeable. The equipment is top-notch and always clean."
  },
  {
    id: "rev-2",
    author: "Sneha Mhatre",
    rating: 5,
    date: "1 month ago",
    theme: "Clean gym & friendly environment",
    memberType: "Beginner Member",
    comment: "As a beginner, I was nervous about joining a gym. The trainers here are so helpful and supportive. Great AC environment and clean washrooms!"
  },
  {
    id: "rev-3",
    author: "Vighnesh Gupta",
    rating: 5,
    date: "3 weeks ago",
    theme: "Good equipment & affordable pricing",
    memberType: "Strength Trainer",
    comment: "Awesome heavy dumbbells, squat racks, and cardio machines. Very reasonable membership plans with no hidden fees. Highly recommend!"
  },
  {
    id: "rev-4",
    author: "Akshay Joshi",
    rating: 5,
    date: "2 months ago",
    theme: "Helpful trainers",
    memberType: "Personal Training Client",
    comment: "The personal attention I received helped me gain 4kg of muscle in 3 months. Location near Renuka Mata Mandir is super convenient."
  }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: "Monday", timing: "5:30 AM – 10:30 PM", isOpen: true },
  { day: "Tuesday", timing: "5:30 AM – 10:30 PM", isOpen: true },
  { day: "Wednesday", timing: "5:30 AM – 10:30 PM", isOpen: true },
  { day: "Thursday", timing: "5:30 AM – 10:30 PM", isOpen: true },
  { day: "Friday", timing: "5:30 AM – 10:30 PM", isOpen: true },
  { day: "Saturday", timing: "5:30 AM – 10:30 PM", isOpen: true },
  { day: "Sunday", timing: "6:00 AM – 12:00 PM", isOpen: true }
];

// Export aliases for convenience
export const PROGRAM_DATA = PROGRAMS;
export const TRAINERS_DATA = TRAINERS;
export const FACILITIES_DATA = FACILITIES;
export const REVIEWS_DATA = REVIEWS;

