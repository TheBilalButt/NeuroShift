import { motion } from 'framer-motion';
import { ChevronRight, Zap, BrainCircuit, Activity } from 'lucide-react';

export default function HeroShowcase() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden relative shadow-[0_0_80px_rgba(139,92,246,0.1)] border border-white/5 bg-gradient-to-br from-[#161B28] to-[#050816] min-h-[600px] flex flex-col md:flex-row"
      >
        {/* Left Column - Content */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-20">
          
          {/* Main Headline */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-light italic">Compute Smarter.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">React Faster.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-primary font-bold">
                Last Longer.
              </span>
            </h2>
          </div>
        </div>

        {/* Right Column - Image & Overlays */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full overflow-hidden rounded-r-[2.5rem] md:rounded-r-[3rem]">
          {/* Subtle gradient overlay to blend image into the dark container */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#161B28] via-transparent to-transparent z-10 hidden md:block w-32" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent z-10 md:hidden h-32 bottom-0 top-auto" />
          
          <motion.img 
            src="/images/hero_glasses_portrait.png" 
            alt="Futuristic Smart Glasses Portrait"
            animate={{ 
              scale: [1.05, 1.1, 1.05],
              x: [0, -15, 0],
              y: [0, 10, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Floating Glassmorphism Cards (Dribbble Style) */}
          <div className="absolute bottom-8 right-8 z-20 flex items-end gap-3">
            {/* Left Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center shadow-2xl w-32 h-32"
            >
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono mb-2">Neuro OS v2</span>
              <div className="p-3 bg-brand-primary/10 rounded-full">
                <BrainCircuit size={24} className="text-brand-bright" />
              </div>
            </motion.div>
            
            {/* Right Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center shadow-2xl w-32 h-32"
            >
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono mb-1">Baseline</span>
              <span className="text-4xl font-display font-light text-white tracking-tighter">
                65<span className="text-xl text-slate-500">%</span>
              </span>
              <span className="text-[10px] border border-white/10 rounded-full px-2 py-0.5 mt-2 text-slate-300">Power</span>
            </motion.div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
