
import React from 'react';
import { ICONS } from '../constants';

const services = [
  {
    title: 'フロントエンド',
    desc: 'React / Next.js を使用した、美しくレスポンシブなUI。',
    icon: <ICONS.Shop className="w-8 h-8 md:w-10 md:h-10" />,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50'
  },
  {
    title: 'バックエンド',
    desc: 'Node.js / Python を駆使した、スケーラブルなサーバー。',
    icon: <ICONS.Cash className="w-8 h-8 md:w-10 md:h-10" />,
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50'
  },
  {
    title: '予約システム',
    desc: '複雑なカレンダー予約や在庫管理を直感的に解決。',
    icon: <ICONS.Calendar className="w-8 h-8 md:w-10 md:h-10" />,
    color: 'bg-teal-500',
    lightColor: 'bg-teal-50'
  },
  {
    title: 'AIソリューション',
    desc: 'Geminiを活用した、次世代のビジネスオートメーション。',
    icon: <ICONS.Globe className="w-8 h-8 md:w-10 md:h-10" />,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            あらゆる「つくる」を、<br className="md:hidden" />
            もっと自由に。
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base px-4">
            ビジネスのフェーズに合わせた、柔軟な技術スタックを提供。初期構築から運用まで、一貫してサポート。
          </p>
        </div>

        {/* Horizontal scroll for mobile */}
        <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-10 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide snap-x">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[220px] md:w-full group p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 bg-white snap-start"
            >
              <div className={`${service.lightColor} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 text-slate-900 transition-colors group-hover:text-white group-hover:${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-base md:text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-xs md:text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
