import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function FullScreenHero() {
  return (
    <section className="relative w-full h-[calc(100vh-88px)] min-h-[700px] overflow-hidden bg-[#03040B] flex border-b border-white/5" id="hero-fullscreen">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-electric/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Massive Faint Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none overflow-hidden flex flex-col justify-center">
        <h1 className="text-[18vw] font-display font-black text-white/[0.03] tracking-tighter uppercase leading-none whitespace-nowrap">
          NEUROSHIFT
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center relative z-10 h-full">
        
        {/* Left Column - Big Animated Image */}
        <div className="w-full md:w-[50%] h-[40vh] md:h-[80vh] relative flex items-center justify-center mt-8 md:mt-0 order-2 md:order-1" style={{ transform: 'translateZ(0)' }}>
          <div 
            className="w-full h-full relative"
            style={{ 
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)', 
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
              transform: 'translateZ(0)'
            }}
          >
            <motion.img 
              src="/images/hero_glasses_portrait.png" 
              alt="AR Professional"
              animate={{ 
                scale: [1, 1.05, 1],
                x: [0, 15, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full object-cover object-center opacity-90"
              style={{ willChange: 'transform' }}
            />
          </div>
        </div>

        {/* Right Column - Text and CTA */}
        <div className="w-full md:w-[50%] flex flex-col justify-center h-[50vh] md:h-full relative z-20 md:pl-12 lg:pl-16 order-1 md:order-2">
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-display font-bold leading-[1.05] tracking-tighter mb-6 md:mb-8 drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#818CF8]">Optimize Smart.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#C084FC]">Save Energy.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#38BDF8]">
                Run Longer.
              </span>
            </h2>

            <div className="mb-10 pl-5 border-l-2 border-brand-electric/50">
              <p className="text-lg md:text-xl text-slate-300 font-body font-light tracking-wide leading-relaxed">
                Intelligent AI task orchestration for <span className="text-white font-medium">wearables.</span>
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('battery-control')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-bold text-sm transition-all shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] w-fit"
            >
              {/* Pulsing ring behind button */}
              <div className="absolute inset-0 rounded-full border-2 border-[#a855f7]/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 pointer-events-none" />
              
              <span className="relative z-10 tracking-widest uppercase text-xs">Initialize Engine</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <ChevronRight size={16} className="text-white group-hover:text-[#6366f1]" />
              </div>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
