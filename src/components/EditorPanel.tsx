import React, { useState } from 'react';
import { PortfolioData, PersonalInfo, LearningGoal, PortfolioGoal, Project, ThemeId, Reflection } from '../types';
import * as Icons from 'lucide-react';

interface EditorPanelProps {
  data: PortfolioData;
  onChange: (newData: PortfolioData) => void;
  activeThemeId: ThemeId;
  onChangeTheme: (themeId: ThemeId) => void;
  onReset: () => void;
}

type TabType = 'info' | 'goals' | 'portfolio' | 'projects' | 'reflections' | 'data';

export const EditorPanel: React.FC<EditorPanelProps> = ({
  data,
  onChange,
  activeThemeId,
  onChangeTheme,
  onReset
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('info');
  const [newGoalForm, setNewGoalForm] = useState({
    title: '',
    type: 'short' as 'short' | 'long',
    description: '',
    targetDate: ''
  });
  const [newProjectForm, setNewProjectForm] = useState({
    title: '',
    course: '',
    description: '',
    techTagsStr: '',
    githubUrl: '',
    demoUrl: '',
    timeString: ''
  });
  const [newReflectionForm, setNewReflectionForm] = useState({
    title: '',
    category: 'technical' as 'technical' | 'softskill' | 'general' | 'obstacle',
    date: '',
    content: ''
  });
  const [jsonImportText, setJsonImportText] = useState('');
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setShowNotification(msg);
    setTimeout(() => setShowNotification(null), 3000);
  };

  // Safe input changer for PersonalInfo
  const handlePersonalInfoChange = (field: keyof PersonalInfo, value: string) => {
    const updated = {
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value
      }
    };
    onChange(updated);
  };

  // Learning Goals actions
  const handleToggleGoal = (goalId: string) => {
    const updated = {
      ...data,
      learningGoals: data.learningGoals.map(g =>
        g.id === goalId ? { ...g, completed: !g.completed } : g
      )
    };
    onChange(updated);
    triggerToast('Đã cập nhật trạng thái mục tiêu!');
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalForm.title.trim()) return;

    const newGoal: LearningGoal = {
      id: `g-${Date.now()}`,
      title: newGoalForm.title,
      type: newGoalForm.type,
      description: newGoalForm.description,
      targetDate: newGoalForm.targetDate || 'Chưa rõ',
      completed: false
    };

    const updated = {
      ...data,
      learningGoals: [...data.learningGoals, newGoal]
    };
    onChange(updated);
    setNewGoalForm({ title: '', type: 'short', description: '', targetDate: '' });
    triggerToast('Đã thêm mục tiêu học tập mới!');
  };

  const handleDeleteGoal = (goalId: string) => {
    const updated = {
      ...data,
      learningGoals: data.learningGoals.filter(g => g.id !== goalId)
    };
    onChange(updated);
    triggerToast('Đã xóa mục tiêu học tập!');
  };

  // Portfolio Goals actions
  const handlePortfolioGoalChange = (id: string, field: keyof PortfolioGoal, value: string) => {
    const updated = {
      ...data,
      portfolioGoals: data.portfolioGoals.map(pg =>
        pg.id === id ? { ...pg, [field]: value } : pg
      )
    };
    onChange(updated);
  };

  // Projects actions
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectForm.title.trim() || !newProjectForm.course.trim()) return;

    const tags = newProjectForm.techTagsStr
      ? newProjectForm.techTagsStr.split(',').map(t => t.trim()).filter(Boolean)
      : [];

    const newProj: Project = {
      id: `proj-${Date.now()}`,
      title: newProjectForm.title,
      course: newProjectForm.course,
      description: newProjectForm.description,
      techTags: tags,
      githubUrl: newProjectForm.githubUrl || '#',
      demoUrl: newProjectForm.demoUrl || '#',
      timeString: newProjectForm.timeString || 'Kỳ học hiện tại'
    };

    const updated = {
      ...data,
      projects: [...data.projects, newProj]
    };
    onChange(updated);
    setNewProjectForm({
      title: '',
      course: '',
      description: '',
      techTagsStr: '',
      githubUrl: '',
      demoUrl: '',
      timeString: ''
    });
    triggerToast('Đã đăng tải dự án học tập mới!');
  };

  const handleDeleteProject = (projId: string) => {
    const updated = {
      ...data,
      projects: data.projects.filter(p => p.id !== projId)
    };
    onChange(updated);
    triggerToast('Đã xóa dự án học tập!');
  };

  // Reflections actions
  const handleAddReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReflectionForm.title.trim() || !newReflectionForm.content.trim()) return;

    const newRef: Reflection = {
      id: `ref-${Date.now()}`,
      title: newReflectionForm.title,
      category: newReflectionForm.category,
      date: newReflectionForm.date || 'Hôm nay',
      content: newReflectionForm.content
    };

    const updated = {
      ...data,
      reflections: [...(data.reflections || []), newRef]
    };
    onChange(updated);
    setNewReflectionForm({
      title: '',
      category: 'technical',
      date: '',
      content: ''
    });
    triggerToast('Đã thêm dòng nhật ký trải nghiệm mới!');
  };

  const handleDeleteReflection = (refId: string) => {
    const updated = {
      ...data,
      reflections: (data.reflections || []).filter(r => r.id !== refId)
    };
    onChange(updated);
    triggerToast('Đã xóa dòng nhật ký trải nghiệm!');
  };

  // Export & Import actions
  const handleExport = () => {
    const serialized = JSON.stringify(data, null, 2);
    const blob = new Blob([serialized], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio_${data.personalInfo.name.replace(/\s+/g, '_')}_uet.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerToast('Tải xuống tệp tin JSON cấu hình thành công!');
  };

  const handleImport = () => {
    if (!jsonImportText.trim()) return;
    try {
      const parsed = JSON.parse(jsonImportText);
      if (parsed.personalInfo && parsed.learningGoals && parsed.projects) {
        onChange(parsed);
        setJsonImportText('');
        triggerToast('Nhập dữ liệu thành công! Portfolio đã được cập nhật.');
      } else {
        alert('Dữ liệu không đúng cấu trúc Portfolio chuẩn (Cần có personalInfo, learningGoals, projects).');
      }
    } catch (e) {
      alert('Không thể đọc JSON. Hãy đảm bảo chuỗi ký tự dán vào là định dạng JSON hợp lệ.');
    }
  };

  return (
    <div className="relative h-full flex flex-col bg-slate-900 border-l border-slate-800 text-slate-100 font-sans shadow-2xl">
      {/* Toast Alert */}
      {showNotification && (
        <div className="absolute top-4 right-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 text-black text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all duration-300">
          <Icons.CheckCircle2 size={16} />
          {showNotification}
        </div>
      )}

      {/* Editor Main Header */}
      <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icons.Sliders className="text-indigo-400" size={18} />
          <span className="font-bold text-sm tracking-wide uppercase">Bảng Điều Khiển Portfolio</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-900 px-2.5 py-1 rounded">
          <Icons.Laptop size={11} className="text-emerald-500" />
          UET K70-IS Editor
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-950 px-2 overflow-x-auto py-1">
        <button
          onClick={() => setActiveTab('info')}
          className={`flex items-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'info' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Icons.User size={13} />
          Thông tin
        </button>
        <button
          onClick={() => setActiveTab('goals')}
          className={`flex items-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'goals' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Icons.GraduationCap size={13} />
          Học tập
        </button>
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`flex items-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'portfolio' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Icons.Target size={13} />
          Portfolio
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'projects' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Icons.FolderPlus size={13} />
          Dự án ({data.projects.length})
        </button>
        <button
          onClick={() => setActiveTab('reflections')}
          className={`flex items-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'reflections' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Icons.BookOpen size={13} />
          Nhật ký ({data.reflections?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab('data')}
          className={`flex items-center gap-1.5 px-3 py-2.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'data' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Icons.Palette size={13} />
          Giao diện
        </button>
      </div>

      {/* Editor Form Containers */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">

        {/* TAB 1: PERSONAL INFORMATION */}
        {activeTab === 'info' && (
          <div className="space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-indigo-400">Thông tin cá nhân & Liên hệ</h3>
              <p className="text-[11px] text-slate-400">Cập nhật thông tin nhận diện tài khoản sinh viên của bạn tại UET</p>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Họ và tên</label>
                <input
                  type="text"
                  value={data.personalInfo.name}
                  onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Mã số sinh viên (MSSV)</label>
                <input
                  type="text"
                  value={data.personalInfo.studentId}
                  onChange={(e) => handlePersonalInfoChange('studentId', e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Chuyên ngành</label>
                <input
                  type="text"
                  value={data.personalInfo.major}
                  onChange={(e) => handlePersonalInfoChange('major', e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Chi đoàn / Lớp</label>
                <input
                  type="text"
                  value={data.personalInfo.classCode}
                  onChange={(e) => handlePersonalInfoChange('classCode', e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Trường đại học</label>
              <input
                type="text"
                value={data.personalInfo.university}
                onChange={(e) => handlePersonalInfoChange('university', e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Đường dẫn ảnh đại diện (URL)</label>
              <input
                type="text"
                value={data.personalInfo.avatarUrl}
                onChange={(e) => handlePersonalInfoChange('avatarUrl', e.target.value)}
                placeholder="Để trống để hiển thị Tên lồng khung gradient UET"
                className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Email liên lạc</label>
                <input
                  type="email"
                  value={data.personalInfo.email}
                  onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Số điện thoại</label>
                <input
                  type="text"
                  value={data.personalInfo.phone}
                  onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">GitHub profile link</label>
                <input
                  type="text"
                  value={data.personalInfo.githubUrl}
                  onChange={(e) => handlePersonalInfoChange('githubUrl', e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">LinkedIn profile link</label>
                <input
                  type="text"
                  value={data.personalInfo.linkedinUrl}
                  onChange={(e) => handlePersonalInfoChange('linkedinUrl', e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Hồ sơ sơ lược (Bio)</label>
              <textarea
                value={data.personalInfo.bio}
                onChange={(e) => handlePersonalInfoChange('bio', e.target.value)}
                rows={4}
                className="w-full bg-slate-800/80 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* TAB 2: LEARNING GOALS */}
        {activeTab === 'goals' && (
          <div className="space-y-5">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-indigo-400">Kế hoạch học tập chi tiết</h3>
              <p className="text-[11px] text-slate-400">Các cột mốc ngắn hạn và mục tiêu dài hạn phát triển nghề nghiệp</p>
            </div>

            {/* Existing Goal List */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-semibold text-slate-300 uppercase block tracking-wider">Danh mục cụ thể đang theo dõi</label>
              <div className="max-h-56 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {data.learningGoals.map((g) => (
                  <div key={g.id} className="flex items-center justify-between p-2.5 bg-slate-800/75 rounded border border-slate-750 gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <input
                        type="checkbox"
                        checked={g.completed}
                        onChange={() => handleToggleGoal(g.id)}
                        className="rounded border-slate-600 bg-slate-700 text-indigo-600 focus:ring-indigo-500 h-4.5 w-4.5 cursor-pointer"
                      />
                      <div className="min-w-0">
                        <p className={`font-semibold truncate ${g.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                          {g.title}
                        </p>
                        <p className="text-[10px] text-slate-400 leading-none mt-1">
                          {g.type === 'short' ? 'Ngắn hạn' : 'Dài hạn'} • Hạn: {g.targetDate}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteGoal(g.id)}
                      className="text-slate-400 hover:text-red-400 p-1.5 rounded hover:bg-slate-700/50"
                      title="Xóa mục tiêu này"
                    >
                      <Icons.Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add New Goal Form */}
            <form onSubmit={handleAddGoal} className="p-4 bg-slate-800/40 rounded-lg border border-slate-800 space-y-3">
              <h4 className="text-[11px] font-bold text-indigo-300 uppercase block tracking-wider">Thêm mục tiêu mới</h4>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-300 font-semibold block">Tiêu đề khóa/Khoản mục tiêu</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Đạt điểm A môn Lập trình nâng cao"
                  value={newGoalForm.title}
                  onChange={(e) => setNewGoalForm({ ...newGoalForm, title: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-300 font-semibold block">Loại hình</label>
                  <select
                    value={newGoalForm.type}
                    onChange={(e) => setNewGoalForm({ ...newGoalForm, type: e.target.value as 'short' | 'long' })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="short">Ngắn hạn (Năm 1)</option>
                    <option value="long">Dài hạn (Năm 2,3,4)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-300 font-semibold block">Khung thời gian hạn định</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Kỳ I năm nhất"
                    value={newGoalForm.targetDate}
                    onChange={(e) => setNewGoalForm({ ...newGoalForm, targetDate: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-white focus:outline-none\"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-300 font-semibold block font-mono">Chi tiết / Ghi chú thực thi</label>
                <textarea
                  placeholder="Cách hành động để đạt mục tiêu này..."
                  value={newGoalForm.description}
                  onChange={(e) => setNewGoalForm({ ...newGoalForm, description: e.target.value })}
                  rows={2}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-bold transition"
              >
                <Icons.Plus size={14} />
                Lưu lại mục tiêu học tập
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: PORTFOLIO GOALS */}
        {activeTab === 'portfolio' && (
          <div className="space-y-5">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-indigo-400 font-mono">Mục tiêu của Portfolio</h3>
              <p className="text-[11px] text-slate-400">Chỉnh sửa 3 giá trị cốt lõi thúc đẩy hiển thị ở trang giới thiệu</p>
            </div>

            <div className="space-y-6">
              {data.portfolioGoals.map((g, idx) => (
                <div key={g.id} className="p-4 bg-slate-850 rounded-lg border border-slate-850 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-[10px] font-bold text-amber-400 uppercase font-mono">Trụ cột mục tiêu #{idx + 1}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] text-slate-400">Chọn biểu tượng:</span>
                      <select
                        value={g.iconName}
                        onChange={(e) => handlePortfolioGoalChange(g.id, 'iconName', e.target.value)}
                        className="bg-slate-900 border border-slate-700 text-[10px] p-0.5 rounded text-white focus:outline-none cursor-pointer"
                      >
                        <option value="BookOpen">Cuốn sách (BookOpen)</option>
                        <option value="Award">Giải thưởng (Award)</option>
                        <option value="Share2">Chia sẻ (Share2)</option>
                        <option value="Target">Mục tiêu (Target)</option>
                        <option value="Compass">La bàn (Compass)</option>
                        <option value="Code">Lập trình (Code)</option>
                        <option value="Sparkles">Lấp lánh (Sparkles)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-300 font-semibold block">Tiêu đề côt lõi</label>
                      <input
                        type="text"
                        value={g.title}
                        onChange={(e) => handlePortfolioGoalChange(g.id, 'title', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-white focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-300 font-semibold block block">Ý nghĩa / Mô tả chi tiết</label>
                      <textarea
                        value={g.description}
                        onChange={(e) => handlePortfolioGoalChange(g.id, 'description', e.target.value)}
                        rows={2}
                        className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-white focus:outline-none leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="space-y-5">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-indigo-400">Dự án & Bài tập lớn tích lũy</h3>
              <p className="text-[11px] text-slate-400">Đưa các sản phẩm thực hành C++, Python, cơ sở dữ liệu lên hồ sơ</p>
            </div>

            {/* Existing projects mini layout */}
            {data.projects.length > 0 && (
              <div className="space-y-2.5">
                <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">Các dự án đã lưu ({data.projects.length})</label>
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                  {data.projects.map((p) => (
                    <div key={p.id} className="flex items-center justify-between p-2.5 bg-slate-800/80 rounded border border-slate-750 text-xs">
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-slate-200 truncate">{p.title}</p>
                        <p className="text-[10px] text-slate-400 truncate">{p.course}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteProject(p.id)}
                        className="text-slate-400 hover:text-red-400 p-1 rounded hover:bg-slate-700/50"
                        title="Xóa dự án"
                      >
                        <Icons.Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add Project Form */}
            <form onSubmit={handleAddProject} className="p-4 bg-slate-800/40 rounded-lg border border-slate-800 space-y-3.5">
              <h4 className="text-[11px] font-bold text-indigo-300 uppercase block tracking-wider">Đăng tải dự án mới</h4>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-300 font-semibold block">Tên dự án</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Thiết kế hệ thống dữ liệu thư viện UET"
                  value={newProjectForm.title}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, title: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-300 font-semibold block">Môn học áp dụng</label>
                  <input
                    type="text"
                    required
                    placeholder="Môn: Nhập môn HTTT"
                    value={newProjectForm.course}
                    onChange={(e) => setNewProjectForm({ ...newProjectForm, course: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-300 font-semibold block">Tính chất thời điểm</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Học kỳ II - K68"
                    value={newProjectForm.timeString}
                    onChange={(e) => setNewProjectForm({ ...newProjectForm, timeString: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-300 font-semibold block">Mô tả cụ thể nhiệm vụ của bạn</label>
                <textarea
                  required
                  placeholder="Làm sáng tỏ ý tưởng, sơ đồ ERD, thiết kế giao diện bằng Figma, công nghệ sử dụng..."
                  value={newProjectForm.description}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, description: e.target.value })}
                  rows={3}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none leading-relaxed"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-300 font-semibold block">Tags công nghệ (cách nhau bằng dấu phẩy)</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Python, SQL Server, ERD, Visio"
                  value={newProjectForm.techTagsStr}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, techTagsStr: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-300 font-semibold block">Link GitHub mã nguồn</label>
                  <input
                    type="text"
                    placeholder="https://github.com/..."
                    value={newProjectForm.githubUrl}
                    onChange={(e) => setNewProjectForm({ ...newProjectForm, githubUrl: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-[11px] text-white focus:outline-none font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-300 font-semibold block">Link Demo trực tiếp (nếu có)</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={newProjectForm.demoUrl}
                    onChange={(e) => setNewProjectForm({ ...newProjectForm, demoUrl: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-[11px] text-white focus:outline-none font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-bold transition"
              >
                <Icons.Save size={14} />
                Lưu và cập nhật Dự án
              </button>
            </form>
          </div>
        )}

        {/* TAB 5: PERSONAL REFLECTIONS */}
        {activeTab === 'reflections' && (
          <div className="space-y-5">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-indigo-400">Trải nghiệm cá nhân & Nhật ký dự án</h3>
              <p className="text-[11px] text-slate-400">Ghi lại suy nghĩ, trải nghiệm khi vượt qua khó khăn, học thuật toán hoặc làm việc nhóm</p>
            </div>

            {/* Existing reflections mini layout */}
            {data.reflections && data.reflections.length > 0 && (
              <div className="space-y-2.5">
                <label className="text-[11px] font-semibold text-slate-300 uppercase block tracking-wider">Các bài viết đã lưu ({data.reflections.length})</label>
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1 custom-scrollbar w-full">
                  {data.reflections.map((r) => (
                    <div key={r.id} className="flex items-center justify-between p-2.5 bg-slate-800/80 rounded border border-slate-750 text-xs text-slate-200">
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-slate-200 truncate">{r.title}</p>
                        <p className="text-[10px] text-slate-400">
                          {r.category === 'technical' && 'Chuyên môn'}
                          {r.category === 'softskill' && 'Kỹ năng mềm'}
                          {r.category === 'obstacle' && 'Vượt qua thử thách'}
                          {r.category === 'general' && 'Đại cương / Đam mê'}
                          {` • ${r.date}`}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteReflection(r.id)}
                        className="text-slate-400 hover:text-red-400 p-1 rounded hover:bg-slate-700/50"
                        title="Xóa nhật ký"
                      >
                        <Icons.Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add Reflection Form */}
            <form onSubmit={handleAddReflection} className="p-4 bg-slate-800/40 rounded-lg border border-slate-800 space-y-3.5">
              <h4 className="text-[11px] font-bold text-indigo-300 uppercase block tracking-wider">Thêm nhật ký mới</h4>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-300 font-semibold block">Tiêu đề bài viết</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Lần đầu thiết kế ERD database"
                  value={newReflectionForm.title}
                  onChange={(e) => setNewReflectionForm({ ...newReflectionForm, title: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-300 font-semibold block">Phân loại trải nghiệm</label>
                  <select
                    value={newReflectionForm.category}
                    onChange={(e) => setNewReflectionForm({ ...newReflectionForm, category: e.target.value as any })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
                  >
                    <option value="technical">Kỹ thuật chuyên môn</option>
                    <option value="softskill">Kỹ năng mềm / Nhóm</option>
                    <option value="obstacle">Vượt qua thử thách</option>
                    <option value="general">Khám phá đam mê / Khác</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-300 font-semibold block">Thời điểm ghi nhận</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Tháng 11/2026"
                    value={newReflectionForm.date}
                    onChange={(e) => setNewReflectionForm({ ...newReflectionForm, date: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-300 font-semibold block">Nội dung tự sự, chia sẻ bài học</label>
                <textarea
                  required
                  placeholder="Ghi lại suy nghĩ, các giải pháp tìm kiếm dữ liệu, cách bàn bạc trao đổi trong nhóm và bài học giá trị rút ra..."
                  value={newReflectionForm.content}
                  onChange={(e) => setNewReflectionForm({ ...newReflectionForm, content: e.target.value })}
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-bold transition"
              >
                <Icons.Save size={14} />
                Lưu dòng nhật ký trải nghiệm
              </button>
            </form>
          </div>
        )}

        {/* TAB 5: THEMING & DATA ACTIONS */}
        {activeTab === 'data' && (
          <div className="space-y-6">
            {/* Visual Style Selection */}
            <div className="space-y-3">
              <div className="border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-indigo-400">Chọn giao diện thiết kế (Themes)</h3>
                <p className="text-[11px] text-slate-400 font-mono">Bật móng đổi phong cách hiển thị tức thì</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => onChangeTheme('uet-classic')}
                  className={`p-3 text-left rounded-lg border text-xs transition duration-150 ${
                    activeThemeId === 'uet-classic'
                      ? 'border-indigo-500 bg-indigo-500/10 text-white font-bold'
                      : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-600 mb-2 border border-white/10" />
                  UET Blue Indigo
                </button>

                <button
                  onClick={() => onChangeTheme('modern-dark')}
                  className={`p-3 text-left rounded-lg border text-xs transition duration-150 ${
                    activeThemeId === 'modern-dark'
                      ? 'border-violet-500 bg-gradient-to-br from-violet-950/20 to-slate-950/40 text-white font-bold'
                      : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-violet-600 mb-2 border border-white/10" />
                  Slate Modern Dark
                </button>

                <button
                  onClick={() => onChangeTheme('cyber-emerald')}
                  className={`p-3 text-left rounded-lg border text-xs transition duration-150 ${
                    activeThemeId === 'cyber-emerald'
                      ? 'border-emerald-500 bg-emerald-550/10 text-emerald-300 font-mono font-bold'
                      : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700 font-mono'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500 mb-2 border border-emerald-300/10" />
                  Neo Green Terminal
                </button>

                <button
                  onClick={() => onChangeTheme('warm-editorial')}
                  className={`p-3 text-left rounded-lg border text-xs transition duration-150 ${
                    activeThemeId === 'warm-editorial'
                      ? 'border-teal-600 bg-teal-900/10 text-white font-bold'
                      : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-teal-700 mb-2 border border-white/10" />
                  Teal Editorial Academic
                </button>
              </div>
            </div>

            {/* Import / Export JSON tools */}
            <div className="space-y-3.5 pt-2 border-t border-slate-800">
              <h3 className="text-xs font-bold text-slate-300 uppercase block tracking-widest">Hành động & Bản lưu dữ liệu</h3>
              
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={handleExport}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-medium text-indigo-400 border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/15 transition duration-150 cursor-pointer"
                >
                  <Icons.Download size={13} />
                  Xuất JSON tệp tin
                </button>
                <button
                  onClick={() => {
                    if (confirm('Bạn có chắc chắn muốn đặt lại tất cả thông tin về Trần Bích Ngọc (K70-IS) gốc của UET để nháp lại từ đầu?')) {
                      onReset();
                      triggerToast('Đã khôi phục dữ liệu gốc mẫu!');
                    }
                  }}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-medium text-orange-400 border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/15 transition duration-150 cursor-pointer"
                >
                  <Icons.RotateCcw size={13} />
                  Khôi phục mẫu
                </button>
              </div>

              {/* Paste JSON block */}
              <div className="space-y-1.5 pt-2">
                <label className="text-[10px] text-slate-400 block font-semibold">Nhập dữ liệu dự trữ (Dán chuỗi ký tự JSON vào đây)</label>
                <textarea
                  placeholder="Dán mã JSON đã sao lưu vào đây và nhấn Áp dụng..."
                  value={jsonImportText}
                  onChange={(e) => setJsonImportText(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-850 rounded p-2 text-[10px] font-mono text-slate-200 focus:outline-none"
                />
                <button
                  onClick={handleImport}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 hover:border-slate-600 rounded text-[11px] font-semibold transition"
                >
                  <Icons.Upload size={12} />
                  Áp dụng dữ liệu JSON đã dán
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-500 leading-relaxed">
        <p className="font-mono text-center">
          UET FIT • Hệ thống Thông tin quản lý
        </p>
        <p className="text-center mt-0.5">Trang được lưu tự động trên trình duyệt của bạn.</p>
      </div>
    </div>
  );
};
