
import React from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="pt-24 pb-12 md:pt-48 md:pb-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="reveal">
          <h1 className="text-3xl md:text-6xl font-black leading-tight text-slate-900 mb-6">
            あなたのビジネスを<br />
            <span className="text-[#0066FF]">加速させる。</span><br />
            U STORE が支える。
          </h1>
          <p className="text-base md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            ネットショップ、POSレジ、予約管理、キャッシュレス決済、そしてAIの力。
            ビジネスに必要なすべてを、一人のエンジニアがデザインします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('consultation_form')}
              className="bg-[#0066FF] text-white text-lg px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              今すぐ無料で相談する
            </button>
            <button 
              onClick={() => onNavigate('projects')}
              className="bg-white text-[#0066FF] border-2 border-[#0066FF] text-lg px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all"
            >
              実績を見る
            </button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs md:text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              初期費用 0円
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              月額 0円〜
            </span>
          </div>
        </div>
        
        <div className="relative mt-4 md:mt-0 reveal delay-200">
          <div className="relative z-10 flex items-center justify-center">
            {/* Tablet Mockup (Desktop only) */}
            <div className="absolute right-[-5%] top-[5%] w-[60%] h-[60%] bg-slate-200 rounded-3xl shadow-xl overflow-hidden hidden lg:block transform rotate-2 transition-transform hover:rotate-0 duration-700">
               <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Tablet UI" />
            </div>
            
            {/* Terminal (Center) - Compact on Mobile */}
            <div className="relative w-[280px] md:w-[400px] h-[380px] md:h-[550px] bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] md:border-[10px] border-slate-900">
               <div className="absolute top-0 left-0 w-full h-full bg-[#0066FF] flex items-center justify-center p-3 md:p-6">
                  <div className="bg-black w-full h-full rounded-2xl p-6 md:p-8 text-white flex flex-col justify-between items-center text-center">
                    <div className="text-lg md:text-2xl font-black tracking-tight">U STORE TERMINAL</div>
                    <div className="flex flex-col items-center gap-2 md:gap-4">
                      {/* Terminal Logo Icon */}
                      <div className="flex flex-col gap-1 mb-2">
                        <div className="flex gap-1">
                           <div className="w-4 h-4 border-2 border-blue-400 rounded-sm"></div>
                           <div className="w-4 h-4 border-2 border-blue-400 rounded-sm"></div>
                        </div>
                        <div className="flex gap-1">
                           <div className="w-4 h-4 border-2 border-blue-400 rounded-sm"></div>
                           <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10px] md:text-sm mb-1">クレジットカード</p>
                        <p className="text-3xl md:text-5xl font-black">¥ 5,120</p>
                      </div>
                      <p className="text-[10px] md:text-xs text-slate-500">タッチ・スライド・差し込み</p>
                    </div>
                    <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-slate-700 rounded-full flex items-center justify-center">
                       <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Phone Mockup (Desktop only) */}
            <div className="absolute left-[-8%] bottom-[-5%] w-[35%] h-[75%] bg-black rounded-[2.5rem] shadow-2xl overflow-hidden hidden lg:block border-[6px] border-slate-900 transform -rotate-3 transition-transform hover:rotate-0 duration-700">
               <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Phone UI" />
            </div>
          </div>
          <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
