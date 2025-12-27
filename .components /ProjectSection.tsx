
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectSectionProps {
  onNavigate: (page: string) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ onNavigate }) => {
  return (
    <section id="projects" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              確かな実績。
            </h2>
            <p className="text-slate-600 max-w-md text-sm md:text-base">
              これまでに制作したウェブサイトやアプリケーションの一部をご紹介します。
            </p>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="text-[#0066FF] font-bold flex items-center gap-2 group text-sm md:text-base"
          >
            すべての実績を見る
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 scroll-smooth snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          {PROJECTS.map((project) => (
            <button 
              key={project.id} 
              onClick={() => onNavigate(`project_${project.id}`)}
              className="flex-shrink-0 w-[280px] md:w-full bg-white rounded-[2rem] md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 text-left flex flex-col group snap-start"
            >
              <div className="h-48 md:h-64 overflow-hidden relative w-full">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#0066FF] uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900 group-hover:text-[#0066FF] transition-colors line-clamp-1">{project.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] md:text-[10px] font-medium bg-slate-50 text-slate-500 px-2 py-1 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
