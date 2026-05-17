import { motion } from 'framer-motion';
import { BookOpen, Braces, Cpu, Zap } from 'lucide-react';

export default function AlgorithmExplanation() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full py-8 mt-8 border-t border-indigo-500/10"
      id="how-it-works"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
          <BookOpen size={20} className="text-indigo-400" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-white">
          Algorithm Architecture: 0/1 Knapsack DP
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 bg-zinc-900/50">
          <h3 className="text-lg font-semibold text-indigo-300 mb-4 flex items-center gap-2">
            <Braces size={16} /> Formal Definition
          </h3>
          <p className="text-sm text-zinc-400 font-body leading-relaxed mb-4">
            The orchestration problem is mapped to the classical <strong>0/1 Knapsack Problem</strong>. 
            Given a set of AI tasks <span className="font-mono text-xs bg-zinc-800 px-1 rounded">T = {'{t1, t2, ..., tn}'}</span>, each task <span className="font-mono text-xs bg-zinc-800 px-1 rounded">t_i</span> has an associated energy cost <span className="font-mono text-xs bg-zinc-800 px-1 rounded">w_i</span> (battery consumption) and a utility value <span className="font-mono text-xs bg-zinc-800 px-1 rounded">v_i</span> (importance).
          </p>
          <p className="text-sm text-zinc-400 font-body leading-relaxed">
            The objective is to maximize the total utility <span className="font-mono text-xs bg-zinc-800 px-1 rounded">Σ v_i * x_i</span> subject to the constraint that the total battery cost <span className="font-mono text-xs bg-zinc-800 px-1 rounded">Σ w_i * x_i ≤ W</span> (Available Battery Capacity), where <span className="font-mono text-xs bg-zinc-800 px-1 rounded">x_i ∈ {'{0, 1}'}</span>. Tasks selected (<span className="font-mono text-xs bg-zinc-800 px-1 rounded">x_i = 1</span>) are processed locally, while others are offloaded to the cloud.
          </p>
        </div>

        <div className="glass-card p-6 bg-zinc-900/50">
          <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <Cpu size={16} /> Dynamic Programming Approach
          </h3>
          <p className="text-sm text-zinc-400 font-body leading-relaxed mb-4">
            We utilize a bottom-up dynamic programming approach. A 2D tabulation matrix <span className="font-mono text-xs bg-zinc-800 px-1 rounded">dp[n+1][W+1]</span> is constructed, where <span className="font-mono text-xs bg-zinc-800 px-1 rounded">dp[i][w]</span> represents the maximum utility achievable using a subset of the first <span className="font-mono text-xs bg-zinc-800 px-1 rounded">i</span> tasks with a weight limit <span className="font-mono text-xs bg-zinc-800 px-1 rounded">w</span>.
          </p>
          <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800 font-mono text-[11px] text-zinc-300 overflow-x-auto">
            <code>
              if (weight[i-1] &lt;= w) {'{\n'}
              {'  '}dp[i][w] = max(val[i-1] + dp[i-1][w-weight[i-1]], dp[i-1][w]);{'\n'}
              {'}'} else {'{\n'}
              {'  '}dp[i][w] = dp[i-1][w];{'\n'}
              {'}'}
            </code>
          </div>
        </div>

        <div className="glass-card p-6 bg-zinc-900/50 md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
              <Zap size={16} /> Complexity Analysis
            </h3>
            <p className="text-sm text-zinc-400 font-body">
              The algorithm guarantees an optimal solution within pseudo-polynomial bounds.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-zinc-950 px-4 py-2 rounded-lg border border-purple-500/20">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Time Complexity</p>
              <p className="font-mono text-purple-300 font-medium">O(n * W)</p>
            </div>
            <div className="bg-zinc-950 px-4 py-2 rounded-lg border border-purple-500/20">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Space Complexity</p>
              <p className="font-mono text-purple-300 font-medium">O(n * W)</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
