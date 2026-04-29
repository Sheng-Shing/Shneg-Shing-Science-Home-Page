import { motion } from 'motion/react';
import { Menu, X, HeartPulse } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'AI 智癒', href: '#aigrip' },
    { name: '智慧產品', href: '#products' },
    { name: '科學實證', href: '#science' },
    { name: '數位照護', href: '#caregiver' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <img src="/logo.png" alt="Sheng Shing Science Logo" className="w-12 h-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-gray-900 leading-none">勝行科技</span>
            <span className="text-[10px] uppercase font-semibold text-teal-600 tracking-[0.2em]">Sheng Shing Science</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-md active:scale-95">
            聯絡我們
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-6 py-8 flex flex-col gap-6 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-teal-600 text-white w-full py-4 rounded-xl text-md font-bold shadow-teal-600/20 shadow-lg">
            聯絡我們
          </button>
        </motion.div>
      )}
    </nav>
  );
}
