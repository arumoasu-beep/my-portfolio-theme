
import React from 'react';
import GeminiConsultant from './GeminiConsultant';

interface ContentPageProps {
  pageKey: string;
  onNavigate: (page: string) => void;
}

const ContentPage: React.FC<ContentPageProps> = ({ pageKey, onNavigate }) => {
  // Page Data Configuration
  const getPageData = () => {
    switch (pageKey) {
      // SERVICES
      case 'services_shop':
        return {
          title: "ネットショップ制作",
          subtitle: "ONLINE SHOP",
          content: "STORESのプラットフォームを活用し、デザインと機能性を両立したオンラインストアを構築します。独自のカスタマイズやAPI連携により、ブランドの世界観を最大限に引き出します。決済、在庫管理、顧客対応をすべて一元化し、商売をもっと自由にします。",
          tags: ["UI/UXデザイン", "決済連携", "SEO対策"]
        };
      case 'services_system':
        return {
          title: "システム受託開発",
          subtitle: "SYSTEM DEVELOPMENT",
          content: "POSレジ連携、予約管理、在庫同期など、ビジネスの根幹を支えるバックエンドシステムをフルスクラッチ、または既存APIを活用して開発します。拡張性と保守性を重視したTypeScriptによる堅牢なコードを提供します。",
          tags: ["Node.js", "React", "AWS/GCP"]
        };
      case 'services_ai':
        return {
          title: "AIコンサルティング",
          subtitle: "AI CONSULTING",
          content: "Gemini Proなどの最新AIモデルを業務に組み込み、自動化と効率化を推進します。商品紹介文の自動生成、カスタマーサポートのAI化、データ分析による売上予測など、AI時代に勝つための戦略を提案します。",
          tags: ["LLM活用", "業務効率化", "Gemini API"]
        };
      case 'services_design':
        return {
          title: "UI/UXデザイン",
          subtitle: "DESIGN STRATEGY",
          content: "「使いやすさ」は売上に直結します。ユーザーの行動心理に基づいた、直感的に操作できるインターフェースを設計します。STORESのようなモダンで洗練されたデザインシステムを構築し、一貫性のあるブランド体験を実現します。",
          tags: ["Figma", "Design System", "User Research"]
        };

      // OWNER STORIES (U STOREが選ばれる理由)
      case 'owner_story_0':
        return {
          title: "WOODBERRY COFFEE",
          subtitle: "OWNER STORY",
          content: "コーヒー豆の品質へのこだわりを、デジタル上でも表現したいという課題がありました。導入後、ネットショップのUIを刷新したことで、実店舗のお客様がオンラインでも購入するようになり、売上が劇的に向上しました。顧客一人ひとりと向き合う時間が以前より増えています。",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
        };
      case 'owner_story_1':
        return {
          title: "MARKS & WEB",
          subtitle: "OWNER STORY",
          content: "ブランドの信頼性を守りながら、複雑な顧客管理と会員プログラムを統合する必要がありました。U STOREの提供するシームレスな体験は、現場の負担を減らしつつ、お客様への価値を最大化してくれました。未来を見据えた開発姿勢が決め手です。",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
        };
      case 'owner_story_2':
        return {
          title: "SHIPS",
          subtitle: "OWNER STORY",
          content: "実店舗とデジタルを融合させる『OMO』の実現において、予約システムの最適化は不可欠でした。AIを活用したリマインド機能や、スタッフの空き状況のリアルタイム同期により、ロイヤルカスタマーの来店頻度が3倍にまで増加しました。",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
        };

      // SUPPORT
      case 'support_faq':
        return {
          title: "よくある質問",
          subtitle: "FAQ",
          content: "開発期間はどれくらいですか？：プロジェクトの規模によりますが、ネットショップ開設であれば最短2週間、大規模システムであれば3ヶ月〜半年程度となります。 予算は？：お客様のご要望に合わせて柔軟にプランを提案いたします。",
          isFAQ: true
        };
      case 'support_privacy':
        return {
          title: "プライバシーポリシー",
          subtitle: "PRIVACY",
          content: "お客様からお預かりした個人情報は、本サービスの提供および改善の目的にのみ使用いたします。適切なセキュリティ対策を講じ、不正アクセスや情報の漏洩を防ぐための体制を整えています。"
        };
      case 'support_terms':
        return {
          title: "利用規約",
          subtitle: "TERMS",
          content: "U STOREのサービスをご利用いただく際の権利と義務を定めています。全ての開発・コンサルティング業務は、相互の信頼に基づき誠実に遂行されるものとします。"
        };
      case 'consultation_form':
        return {
          title: "無料相談・お問い合わせ",
          subtitle: "CONTACT",
          isContact: true
        };
      default:
        return { title: "Page Not Found", subtitle: "404", content: "お探しのページは見つかりませんでした。" };
    }
  };

  const data = getPageData();

  if (data.isContact) {
    return (
      <div className="pt-20">
        <GeminiConsultant />
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stores-light animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-stores-blue font-black tracking-widest text-xs mb-4 uppercase">{data.subtitle}</p>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              {data.title}
            </h1>
          </div>

          {data.image && (
            <div className="rounded-5xl overflow-hidden mb-12 shadow-2xl">
              <img src={data.image} alt={data.title} className="w-full h-auto object-cover max-h-[500px]" />
            </div>
          )}

          <div className="bg-white rounded-5xl p-8 md:p-16 shadow-xl border border-slate-100">
            {data.isFAQ ? (
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-black mb-4 flex gap-3"><span className="text-stores-blue">Q.</span> 開発期間はどれくらいですか？</h3>
                  <p className="text-slate-500 font-medium pl-8 leading-relaxed">ネットショップ開設であれば最短2週間、システム構築は内容により1ヶ月〜半年となります。お急ぎの場合は調整可能です。</p>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 flex gap-3"><span className="text-stores-blue">Q.</span> 開発後の保守・運用もお願いできますか？</h3>
                  <p className="text-slate-500 font-medium pl-8 leading-relaxed">はい。定期的なアップデートや不具合対応、機能拡張など、ビジネスの成長に合わせた継続的なサポートプランをご用意しております。</p>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 flex gap-3"><span className="text-stores-blue">Q.</span> 具体的な見積もりが欲しいです。</h3>
                  <p className="text-slate-500 font-medium pl-8 leading-relaxed">ヒアリング後に、概算のお見積書を作成いたします。まずは「無料相談」より、ビジネスの課題をお聞かせください。</p>
                </div>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 font-medium leading-[2] text-lg md:text-xl whitespace-pre-wrap mb-10">
                  {data.content}
                </p>
                {data.tags && (
                  <div className="flex flex-wrap gap-3">
                    {data.tags.map(tag => (
                      <span key={tag} className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm font-bold text-slate-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row gap-6 items-center">
              <p className="text-slate-900 font-black text-lg">このテーマについて相談したい</p>
              <button 
                onClick={() => onNavigate('consultation_form')}
                className="bg-stores-blue text-white px-10 py-4 rounded-full font-black shadow-xl shadow-blue-100 hover:scale-105 transition-transform"
              >
                無料で相談する
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => onNavigate('home')}
              className="text-slate-400 font-bold hover:text-stores-blue transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              ホームに戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
