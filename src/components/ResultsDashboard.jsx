import { motion } from 'framer-motion';
import { Cpu, CloudLightning, ShieldCheck, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function ResultsDashboard({ result }) {
  if (!result) return null;

  return (
    <section className="relative z-10 w-full" id="results-dashboard">
      <div className="text-center mb-12">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-2xl mb-4 border border-brand-primary/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
        >
          <ShieldCheck size={32} className="text-brand-primary" />
        </motion.div>
        <h2 className="text-4xl font-display font-bold text-white tracking-tight mb-2">Orchestration Complete</h2>
        <div className="flex justify-center gap-6 text-sm font-mono mt-4">
          <span className="flex items-center gap-2 text-slate-400">
            Max Utility: <span className="text-brand-electric font-bold text-base">{result.maxUtility}</span>
          </span>
          <span className="flex items-center gap-2 text-slate-400">
            Battery Used: <span className="text-brand-primary font-bold text-base">{result.totalCost}%</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-panel p-8 border-t-4 border-t-brand-primary"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <h3 className="text-xl font-display font-semibold flex items-center gap-3 text-white">
              <Cpu className="text-brand-primary" />
              Local Processing
            </h3>
            <span className="text-[10px] font-mono tracking-widest px-2 py-1 bg-brand-primary/20 text-brand-primary rounded">ON-DEVICE</span>
          </div>

          <div className="space-y-4">
            {result.selectedTasks.length === 0 ? (
              <p className="text-slate-500 font-body italic text-sm py-4">No tasks allocated for local processing due to strict battery constraints.</p>
            ) : (
              result.selectedTasks.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="text-brand-primary" />
                    <span className="font-medium text-slate-200">{item.name}</span>
                  </div>
                  <div className="flex gap-4 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Zap size={12}/> {item.battery_cost}%</span>
                    <span className="text-brand-glow">UTL {item.utility_value}</span>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-panel p-8 border-t-4 border-t-brand-electric"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <h3 className="text-xl font-display font-semibold flex items-center gap-3 text-white">
              <CloudLightning className="text-brand-electric" />
              Cloud Offloaded
            </h3>
            <span className="text-[10px] font-mono tracking-widest px-2 py-1 bg-brand-electric/20 text-brand-electric rounded">REMOTE</span>
          </div>

          <div className="space-y-4">
            {result.rejectedTasks.length === 0 ? (
              <p className="text-slate-500 font-body italic text-sm py-4">All requested tasks are running locally.</p>
            ) : (
              result.rejectedTasks.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex items-center justify-between p-4 rounded-xl bg-transparent border border-white/5 opacity-70"
                >
                  <div className="flex items-center gap-3">
                    <CloudLightning size={16} className="text-slate-500" />
                    <span className="font-medium text-slate-400">{item.name}</span>
                  </div>
                  <div className="flex gap-4 font-mono text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Zap size={12}/> {item.battery_cost}%</span>
                    <span>UTL {item.utility_value}</span>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CheckCircleIcon({ className }) {
  return (
    <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
