import { PortfolioData, ThemeOption } from './types';

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

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  personalInfo: {
    name: 'Trần Bích Ngọc',
    avatarUrl: '', // Will fall back to initials if empty
    studentId: '25021234',
    major: 'Hệ thống Thông tin (Information Systems)',
    classCode: 'K70-HTT',
    university: 'Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)',
    email: 'tranbichngoc855@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/tranbichngoc-uet',
    githubUrl: 'https://github.com/bichngoc-uet',
    phone: '0987.654.321',
    bio: 'Chào mọi người! Mình là sinh viên năm nhất chuyên ngành Hệ thống Thông tin tại Trường Đại học Công nghệ (UET) - ĐHQGHN. Bản thân là một người luôn hứng thú trước khả năng khai mở của dữ liệu và hệ thống thông tin quản lý đối với sự vận hành của doanh nghiệp. Mình đang tích cực học tập ngôn ngữ lập trình cơ bản, cơ sở dữ liệu và các kỹ năng phân tích nghiệp vụ (Business Analysis) để chuẩn bị hành trang vững vàng nhất cho tương lai nghiệp vụ khoa học dữ liệu.'
  },
  learningGoals: [
    {
      id: 'g-1',
      title: 'Đạt GPA học kỳ I trên 3.6/4.0',
      type: 'short',
      description: 'Tập trung cao độ cho các môn cơ sở chính như Lập trình nâng cao (C++), Nhập môn Hệ thống Thông tin để đạt điểm A tuyệt đối.',
      targetDate: 'Tháng 01/2027',
      completed: false
    },
    {
      id: 'g-2',
      title: 'Học sâu kiến thức về Cơ sở dữ liệu quan hệ (SQL)',
      type: 'short',
      description: 'Làm quen sớm với SQL Server / PostgreSQL. Học tối ưu hóa truy vấn và áp dụng vào dự án phân tích dữ liệu nhỏ.',
      targetDate: 'Tháng 03/2027',
      completed: false
    },
    {
      id: 'g-3',
      title: 'Ứng tuyển vào LAB nghiên cứu của Khoa HTT',
      type: 'short',
      description: 'Liên hệ thầy cô phụ trách lab và chuẩn bị các bài test thuật toán, dữ liệu cơ bản để tham gia phụ giúp nghiên cứu từ hè năm nhất.',
      targetDate: 'Tháng 06/2027',
      completed: false
    },
    {
      id: 'g-4',
      title: 'Đạt chứng chỉ IELTS 7.5+',
      type: 'long',
      description: 'Rèn luyện ngoại ngữ để học tập các giáo trình tiếng Anh chuyên ngành và chuẩn bị cho việc viết báo cáo khoa học quốc tế.',
      targetDate: 'Năm 2028 (Năm 3)',
      completed: false
    },
    {
      id: 'g-5',
      title: 'Trở thành một Business Analyst (BA) / Data Consultant giỏi',
      type: 'long',
      description: 'Nắm vững cả 2 khía cạnh: Kỹ thuật (thiết kế hệ thống, lập trình, DB) và Nghiệp vụ doanh nghiệp để làm cầu nối cốt lõi trong các dự án công nghệ lớn.',
      targetDate: 'Khi tốt nghiệp (Năm 2030)',
      completed: false
    }
  ],
  portfolioGoals: [
    {
      id: 'p-1',
      title: 'Nhật ký học thuật thực tiễn',
      description: 'Ghi chép và lưu trữ mọi bài tập lớn, dự án nhỏ từ năm nhất để theo dõi trực quan hành trình tiến bộ trong học tập.',
      iconName: 'BookOpen'
    },
    {
      id: 'p-2',
      title: 'Xây dựng Hồ sơ năng lực sớm',
      description: 'Chuẩn bị một trang giới thiệu bản thân trực tuyến chỉn chu nhất để gửi tới các Thầy/Cô cố vấn học tập, lab nghiên cứu hoặc nhà tuyển dụng tiềm năng.',
      iconName: 'Award'
    },
    {
      id: 'p-3',
      title: 'Kết nối và Tìm kiếm định hướng',
      description: 'Làm cầu nối giao tiếp, thảo luận dự án với các anh chị khóa trên (K68/K69) và cộng đồng sinh viên công nghệ thông tin ĐHQGHN.',
      iconName: 'Share2'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'UET Book Share - Hệ thống mượn sách nội bộ',
      course: 'Môn học: Nhập môn Hệ thống Thông tin (IS101)',
      description: 'Dự án nhóm cuối kỳ nhằm kết nối và chia sẻ giáo trình cũ giữa các sinh viên UET. Nhóm đã thực hiện thiết kế sơ đồ thực thể mối quan hệ (ERD), chuẩn hóa dữ liệu và xây dựng demo ứng dụng console bằng Python tương tác với file CSV để mô phỏng.',
      techTags: ['Python', 'ERD Design', 'File DB (CSV)', 'UI Console'],
      githubUrl: 'https://github.com/bichngoc-uet/uet-book-share',
      demoUrl: '#',
      timeString: 'Học kỳ I - Năm nhất'
    },
    {
      id: 'proj-2',
      title: 'UET Tour - Thuật toán tìm đường thông minh',
      course: 'Môn học: Thực hành Kỹ thuật Lập trình (C++)',
      description: 'Một chương trình nhỏ cài đặt thuật toán Dijkstra tìm đường đi ngắn nhất giữa các tòa nhà lớn tại khuôn viên Xuân Thủy của ĐHQGHN (Tòa GD1, GD2, GD3, Nhà Hiệu bộ, KTX Ngoại Ngữ). Dự án giúp các tân sinh viên dễ dàng tìm lớp học.',
      techTags: ['C++', 'Thành phần đồ họa SFML', 'Dijkstra Algorithm', 'Data Structures'],
      githubUrl: 'https://github.com/bichngoc-uet/uet-tour-dijkstra',
      demoUrl: '#',
      timeString: 'Học kỳ I - Năm nhất'
    },
    {
      id: 'proj-3',
      title: 'Hanoi Street Food Map - Cẩm nang ăn uống quanh giảng đường',
      course: 'Dự án cá nhân tự học ban đầu',
      description: 'Giao diện website tổng hợp các quán ăn vặt, quán cơm sinh viên ngon-bổ-rẻ khu vực Dịch Vọng Hậu, Nghĩa Tân và Xuân Thủy. Website được xây dựng thuần thục bằng HTML/CSS và Tailwind CSS, hỗ trợ giao diện responsive đầy đủ.',
      techTags: ['HTML5', 'CSS3', 'Tailwind CSS', 'Responsive design'],
      githubUrl: 'https://github.com/bichngoc-uet/hanoi-food-map',
      demoUrl: '#',
      timeString: 'Khoảng nghỉ giữa 2 kỳ học'
    }
  ]
};

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
