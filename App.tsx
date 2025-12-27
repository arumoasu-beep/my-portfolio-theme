
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectSection from './components/ProjectSection';
import GeminiConsultant from './components/GeminiConsultant';
import Footer from './components/Footer';
import { TESTIMONIALS, PROJECTS } from './constants';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showBanner, setShowBanner] = useState(true);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <div className="animate-fade-in"><Services /></div>;
      case 'projects':
        return <div className="animate-fade-in"><ProjectSection onNavigate={setCurrentPage} /></div>;
      case 'consultation':
        return <div className="animate-fade-in"><GeminiConsultant /></div>;
      case 'about':
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-black mb-10">U STORE について</h1>
            <div className="max-w-3xl mx-auto bg-slate-50 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem]">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0066FF] rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl md:text-5xl font-black">U</div>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                U STORE は、デジタルとリアルの境界をなくし、すべての商売をもっと自由に、もっと加速させるためのプラットフォームです。
                一人のエンジニアによる一気通貫した開発とAI導入により、大企業レベルの技術をすべての人に提供します。
              </p>
            </div>
          </section>
        );
      
      // Testimonial Detail Pages
      case 'testimonial_0':
      case 'testimonial_1':
      case 'testimonial_2': {
        const idx = parseInt(currentPage.split('_')[1]);
        const item = TESTIMONIALS[idx];
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-grow bg-slate-200"></div>
                <span className="text-[#0066FF] font-black tracking-widest uppercase text-xs md:text-sm">Case Study</span>
                <div className="h-px flex-grow bg-slate-200"></div>
              </div>
              <h1 className="text-2xl md:text-5xl font-black mb-10 text-center leading-tight text-slate-900">
                {item.brand} 導入事例
              </h1>
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl mb-12 h-56 md:h-[450px]">
                <img src={item.image} className="w-full h-full object-cover" alt={item.brand} />
              </div>
              <div className="bg-slate-50 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] mb-12">
                <blockquote className="text-xl md:text-3xl font-bold text-slate-900 leading-relaxed italic border-l-4 md:border-l-8 border-[#0066FF] pl-6 md:pl-8">
                  "{item.quote}"
                </blockquote>
                <p className="mt-8 text-right font-bold text-slate-600 text-sm md:text-base">
                  — {item.author}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-slate-600 leading-relaxed text-sm md:text-base">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 md:mb-6">導入の背景</h3>
                  <p>多店舗展開を進める中で、オンラインとオフラインの顧客データが分断されていることが大きな課題でした。お客様一人ひとりに最適な提案を行うためには、一元化されたプラットフォームが必要不可欠でした。</p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 md:mb-6">決め手</h3>
                  <p>単なるシステムの提供だけでなく、エンジニア自らがビジネスモデルを理解し、現場に即したUI/UXを提案してくれた点です。開発のスピード感も、他社とは圧倒的に違いました。</p>
                </div>
              </div>
            </div>
          </section>
        );
      }

      // Why Us Detail Pages
      case 'why_speed':
      case 'why_design':
      case 'why_ai': {
        const contentMap: Record<string, any> = {
          why_speed: {
            title: "圧倒的な開発スピード",
            num: "1",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
            text: "U STOREは、最新の技術スタック（React, Next.js, Node.js）とAIアシスト開発を組み合わせることで、従来の開発会社と比較して約3倍のスピードでプロダクトを形にします。"
          },
          why_design: {
            title: "一貫したデザイン哲学",
            num: "2",
            img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200",
            text: "「エンジニアが作るデザインは美しくない」という常識を覆します。U STOREでは、コードの美しさと同じくらい、ピクセル単位のレイアウトと、ユーザーが直感的に動けるUXを重要視しています。"
          },
          why_ai: {
            title: "AI導入のスペシャリスト",
            num: "3",
            img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
            text: "AIはもはや「未来の技術」ではなく、今日のビジネスを支える「インフラ」です。U STOREは、Gemini APIをはじめとする最先端の生成AIを、実務レベルでビジネスに組み込むノウハウを豊富に持っています。"
          }
        };
        const data = contentMap[currentPage];
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#E6F0FF] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-[#0066FF] font-black text-xl md:text-2xl mb-8">{data.num}</div>
              <h1 className="text-2xl md:text-5xl font-black mb-8 leading-tight">{data.title}</h1>
              <img src={data.img} className="w-full h-56 md:h-80 object-cover rounded-[2rem] md:rounded-[3rem] shadow-lg mb-12" alt={data.title} />
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6 text-sm md:text-base">
                <p>{data.text}</p>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">詳細情報</h3>
                <p>私たちは単にコードを書くのではなく、お客様のビジネスの成功をパートナーとして共に考えます。スピード、デザイン、そして最新技術の融合こそがU STOREの強みです。</p>
              </div>
            </div>
          </section>
        );
      }

      // Project Detail Pages
      case 'project_1':
      case 'project_2':
      case 'project_3': {
        const pId = currentPage.split('_')[1];
        const project = PROJECTS.find(p => p.id === pId);
        if (!project) return null;
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 animate-fade-in">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#0066FF] text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase">{project.category}</span>
              </div>
              <h1 className="text-2xl md:text-5xl font-black mb-10 leading-tight">{project.title}</h1>
              <img src={project.imageUrl} className="w-full h-56 md:h-[500px] object-cover rounded-[2rem] md:rounded-[3rem] shadow-2xl mb-12" alt={project.title} />
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-2 space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">概要</h3>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">{project.description}</p>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">成果</h3>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">このプロジェクトを通じて、クライアントの運用コストは40%削減され、月間売上は前年比150%を達成しました。最新のフロントエンド技術により、読み込み速度は世界トップレベルを実現しています。</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] h-fit">
                  <h4 className="font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200 text-sm md:text-base">使用技術</h4>
                  <ul className="space-y-3">
                    {project.tech.map(t => (
                      <li key={t} className="flex items-center gap-2 text-slate-600 text-xs md:text-sm">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      }

      case 'register':
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 max-w-lg animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-black mb-8 text-center">無料で始める</h1>
            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
              <p className="text-slate-600 mb-6 text-center text-sm md:text-base">アカウントを作成して、あなたのビジネスをデジタル化しましょう。</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold mb-2">メールアドレス</label>
                  <input type="email" className="w-full p-4 rounded-xl border border-slate-300 outline-none focus:border-[#0066FF]" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">パスワード</label>
                  <input type="password" className="w-full p-4 rounded-xl border border-slate-300 outline-none focus:border-[#0066FF]" placeholder="••••••••" />
                </div>
                <button className="w-full bg-[#0066FF] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">新規登録</button>
              </form>
            </div>
          </section>
        );
      case 'consultation_form':
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-black mb-8 text-center">無料相談・お問い合わせ</h1>
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100">
              <p className="text-slate-600 mb-8 text-center text-sm md:text-base">ビジネスの課題をお聞かせください。担当エンジニアが直接回答いたします。</p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">お名前</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-slate-200" placeholder="山田 太郎" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">貴社名（任意）</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-slate-200" placeholder="株式会社〇〇" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">相談内容</label>
                  <textarea className="w-full p-4 rounded-xl border border-slate-200 h-32" placeholder="どのようなシステムを検討されていますか？"></textarea>
                </div>
                <button className="w-full bg-[#0066FF] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all text-lg">送信する</button>
              </form>
            </div>
          </section>
        );
      case 'company':
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-black mb-8 md:mb-12 text-center">運営会社</h1>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-[1.5rem] md:rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="divide-y divide-slate-100">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-slate-50 p-4 md:p-6 font-bold text-slate-600 text-sm md:text-base">社名</div>
                  <div className="md:w-2/3 p-4 md:p-6 text-slate-900 font-bold text-sm md:text-base">U STORE 株式会社</div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-slate-50 p-4 md:p-6 font-bold text-slate-600 text-sm md:text-base">設立</div>
                  <div className="md:w-2/3 p-4 md:p-6 text-slate-900 text-sm md:text-base">2020年1月1日</div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-slate-50 p-4 md:p-6 font-bold text-slate-600 text-sm md:text-base">所在地</div>
                  <div className="md:w-2/3 p-4 md:p-6 text-slate-900 text-sm md:text-base">東京都渋谷区神宮前 1-1-1</div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-slate-50 p-4 md:p-6 font-bold text-slate-600 text-sm md:text-base">事業内容</div>
                  <div className="md:w-2/3 p-4 md:p-6 text-slate-900 leading-relaxed text-sm md:text-base">
                    ・店舗DX支援プラットフォーム「U STORE」の運営<br />
                    ・AIソリューションの開発・導入支援<br />
                    ・ウェブシステム、スマートフォンアプリの受託開発
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'careers':
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 text-center animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-black mb-8">採用情報</h1>
            <div className="max-w-2xl mx-auto bg-indigo-50 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border-2 border-indigo-100">
              <div className="text-4xl md:text-6xl mb-6">🚀</div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">世界を、もっと自由に。</h2>
              <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
                U STOREは現在、情熱を持ったフルスタックエンジニア、プロダクトデザイナーを募集しています。
                あなたの技術で、世界中の商売をもっとワクワクするものに変えませんか？
              </p>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 text-sm md:text-base">
                募集ポジションを見る
              </button>
            </div>
          </section>
        );
      case 'services_shop':
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 animate-fade-in">
            <h1 className="text-2xl md:text-5xl font-black mb-8 text-center leading-tight">ネットショップ制作</h1>
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
              <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1200" className="w-full h-56 md:h-80 object-cover rounded-[2rem] md:rounded-[3rem] shadow-lg" alt="Internet Shop" />
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6 text-sm md:text-base">
                <p>U STOREのネットショップ制作は、単なるWebサイトの構築ではありません。売上を最大化するためのUX設計、モバイル最適化、そして高度なSEO対策をパッケージ化して提供します。</p>
              </div>
            </div>
          </section>
        );
      case 'support_faq':
        return (
          <section className="pt-32 md:pt-40 pb-20 container mx-auto px-6 max-w-3xl animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-black mb-12 text-center">よくある質問</h1>
            <div className="space-y-4 md:space-y-6">
              {[
                { q: "初期費用は本当にかかりませんか？", a: "はい、基本プランであれば初期構築費用0円からスタート可能です。" },
                { q: "開発期間はどれくらいですか？", a: "標準的なネットショップであれば2週間〜1ヶ月程度でリリース可能です。" },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-[1.5rem] md:rounded-2xl">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Q. {faq.q}</h4>
                  <p className="text-slate-600 text-xs md:text-sm">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        );
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            
            {/* U STORE が選ばれる理由 (Testimonials) - Horizontal Scroll on Mobile */}
            <section className="py-24 bg-white reveal overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <p className="text-[#0066FF] font-bold mb-2 uppercase tracking-widest text-xs md:text-sm">Client Voices</p>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">U STORE が選ばれる理由。</h2>
                </div>
                
                {/* Horizontal Scroll for mobile, Grid for desktop */}
                <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 scroll-smooth snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                  {TESTIMONIALS.map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentPage(`testimonial_${idx}`)}
                      className="flex-shrink-0 w-[280px] md:w-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-left group snap-start"
                    >
                      <div className="h-48 md:h-72 overflow-hidden">
                        <img src={item.image} alt={item.brand} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <p className="text-base md:text-xl font-bold text-slate-900 leading-relaxed mb-6 group-hover:text-[#0066FF] transition-colors line-clamp-4">
                            {item.quote}
                          </p>
                        </div>
                        <div className="flex justify-between items-end border-t border-slate-100 pt-6">
                          <div className="text-[10px] md:text-sm">
                            <p className="font-bold text-slate-900">{item.author}</p>
                          </div>
                          <div className="text-slate-900 font-black tracking-tighter text-sm md:text-lg">{item.brand}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="reveal"><Services /></section>
            
            {/* なぜ、U STOREなのか (Why Us Detail) - Horizontal Scroll on Mobile */}
            <section className="py-24 bg-white px-6 md:px-0 reveal">
              <div className="container mx-auto">
                <div className="bg-[#E6F0FF] rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
                  <div className="absolute top-10 right-10 w-40 h-40 bg-white/40 rounded-full blur-3xl"></div>
                  <div className="max-w-3xl relative z-10">
                    <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                      なぜ、<span className="text-[#0066FF]">U STORE</span>なのか。
                    </h2>
                    
                    {/* List for desktop, horizontal scroll or compact flex for mobile */}
                    <div className="flex md:flex-col gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 scroll-smooth snap-x">
                      {[
                        { id: 'why_speed', num: 1, title: "圧倒的な開発スピード", desc: "最新の技術スタックとAIをフル活用し、アイデアを数週間で形にします。" },
                        { id: 'why_design', num: 2, title: "一貫したデザイン哲学", desc: "ユーザーの使いやすさを最優先するデザイナー視点を持っています。" },
                        { id: 'why_ai', num: 3, title: "AI導入スペシャリスト", desc: "最新のAIをビジネスにどう組み込むかを提案できます。" }
                      ].map((item) => (
                        <button 
                          key={item.num} 
                          onClick={() => setCurrentPage(item.id)}
                          className="flex-shrink-0 w-[260px] md:w-full flex gap-4 md:gap-6 text-left group bg-white md:bg-transparent md:hover:bg-white/30 p-4 md:-ml-4 rounded-2xl md:rounded-2xl transition-all shadow-sm md:shadow-none snap-start"
                        >
                          <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-[#0066FF] rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base group-hover:scale-110 transition-transform">{item.num}</div>
                          <div>
                            <h4 className="text-sm md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-[#0066FF] transition-colors">{item.title}</h4>
                            <p className="text-[11px] md:text-base text-slate-600 leading-relaxed md:line-clamp-none line-clamp-2">{item.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="reveal"><ProjectSection onNavigate={setCurrentPage} /></section>
            <section className="reveal"><GeminiConsultant /></section>

            {/* Floating Banner */}
            {showBanner && (
              <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
                <div className="bg-white shadow-2xl rounded-2xl p-4 md:p-6 border border-slate-100 max-w-[180px] md:max-w-[240px] relative">
                  <button 
                    onClick={() => setShowBanner(false)}
                    className="absolute -top-3 -right-3 w-7 h-7 md:w-8 md:h-8 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors"
                  >
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="space-y-1 md:space-y-3">
                    <div className="bg-blue-50 text-[#0066FF] text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-full inline-block uppercase">Campaign</div>
                    <p className="text-slate-800 text-xs md:text-base font-bold leading-tight">月額0円〜 新プラン登場</p>
                    <button 
                      onClick={() => setCurrentPage('register')}
                      className="text-[#0066FF] text-[10px] md:text-xs font-bold hover:underline"
                    >
                      詳しく見る →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
        
        {/* Closing CTA */}
        {['home', 'services', 'projects', 'consultation'].includes(currentPage) && (
          <section className="py-24 bg-white text-center reveal">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                あなたのビジネスを、<br />
                次のステージへ。
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <button 
                  onClick={() => setCurrentPage('consultation_form')}
                  className="bg-[#0066FF] text-white text-base md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200"
                >
                  無料で相談を開始する
                </button>
                <button className="bg-slate-100 text-slate-900 text-base md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full font-bold hover:bg-slate-200 transition-all">
                  資料をダウンロード
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
