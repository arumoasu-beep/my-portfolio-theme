
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import ProjectSection from './components/ProjectSection.tsx';
import GeminiConsultant from './components/GeminiConsultant.tsx';
import Footer from './components/Footer.tsx';
import { TESTIMONIALS, PROJECTS } from './constants.tsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  useEffect(() => { window.scrollTo(0, 0); }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'services': return <div className="animate-fade-in"><Services /></div>;
      case 'projects': return <div className="animate-fade-in"><ProjectSection onNavigate={setCurrentPage} /></div>;
      case 'consultation': return <div className="animate-fade-in"><GeminiConsultant /></div>;
      default: return (
        <>
          <Hero onNavigate={setCurrentPage} />
          <section className="py-24 bg-white reveal">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-[#0066FF] font-bold mb-2 uppercase tracking-widest text-xs">Client Voices</p>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900">U STORE が選ばれる理由。</h2>
              </div>
              <div className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 md:grid md:grid-cols-3 scrollbar-hide">
                {TESTIMONIALS.map((item, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[280px] md:w-full bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                    <img src={item.image} className="w-full h-40 object-cover rounded-2xl mb-4" alt={item.brand} />
                    <p className="text-slate-900 font-bold mb-4 line-clamp-3">"{item.quote}"</p>
                    <p className="text-xs text-slate-500">{item.author}</p>
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
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
