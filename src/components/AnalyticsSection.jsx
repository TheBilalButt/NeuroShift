import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, Zap, TrendingUp } from 'lucide-react';

export default function AnalyticsSection({ result, enabledTasks, batteryCapacity, totalBatteryCostAll, totalUtilityAll }) {
  if (!result) return null;

  const rawBatteryCost = totalBatteryCostAll;
  const optimizedBatteryCost = result.totalCost;

  const batteryComparisonData = [
    { name: 'Raw', cost: rawBatteryCost },
    { name: 'Optimized', cost: optimizedBatteryCost },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6'];

  const distributionData = [
    { name: 'Local', value: result.selectedTasks.length },
    { name: 'Cloud', value: result.rejectedTasks.length }
  ];

  const utilityRetentionPercentage = totalUtilityAll > 0 
    ? Math.round((result.maxUtility / totalUtilityAll) * 100) 
    : 0;

  const estimatedRuntimeRaw = 0.8;
  const runtimeMultiplier = rawBatteryCost / (optimizedBatteryCost || 1);
  const estimatedRuntimeOpt = (estimatedRuntimeRaw * runtimeMultiplier).toFixed(1);

  return (
    <section className="relative z-10 w-full mt-12" id="analytics-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">Optimization Telemetry</h2>
        <p className="text-slate-400 text-sm mt-2 font-body">Real-time performance metrics comparing raw execution vs. intelligent orchestration.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Battery Usage Comparison Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-6">
            <Zap size={18} className="text-brand-electric" />
            <h3 className="text-sm font-semibold text-slate-200">Battery Depletion Projection</h3>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={batteryComparisonData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }} barSize={32}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                  contentStyle={{ backgroundColor: '#0B1120', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                />
                <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                  {batteryComparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#334155' : '#8B5CF6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Utility Retention Gauge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-6 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <Activity size={18} className="text-brand-cyan" />
            <h3 className="text-sm font-semibold text-slate-200">Utility Retention</h3>
          </div>
          
          <div className="relative w-48 h-48 mt-8">
            <svg className="w-full h-full transform -rotate-180" viewBox="0 0 100 100">
              <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" strokeLinecap="round" />
              <motion.path 
                initial={{ strokeDasharray: "125.6", strokeDashoffset: "125.6" }}
                animate={{ strokeDashoffset: 125.6 - (125.6 * utilityRetentionPercentage) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M 10 50 A 40 40 0 0 1 90 50" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="8" 
                strokeLinecap="round" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
              <span className="text-4xl font-display font-bold text-white">{utilityRetentionPercentage}%</span>
              <span className="text-[10px] text-slate-500 font-mono mt-1 uppercase tracking-wider">Efficiency</span>
            </div>
          </div>
        </motion.div>

        {/* Task Distribution Pie */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-6"
        >
          <h3 className="text-sm font-semibold text-slate-200 mb-6">Task Routing Distribution</h3>
          <div className="h-48 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B1120', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
              <span className="text-slate-400">Local <span className="text-white ml-1">{distributionData[0].value}</span></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
              <span className="text-slate-400">Cloud <span className="text-white ml-1">{distributionData[1].value}</span></span>
            </div>
          </div>
        </motion.div>

        {/* Runtime Projection */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={18} className="text-brand-glow" />
            <h3 className="text-sm font-semibold text-slate-200">Runtime Projection</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Multiplier</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-glow">
                {runtimeMultiplier.toFixed(2)}x
              </span>
            </div>
            <p className="text-slate-400 text-sm font-body leading-relaxed">
              Estimated runtime improved from <span className="text-white font-medium">{estimatedRuntimeRaw}h</span> to <span className="text-brand-bright font-medium">{estimatedRuntimeOpt}h</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-6 border-t border-white/5 pt-4">
            <div className="text-center">
              <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-wider">Saved</p>
              <p className="font-mono text-brand-electric font-bold">{Math.max(0, rawBatteryCost - optimizedBatteryCost)}%</p>
            </div>
            <div className="text-center border-l border-white/5">
              <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-wider">Utility</p>
              <p className="font-mono text-brand-glow font-bold">{result.maxUtility}</p>
            </div>
            <div className="text-center border-l border-white/5">
              <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-wider">Capacity</p>
              <p className="font-mono text-brand-primary font-bold">{batteryCapacity}%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
