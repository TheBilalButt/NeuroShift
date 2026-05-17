import { useState } from 'react';
import { motion } from 'framer-motion';
import { BatteryMedium, Clock, AlertCircle } from 'lucide-react';

export default function BatteryControl({ capacity, setCapacity }) {
  const [isDragging, setIsDragging] = useState(false);

  // Simple state determination based on capacity
  const getPowerState = (cap) => {
    if (cap > 80) return { label: 'Optimal', color: '#60A5FA' }; // Bright Blue
    if (cap > 30) return { label: 'Moderate', color: '#B2A4FF' }; // Light Purple
    return { label: 'Critical', color: '#EF4444' }; // Red
  };

  const state = getPowerState(capacity);
  const estimatedRuntime = ((18 * capacity) / 100).toFixed(1); // 18 hours at 100%

  return (
    <section className="w-full max-w-[1000px] mx-auto mb-16 relative z-10" id="battery-control">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-6 sm:p-8 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Side: Circular Ring */}
        <motion.div 
          animate={{ scale: isDragging ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex-shrink-0 flex items-center justify-center"
        >
          <svg className="w-[180px] h-[180px] transform -rotate-90">
            {/* Background Ring */}
            <circle 
              cx="90" cy="90" r="76" 
              stroke="rgba(255,255,255,0.03)" 
              strokeWidth="12" 
              fill="none" 
            />
            {/* Active Ring */}
            <motion.circle
              cx="90" cy="90" r="76"
              stroke={state.color} // Dynamic color
              strokeWidth="12"
              fill="none"
              strokeDasharray="477.5" // 2 * pi * 76
              strokeDashoffset={477.5 - (477.5 * capacity) / 100}
              className={`transition-all duration-300 ease-out ${isDragging ? 'drop-shadow-[0_0_20px_rgba(167,139,250,0.8)]' : 'drop-shadow-[0_0_10px_rgba(167,139,250,0.5)]'}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-4xl font-bold font-display text-white">{capacity}%</span>
            <span className="text-[11px] font-mono tracking-[0.2em] mt-1 text-[#C4B5FD] uppercase">
              {state.label}
            </span>
          </div>
        </motion.div>

        {/* Right Side: Slider & Info Pills */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-2 mb-4">
            <BatteryMedium size={16} className="text-[#C4B5FD]" />
            <span className="text-sm font-body text-slate-300">Adjust Battery Allocation</span>
          </div>

          <motion.div 
            animate={{ scale: isDragging ? 1.01 : 1 }}
            className="relative pt-2 pb-6"
          >
            <div className="relative z-10 flex items-center">
              <input
                type="range"
                min="5"
                max="100"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                className="w-full h-1.5 bg-[#1e293b] rounded-full appearance-none outline-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #38BDF8 0%, #38BDF8 ${capacity}%, #1e293b ${capacity}%, #1e293b 100%)`
                }}
              />
            </div>
            
            <div className="absolute -bottom-1 left-0 text-[10px] text-slate-500 font-mono">5%</div>
            <div className="absolute -bottom-1 right-0 text-[10px] text-slate-500 font-mono">100%</div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* EST. RUNTIME Pill */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-5 py-3"
            >
              <Clock size={18} className="text-[#A78BFA] flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">EST. RUNTIME</span>
                <span className="text-sm font-semibold text-[#C4B5FD]">{estimatedRuntime} hrs</span>
              </div>
            </motion.div>

            {/* POWER STATE Pill */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-5 py-3"
            >
              <AlertCircle size={18} className="text-[#A78BFA] flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">POWER STATE</span>
                <span className="text-sm font-semibold text-[#C4B5FD]">{state.label}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
