import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function HeroHeader() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden flex flex-col items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[140px] font-bold tracking-tighter text-[#B2A4FF] leading-none mb-6 drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]"
          style={{ letterSpacing: '-0.04em' }}
        >
          Neuro Shift
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-lg sm:text-xl md:text-2xl text-slate-200 font-display font-medium tracking-wide"
        >
          Adaptive AI Task Orchestration for Energy Optimized Wearable Systems
        </motion.p>
      </motion.div>
    </section>
  );
}
