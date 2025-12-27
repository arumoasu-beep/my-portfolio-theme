
import React from 'react';
import { ICONS } from '../constants';

const services = [
  {
    title: 'オンラインストア',
    desc: 'こだわりの詰まったネットショップを。UXを極めたカート体験を提供します。',
    icon: <ICONS.Shop className="w-10 h-10" />,
    color: 'bg-stores-blue',
  },
  {
    title: 'POS・キャッシュレス',
    desc: '実店舗とネットの在庫を同期。スマートな決済体験を導入します。',
    icon: <ICONS.Cash className="w-10 h-10" />,
    color: 'bg-emerald-500',
  },
  {
    title: '予約システム',
    desc: '複雑な予約フローをAIで最適化。顧客の手間を最小限に。',
    icon: <ICONS.Calendar className="w-10 h-10" />,
    color: 'bg-amber-500',
  },
  {
    title: 'AIコンサル',
    desc: 'Geminiを活用した自動化。あなたの代わりにビジネスを分析します。',
    icon: <ICONS.Globe className="w-10 h-10" />,
    color: 'bg-purple-600',
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16 md:mb-24 reveal">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 leading-[1.2]">
            あらゆる「商売」を、<br />
            もっと自由に、もっとデジタルに。
          </h2>
          <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed">
            単なる開発ではありません。売上を伸ばすための仕組みを、<br className="hidden md:block" />
            最新のテクノロジーとAIで実現します。
          </p>
        </div>

        {/* Mobile Horizontal Scroll / Desktop Grid */}
        <div className="flex overflow-x-auto gap-6 pb-12 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:pb-0 scrollbar-hide">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[75vw] md:w-full reveal p-8 md:p-10 rounded-4xl border border-slate-100 hover:border-stores-blue/20 bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`${service.color} w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center mb-8 md:mb-10 text-white shadow-xl shadow-blue-100 transform group-hover:-translate-y-2 transition-transform duration-500`}>
                <div className="scale-90 md:scale-100">{service.icon}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
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
