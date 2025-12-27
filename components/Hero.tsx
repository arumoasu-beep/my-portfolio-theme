
import React from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-56 md:pb-40 bg-stores-light overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stores-blue/5 -skew-x-12 transform origin-top translate-x-1/4 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-block px-4 py-1.5 mb-6 bg-white rounded-full border border-slate-200 shadow-sm">
              <span className="text-stores-blue font-bold text-sm tracking-wider">NEW: AI CONSULTING SERVICE</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-[1.15] text-slate-900 mb-8 tracking-tight">
              あなたのビジネスを<br />
              <span className="text-stores-blue">加速させる。</span><br />
              U STORE が支える。
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
              ネットショップ、POSレジ、予約管理、そしてAI。
              すべてを統合し、一人のエンジニアが最高の体験をデザインします。
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('consultation')}
                className="bg-stores-blue text-white text-lg px-10 py-5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 hover:scale-105 active:scale-95"
              >
                今すぐ無料で相談する
              </button>
              <button 
                onClick={() => onNavigate('projects')}
                className="bg-white text-slate-900 border-2 border-slate-200 text-lg px-10 py-5 rounded-full font-bold hover:border-stores-blue hover:text-stores-blue transition-all"
              >
                制作実績を見る
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm font-bold text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                初期費用 0円
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                月額 0円〜
              </div>
            </div>
          </div>
          
          <div className="relative reveal delay-200 hidden md:block">
            {/* Main Mockup */}
            <div className="relative z-20 mx-auto w-full max-w-[480px]">
              <div className="bg-slate-900 rounded-5xl p-4 shadow-2xl shadow-blue-900/20 animate-floating">
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/16] relative">
                  <div className="absolute top-0 left-0 w-full h-12 bg-stores-blue flex items-center justify-between px-6 text-white text-[10px] font-bold">
                    <span>U STORE</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-8 pt-20">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl mb-6"></div>
                    <div className="h-6 w-3/4 bg-slate-100 rounded-lg mb-4"></div>
                    <div className="h-4 w-full bg-slate-50 rounded-lg mb-2"></div>
                    <div className="h-4 w-full bg-slate-50 rounded-lg mb-8"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-square bg-slate-50 rounded-2xl"></div>
                      <div className="aspect-square bg-slate-50 rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -right-12 top-1/4 bg-white p-6 rounded-3xl shadow-2xl z-30 w-48 border border-slate-100 transform rotate-6">
                <p className="text-[10px] text-slate-400 font-bold mb-1">売上 (今日)</p>
                <p className="text-2xl font-black text-slate-900">¥48,200</p>
                <div className="mt-2 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-stores-blue w-2/3"></div>
                </div>
              </div>
              
              <div className="absolute -left-12 bottom-1/4 bg-white p-6 rounded-3xl shadow-2xl z-30 w-48 border border-slate-100 transform -rotate-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                  </div>
                  <span className="text-xs font-bold">決済完了</span>
                </div>
                <p className="text-lg font-black text-slate-900">CREDIT CARD</p>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-stores-blue/10 rounded-full blur-[120px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
