import { motion } from 'motion/react';
import { RESEARCH } from '../constants';
import { BookOpen, Map, Wind, Thermometer } from 'lucide-react';

export default function Science() {
  const icons = [<BookOpen />, <Thermometer />, <Wind />, <Map />];

  return (
    <section id="science" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-teal-600 font-bold uppercase tracking-[0.3em] text-sm block mb-4">Scientific Evidence</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              強化專業技術背書，<br />打造可實證的健康路徑
            </h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
              我們的研發邏輯深耕於國際頂尖研究與生理數據分析，從 JAMA 握力指標到呼吸生理調節，每一項功能都具備科學基礎。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-teal-50 rounded-2xl border border-teal-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm">
                  <Map size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">空間訓練與 VR 整合</h4>
                  <p className="text-sm text-gray-600">結合模擬步行導航進行記憶訓練，延緩失智風險。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {RESEARCH.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/5 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4 text-teal-600">
                  <span className="p-2 bg-teal-50 rounded-lg">{icons[i]}</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{item.citation}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
