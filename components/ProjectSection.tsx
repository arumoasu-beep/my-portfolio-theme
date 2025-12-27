
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectSectionProps {
  onNavigate: (page: string) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ onNavigate }) => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-stores-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              確かな実績。
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
              ビジネスの成長を支援した、主要なプロジェクトの一部をご紹介します。
            </p>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-4 text-stores-blue font-black text-base md:text-lg group bg-white px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all"
          >
            VIEW ALL WORKS
            <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Horizontal Scroll / Desktop Grid */}
        <div className="flex overflow-x-auto gap-8 pb-12 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:pb-0 scrollbar-hide">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className="flex-shrink-0 w-[80vw] md:w-full reveal flex flex-col group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-video md:aspect-[4/3] rounded-4xl overflow-hidden mb-6 md:mb-8 shadow-xl shadow-slate-200">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <span className="bg-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black text-stores-blue tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3 text-slate-900 group-hover:text-stores-blue transition-colors tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] md:text-[10px] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
