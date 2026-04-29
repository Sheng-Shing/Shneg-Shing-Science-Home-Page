import { HeartPulse, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 underline-offset-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-teal-900/20">
                <HeartPulse size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-white leading-none">勝行科技</span>
                <span className="text-[12px] uppercase font-semibold text-teal-500 tracking-[0.2em] mt-1">Victory Tech</span>
              </div>
            </div>
            <p className="max-w-sm text-gray-400 text-lg leading-relaxed">
              全球領航的智慧照護品牌，以創新 AI 技術改善健康願景，為樂齡生活注入科技活力。
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-teal-400">快速連結</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#aigrip" className="hover:text-white transition-colors">智癒球專區</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">產品生態</a></li>
              <li><a href="#science" className="hover:text-white transition-colors">科學實證</a></li>
              <li><a href="#caregiver" className="hover:text-white transition-colors">數位照護師</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-teal-400">聯絡資訊</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-center gap-3"><Mail size={18} /> contact@victorytech.com</li>
              <li className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-600 transition-all"><Linkedin size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-600 transition-all"><Github size={20} /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-medium">
          <p>© 2026 勝行科技 Victory Tech. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
