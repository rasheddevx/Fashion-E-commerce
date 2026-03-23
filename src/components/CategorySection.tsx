import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function CategorySection() {
  return (
    <section id="categories" className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-2 uppercase">SHOP BY <span className="text-brand-rose">CATEGORY</span></h2>
          <p className="text-brand-text/40 text-xs max-w-sm">Curated selections for every style and occasion.</p>
        </div>
        <button className="text-brand-rose font-bold text-[10px] uppercase tracking-widest hover:underline underline-offset-4">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CATEGORIES.map((category, i) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl bg-white border border-black/5 hover:border-brand-rose/20 hover:shadow-xl hover:shadow-brand-rose/5 transition-all duration-500 cursor-pointer overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-rose/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-rose/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-brand-rose uppercase tracking-[0.2em] mb-2 block">Collection</span>
              <h3 className="text-2xl font-black tracking-tighter text-brand-text uppercase mb-4">{category.name}</h3>
              
              <div className="flex items-center gap-2 text-brand-text/40 group-hover:text-brand-rose transition-colors duration-300">
                <span className="text-[10px] font-black uppercase tracking-widest">Explore Now</span>
                <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
