import { useState, useCallback } from 'react';
import { solveKnapsack } from '../algorithms/knapsack';
import { AI_TASKS } from '../data/tasks';

/**
 * useKnapsack — Custom hook encapsulating all optimization state.
 *
 * Manages battery capacity, enabled tasks, optimization results,
 * and exposes the `optimize` action that runs the DP algorithm.
 */
export function useKnapsack() {
  const [batteryCapacity, setBatteryCapacity] = useState(65);
  const [tasks, setTasks] = useState(AI_TASKS);
  const [enabledTaskIds, setEnabledTaskIds] = useState(
    () => new Set(AI_TASKS.map((t) => t.id))
  );
  const [result, setResult] = useState(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const toggleTask = useCallback((taskId) => {
    setEnabledTaskIds((prev) => {
      const next = new Set(prev);
      if (next.has(taskId)) next.delete(taskId);
      else next.add(taskId);
      return next;
    });
    // Clear previous result when tasks change
    setResult(null);
  }, []);

  const addTask = useCallback((newTask) => {
    const taskWithId = {
      ...newTask,
      id: `custom-${Date.now()}`,
    };
    setTasks((prev) => [...prev, taskWithId]);
    setEnabledTaskIds((prev) => new Set(prev).add(taskWithId.id));
  }, []);

  const updateTask = useCallback((taskId, updatedData) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, ...updatedData } : t))
    );
    setResult(null);
  }, []);

  const deleteTask = useCallback((taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    setEnabledTaskIds((prev) => {
      const next = new Set(prev);
      next.delete(taskId);
      return next;
    });
    setResult(null);
  }, []);

  const optimize = useCallback(async () => {
    setIsOptimizing(true);

    // Simulate AI neural-processing delay for UX
    await new Promise((r) => setTimeout(r, 2800));

    const enabledTasks = tasks.filter((t) => enabledTaskIds.has(t.id));
    const solution = solveKnapsack(enabledTasks, batteryCapacity);

    setResult(solution);
    setIsOptimizing(false);
  }, [batteryCapacity, enabledTaskIds, tasks]);

  const reset = useCallback(() => {
    setResult(null);
    setTasks(AI_TASKS);
    setEnabledTaskIds(new Set(AI_TASKS.map((t) => t.id)));
    setBatteryCapacity(65);
  }, []);

  // Derived values
  const enabledTasksList = tasks.filter((t) => enabledTaskIds.has(t.id));
  const totalBatteryCostAll = enabledTasksList.reduce(
    (s, t) => s + t.battery_cost,
    0
  );
  const totalUtilityAll = enabledTasksList.reduce(
    (s, t) => s + t.utility_value,
    0
  );

  return {
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
    reset,
    allTasks: tasks,
    enabledTasks: enabledTasksList,
    totalBatteryCostAll,
    totalUtilityAll,
  };
}
