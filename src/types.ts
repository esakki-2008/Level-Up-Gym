export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  benefits: string[];
  recommendedFor: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  experience: string;
  image: string;
  bio: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Equipment' | 'Amenity' | 'Floor';
  description: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  theme: string;
  comment: string;
  memberType: string;
}

export interface OpeningHour {
  day: string;
  timing: string;
  isOpen: boolean;
}
