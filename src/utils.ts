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
    studentId: '25023344',
    major: 'Hệ thống Thông tin ',
    classCode: 'K70I-IS3',
    university: 'Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)',
    email: 'tranbichngoc855@gmail.com',
    linkedinUrl: '',
    githubUrl: 'https://github.com/tranbichngoc07',
    phone: '0855.395.889',
    bio: 'Chào mọi người! Mình là sinh viên năm nhất ngành Hệ thống Thông tin của Trường Đại học Công nghệ (UET) - ĐHQGHN. Bản thân là một người luôn hứng thú trước khả năng khai mở của dữ liệu và hệ thống thông tin quản lý đối với sự vận hành của doanh nghiệp. Mình đang tích cực học tập ngôn ngữ lập trình cơ bản, cơ sở dữ liệu và các kỹ năng phân tích nghiệp vụ để chuẩn bị hành trang vững vàng nhất cho tương lai.'
  },
  learningGoals: [
    {
      id: 'g-1',
      title: 'Đạt GPA học kỳ II 3.5/4.0',
      type: 'short',
      description: 'Tập trung cao độ cho các môn cơ sở chính như Lập trình nâng cao (Java), Giải tích 2, Toán rời rạc, Vật lý đại cương để đạt điểm A.',
      targetDate: 'Học kỳ II năm nhất',
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
      title: 'Đạt chứng chỉ IELTS 7.5+',
      type: 'long',
      description: 'Rèn luyện ngoại ngữ để học tập các giáo trình tiếng Anh chuyên ngành và chuẩn bị cho việc viết báo cáo khoa học quốc tế.',
      targetDate: 'Năm 2028 (Năm 3)',
      completed: false
    },
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
      title: 'Thao tác cơ bản với tệp tin và thư mục',
      course: 'Môn học: CNS-AI',
      description: 'Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa',
      techTags: '#',
      githubUrl: '#',
      demoUrl: 'https://ap.wps.com/cms/docs/d/cbTaqbjc5ancqBKg',
      timeString: 'Học kỳ II - Năm nhất'
    },
    {
      id: 'proj-2',
      title: 'Tìm kiếm và đánh giá thông tin học thuật',
      course: 'Môn học: CNS-AI',
      description: 'Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện',
      techTags: '#',
      githubUrl: '#',
      demoUrl: 'https://ap.wps.com/cms/docs/d/cbTaqq8LV9gAAIKV',
      timeString: 'Học kỳ II - Năm nhất'
    },
    {
      id: 'proj-3',
      title: 'Viết prompt hiệu quả cho các tác vụ học tập',
      course: 'CNS-AI,
      description: 'Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI. ',
      techTags: '#',
      githubUrl: 'https://ap.wps.com/cms/docs/d/cbTaqv8glfhMBcUh',
      demoUrl: '#',
      timeString: 'Học kỳ II - Năm nhất'
    },
    {
      id: 'proj-4',
      title: 'Sử dụng công cục hợp tác trực tuyến cho dự án nhóm',
      course: 'CNS-AI,
      description: 'Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến',
      techTags: '#',
      githubUrl: 'https://ap.wps.com/cms/docs/d/cbTaqq4k9b1gHvF5',
      demoUrl: '#',
      timeString: 'Học kỳ II - Năm nhất'
    },
    {
      id: 'proj-5',
      title: 'Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
      course: 'CNS-AI,
      description: 'Trưng bày sản phẩm nội dung số hoàn thiện được hỗ trợ bởi AI',
      techTags: '#',
      githubUrl: 'https://ap.wps.com/cms/docs/d/cbTaqsyoYcfziBNi',
      demoUrl: '#',
      timeString: 'Học kỳ II - Năm nhất'
    },
    {
      id: 'proj-6',
      title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
      course: 'CNS-AI,
      description: 'Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu đã thực hiện',
      techTags: '#',
      githubUrl: 'https://ap.wps.com/cms/docs/d/cbTaqjPPqXqPqYby',
      demoUrl: '#',
      timeString: 'Học kỳ II - Năm nhất'
    }
  ],
  reflections: [
    {
      id: 'ref-1',
      title: 'Bước đầu bỡ ngỡ với C++ và Tư duy thuật toán',
      date: 'Tháng 10/2026',
      content: 'Khi mới bước chân vào giảng đường UET, môn Kỹ thuật lập trình C++ thực sự là một thử thách lớn. Mình từng loay hoay với việc quản lý con trỏ và giải thuật tìm đường Dijkstra cho dự án UET Tour. Tuy nhiên, sau nhiều đêm trao đổi cùng các bạn trong nhóm và sự hỗ trợ nhiệt tình từ thầy cô trợ giảng, mình đã tự tay chạy được demo đầu tiên. Trải nghiệm vượt qua áp lực ban đầu này giúp mình tự tin hơn hẳn khi đối mặt với các bài toán lập trình phức tạp.',
      category: 'technical'
    },
    {
      id: 'ref-2',
      title: 'Học cách làm việc nhóm qua dự án UET Book Share',
      date: 'Tháng 11/2026',
      content: 'Dự án thiết kế ERD và thiết lập cơ sở dữ liệu mô phỏng cho UET Book Share dạy mình rằng lập trình không chỉ là gõ code một mình. Trong giai đoạn đầu, nhóm mình có nhiều mâu thuẫn về cách phân chia thực thể và chuẩn hóa 3NF. Việc học cách lắng nghe, trình bày ý kiến bằng sơ đồ trực quan và cùng nhau đi đến thống nhất đã giúp tiến độ nhóm tăng tốc đáng kể. Kỹ năng giao tiếp này thực sự quan trọng đối với định hướng Business Analyst tương lai của mình.',
      category: 'softskill'
    },
    {
      id: 'ref-3',
      title: 'Vượt qua hội chứng kẻ giả mạo (Imposter Syndrome) năm nhất',
      date: 'Tháng 12/2026',
      content: 'Xung quanh mình tại UET có rất nhiều bạn cực kỳ xuất sắc, đạt giải quốc gia hay đã đi làm dự án thực tế từ cấp ba. Đôi lúc mình cảm thấy vô cùng lạc lõng và nghi ngờ năng lực bản thân. Nhưng qua việc hoàn thiện portfolio học tập này, mình chợt nhận ra ai cũng có một xuất phát điểm riêng. Thay vì so sánh với người khác, mình lựa chọn tập trung cải thiện bản thân 1% mỗi ngày và ghi nhận từng thành tựu nhỏ nhất của bản thân.',
      category: 'obstacle'
    },
    {
      id: 'ref-4',
      title: 'Định hình đam mê với dữ liệu và hệ thống thông tin',
      date: 'Tháng 01/2027',
      content: 'Sau khi hoàn thành báo cáo môn học Hệ thống Thông tin quản lý, mình hiểu rõ hơn tại sao dữ liệu lại được coi là "dầu mỏ" của thế kỷ 21. Những con số khô khan khi được mô hình hóa và tổ chức hợp lý sẽ mở ra những insight nghiệp vụ vô giá cho doanh nghiệp. Mình cảm thấy cực kỳ hào hứng khi thấy lựa chọn chuyên ngành của bản thân ngày càng trở nên đúng đắn.',
      category: 'general'
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
        if (!parsed.reflections) {
          parsed.reflections = DEFAULT_PORTFOLIO_DATA.reflections;
        }
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
