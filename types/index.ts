export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  matchRate: number;
  matchType: string;
  time: string;
  location: string;
  category: string;
}

export interface MoodRecord {
  id: string;
  mood: string;
  intensity: number;
  company: string;
  note: string;
  createdAt: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  bio: string;
  energy: number;
  streak: number;
}

export interface MoodOption {
  key: string;
  label: string;
  emoji: string;
}

export interface CompanyOption {
  key: string;
  label: string;
}

export interface CategoryOption {
  key: string;
  label: string;
}

export interface PreferenceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  textColor: string;
}

export interface WeeklyMood {
  day: string;
  mood: string;
  level: string;
}
