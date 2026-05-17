import { motion } from 'framer-motion';
import { Settings, Check, Zap } from 'lucide-react';

export default function TaskCard({ task, isEnabled, onToggle, onEdit, onDelete }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`relative glass-panel overflow-hidden cursor-pointer group ${
        isEnabled ? 'border-brand-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)]' : 'hover:border-white/20'
      }`}
      onClick={onToggle}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {isEnabled && (
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-primary to-brand-electric shadow-[0_0_15px_#8B5CF6] pointer-events-none" />
      )}

      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
            <Settings size={22} className={isEnabled ? "text-brand-bright" : "text-slate-400"} />
          </div>
          
          <div className="flex items-center gap-2">
            {onEdit && onDelete && (
              <div className="flex items-center gap-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={(e) => { e.stopPropagation(); onEdit(); }} className="p-1.5 rounded-md hover:bg-brand-glow/20 text-slate-400 hover:text-brand-glow transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
                <button onClick={(e) => { e.stopPropagation(); onDelete(); }} className="p-1.5 rounded-md hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            )}
            
            <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isEnabled 
                ? 'bg-brand-primary border-brand-primary shadow-[0_0_10px_#8B5CF6]' 
                : 'border-slate-600 group-hover:border-slate-400'
            }`}>
              {isEnabled && <Check size={14} className="text-white" />}
            </div>
          </div>
        </div>

        <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-brand-bright transition-colors">
          {task.name}
        </h3>
        <p className="text-sm text-slate-400 font-body mb-6 line-clamp-2">
          {task.description}
        </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <Zap size={14} className="text-brand-electric" />
            <span className="text-xs font-mono text-slate-300">Power: {task.battery_cost}%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Utility:</span>
            <span className="text-xs font-mono font-medium text-brand-glow">{task.utility_value} / 10</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
