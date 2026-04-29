/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  chineseName: string;
  description: string;
  features: string[];
  award?: 'Platinum' | 'Silver';
  image: string;
}

export interface ResearchCard {
  id: string;
  title: string;
  citation: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'happy-motion',
    name: 'Happy Motion',
    chineseName: '快樂動',
    description: '智慧洗腎握球監測系統，專為洗腎病友設計，結合語音提醒與雲端數據功能。',
    features: ['自動紀錄握球強度', '智慧語音復健提醒', '雲端紀錄自動寄送', '客製化復健數據'],
    award: 'Platinum',
    image: 'https://picsum.photos/seed/dialysis/800/600',
  },
  {
    id: 'happy-flute',
    name: 'Happy Flute',
    chineseName: '陶樂笛',
    description: '呼吸與吞嚥功能訓練系統，透過吹奏練習強化肺部與口腔肌肉。',
    features: ['五種樂器音效', '自動轉調功能', '互動式遊戲介面', '吸入鼻源性一氧化氮模擬'],
    award: 'Silver',
    image: 'https://picsum.photos/seed/flute/800/600',
  },
  {
    id: 'happy-ball',
    name: 'Happy Ball',
    chineseName: '好樂球',
    description: '認知與互動智慧球，結合趣味遊戲如「魷魚遊戲」、「節奏練習」達到延緩失智的效果。',
    features: ['多款 App 互動遊戲', '節奏與反應訓練', '延緩失智科學設計', '輕巧便攜與高續航'],
    award: 'Silver',
    image: 'https://picsum.photos/seed/ball/800/600',
  },
];

export const RESEARCH: ResearchCard[] = [
  {
    id: 'dementia',
    title: '失智預防與握力關係',
    citation: 'Journal of the American Medical Association (JAMA)',
    description: '研究指出握力強弱是失智症風險的重要指標，定期握力訓練有助於維持大腦認知功能。',
  },
  {
    id: 'blood-pressure',
    title: '等長握力訓練與血壓控制',
    citation: 'Isometric Handgrip Training Studies',
    description: '說明等長握力訓練（Isometric Handgrip）在不需藥物的情況下可有效降低血壓，維護心血管健康。',
  },
  {
    id: 'respiratory',
    title: '鼻源性一氧化氮與肺功能調節',
    citation: 'Respiratory Physiology & Neurobiology',
    description: '鼻腔產生的 NO 對肺血管有舒張作用，改善通氣血流比例，「陶樂笛」研發即基於此調節邏輯。',
  },
];
