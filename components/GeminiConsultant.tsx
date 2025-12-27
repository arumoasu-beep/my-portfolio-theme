
import React, { useState } from 'react';
import { analyzeBusinessIdea } from '../services/geminiService';

const GeminiConsultant: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    const analysis = await analyzeBusinessIdea(idea);
    setResult(analysis);
    setLoading(false);
  };

  return (
    <section id="consultation" className="py-32 bg-stores-blue relative overflow-hidden">
      {/* Abstract circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 reveal">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              AIがあなたの<br />
              ビジネスを占う。
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-10 leading-relaxed">
              Google Gemini Proを搭載したAIコンサルタントが、あなたのアイデアを技術的・戦略的視点から即座に分析します。
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-12 h-12 rounded-full border-4 border-stores-blue bg-slate-200 overflow-hidden`}>
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-white/80 font-bold text-sm">既に 100+ のアイデアが分析されました</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full reveal delay-200">
            <div className="bg-white rounded-5xl shadow-2xl p-8 md:p-12 relative">
              <div className="absolute -top-6 -left-6 bg-yellow-400 text-slate-900 font-black px-6 py-2 rounded-full shadow-lg transform -rotate-3">
                AI FREE TRIAL
              </div>
              
              <div className="mb-8">
                <label className="block text-slate-900 font-black text-xl mb-4">ビジネスアイデアを入力</label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  className="w-full h-40 p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:border-stores-blue focus:bg-white transition-all text-slate-700 placeholder:text-slate-300 font-medium"
                  placeholder="例：地域の農家と消費者を直接つなぐ、定期購読型のECアプリを作りたい。"
                />
              </div>
              
              <button
                onClick={handleAnalyze}
                disabled={loading || !idea.trim()}
                className="w-full bg-stores-blue text-white py-5 rounded-full font-black text-lg shadow-2xl shadow-blue-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    AI分析中...
                  </>
                ) : '分析を開始する'}
              </button>
              
              {result && (
                <div className="mt-10 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-stores-blue" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.607a1 1 0 01-.22-.306l-.226-.442a1 1 0 011.782-.908l.226.442a1 1 0 01-.44 1.27l-.44.22a1 1 0 01-.682-.276zM15.5 12a1 1 0 11-2 0 1 1 0 012 0zM3 12a1 1 0 112 0 1 1 0 01-2 0zm12.964-4.505a1 1 0 01.306-.22l.442-.226a1 1 0 11.908 1.782l-.442.226a1 1 0 01-1.27-.44l-.22-.44a1 1 0 01.276-.682z" /></svg>
                    </div>
                    <span className="font-black text-slate-900 tracking-wider text-sm uppercase">Analysis Result</span>
                  </div>
                  <div className="p-8 bg-slate-900 rounded-4xl text-slate-100 text-sm leading-relaxed font-medium">
                    {result}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiConsultant;
