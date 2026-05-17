import { motion } from 'framer-motion';
import { Glasses, Watch, Headset, Headphones, Hexagon } from 'lucide-react';

const wearables = [
  {
    title: 'Smart Glasses',
    icon: Glasses,
    examples: 'Meta AI Glasses, Apple Vision',
    features: ['Live translation', 'Face detection', 'Navigation', 'Object recognition'],
    color: 'from-[#3B82F6] to-[#8B5CF6]',
    shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]',
    delay: 0.1
  },
  {
    title: 'Smartwatches',
    icon: Watch,
    examples: 'Apple Watch, Galaxy Watch',
    features: ['Voice assistant', 'Health tracking', 'Gesture detection'],
    color: 'from-[#EC4899] to-[#8B5CF6]',
    shadow: 'shadow-[0_0_20px_rgba(236,72,153,0.2)]',
    delay: 0.2
  },
  {
    title: 'AR / VR Headsets',
    icon: Headset,
    examples: 'Vision headsets, Mixed reality',
    features: ['Hand tracking', 'Environment detection', 'Navigation'],
    color: 'from-[#F97316] to-[#EF4444]',
    shadow: 'shadow-[0_0_20px_rgba(249,115,22,0.2)]',
    delay: 0.3
  },
  {
    title: 'AI Earbuds',
    icon: Headphones,
    examples: 'Smart AI earbuds',
    features: ['Real time translation', 'Voice assistant', 'Noise analysis'],
    color: 'from-[#10B981] to-[#3B82F6]',
    shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]',
    delay: 0.4
  },
  {
    title: 'Future Wearables',
    icon: Hexagon,
    examples: 'AI rings, smart clothing, lenses',
    features: ['Neural interfacing', 'Contextual awareness'],
    color: 'from-[#94A3B8] to-[#64748B]',
    shadow: 'shadow-[0_0_20px_rgba(148,163,184,0.2)]',
    delay: 0.5
  }
];

export default function WearablesShowcase() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#03040B] border-y border-white/5 my-24" id="wearables-showcase">
      {/* Neurosity-style Flowing Energy Lines */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[400px] pointer-events-none opacity-60">
        <svg viewBox="0 0 1000 400" className="w-full h-full" preserveAspectRatio="none">
          {/* Red/Orange Flow */}
          <motion.path 
            d="M0,200 C200,200 300,50 500,50 C700,50 800,200 1000,200" 
            stroke="url(#grad-red)" strokeWidth="3" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Blue Flow */}
          <motion.path 
            d="M0,200 C200,200 300,350 500,350 C700,350 800,200 1000,200" 
            stroke="url(#grad-blue)" strokeWidth="3" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
          />
          {/* Purple Center Flow */}
          <motion.path 
            d="M0,200 C300,200 400,200 500,200 C600,200 700,200 1000,200" 
            stroke="url(#grad-purple)" strokeWidth="2" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
          />
          
          <defs>
            <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0" />
              <stop offset="50%" stopColor="#F97316" stopOpacity="1" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="50%" stopColor="#C084FC" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central Vision Statement */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-[#A855F7] via-[#3B82F6] to-transparent shadow-[0_0_80px_rgba(139,92,246,0.25)] relative group transition-all duration-700 hover:shadow-[0_0_120px_rgba(139,92,246,0.45)]"
          >
            <div className="bg-[#050816] rounded-[calc(2.5rem-2px)] p-10 md:p-16 relative z-10 overflow-hidden h-full w-full">
              {/* Inner glowing edge shadow */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(59,130,246,0.15)] rounded-[calc(2.5rem-2px)] pointer-events-none group-hover:shadow-[inset_0_0_80px_rgba(168,85,247,0.3)] transition-shadow duration-700" />
              
              {/* Ambient blur behind text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/10 blur-[80px] pointer-events-none transition-all duration-700 opacity-50 group-hover:opacity-100 group-hover:scale-110" />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-electric/20 flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                <Glasses size={40} className="text-brand-bright" />
              </motion.div>
              <h2 className="text-2xl md:text-4xl font-display font-medium text-white leading-tight tracking-tight">
                "NeuroShift is designed mainly for <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-bright to-brand-electric">AI powered smart glasses</span> because they run many AI tasks simultaneously and face serious battery limitations."
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Wearables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {wearables.slice(0, 3).map((item, idx) => (
            <WearableCard key={idx} item={item} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {wearables.slice(3, 5).map((item, idx) => (
            <WearableCard key={idx} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function WearableCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: item.delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass-panel p-8 border-t border-white/10 group cursor-default relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] ${item.shadow}`}>
          <div className="w-full h-full bg-[#0B1120] rounded-xl flex items-center justify-center">
            <Icon size={24} className="text-white" />
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-white tracking-wide">{item.title}</h3>
          <p className="text-xs font-mono text-slate-400 mt-1">{item.examples}</p>
        </div>
      </div>

      <ul className="space-y-3 relative z-10">
        {item.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
