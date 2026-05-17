import { motion } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

const navItems = ['Overview', 'Optimizer', 'Analytics'];

export default function TopNav() {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-xl bg-[#050816]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-electric p-[1px]">
              <div className="w-full h-full bg-[#050816] rounded-xl flex items-center justify-center">
                <Cpu size={18} className="text-white" />
              </div>
            </div>
            <div>
              <p className="text-white font-display text-lg tracking-wide font-bold">NEUROSHIFT</p>
            </div>
          </div>

          {/* Nav buttons removed per request */}
        </div>
      </div>
    </header>
  );
}
