export interface PersonalInfo {
  name: string;
  avatarUrl: string;
  studentId: string;
  major: string;
  classCode: string;
  university: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  phone: string;
  bio: string;
}

export interface LearningGoal {
  id: string;
  title: string;
  type: 'short' | 'long';
  description: string;
  targetDate: string;
  completed: boolean;
}

export interface PortfolioGoal {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  course: string;
  description: string;
  techTags: string[];
  githubUrl: string;
  demoUrl: string;
  timeString: string;
}

export interface Reflection {
  id: string;
  title: string;
  date: string;
  content: string;
  category: 'technical' | 'softskill' | 'general' | 'obstacle';
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  learningGoals: LearningGoal[];
  portfolioGoals: PortfolioGoal[];
  projects: Project[];
  reflections?: Reflection[];
}

export type ThemeId = 'uet-classic' | 'modern-dark' | 'cyber-emerald' | 'warm-editorial';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  cssVariables: {
    primary: string;
    primaryHover: string;
    background: string;
    card: string;
    text: string;
    textMuted: string;
    border: string;
    ring: string;
    badge: string;
    accentBar: string;
  };
  fontSans: string;
  fontMono: string;
}
