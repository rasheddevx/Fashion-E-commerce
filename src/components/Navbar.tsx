import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Heart, Search, Menu, X, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onCartClick: () => void;
  onNavigate: (view: 'home' | 'shop') => void;
  isSolid?: boolean;
}

export default function Navbar({ cartCount, wishlistCount, onCartClick, onNavigate, isSolid }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const effectiveIsScrolled = isScrolled || isSolid;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' as const },
    { name: 'Shop', view: 'shop' as const },
    { name: 'Categories', href: '#categories' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 py-3',
        effectiveIsScrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-2 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Badge */}
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => onNavigate('home')}
            className={cn(
              "text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300 cursor-pointer",
              effectiveIsScrolled ? "text-brand-text" : "text-white"
            )}
          >
            VOGUE<span className="text-brand-rose">VIBE</span>
          </motion.div>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-brand-rose/10 text-brand-rose text-[10px] font-bold uppercase tracking-widest">
            New Collection 2026
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.view ? (
              <button
                key={link.name}
                onClick={() => onNavigate(link.view)}
                className={cn(
                  "relative text-xs font-bold uppercase tracking-widest transition-colors group",
                  effectiveIsScrolled ? "text-brand-text/60 hover:text-brand-rose" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-rose transition-all duration-300 group-hover:w-full" />
              </button>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-xs font-bold uppercase tracking-widest transition-colors group",
                  effectiveIsScrolled ? "text-brand-text/60 hover:text-brand-rose" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-rose transition-all duration-300 group-hover:w-full" />
              </a>
            )
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className={cn(
            "p-2 transition-colors",
            effectiveIsScrolled ? "text-brand-text/60 hover:text-brand-rose" : "text-white/80 hover:text-white"
          )}>
            <Search size={18} />
          </button>
          <button className={cn(
            "p-2 relative transition-colors",
            effectiveIsScrolled ? "text-brand-text/60 hover:text-brand-rose" : "text-white/80 hover:text-white"
          )}>
            <Heart size={18} />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-brand-rose text-white text-[8px] flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>
          <button 
            onClick={onCartClick}
            className={cn(
              "p-2 relative transition-colors",
              effectiveIsScrolled ? "text-brand-text/60 hover:text-brand-rose" : "text-white/80 hover:text-white"
            )}
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-brand-rose text-white text-[8px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className={cn(
              "md:hidden p-2 transition-colors",
              effectiveIsScrolled ? "text-brand-text/60" : "text-white"
            )} 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col p-6 h-screen w-screen overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-xl font-black tracking-tighter text-brand-text">VOGUE<span className="text-brand-rose">VIBE</span></div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-brand-text hover:text-brand-rose transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.view ? (
                    <button
                      onClick={() => {
                        onNavigate(link.view);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-3xl font-black text-brand-text hover:text-brand-rose transition-colors text-left uppercase tracking-tighter"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-black text-brand-text hover:text-brand-rose transition-colors uppercase tracking-tighter"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-black/5">
              <p className="text-[10px] font-bold text-brand-text/30 uppercase tracking-[0.3em] mb-4">Connect with us</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-text/40">
                  <User size={20} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-bold text-brand-text">My Account</p>
                  <p className="text-[10px] text-brand-text/40">Login or Register</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
