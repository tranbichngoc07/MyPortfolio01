import React, { useState, useEffect } from 'react';
import { PortfolioData, ThemeId } from './types';
import { ProfilePreview } from './components/ProfilePreview';
import { EditorPanel } from './components/EditorPanel';
import {
  getPortfolioData,
  savePortfolioData,
  getThemePreference,
  saveThemePreference,
  THEME_OPTIONS,
  resetPortfolioData
} from './utils';
import * as Icons from 'lucide-react';

export default function App() {
  const [data, setData] = useState<PortfolioData>(getPortfolioData());
  const [activeThemeId, setActiveThemeId] = useState<ThemeId>(getThemePreference() as ThemeId);
  const [hideEditor, setHideEditor] = useState<boolean>(true);
  const [showSystemHelp, setShowSystemHelp] = useState<boolean>(false);

  // Sync state to localStorage on modification
  const handleDataChange = (newData: PortfolioData) => {
    setData(newData);
    savePortfolioData(newData);
  };

  // Sync theme change to state & localStorage
  const handleThemeChange = (themeId: ThemeId) => {
    setActiveThemeId(themeId);
    saveThemePreference(themeId);
  };

  // Reset core data to initial template
  const handleResetData = () => {
    const refreshed = resetPortfolioData();
    setData(refreshed);
    setActiveThemeId('uet-classic');
    saveThemePreference('uet-classic');
  };

  const selectedTheme = THEME_OPTIONS[activeThemeId] || THEME_OPTIONS['uet-classic'];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col antialiased">
      
      {/* GLOBAL SYSTEM APP BAR */}
      <header className="bg-slate-950 text-white border-b border-slate-800 z-10 sticky top-0 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          
          {/* Brand/UET identifier */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-lg text-white tracking-wider shadow-inner shadow-indigo-400">
              U
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                UET IS Portfolio Maker
                <span className="hidden sm:inline bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[10px] font-semibold px-2 py-0.5 rounded font-mono">
                  v1.2
                </span>
              </h1>
              <p className="text-[10px] text-slate-400 font-medium">Hệ thống Thiết kế Hồ sơ Năng lực Sinh viên Công nghệ</p>
            </div>
          </div>

          {/* Action buttons & View mode selection */}
          <div className="flex items-center gap-2.5">
            {/* Split viewport layout trigger */}
            <button
              onClick={() => setHideEditor(false)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold tracking-wide transition ${
                !hideEditor
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-905 bg-transparent border border-transparent'
              }`}
              title="Chế độ chia màn hình: Vừa chỉnh sửa vừa xem thử"
            >
              <Icons.Columns size={13} />
              <span className="hidden md:inline">Thiết kế & Xem thử</span>
            </button>

            {/* Showcase only visual viewport trigger */}
            <button
              onClick={() => setHideEditor(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold tracking-wide transition ${
                hideEditor
                  ? 'bg-indigo-600 text-white border border-indigo-500'
                  : 'text-slate-400 hover:text-white hover:bg-slate-905 bg-transparent border border-transparent'
              }`}
              title="Chế độ toàn màn hình: Đóng bảng chỉnh sửa để xem sản phẩm hoàn hảo"
            >
              <Icons.Eye size={13} />
              <span>Xem Portfolio</span>
            </button>

            <div className="w-px h-5 bg-slate-800 hidden md:block" />

            {/* Quick Helper toggle */}
            <button
              onClick={() => setShowSystemHelp(!showSystemHelp)}
              className={`p-1.5 rounded transition ${
                showSystemHelp ? 'text-indigo-400 bg-slate-900' : 'text-slate-500 hover:text-white'
              }`}
              title="Thông tin trợ giúp"
            >
              <Icons.HelpCircle size={17} />
            </button>
          </div>
        </div>
      </header>

      {/* DETAILED ADVISORY ALERTS FOR FRESHMAN */}
      {showSystemHelp && (
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-slate-200 py-3.5 px-4 border-b border-slate-800 relative shadow">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs md:pr-12">
            <div className="flex items-start md:items-center gap-2.5">
              <span className="flex-shrink-0 bg-indigo-500/10 text-indigo-400 p-1 rounded-full border border-indigo-500/20">
                <Icons.Sparkles size={14} className="animate-pulse" />
              </span>
              <p className="leading-relaxed text-slate-300">
                <strong className="text-white font-semibold">Mách nhỏ cho tân sinh viên K70-HTT:</strong> Điền đầy đủ thông tin cá nhân ở cột phải. Hãy đưa các dự án lập trình nhỏ của bạn (như bài thực hành C++, Python mượn sách, trang giới thiệu quán ăn) vào mục <strong className="text-indigo-400">Dự án</strong> để làm chỉn chu hồ sơ gửi giáo viên cố vấn học tập hoặc các lab nghiên cứu khoa học tại UET!
              </p>
            </div>
            <button
              onClick={() => setShowSystemHelp(false)}
              className="text-slate-500 hover:text-white absolute right-4 top-3.5 p-0.5 rounded-full hover:bg-slate-800/80 transition"
              title="Đóng thông báo"
            >
              <Icons.X size={15} />
            </button>
          </div>
        </div>
      )}

      {/* WORKSPACE AREA (WORKSPACE) */}
      <main className="flex-1 flex overflow-hidden bg-slate-950">
        
        {/* VIEWPORT 1: COMPLETED PORTFOLIO PREVIEW */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#090d16]">
          <div className={`${hideEditor ? 'max-w-5xl mx-auto' : 'w-full'} min-h-full transition-all duration-300`}>
            
            {/* Editor mode header when editor is active */}
            {!hideEditor && (
              <div className="bg-[#111827] border-b border-slate-800/60 px-6 py-2.5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Giao Diện Trực Quan (Live Preview) - Thay đổi cập nhật tức thì
                </span>
                <span className="hidden md:inline">Tự động sao lưu dữ liệu</span>
              </div>
            )}
            
            <ProfilePreview
              data={data}
              activeTheme={selectedTheme}
              hideEditor={hideEditor}
            />
          </div>
        </div>

        {/* VIEWPORT 2: EDITING CONTROLS DRAWER / PANEL */}
        {!hideEditor && (
          <div className="w-full md:w-[420px] xl:w-[460px] flex-shrink-0 h-full border-l border-slate-800">
            <EditorPanel
              data={data}
              onChange={handleDataChange}
              activeThemeId={activeThemeId}
              onChangeTheme={handleThemeChange}
              onReset={handleResetData}
            />
          </div>
        )}
      </main>
    </div>
  );
}

