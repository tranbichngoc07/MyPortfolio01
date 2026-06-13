import { PortfolioData, ThemeOption } from './types';
import { DEFAULT_PORTFOLIO_DATA } from './defaultData';

export const THEME_OPTIONS: Record<string, ThemeOption> = {
  'uet-classic': {
    id: 'uet-classic',
    name: 'UET Classic (Xanh Dương Truyền Thống)',
    cssVariables: {
      primary: 'bg-indigo-600 text-white border-indigo-600',
      primaryHover: 'hover:bg-indigo-700',
      background: 'bg-slate-50 text-slate-900',
      card: 'bg-white border-slate-200 shadow-sm hover:shadow-md transition-all duration-200',
      text: 'text-slate-805',
      textMuted: 'text-slate-500',
      border: 'border-slate-200',
      ring: 'ring-indigo-500',
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      accentBar: 'bg-indigo-600',
    },
    fontSans: 'font-sans',
    fontMono: 'font-mono'
  },
  'modern-dark': {
    id: 'modern-dark',
    name: 'Modern Dark (Chế độ tối hiện đại)',
    cssVariables: {
      primary: 'bg-violet-600 text-white border-violet-600',
      primaryHover: 'hover:bg-violet-500',
      background: 'bg-[#0f172a] text-slate-100',
      card: 'bg-[#1e293b] border-slate-800/80 hover:border-slate-700/80 shadow-lg hover:shadow-xl transition-all duration-200',
      text: 'text-slate-200',
      textMuted: 'text-slate-400',
      border: 'border-slate-800',
      ring: 'ring-violet-500',
      badge: 'bg-violet-950/60 text-violet-300 border-violet-900/50',
      accentBar: 'bg-violet-500',
    },
    fontSans: 'font-sans',
    fontMono: 'font-mono'
  },
  'cyber-emerald': {
    id: 'cyber-emerald',
    name: 'Cyber Terminal (Công nghệ vị lai)',
    cssVariables: {
      primary: 'bg-emerald-550 text-black border-emerald-500 font-bold',
      primaryHover: 'hover:bg-emerald-400',
      background: 'bg-[#050b07] text-[#e0f2fe]',
      card: 'bg-[#0c150e] border-[#162e1c] hover:border-emerald-800 shadow-[0_0_12px_rgba(16,185,129,0.05)] transition-all duration-200',
      text: 'text-[#cae8d5]',
      textMuted: 'text-[#7da087]',
      border: 'border-[#12281a]',
      ring: 'ring-emerald-500',
      badge: 'bg-[#0a2312] text-emerald-400 border-emerald-950',
      accentBar: 'bg-emerald-500',
    },
    fontSans: 'font-mono',
    fontMono: 'font-mono'
  },
  'warm-editorial': {
    id: 'warm-editorial',
    name: 'Teal Academic (Trang trọng học thuật)',
    cssVariables: {
      primary: 'bg-teal-700 text-white border-teal-700',
      primaryHover: 'hover:bg-teal-800',
      background: 'bg-[#faf8f5] text-[#2c3e35]',
      card: 'bg-white border-teal-900/10 shadow-sm hover:shadow-md transition-all duration-200',
      text: 'text-[#24332c]',
      textMuted: 'text-[#5d7368]',
      border: 'border-[#dfdeda]',
      ring: 'ring-teal-700',
      badge: 'bg-[#f0f4f2] text-teal-800 border-teal-900/5',
      accentBar: 'bg-teal-700',
    },
    fontSans: 'font-sans',
    fontMono: 'font-mono'
  }
};

export { DEFAULT_PORTFOLIO_DATA };

const LOCAL_STORAGE_KEY = 'uet_is_portfolio_data';
const THEME_STORAGE_KEY = 'uet_is_portfolio_theme';

export function getPortfolioData(): PortfolioData {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure key sections exist
      if (parsed.personalInfo && parsed.learningGoals && parsed.portfolioGoals && parsed.projects) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading portfolio data from localStorage', e);
  }
  return DEFAULT_PORTFOLIO_DATA;
}

export function savePortfolioData(data: PortfolioData): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving portfolio data to localStorage', e);
  }
}

export function getThemePreference(): string {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved && THEME_OPTIONS[saved]) {
      return saved;
    }
  } catch (e) {}
  return 'uet-classic';
}

export function saveThemePreference(themeId: string): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch (e) {}
}

export function resetPortfolioData(): PortfolioData {
  savePortfolioData(DEFAULT_PORTFOLIO_DATA);
  return DEFAULT_PORTFOLIO_DATA;
}
