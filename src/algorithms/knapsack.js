/**
 * ============================================================
 * 0/1 KNAPSACK — DYNAMIC PROGRAMMING SOLUTION
 * ============================================================
 *
 * PROBLEM MAPPING (Wearable AI Task Orchestration):
 *   Knapsack Capacity (W)  →  Battery Capacity of the wearable device
 *   Items                  →  AI Tasks that can run on the device
 *   Weight of item i       →  Battery cost of task i (percentage)
 *   Value of item i        →  Utility value of task i (user benefit)
 *
 * OBJECTIVE:
 *   Maximize total utility of locally-executed AI tasks
 *   WITHOUT exceeding the available battery budget.
 *
 * WHY 0/1 KNAPSACK?
 *   Each AI task is either fully run locally (1) or fully offloaded
 *   to the cloud (0). There is no fractional execution, making this
 *   a classic 0/1 (binary) decision problem.
 *
 * WHY NOT GREEDY?
 *   A greedy approach (e.g., sorting by utility/cost ratio) does NOT
 *   guarantee an optimal solution for the 0/1 variant. Consider:
 *     Task A: cost=6, value=8   (ratio=1.33)
 *     Task B: cost=5, value=7   (ratio=1.40)
 *     Task C: cost=5, value=7   (ratio=1.40)
 *     Capacity = 10
 *   Greedy picks B+C (value=14), but A+B or A+C could also yield 15.
 *   Only DP examines ALL valid subsets implicitly.
 *
 * TIME COMPLEXITY:  O(n × W)
 *   where n = number of tasks, W = battery capacity.
 *   We fill an (n+1) × (W+1) table, each cell in O(1).
 *
 * SPACE COMPLEXITY: O(n × W)
 *   For the full DP table. (Could be reduced to O(W) with a
 *   rolling array, but we keep the full table for backtracking
 *   and educational visualization.)
 *
 * ============================================================
 */

/**
 * Solves the 0/1 Knapsack problem using bottom-up Dynamic Programming.
 *
 * @param {Array} tasks   - Array of task objects, each with:
 *                            { id, name, battery_cost, utility_value, ... }
 * @param {number} capacity - Total available battery capacity (integer).
 *
 * @returns {Object} Solution containing:
 *   - maxUtility        : Maximum achievable utility value
 *   - totalCost         : Total battery cost of selected tasks
 *   - selectedTasks     : Tasks chosen for local execution
 *   - rejectedTasks     : Tasks to be offloaded to cloud
 *   - dpTable           : The complete DP table (for visualization)
 *   - selectedIndices   : Indices of selected tasks in the input array
 */
export function solveKnapsack(tasks, capacity) {
  const n = tasks.length;

  // ─── STEP 1: Initialize the DP Table ───────────────────────────
  // dp[i][w] represents the maximum utility achievable using
  // the first i items with a battery budget of w.
  // Base case: dp[0][w] = 0 for all w (no items → no utility).
  const dp = Array.from({ length: n + 1 }, () =>
    new Array(capacity + 1).fill(0)
  );

  // ─── STEP 2: Fill the DP Table (Bottom-Up) ─────────────────────
  // For each task i (1-indexed) and each possible capacity w,
  // decide: should we INCLUDE task i or EXCLUDE it?
  for (let i = 1; i <= n; i++) {
    const task = tasks[i - 1];

    for (let w = 0; w <= capacity; w++) {
      // EXCLUDE task i: carry forward the best solution without it
      dp[i][w] = dp[i - 1][w];

      // INCLUDE task i: only if it fits within current capacity w
      if (task.battery_cost <= w) {
        const includeValue =
          dp[i - 1][w - task.battery_cost] + task.utility_value;

        // Take the better of including vs excluding
        dp[i][w] = Math.max(dp[i][w], includeValue);
      }
    }
  }

  // ─── STEP 3: Backtrack to Find Selected Tasks ──────────────────
  // Starting from dp[n][capacity], trace back through the table
  // to determine which tasks were included in the optimal solution.
  const selectedIndices = [];
  let remainingCapacity = capacity;

  for (let i = n; i > 0; i--) {
    // If dp[i][w] ≠ dp[i-1][w], then task i was included
    if (dp[i][remainingCapacity] !== dp[i - 1][remainingCapacity]) {
      selectedIndices.push(i - 1); // Convert to 0-indexed
      remainingCapacity -= tasks[i - 1].battery_cost;
    }
  }

  // Reverse to maintain original order
  selectedIndices.reverse();

  // ─── STEP 4: Build the Result ──────────────────────────────────
  const selectedSet = new Set(selectedIndices);
  const selectedTasks = selectedIndices.map((i) => tasks[i]);
  const rejectedTasks = tasks.filter((_, i) => !selectedSet.has(i));

  const totalCost = selectedTasks.reduce(
    (sum, t) => sum + t.battery_cost,
    0
  );

  return {
    maxUtility: dp[n][capacity],
    totalCost,
    selectedTasks,
    rejectedTasks,
    dpTable: dp,
    selectedIndices,
  };
}
