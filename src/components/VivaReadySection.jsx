import { motion } from 'framer-motion';
import { Lightbulb, Mic, FileText } from 'lucide-react';

export default function VivaReadySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full py-8 mt-4 mb-8"
      id="viva-cheat-sheet"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <Lightbulb size={20} className="text-blue-400" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-white">
          Viva Cheat-Sheet
        </h2>
      </div>

      <div className="glass-card p-6 md:p-8 bg-zinc-900/30">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="mt-1 flex-shrink-0">
              <Mic size={18} className="text-indigo-400" />
            </div>
            <div>
              <h4 className="text-zinc-200 font-semibold mb-1">How does your project apply DAA principles?</h4>
              <p className="text-zinc-400 text-sm font-body leading-relaxed">
                "Our project directly applies the 0/1 Knapsack Dynamic Programming algorithm to solve a real-world resource allocation problem. Instead of literal weights and values, we use <strong>Battery Consumption (Weight)</strong> and <strong>Task Importance/Utility (Value)</strong>. The DP table ensures we find the mathematical maximum utility for the wearable without exceeding the user's available battery budget."
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 flex-shrink-0">
              <FileText size={18} className="text-blue-400" />
            </div>
            <div>
              <h4 className="text-zinc-200 font-semibold mb-1">Why not use a Greedy Approach?</h4>
              <p className="text-zinc-400 text-sm font-body leading-relaxed">
                "A greedy approach (like sorting by utility-to-battery ratio) is faster <span className="font-mono text-[10px] bg-zinc-800 px-1 rounded text-zinc-300">O(n log n)</span> but fails to find the global optimum in the 0/1 Knapsack problem because we cannot take fractional parts of an AI task. The DP approach guarantees the absolute optimal allocation, which is critical for system stability, taking <span className="font-mono text-[10px] bg-zinc-800 px-1 rounded text-zinc-300">O(n * W)</span> time and space."
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="mt-1 flex-shrink-0">
              <Zap size={18} className="text-purple-400" />
            </div>
            <div>
              <h4 className="text-zinc-200 font-semibold mb-1">How do you trace which tasks were selected?</h4>
              <p className="text-zinc-400 text-sm font-body leading-relaxed">
                "After populating the DP table, we backtrack from <span className="font-mono text-[10px] bg-zinc-800 px-1 rounded text-zinc-300">dp[n][W]</span>. If <span className="font-mono text-[10px] bg-zinc-800 px-1 rounded text-zinc-300">dp[i][w] != dp[i-1][w]</span>, it means task <span className="font-mono text-[10px] bg-zinc-800 px-1 rounded text-zinc-300">i</span> was included in the optimal solution. We subtract its weight from <span className="font-mono text-[10px] bg-zinc-800 px-1 rounded text-zinc-300">w</span> and continue backtracking until we reach the start."
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
