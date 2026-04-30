import { motion } from 'motion/react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#f8fafc]">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50 -skew-x-12 transform translate-x-24 opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full w-fit mb-6">
            <ShieldCheck size={16} />
            <span className="text-lg font-bold uppercase tracking-wider">智慧健康照護創新領航</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
            以科技之光<br />
            <span className="text-teal-600">啟迪樂齡活力</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
            勝行科技致力於將 AI 創新技術與精準健康照護深度結合。我們不只研發設備，更是在打造溫暖的互動感，讓長輩在專業照護感中感受康復的喜悅。
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/30 flex items-center gap-2 group">
              探索智癒球
              <Zap size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-2xl font-bold text-lg hover:border-teal-600 hover:text-teal-600 transition-all">
              了解技術背書
            </button>
          </div>

          {/* Awards Row */}
          <div className="flex items-center gap-6 md:gap-12 opacity-80 border-t border-gray-200 pt-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-amber-500">
                <Award size={24} />
                <span className="font-bold">Platinum Award</span>
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest leading-relaxed">快樂動<br/>洗腎瘻管養護系統</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400">
                <Award size={24} />
                <span className="font-bold">Silver Award</span>
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest leading-relaxed">陶樂笛<br/>呼吸/吞嚥訓練系統</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400">
                <Award size={24} />
                <span className="font-bold">Silver Award</span>
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-widest leading-relaxed">好樂球<br/>雙手握球互動系統</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-[24px_24px_80px_rgba(0,0,0,0.1)] border-8 border-white">
            <img
              src="/introduction-image.png"
              alt="Sheng Shing Science Innovation"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Dashboard Popover Mockup */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-8 top-12 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-gray-500 uppercase">智慧監測中</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">30% MVC</div>
            <div className="text-[10px] text-gray-400 font-medium mb-4">Isometric 握拳安全區間</div>
            <div className="flex items-end gap-1 h-12">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <div key={i} className="flex-1 bg-teal-100 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
