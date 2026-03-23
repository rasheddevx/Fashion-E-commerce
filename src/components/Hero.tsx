import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center px-6 md:px-12">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 blur-[2px]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000)' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Top Gradient for Navbar Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tighter text-white">
              ELEVATE YOUR <br />
              <span className="text-brand-orange">STYLE QUOTIENT</span>
            </h1>
            <p className="text-base text-white/80 mb-8 max-w-sm leading-relaxed">
              Experience the perfect blend of luxury and comfort with our new 2026 collection.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={onShopClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 btn-gradient rounded-full font-bold text-sm flex items-center gap-2"
              >
                Shop Collection
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 glass-dark text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
              >
                View Lookbook
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
