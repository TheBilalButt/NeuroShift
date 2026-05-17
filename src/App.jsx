import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopNav from './components/TopNav';
import FullScreenHero from './components/FullScreenHero';
import BatteryControl from './components/BatteryControl';
import WearablesShowcase from './components/WearablesShowcase';
import HardwareIntegration from './components/HardwareIntegration';
import TaskGrid from './components/TaskGrid';
import OptimizationEngine from './components/OptimizationEngine';
import ResultsDashboard from './components/ResultsDashboard';
import AnalyticsSection from './components/AnalyticsSection';
import { useKnapsack } from './hooks/useKnapsack';

export default function App() {
  const {
    batteryCapacity,
    setBatteryCapacity,
    enabledTaskIds,
    toggleTask,
    addTask,
    updateTask,
    deleteTask,
    result,
    isOptimizing,
    optimize,
    allTasks,
    enabledTasks,
    totalBatteryCostAll,
    totalUtilityAll,
  } = useKnapsack();

  // Smooth scroll logic removed so the header and battery controls don't disappear
  useEffect(() => {
    // Only update result state without scrolling
  }, [result, isOptimizing]);

  return (
    <main className="relative min-h-screen bg-[#050816] selection:bg-brand-primary/30 text-slate-50 font-body overflow-x-hidden">
      {/* Immersive Animated Background Layers */}
      <div className="bg-mesh"></div>
      
      {/* Animated glow orbs using Framer Motion */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="glow-orb bg-brand-primary/20 w-[600px] h-[600px] top-[-10%] left-[-10%]"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 40, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="glow-orb bg-brand-electric/15 w-[800px] h-[800px] bottom-[-20%] right-[-10%]"
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <TopNav />
        <FullScreenHero />

        <WearablesShowcase />
        <HardwareIntegration />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 pb-24">
            <BatteryControl
              capacity={batteryCapacity}
              setCapacity={setBatteryCapacity}
            />

            <TaskGrid
              tasks={allTasks}
              enabledTaskIds={enabledTaskIds}
              toggleTask={toggleTask}
              addTask={addTask}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />

            <OptimizationEngine
              isOptimizing={isOptimizing}
              onOptimize={optimize}
              result={result}
            />

            <AnimatePresence>
              {result && !isOptimizing && (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-24"
                >
                  <ResultsDashboard result={result} />
                  <AnalyticsSection
                    result={result}
                    enabledTasks={enabledTasks}
                    batteryCapacity={batteryCapacity}
                    totalBatteryCostAll={totalBatteryCostAll}
                    totalUtilityAll={totalUtilityAll}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <footer className="py-12 text-center border-t border-white/5 mt-16">
            <p className="text-slate-500 font-mono text-sm tracking-wider">
              NEUROSHIFT © 2026
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
