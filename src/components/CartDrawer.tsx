import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { Product } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { product: Product; quantity: number }[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, q: number) => void;
  totalPrice: number;
}

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cart, 
  onRemove, 
  onUpdateQuantity, 
  totalPrice 
}: CartDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-sm bg-white flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-brand-rose" size={20} />
                <h2 className="text-lg font-black uppercase tracking-tighter text-brand-text">কার্ট</h2>
                <span className="px-2 py-0.5 bg-brand-bg rounded-full text-[8px] font-bold text-brand-text/40">
                  {cart.length} টি পণ্য
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:text-brand-rose transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                  <ShoppingBag size={48} className="mb-4" />
                  <p className="text-sm font-bold uppercase tracking-widest">খালি</p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.product.id} 
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-brand-bg shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-xs text-brand-text line-clamp-1">{item.product.name}</h3>
                          <button 
                            onClick={() => onRemove(item.product.id)}
                            className="text-brand-text/10 hover:text-brand-rose transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="text-[9px] text-brand-text/30 uppercase tracking-widest">{item.product.category}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-brand-bg rounded-lg p-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center hover:text-brand-rose transition-colors"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-xs font-bold w-3 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center hover:text-brand-rose transition-colors"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        <span className="font-black text-sm text-brand-text">৳{(item.product.price * item.quantity).toFixed(0)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-brand-bg border-t border-black/5 space-y-4">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-black uppercase tracking-tighter text-brand-text">মোট</span>
                  <span className="text-xl font-black text-brand-rose">৳{totalPrice.toFixed(0)}</span>
                </div>
                <button className="w-full py-3.5 btn-gradient text-[10px] font-black uppercase tracking-widest rounded-xl">
                  চেকআউট করুন
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
