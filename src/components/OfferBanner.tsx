import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden p-10 md:p-20 bg-brand-text">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-rose/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              <Zap size={14} fill="currentColor" />
              Flash Sale Ending Soon
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none text-white uppercase">
              GET UP TO <span className="text-brand-rose">60% OFF</span> <br />
              ON ACCESSORIES
            </h2>
            <p className="text-white/40 text-sm mb-8 max-w-sm">
              Limited time offer. Premium quality at unbeatable prices.
            </p>
            <button className="px-8 py-3 bg-white text-brand-text font-black rounded-xl hover:scale-105 transition-transform text-xs uppercase tracking-widest">
              Claim Offer
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="flex gap-4 md:gap-6">
            <TimerBox value={timeLeft.hours} label="Hours" />
            <TimerBox value={timeLeft.minutes} label="Mins" />
            <TimerBox value={timeLeft.seconds} label="Secs" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimerBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 glass-dark rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black mb-2 text-white">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-[8px] uppercase tracking-widest font-bold text-white/30">{label}</span>
    </div>
  );
}
