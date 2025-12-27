
import React from 'react';

export const COLORS = {
  primary: '#0066FF',
  secondary: '#333333',
  background: '#FFFFFF',
  accent: '#F3F4F6',
  storesBlue: '#0066FF',
  storesLightBlue: '#E6F0FF',
};

export const PROJECTS = [
  {
    id: '1',
    title: 'ミニマリスト eコマースプラットフォーム',
    category: 'フルスタック開発',
    description: 'アクセシビリティと速度に焦点を当てた、ReactとNode.jsで構築された高性能なオンラインストア。',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js']
  },
  {
    id: '2',
    title: 'SaaSダッシュボードデザイン',
    category: 'UI/UXデザイン',
    description: '小規模ビジネスオーナーが在庫と売上を追跡するためのインタラクティブな管理ダッシュボード。',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tech: ['Figma', 'React', 'Recharts']
  },
  {
    id: '3',
    title: 'AIビジネスアドバイザー',
    category: 'AI連携・導入',
    description: '市場トレンドを分析し、ビジネスの成長に向けた推奨事項を提供するAI搭載ツール。',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tech: ['Gemini API', 'Next.js', 'Python']
  }
];

export const TESTIMONIALS = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    quote: '実際に顧客数が増えたことはもちろん、実店舗利用者のネット利用が促された結果、ネットショップの売上は倍増しました。',
    author: '株式会社ウッドベリーコーヒー 木原さま',
    brand: 'WOODBERRY COFFEE'
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    quote: '1社でアプリ開発〜顧客管理、CRM機能まで完結できる。これからの時代に合わせた機能追加への期待感がありました。',
    author: '株式会社マークスアンドウェブ 小佐野さま・白石さま',
    brand: 'MARKS & WEB'
  },
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
    quote: '会員プログラムのリニューアル前後で来店予約件数は約3倍に。特にロイヤルカスタマーの来店頻度が大きく伸長しました。',
    author: '株式会社シップス 三瀬さま・小宮さま',
    brand: 'SHIPS'
  }
];

export const ICONS = {
  Shop: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  Cash: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Calendar: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Globe: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
};
