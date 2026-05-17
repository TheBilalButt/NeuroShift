import { motion } from 'framer-motion';
import { Network, CheckCircle, RefreshCcw } from 'lucide-react';

export default function OptimizationEngine({ isOptimizing, onOptimize, result }) {
  return (
    <section className="relative z-10 w-full flex justify-center py-8" id="optimization-engine">
      <motion.button
        onClick={onOptimize}
        disabled={isOptimizing}
        whileHover={!isOptimizing ? { scale: 1.05 } : {}}
        whileTap={!isOptimizing ? { scale: 0.95 } : {}}
        className={`group relative rounded-full font-display font-bold text-lg tracking-wide transition-all duration-500 ${
          isOptimizing 
            ? 'w-64 h-16 bg-white/5 border border-white/10 cursor-wait shadow-none'
            : result
              ? 'w-64 h-16 bg-white/5 border border-brand-electric/50 text-white hover:bg-white/10 shadow-none'
              : 'w-72 h-16 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] text-white shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_80px_rgba(168,85,247,0.9)]'
        }`}
      >
        {/* Glowing Pulse Ring */}
        {!isOptimizing && !result && (
          <div className="absolute inset-0 rounded-full border-[3px] border-[#a855f7]/60 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 pointer-events-none" />
        )}
        
        {/* Highlight Shimmer */}
        {!isOptimizing && !result && (
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] transition-opacity" />
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center gap-3 relative z-10">
          {isOptimizing ? (
            <>
              <RefreshCcw className="animate-spin text-brand-cyan" size={24} />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-bright animate-pulse">
                Orchestrating Edge...
              </span>
            </>
          ) : result ? (
            <>
              <CheckCircle size={22} className="text-brand-electric group-hover:scale-110 transition-transform" />
              <span>Re-Initialize Engine</span>
            </>
          ) : (
            <>
              <Network size={24} className="group-hover:rotate-12 transition-transform" />
              <span>Launch Orchestrator</span>
            </>
          )}
        </div>
      </motion.button>
    </section>
  );
}
