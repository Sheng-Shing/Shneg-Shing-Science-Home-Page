import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ChevronRight, Award } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-teal-600 font-bold uppercase tracking-[0.3em] text-sm block mb-4">Solution Ecosystem</span>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">多功能智慧照護系統</h2>
          </div>
          <p className="max-w-md text-gray-500 text-lg">
            從洗腎護理到呼吸吞嚥訓練，全方位守護高齡生活。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {product.award && (
                  <div className={`absolute top-6 left-6 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-md shadow-lg ${
                    product.award === 'Platinum' 
                      ? 'bg-amber-100/90 text-amber-700 border border-amber-200' 
                      : 'bg-slate-100/90 text-slate-700 border border-slate-200'
                  }`}>
                    <Award size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">{product.award} Award</span>
                  </div>
                )}
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">{product.name}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.chineseName} <span className="text-gray-400 font-medium">App</span></h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-bold uppercase">
                        {f}
                      </span>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-4 bg-gray-50 text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-teal-600 group-hover:text-white transition-all">
                    詳細產品資訊
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
