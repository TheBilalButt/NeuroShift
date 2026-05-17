import { motion } from 'framer-motion';

const features = [
  {
    title: 'Adaptive AR Vision Engine',
    description: 'A revolutionary orchestration layer designed specifically for always-on visual intelligence without the massive power tax.',
    bullets: [
      'Seamless first-person environment detection',
      'Real-time spatial mapping powered by 0/1 Knapsack logic',
      'Zero latency edge-cloud task switching'
    ],
    image: '/images/ar_glasses_man.png',
    align: 'left'
  },
  {
    title: 'Multi-Sensor Lens Array Pipeline',
    description: 'Complex dual-camera setups generate massive data streams. NeuroShift intelligently routes these feeds to prevent device overheating.',
    bullets: [
      'Intelligently routes 8k video feeds directly to edge nodes',
      'Minimizes thermal throttling during intensive AR sessions',
      'Extends optical recording duration by 40%'
    ],
    image: '/images/lens_array.png',
    align: 'right'
  },
  {
    title: 'Micro-OLED Power Management',
    description: 'High-fidelity holographic displays consume massive amounts of battery. Our DP algorithm ensures the core UI always stays illuminated.',
    bullets: [
      'Preserves the 1800 nits Peak Perceived Brightness',
      'Automatically scales visual fidelity when battery is critical',
      'Synchronizes display refresh rates with task utility'
    ],
    image: '/images/prism_display.png',
    align: 'left'
  }
];

export default function HardwareIntegration() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#03040B] border-t border-white/5" id="hardware-integration">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-electric/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6"
          >
            Built for the Hardware of Tomorrow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-body max-w-3xl mx-auto"
          >
            NeuroShift integrates deeply with advanced AR optics and sensors, maximizing performance while mathematically guaranteeing your battery survives the day.
          </motion.p>
        </div>

        <div className="space-y-32">
          {features.map((feature, idx) => (
            <FeatureRow key={idx} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ feature, idx }) {
  const isLeft = feature.align === 'left';

  return (
    <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2"
      >
        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
          {feature.title}
        </h3>
        <p className="text-lg text-slate-400 font-body mb-8">
          {feature.description}
        </p>
        <ul className="space-y-4">
          {feature.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-brand-bright shadow-[0_0_10px_#60A5FA] shrink-0" />
              <span className="text-slate-300 font-medium text-lg leading-snug">{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Image Content */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-electric/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50" />
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-panel aspect-[4/3]">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={feature.image} 
            alt={feature.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </div>
      </motion.div>
    </div>
  );
}
