
import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTopAndNavigate = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate(page);
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <button onClick={() => scrollToTopAndNavigate('home')} className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-[#0066FF] rounded-lg flex items-center justify-center font-bold text-white text-xl">U</div>
              <span className="text-2xl font-black tracking-tight">U STORE</span>
            </button>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-medium">
              あなたのビジネスに、テクノロジーの力を。
              フロントエンド、バックエンド、AI開発まで一貫したソリューションを提供します。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors">
                <span className="sr-only">X</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8">サービス</h4>
            <ul className="space-y-6 text-slate-400">
              <li><button onClick={() => scrollToTopAndNavigate('services_shop')} className="hover:text-white transition-colors text-left font-medium">ネットショップ制作</button></li>
              <li><button onClick={() => scrollToTopAndNavigate('services_system')} className="hover:text-white transition-colors text-left font-medium">システム受託開発</button></li>
              <li><button onClick={() => scrollToTopAndNavigate('services_ai')} className="hover:text-white transition-colors text-left font-medium">AIコンサルティング</button></li>
              <li><button onClick={() => scrollToTopAndNavigate('services_design')} className="hover:text-white transition-colors text-left font-medium">UI/UXデザイン</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8">サポート</h4>
            <ul className="space-y-6 text-slate-400">
              <li><button onClick={() => scrollToTopAndNavigate('support_faq')} className="hover:text-white transition-colors text-left font-medium">よくある質問</button></li>
              <li><button onClick={() => scrollToTopAndNavigate('consultation_form')} className="hover:text-white transition-colors text-left font-medium">無料相談・お問い合わせ</button></li>
              <li><button onClick={() => scrollToTopAndNavigate('support_privacy')} className="hover:text-white transition-colors text-left font-medium">プライバシーポリシー</button></li>
              <li><button onClick={() => scrollToTopAndNavigate('support_terms')} className="hover:text-white transition-colors text-left font-medium">利用規約</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 U STORE Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <button className="cursor-pointer hover:text-white font-medium">運営会社</button>
            <button className="cursor-pointer hover:text-white font-medium">採用情報</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
