import { motion } from 'motion/react';
import { BrainCircuit, Eye, Target, Activity } from 'lucide-react';

export default function AIGripShowcase() {
  const modules = [
    {
      icon: <BrainCircuit size={32} />,
      title: 'AI Agent 數位照護師',
      desc: '具備感知與推理能力的決策引擎，根據歷史數據自主規劃「照護處方」。',
      color: 'bg-blue-500'
    },
    {
      icon: <Eye size={32} />,
      title: 'GenAI 情境誘導',
      desc: '將抽象處方轉譯為趣味場景如「海島潛水捕魚」，提升復健服從性。',
      color: 'bg-teal-500'
    },
    {
      icon: <Target size={32} />,
      title: '雙軌監測與精準康復',
      desc: '毫秒級監測技術，精確引導使用者維持在 30% MVC 安全區間。',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="aigrip" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-600 font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            Core Technology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            AIGrip 智癒球核心模組
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 transition-all group hover:shadow-2xl hover:shadow-teal-500/5"
            >
              <div className={`${m.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform`}>
                {m.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{m.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Visualization Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 relative p-1 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="bg-slate-950 rounded-[1.4rem] p-8 md:p-12 overflow-hidden relative">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 text-white/60">
                   <Activity size={24} className="text-teal-400" />
                   <span className="font-mono text-sm uppercase tracking-widest leading-none">Real-time Decision Engine</span>
                </div>
                <h4 className="text-3xl font-bold text-white leading-tight">
                  毫米級精準度，<br />
                  <span className="text-teal-400">客製化您的健康路徑</span>
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-[10px] text-teal-400 uppercase font-bold mb-1">Monitoring Delay</div>
                    <div className="text-2xl text-white font-mono">0.05ms</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-[10px] text-teal-400 uppercase font-bold mb-1">AI Recommendation</div>
                    <div className="text-2xl text-white font-mono">Dynamic</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-md relative aspect-square">
                 {/* Visual decoration */}
                 <div className="absolute inset-0 bg-teal-500/20 blur-[100px] rounded-full animate-pulse" />
                 <div className="relative z-10 w-full h-full border border-teal-500/30 rounded-full flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-teal-500/40 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                       <div className="w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_20px_#2dd4bf] absolute -top-2" />
                    </div>
                    <div className="absolute flex flex-col items-center">
                      <div className="text-5xl font-mono text-white mb-2">30%</div>
                      <div className="text-xs text-teal-400 uppercase font-bold tracking-widest">Safe Zone Status</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
