import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import OfferBanner from './components/OfferBanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetail from './components/ProductDetail';
import { useCart, useWishlist } from './hooks';
import { Product } from './constants';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'detail'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { cart, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (view: 'home' | 'shop') => {
    setCurrentView(view);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-brand-bg flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-black tracking-tighter mb-6"
            >
              VOGUE<span className="text-brand-rose">VIBE</span>
            </motion.div>
            <div className="w-40 h-1 bg-black/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                className="w-full h-full bg-brand-rose"
              />
            </div>
            <p className="mt-4 text-[9px] uppercase tracking-[0.3em] font-bold text-brand-text/20">লোড হচ্ছে...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar 
            cartCount={totalItems} 
            wishlistCount={wishlist.length}
            onCartClick={() => setIsCartOpen(true)} 
            onNavigate={handleNavigate}
            isSolid={currentView !== 'home'}
          />
          
          <main>
            {currentView === 'home' && (
              <>
                <Hero onShopClick={() => handleNavigate('shop')} />
                <CategorySection />
                <ProductGrid 
                  onAddToCart={(p) => {
                    addToCart(p);
                    setIsCartOpen(true);
                  }}
                  onToggleWishlist={toggleWishlist}
                  onProductClick={handleProductClick}
                  onViewAll={() => handleNavigate('shop')}
                  wishlist={wishlist}
                  limit={8}
                />
                <OfferBanner />
                <Testimonials />
              </>
            )}

            {currentView === 'shop' && (
              <div className="pt-20">
                <ProductGrid 
                  onAddToCart={(p) => {
                    addToCart(p);
                    setIsCartOpen(true);
                  }}
                  onToggleWishlist={toggleWishlist}
                  onProductClick={handleProductClick}
                  wishlist={wishlist}
                />
              </div>
            )}

            {currentView === 'detail' && selectedProduct && (
              <ProductDetail 
                product={selectedProduct}
                onBack={() => setCurrentView('shop')}
                onAddToCart={(p) => {
                  addToCart(p);
                  setIsCartOpen(true);
                }}
                onToggleWishlist={toggleWishlist}
                isWishlisted={wishlist.includes(selectedProduct.id)}
              />
            )}
          </main>

          <Footer />

          <CartDrawer 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            totalPrice={totalPrice}
          />
        </motion.div>
      )}
    </div>
  );
}
