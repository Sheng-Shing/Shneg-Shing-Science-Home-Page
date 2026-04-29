import { motion } from 'motion/react';
import { MessageSquareText, Shield, Sparkles } from 'lucide-react';

export default function Caregiver() {
  return (
    <section id="caregiver" className="py-24 bg-gradient-to-br from-teal-600 to-blue-700 overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square max-w-[500px] mx-auto bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 border border-white/20 shadow-2xl relative overflow-hidden group">
               <img 
                 src="https://picsum.photos/seed/avatar5/600/600" 
                 alt="AI Caregiver Liao Xiao Q" 
                 className="w-full h-full object-cover rounded-[2.5rem] group-hover:scale-105 transition-transform duration-500"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-2xl shadow-xl"
               >
                 <div className="flex items-center gap-4 mb-3">
                   <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                     <Sparkles size={16} />
                   </div>
                   <span className="font-bold text-gray-900">廖小Q 助理</span>
                 </div>
                 <p className="text-sm text-gray-500 leading-relaxed font-medium">
                   「早安！今天的握球練習要開始囉，讓我們一起挑戰新關卡吧！」
                 </p>
               </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-white order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full w-fit mb-8 border border-white/20">
              <Sparkles size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">AI Digital Companion</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              親和形象：數位照護師「廖小Q」
            </h2>
            
            <p className="text-xl text-teal-50/80 mb-12 leading-relaxed">
              透過擬人化的互動，大幅降低長輩對電子產品的排斥感，並提升日常復健的服從性。廖小Q 不只是照護，更是暖心的陪伴。
            </p>

            <div className="grid gap-6">
              {[
                { icon: <MessageSquareText />, title: '自然語言互動', desc: '口語化的引導與鼓勵，讓復健更輕鬆' },
                { icon: <Shield />, title: '數據隱私保護', desc: '全方位的雲端加密與個人化管理系統' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white/10 rounded-3xl border border-white/10 hover:bg-white/15 transition-all">
                  <div className="w-14 h-14 bg-white text-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-sm text-teal-50/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
