/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIGripShowcase from './components/AIGripShowcase';
import Products from './components/Products';
import Science from './components/Science';
import Caregiver from './components/Caregiver';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-teal-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-600 z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <AIGripShowcase />
        <Products />
        <Science />
        <Caregiver />
      </main>

      <Footer />
    </div>
  );
}
