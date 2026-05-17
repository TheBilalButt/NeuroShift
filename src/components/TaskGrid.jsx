import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Save } from 'lucide-react';
import TaskCard from './TaskCard';

export default function TaskGrid({ tasks, enabledTaskIds, toggleTask, addTask, updateTask, deleteTask }) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  
  const [newTask, setNewTask] = useState({ name: '', battery_cost: 10, utility_value: 5, description: '' });
  const [editTask, setEditTask] = useState(null);

  const selectedCount = enabledTaskIds.size;

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTask.name.trim()) return;
    addTask({ ...newTask });
    setIsAdding(false);
    setNewTask({ name: '', battery_cost: 10, utility_value: 5, description: '' });
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    if (!editTask.name.trim()) return;
    updateTask(editTask.id, { ...editTask });
    setEditingTaskId(null);
    setEditTask(null);
  };

  const startEdit = (task) => {
    setEditTask({ ...task });
    setEditingTaskId(task.id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="relative z-10" id="task-grid">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">Available Microservices</h2>
          <p className="text-slate-400 font-body mt-2">Select the edge AI tasks you want to queue for optimization.</p>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="text-sm text-slate-400 font-medium">Selected:</span>
          <span className="text-sm font-mono text-brand-bright font-bold bg-brand-electric/20 px-2 py-0.5 rounded">
            {selectedCount} / {tasks.length}
          </span>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <motion.div key={task.id} variants={itemVariants} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
              {editingTaskId === task.id ? (
                <div className="glass-panel p-5 border-brand-glow/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] flex flex-col h-full relative z-20 bg-[#0F172A]">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-display font-semibold text-brand-glow">Edit Service</h3>
                    <button onClick={() => setEditingTaskId(null)} className="text-slate-400 hover:text-white"><X size={18} /></button>
                  </div>
                  <form onSubmit={handleEditSave} className="flex-1 flex flex-col gap-3">
                    <input 
                      type="text" value={editTask.name} onChange={e => setEditTask({...editTask, name: e.target.value})}
                      className="bg-[#050816] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-glow transition-colors" required
                    />
                    <input 
                      type="text" value={editTask.description} onChange={e => setEditTask({...editTask, description: e.target.value})}
                      className="bg-[#050816] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-glow transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-3 mt-1">
                      <div>
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1 block">Power Cost</label>
                        <input type="number" min="1" max="100" value={editTask.battery_cost} onChange={e => setEditTask({...editTask, battery_cost: Number(e.target.value)})} className="w-full bg-[#050816] border border-white/10 rounded-lg px-3 py-1.5 text-sm font-mono text-brand-electric focus:outline-none focus:border-brand-glow" />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1 block">Utility Value</label>
                        <input type="number" min="1" max="10" value={editTask.utility_value} onChange={e => setEditTask({...editTask, utility_value: Number(e.target.value)})} className="w-full bg-[#050816] border border-white/10 rounded-lg px-3 py-1.5 text-sm font-mono text-brand-glow focus:outline-none focus:border-brand-glow" />
                      </div>
                    </div>
                    <button type="submit" className="mt-auto pt-2 bg-brand-glow/20 hover:bg-brand-glow/40 text-brand-glow rounded-lg py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <Save size={16} /> Save Changes
                    </button>
                  </form>
                </div>
              ) : (
                <TaskCard
                  task={task}
                  isEnabled={enabledTaskIds.has(task.id)}
                  onToggle={() => toggleTask(task.id)}
                  onEdit={() => startEdit(task)}
                  onDelete={() => deleteTask(task.id)}
                />
              )}
            </motion.div>
          ))}

          {/* Add New Task Card */}
          {!isAdding ? (
            <motion.div
              key="add-button"
              layout
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsAdding(true)}
              className="glass-panel border-dashed border-2 border-white/20 hover:border-brand-primary/50 flex flex-col items-center justify-center min-h-[200px] cursor-pointer group transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-brand-primary/20 flex items-center justify-center mb-3 transition-colors">
                <Plus className="text-slate-400 group-hover:text-brand-primary" />
              </div>
              <span className="font-display font-medium text-slate-300 group-hover:text-white transition-colors">Add Custom Service</span>
            </motion.div>
          ) : (
            <motion.div
              key="add-form"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="glass-panel p-5 border-brand-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display font-semibold text-white">New Service</h3>
                <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-white"><X size={18} /></button>
              </div>
              
              <form onSubmit={handleAdd} className="flex-1 flex flex-col gap-3">
                <input 
                  type="text" 
                  placeholder="Service Name" 
                  value={newTask.name}
                  onChange={e => setNewTask({...newTask, name: e.target.value})}
                  className="bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary transition-colors"
                  autoFocus
                  required
                />
                
                <input 
                  type="text" 
                  placeholder="Short Description" 
                  value={newTask.description}
                  onChange={e => setNewTask({...newTask, description: e.target.value})}
                  className="bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary transition-colors"
                />

                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1 block">Power Cost</label>
                    <input 
                      type="number" min="1" max="100"
                      value={newTask.battery_cost}
                      onChange={e => setNewTask({...newTask, battery_cost: Number(e.target.value)})}
                      className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-1.5 text-sm font-mono text-brand-electric focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1 block">Utility Value</label>
                    <input 
                      type="number" min="1" max="10"
                      value={newTask.utility_value}
                      onChange={e => setNewTask({...newTask, utility_value: Number(e.target.value)})}
                      className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-1.5 text-sm font-mono text-brand-glow focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                <button type="submit" className="mt-auto pt-2 bg-white/10 hover:bg-white/20 text-white rounded-lg py-2 text-sm font-medium transition-colors">
                  Inject Service
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
