import React from 'react';
import { PortfolioData, ThemeOption } from '../types';
import * as Icons from 'lucide-react';

// Dynamic icon resolver
interface IconProps extends React.ComponentProps<'svg'> {
  name: string;
  className?: string;
  size?: number | string;
}

export const LucideIcon: React.FC<IconProps> = ({ name, className = '', size = 20, ...props }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    // Default fallback icon
    const HelpCircle = Icons.HelpCircle;
    return <HelpCircle className={className} size={size} {...props} />;
  }
  return <IconComponent className={className} size={size} {...props} />;
};

interface ProfilePreviewProps {
  data: PortfolioData;
  activeTheme: ThemeOption;
  hideEditor: boolean;
}

export const ProfilePreview: React.FC<ProfilePreviewProps> = ({
  data,
  activeTheme,
  hideEditor
}) => {
  const { personalInfo, learningGoals, portfolioGoals, projects, reflections } = data;
  const vars = activeTheme.cssVariables;

  // Split goals by type
  const shortGoals = learningGoals.filter(g => g.type === 'short');
  const longGoals = learningGoals.filter(g => g.type === 'long');

  // Generate beautiful initial circle or fallback avatar
  const initials = personalInfo.name
    ? personalInfo.name
        .split(' ')
        .slice(-2)
        .map(n => n[0])
        .join('')
        .toUpperCase()
    : 'UET';

  return (
    <div className={`w-full min-h-full transition-colors duration-300 ${vars.background} ${activeTheme.fontSans} pb-24`}>
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-r from-indigo-500/10 via-teal-500/10 to-violet-500/10 dark:from-indigo-950/20 dark:via-emerald-950/15 dark:to-violet-950/20 blur-2xl -z-10" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-24 -left-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto px-4 pt-12 md:pt-16 pb-8">
          {/* Institution Tag */}
          <div className="flex justify-center md:justify-start mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-opacity-10 shadow-sm border border-opacity-20 animate-pulse bg-indigo-600 text-indigo-700 border-indigo-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/25">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-emerald-400"></span>
              {personalInfo.university || 'VNU - UET'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar block */}
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-600 via-teal-500 to-violet-600 dark:from-emerald-500 dark:via-teal-500 dark:to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 shadow-lg" />
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center border-4 border-white/10 shadow-2xl">
                {personalInfo.avatarUrl ? (
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails to load
                      (e.target as HTMLImageElement).src = '';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-slate-900 dark:to-emerald-950 text-white">
                    <span className="text-4xl md:text-5xl font-black tracking-widest">{initials}</span>
                    <span className="text-[10px] mt-1 font-mono text-indigo-200 dark:text-emerald-400 opacity-80 uppercase tracking-widest font-semibold">UET-IS</span>
                  </div>
                )}
              </div>
            </div>

            {/* Profile main info container */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 id="portfolio-title-name" className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
                  {personalInfo.name || 'Tên của bạn'}
                </h1>
                <p id="portfolio-title-major" className="text-lg md:text-xl font-medium text-indigo-600 dark:text-emerald-400">
                  Ngành {personalInfo.major || 'Chưa cập nhật'}
                </p>
              </div>

              {/* Student Metadata Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                {personalInfo.classCode && (
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium border ${vars.badge}`}>
                    <Icons.Layers size={13} />
                    Lớp: {personalInfo.classCode}
                  </span>
                )}
                {personalInfo.studentId && (
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium border ${vars.badge}`}>
                    <Icons.User size={13} />
                    MSSV: {personalInfo.studentId}
                  </span>
                )}
                {personalInfo.phone && (
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium border ${vars.badge}`}>
                    <Icons.Phone size={13} />
                    {personalInfo.phone}
                  </span>
                )}
              </div>

              {/* Short Bio Block */}
              <p className={`text-sm md:text-base leading-relaxed max-w-3xl ${vars.textMuted}`}>
                {personalInfo.bio || 'Chào mừng bạn đến với portfolio của tôi! Thêm giới thiệu bản thân tại bảng chỉnh sửa.'}
              </p>

              {/* Connect buttons */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2">
                {personalInfo.email && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg shadow-sm border transition duration-150 ${vars.primary} ${vars.primaryHover}`}
                  >
                    <Icons.Mail size={14} />
                    Gửi email liên hệ
                  </a>
                )}
                {personalInfo.githubUrl && (
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg border transition duration-150 border-opacity-30 bg-opacity-5 hover:bg-opacity-10 bg-black text-[#cae8d5]`}
                  >
                    <Icons.Github size={14} />
                    GitHub
                  </a>
                )}
                {personalInfo.linkedinUrl && (
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-blue-600/10 text-blue-500 border border-blue-500/20 hover:bg-blue-600/20 transition duration-150"
                  >
                    <Icons.Linkedin size={14} />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8 grid grid-cols-1 gap-12">
        {/* PORTFOLIO GOALS SECTION */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 pb-2">
            <div className={`w-1.5 h-6 rounded-full ${vars.accentBar}`}></div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Mục Tiêu Của Portfolio</h2>
              <p className="text-xs text-slate-500">Tại sao tôi thiết lập và chia sẻ trực quan trang cá nhân này</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioGoals.length > 0 ? (
              portfolioGoals.map((g) => (
                <div
                  key={g.id}
                  className={`p-5 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${vars.card}`}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-opacity-10 text-indigo-600 dark:text-emerald-400 bg-indigo-600 dark:bg-emerald-500/10 mb-4 border border-opacity-10">
                    <LucideIcon name={g.iconName || 'Target'} size={20} />
                  </div>
                  <h3 className="text-base font-bold mb-2">{g.title || 'Mục tiêu thiết kế'}</h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${vars.textMuted}`}>{g.description}</p>
                </div>
              ))
            ) : (
              <p className="col-span-3 text-sm text-center py-6 text-slate-400">Bạn chưa thêm mục tiêu nào cho Portfolio.</p>
            )}
          </div>
        </section>

        {/* ACADEMIC LEARNING GOALS SECTION (Học tập) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 pb-2">
            <div className="w-1.5 h-6 rounded-full bg-emerald-500"></div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Kế Hoạch & Mục Tiêu Học Tập</h2>
              <p className="text-xs text-slate-500">Chiến lược phát triển kiến thức chuyên môn trong 4 năm đại học</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Short-term goals bucket */}
            <div className={`p-6 rounded-2xl border ${vars.card}`}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Icons.Calendar size={18} className="text-indigo-600 dark:text-emerald-400" />
                  Mục tiêu ngắn hạn (Năm nhất)
                </h3>
                <span className="text-[10px] uppercase tracking-wider font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded border border-amber-500/20">
                  Bắt đầu ngay
                </span>
              </div>

              <div className="space-y-4">
                {shortGoals.length > 0 ? (
                  shortGoals.map((goal, idx) => (
                    <div
                      key={goal.id}
                      className="p-4 rounded-xl border border-dashed border-opacity-65 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-emerald-600 transition duration-150 bg-slate-50/50 dark:bg-slate-900/30"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold font-mono text-sm mt-0.5 whitespace-nowrap">
                          {idx < 9 ? `0${idx + 1}.` : idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-sm font-semibold truncate ${goal.completed ? 'line-through text-slate-400' : ''}`}>
                            {goal.title}
                          </h4>
                          <p className={`text-xs mt-1 leading-relaxed ${vars.textMuted}`}>{goal.description}</p>
                          <div className="flex items-center gap-1.5 mt-2.5 text-[10px] font-mono text-slate-500">
                            <Icons.Clock size={11} />
                            Hạn tiêu điểm: {goal.targetDate || 'Chưa rõ'}
                            {goal.completed && (
                              <span className="flex items-center gap-1 text-emerald-600 font-bold ml-auto bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider">
                                Đã đạt
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 italic py-4">Chưa có mục tiêu ngắn hạn nào được thiết lập.</p>
                )}
              </div>
            </div>

            {/* Long-term goals bucket */}
            <div className={`p-6 rounded-2xl border ${vars.card}`}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Icons.Compass size={18} className="text-violet-600 dark:text-cyan-400" />
                  Định hướng dài hạn (Năm 2, 3, 4)
                </h3>
                <span className="text-[10px] uppercase tracking-wider font-mono font-bold bg-violet-500/10 text-violet-600 dark:text-violet-400 px-2.5 py-1 rounded border border-violet-500/20">
                  Tương lai
                </span>
              </div>

              <div className="space-y-4">
                {longGoals.length > 0 ? (
                  longGoals.map((goal, idx) => (
                    <div
                      key={goal.id}
                      className="p-4 rounded-xl border border-dashed border-opacity-65 border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-cyan-600 transition duration-150 bg-slate-50/50 dark:bg-slate-900/30"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-teal-600 dark:text-cyan-400 font-bold font-mono text-sm mt-0.5 whitespace-nowrap">
                          {idx < 9 ? `0${idx + 1}.` : idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-sm font-semibold truncate ${goal.completed ? 'line-through text-slate-400' : ''}`}>
                            {goal.title}
                          </h4>
                          <p className={`text-xs mt-1 leading-relaxed ${vars.textMuted}`}>{goal.description}</p>
                          <div className="flex items-center gap-1.5 mt-2.5 text-[10px] font-mono text-slate-500">
                            <Icons.Clock size={11} />
                            Dự kiến: {goal.targetDate || 'Chưa rõ'}
                            {goal.completed && (
                              <span className="flex items-center gap-1 text-emerald-600 font-bold ml-auto bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider">
                                Đã đạt
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 italic py-4">Chưa có mục tiêu dài hạn nào được thiết lập.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* COMPLETED ACADEMIC PROJECTS SECTION (Dự án học tập) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 rounded-full bg-amber-500"></div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">Dự Án Học Tập Khảo Sát</h2>
                <p className="text-xs text-slate-500">Tất cả các sản phẩm, nghiên cứu sáng tạo và bài tập lớn trong tiến trình môn học</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-indigo-600 dark:text-emerald-400 font-mono font-semibold">
              <Icons.Sparkles size={13} className="animate-bounce" />
              {projects.length} Dự án tích lũy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.length > 0 ? (
              projects.map((proj) => (
                <div
                  key={proj.id}
                  className={`flex flex-col rounded-xl border overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 bg-opacity-95 ${vars.card}`}
                >
                  {/* Decorative project header banner */}
                  <div className="h-16 bg-gradient-to-br from-indigo-500/20 to-teal-500/10 dark:from-indigo-950/40 dark:to-emerald-950/20 border-b border-opacity-5 flex items-center justify-between px-4">
                    <span className="text-[10px] font-mono font-medium text-indigo-600 dark:text-emerald-400 uppercase tracking-widest bg-indigo-300/10 dark:bg-emerald-400/10 px-2 py-0.5 rounded border border-indigo-500/15 dark:border-emerald-500/20">
                      {proj.timeString || 'Năm nhất'}
                    </span>
                    <Icons.Briefcase size={14} className="text-slate-400" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3.5">
                      {/* Course badge */}
                      <p className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        {proj.course}
                      </p>
                      
                      <h3 className="text-base font-bold tracking-tight line-clamp-1 hover:line-clamp-none transition-all duration-150">
                        {proj.title}
                      </h3>

                      <p className={`text-xs leading-relaxed line-clamp-4 ${vars.textMuted}`}>
                        {proj.description}
                      </p>
                    </div>

                    <div className="mt-5 space-y-4">
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.techTags && proj.techTags.length > 0 ? (
                          proj.techTags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`text-[10px] font-mono px-2 py-0.5 rounded border border-opacity-10 bg-opacity-65 ${vars.badge}`}
                            >
                              {tag}
                            </span>
                          ))
                        ) : (
                          <span className="text-[10px] text-slate-500 italic">Không có tag công nghệ</span>
                        )}
                      </div>

                      {/* Code/Demo link buttons */}
                      <div className="flex items-center gap-3 pt-2 border-t border-opacity-20 border-slate-200 dark:border-slate-800">
                        {proj.githubUrl && proj.githubUrl !== '#' && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition"
                          >
                            <Icons.Github size={12} />
                            Mã nguồn
                          </a>
                        )}
                        {proj.demoUrl && proj.demoUrl !== '#' ? (
                          <a
                            href={proj.demoUrl}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 transition"
                          >
                            <Icons.ExternalLink size={12} />
                            Demo trực tiếp
                          </a>
                        ) : (
                          <button
                            disabled
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-medium text-slate-400 bg-slate-100/50 dark:bg-slate-800/40 border border-transparent cursor-not-allowed"
                            title="Chỉ chạy offline / Chưa triển khai"
                          >
                            <Icons.Lock size={11} className="opacity-60" />
                            Local Demo
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-3 text-sm text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 font-mono">
                Chưa có cấu hình bài tập hay bài tập lớn nào. Bạn hãy tự tạo bằng công cụ chỉnh sửa phía bên phải!
              </p>
            )}
          </div>
        </section>
      </div>

      {/* REFLECTIONS / NHẬT KÝ SECTION */}
      {reflections && reflections.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 mt-12">
          <section className="space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <div className="w-1.5 h-6 rounded-full bg-pink-500"></div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">Nhật Ký Học Tập</h2>
                <p className="text-xs text-slate-500">Những điều tôi đã học được và cảm nhận trong hành trình học tập</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reflections.map((ref) => (
                <div
                  key={ref.id}
                  className={`p-5 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${vars.card}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 border border-pink-500/20 flex-shrink-0">
                        <Icons.BookMarked size={16} />
                      </span>
                      <h3 className="text-sm font-bold leading-snug">{ref.title}</h3>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border whitespace-nowrap flex-shrink-0 ${vars.badge}`}>
                      {ref.date}
                    </span>
                  </div>
                  {ref.category && (
                    <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-pink-500 bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 rounded mb-3">
                      {ref.category}
                    </span>
                  )}
                  <p className={`text-xs leading-relaxed whitespace-pre-line ${vars.textMuted}`}>{ref.content}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* FOOTER SECTION */}
      <footer className="mt-20 border-t border-opacity-10 border-slate-300 dark:border-slate-800 pt-8 pb-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-500">
          <div className="space-y-1">
            <p className="font-semibold text-slate-700 dark:text-slate-300 font-mono">
              QH-2025-I/CQ-S - Đại học Công Nghệ
            </p>
            <p>Khoa Hệ thống thông tin - Trường ĐH Công nghệ, ĐHQGHN</p>
          </div>
          <div>
            <p className="italic">Được tạo tự động bằng &copy; UET IS Portfolio Maker {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
