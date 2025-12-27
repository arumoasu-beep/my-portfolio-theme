
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectSection from './components/ProjectSection';
import GeminiConsultant from './components/GeminiConsultant';
import Footer from './components/Footer';
import { TESTIMONIALS } from './constants';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'services': return <div className="animate-fade-in"><Services /></div>;
      case 'projects': return <div className="animate-fade-in"><ProjectSection onNavigate={setCurrentPage} /></div>;
      case 'consultation': return <div className="animate-fade-in"><GeminiConsultant /></div>;
      default: return (
        <>
          <Hero onNavigate={setCurrentPage} />
          
          <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16 md:mb-24 reveal">
                <p className="text-stores-blue font-black mb-4 uppercase tracking-[0.2em] text-xs">Owner Stories</p>
                <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                  U STORE が選ばれる理由。
                </h2>
              </div>
              
              {/* Mobile Horizontal Scroll / Desktop Grid */}
              <div className="flex overflow-x-auto gap-6 pb-12 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-10 md:pb-0 scrollbar-hide reveal">
                {TESTIMONIALS.map((item, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[85vw] md:w-full group bg-white rounded-5xl border border-slate-100 p-6 md:p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                    <div className="aspect-video md:aspect-[16/10] rounded-3xl overflow-hidden mb-6 md:mb-8 shadow-sm">
                      <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.brand} />
                    </div>
                    <p className="text-slate-900 font-bold text-base md:text-xl mb-6 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-4">
                      "{item.quote}"
                    </p>
                    <div className="flex flex-col mt-auto">
                      <span className="text-stores-blue font-black text-[10px] md:text-xs tracking-widest uppercase mb-1">{item.brand}</span>
                      <span className="text-slate-400 text-[10px] md:text-xs font-bold">{item.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Services />
          <ProjectSection onNavigate={setCurrentPage} />
          <GeminiConsultant />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-stores-blue selection:text-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="overflow-hidden">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
