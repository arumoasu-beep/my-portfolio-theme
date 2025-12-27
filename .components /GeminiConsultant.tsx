
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
    <section id="consultation" className="py-24 bg-[#0066FF] relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-400/20 skew-x-12 transform translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-300/10 -skew-x-12 transform -translate-x-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-50 text-[#0066FF] px-4 py-1 rounded-full text-sm font-bold mb-4">
              AI BUSINESS CONSULTANT
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              あなたのアイデアを、<br />
              一瞬でプロダクトへ。
            </h2>
            <p className="text-slate-500">
              ビジネスのアイデアを入力してください。最新のAI (Gemini) が、<br className="hidden md:block" />
              必要な技術構成とステップを提案します。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="例：地域の農家と消費者を直接つなぐ、サブスクリプション型の産直アプリを作りたい。"
                className="w-full h-40 p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#0066FF] focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none text-slate-800"
              ></textarea>
              <div className="absolute bottom-4 right-4 text-xs text-slate-400">
                Powered by Gemini 3 Flash
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading || !idea.trim()}
              className={`w-full py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                loading ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-[#0066FF] text-white hover:bg-blue-700 shadow-xl shadow-blue-200'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-slate-400" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  AIが分析中...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  分析を開始する
                </>
              )}
            </button>

            {result && (
              <div className="mt-10 p-8 bg-blue-50 border-2 border-blue-100 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="font-bold text-[#0066FF] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.95a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM15.657 14.243a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0z" />
                  </svg>
                  AIコンサルタントの回答:
                </h4>
                <div className="prose prose-blue text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {result}
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="text-sm font-bold text-[#0066FF] hover:underline">
                    このプロジェクトの見積もりを依頼する →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiConsultant;
