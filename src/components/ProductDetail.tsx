import { motion } from 'motion/react';
import { ShoppingCart, Heart, ArrowLeft, Star, Shield, Truck, RefreshCw } from 'lucide-react';
import { Product } from '../constants';
import { cn } from '../lib/utils';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

export default function ProductDetail({ 
  product, 
  onBack, 
  onAddToCart, 
  onToggleWishlist,
  isWishlisted 
}: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-brand-bg pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-text/60 hover:text-brand-rose transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Shop</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-black/5"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {product.discount && (
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-brand-orange text-white text-xs font-black rounded-full shadow-lg">
                -{product.discount}% OFF
              </div>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <p className="text-xs text-brand-rose font-bold uppercase tracking-[0.3em] mb-3">{product.category}</p>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-text mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-brand-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-text/40 uppercase tracking-widest">4.9 (120 Reviews)</span>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black text-brand-text">৳{product.price}</span>
                {product.discount && (
                  <span className="text-xl text-brand-text/20 line-through font-bold">
                    ৳{(product.price * (1 + product.discount / 100)).toFixed(0)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-brand-text/40 mb-3">Description</h3>
              <p className="text-brand-text/70 leading-relaxed text-lg font-medium">
                {product.description}
              </p>
            </div>

            {/* Details: Sizes & Quality */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-brand-text/40 mb-3">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes?.map((size) => (
                    <span 
                      key={size}
                      className="px-4 py-2 bg-white border border-black/5 rounded-xl text-xs font-bold text-brand-text"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-brand-text/40 mb-3">Quality</h3>
                <p className="text-sm font-bold text-brand-text">{product.quality}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 py-5 btn-gradient rounded-2xl flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-brand-rose/20 hover:scale-[1.02] transition-transform"
              >
                <ShoppingCart size={20} />
                Add to Shopping Bag
              </button>
              <button 
                onClick={() => onToggleWishlist(product.id)}
                className={cn(
                  "px-8 py-5 rounded-2xl border-2 flex items-center justify-center transition-all duration-300",
                  isWishlisted 
                    ? "bg-brand-rose/5 border-brand-rose text-brand-rose" 
                    : "bg-white border-black/5 text-brand-text hover:border-brand-rose hover:text-brand-rose"
                )}
              >
                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-3xl border border-black/5">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-rose">
                  <Shield size={18} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-text/60">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-rose">
                  <Truck size={18} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-text/60">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-rose">
                  <RefreshCw size={18} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-text/60">Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
