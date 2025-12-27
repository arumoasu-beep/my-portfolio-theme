
import React, { useState } from 'react';
import { analyzeBusinessIdea } from '../services/geminiService.ts';

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
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-4">AI BUSINESS CONSULTANT</h2>
            <p className="text-slate-500">アイデアを入力してAIの分析を受けましょう。</p>
          </div>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="w-full h-40 p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-[#0066FF]"
            placeholder="例：産直アプリを作りたい"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading || !idea.trim()}
            className="w-full mt-6 bg-[#0066FF] text-white py-4 rounded-full font-bold shadow-lg"
          >
            {loading ? '分析中...' : '分析を開始する'}
          </button>
          {result && (
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl text-slate-700 whitespace-pre-wrap">
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiConsultant;
