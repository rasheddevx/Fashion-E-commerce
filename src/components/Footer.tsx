import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black/5 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black tracking-tighter mb-6">
              VOGUE<span className="text-brand-rose">VIBE</span>
            </div>
            <p className="text-brand-text/40 text-sm mb-6 leading-relaxed">
              Premium fashion for the modern era. Clean, minimal, and sophisticated.
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-3">
              <FooterLink label="New Arrivals" />
              <FooterLink label="Best Sellers" />
              <FooterLink label="Men" />
              <FooterLink label="Women" />
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-3">
              <FooterLink label="Shipping" />
              <FooterLink label="Returns" />
              <FooterLink label="Size Guide" />
              <FooterLink label="Contact" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-brand-text/40 text-xs mb-4">Subscribe to get special offers and updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 bg-brand-bg border border-black/5 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-brand-rose/30"
              />
              <button className="bg-brand-text text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest">Join</button>
            </div>
          </div>
        </div>

        {/* Payment Gateways */}
        <div className="mb-12 flex justify-center border-t border-black/5 pt-12">
          <img 
            src="https://ksbnet.net/wp-content/uploads/2022/05/syscomputersltd-payment.png" 
            alt="Payment Gateways" 
            className="max-w-full md:max-w-2xl h-auto opacity-90 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-text/20">
          <p>© {currentYear} VogueVibe. Built for Elegance.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-rose transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-rose transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -3, backgroundColor: '#e11d48', color: '#fff' }}
      className="w-9 h-9 rounded-lg bg-brand-bg flex items-center justify-center text-brand-text/40 transition-colors"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a href="#" className="text-xs text-brand-text/40 hover:text-brand-rose transition-all hover:pl-1">
        {label}
      </a>
    </li>
  );
}
