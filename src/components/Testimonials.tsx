import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 bg-white border-y border-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-rose/10 mb-8 text-brand-rose">
          <Quote size={24} fill="currentColor" />
        </div>
        
        <div className="relative h-[250px] md:h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <p className="text-xl md:text-2xl font-medium text-brand-text/80 mb-8 leading-relaxed max-w-2xl">
                "{TESTIMONIALS[index].content}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={TESTIMONIALS[index].avatar} 
                  alt={TESTIMONIALS[index].name}
                  className="w-10 h-10 rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="text-left">
                  <h4 className="font-bold text-sm text-brand-text">{TESTIMONIALS[index].name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-brand-rose font-bold">{TESTIMONIALS[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1.5 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === i ? 'w-6 bg-brand-rose' : 'w-2 bg-black/10'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
