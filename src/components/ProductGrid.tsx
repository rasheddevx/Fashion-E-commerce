import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Heart, Eye, Filter } from 'lucide-react';
import { Product, PRODUCTS } from '../constants';
import { cn } from '../lib/utils';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  onProductClick: (product: Product) => void;
  onViewAll?: () => void;
  wishlist: string[];
  limit?: number;
}

export default function ProductGrid({ 
  onAddToCart, 
  onToggleWishlist, 
  onProductClick, 
  onViewAll,
  wishlist, 
  limit 
}: ProductGridProps) {
  const [filter, setFilter] = useState<'All' | 'Men' | 'Women' | 'Kids'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section id="shop" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-black tracking-tighter mb-6 text-center"
        >
          FEATURED <span className="text-brand-rose">PRODUCTS</span>
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', 'Men', 'Women', 'Kids'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={cn(
                "px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                filter === cat 
                  ? "bg-brand-rose text-white shadow-md shadow-brand-rose/20" 
                  : "bg-white text-brand-text/40 hover:text-brand-text border border-black/5"
              )}
            >
                {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {displayedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              onProductClick={onProductClick}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {limit && filteredProducts.length > limit && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={onViewAll}
            className="px-8 py-3 border-2 border-brand-text text-brand-text font-black rounded-xl hover:bg-brand-text hover:text-white transition-all text-xs uppercase tracking-widest"
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
}

function ProductCard({ 
  product, 
  onAddToCart, 
  onToggleWishlist,
  onProductClick,
  isWishlisted 
}: { 
  product: Product; 
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (id: string) => void;
  onProductClick: (p: Product) => void;
  isWishlisted: boolean;
  key?: string;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group bg-white rounded-2xl overflow-hidden border border-black/5 flex flex-col cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-bg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2 py-0.5 bg-brand-rose text-[8px] font-bold uppercase tracking-tighter text-white rounded-sm">New</span>
          )}
          {product.discount && (
            <span className="px-2 py-0.5 bg-brand-orange text-[8px] font-bold uppercase tracking-tighter text-white rounded-sm">-{product.discount}%</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full glass transition-all duration-300 opacity-0 group-hover:opacity-100",
            isWishlisted ? "text-brand-rose" : "text-brand-text/40 hover:text-brand-rose"
          )}
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Add to Cart Button (Slide Up) */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full py-2.5 btn-gradient text-[10px] font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
          >
            <ShoppingCart size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[9px] text-brand-text/30 uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="font-bold text-sm mb-2 text-brand-text line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-base font-black text-brand-text">৳{product.price}</span>
          {product.discount && (
            <span className="text-xs text-brand-text/20 line-through">
              ৳{(product.price * (1 + product.discount / 100)).toFixed(0)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
