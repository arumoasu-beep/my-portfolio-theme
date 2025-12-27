
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navigateAndClose = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button onClick={() => navigateAndClose('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity z-50">
          <div className="w-10 h-10 bg-[#0066FF] rounded-lg flex items-center justify-center font-bold text-white text-xl">U</div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">U STORE</span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => navigateAndClose('services')} 
            className={`font-medium transition-colors ${currentPage === 'services' ? 'text-[#0066FF]' : 'text-slate-600 hover:text-[#0066FF]'}`}
          >
            サービス
          </button>
          <button 
            onClick={() => navigateAndClose('projects')} 
            className={`font-medium transition-colors ${currentPage === 'projects' ? 'text-[#0066FF]' : 'text-slate-600 hover:text-[#0066FF]'}`}
          >
            制作実績
          </button>
          <button 
            onClick={() => navigateAndClose('consultation')} 
            className={`font-medium transition-colors ${currentPage === 'consultation' ? 'text-[#0066FF]' : 'text-slate-600 hover:text-[#0066FF]'}`}
          >
            AI相談室
          </button>
          <button 
            onClick={() => navigateAndClose('about')} 
            className={`font-medium transition-colors ${currentPage === 'about' ? 'text-[#0066FF]' : 'text-slate-600 hover:text-[#0066FF]'}`}
          >
            自己紹介
          </button>
        </nav>

        <div className="flex items-center gap-4 z-50">
          <button className="hidden sm:block text-slate-600 font-medium hover:text-slate-900">ログイン</button>
          <button 
            onClick={() => navigateAndClose('register')}
            className="hidden md:block bg-[#0066FF] text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            無料で始める
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900 bg-white/80 rounded-full shadow-sm"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer with Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-8 pt-24 space-y-6 overflow-y-auto">
            <button onClick={() => navigateAndClose('services')} className="text-2xl font-bold text-slate-900 text-left hover:text-[#0066FF] transition-colors">サービス</button>
            <button onClick={() => navigateAndClose('projects')} className="text-2xl font-bold text-slate-900 text-left hover:text-[#0066FF] transition-colors">制作実績</button>
            <button onClick={() => navigateAndClose('consultation')} className="text-2xl font-bold text-slate-900 text-left hover:text-[#0066FF] transition-colors">AI相談室</button>
            <button onClick={() => navigateAndClose('about')} className="text-2xl font-bold text-slate-900 text-left hover:text-[#0066FF] transition-colors">自己紹介</button>
            <hr className="border-slate-100" />
            <button onClick={() => navigateAndClose('register')} className="w-full bg-[#0066FF] text-white py-4 rounded-xl font-bold text-lg shadow-lg">無料で始める</button>
            <button className="w-full text-slate-600 font-bold py-4 hover:text-slate-900">ログイン</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
