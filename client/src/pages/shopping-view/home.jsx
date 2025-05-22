import React, { useState } from 'react';
import Header from '../../components/shopping-view/Header';
import ShopPage from '../../components/shopping-view/ShopPage';
import Cart from '../../components/shopping-view/Cart';
import { products } from '../../components/data/products';

function ShopingHome() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productId, size, color) => {
    const existingItemIndex = cartItems.findIndex(
      item => item.productId === productId && item.size === size && item.color === color
    );

    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { productId, quantity: 1, size, color }]);
    }

    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.productId !== productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-transparent">
      <Header cartItemsCount={cartItemsCount} onCartClick={() => setIsCartOpen(true)} />

      <main>
        <ShopPage onAddToCart={handleAddToCart} />
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        products={products}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={handleCheckout}
      />

      <footer className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">THREAD</h3>
              <p className="text-gray-600 text-sm">
                Premium t-shirts crafted with quality and sustainability in mind.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-gray-900">All Products</a></li>
                <li><a href="#" className="hover:text-gray-900">Men</a></li>
                <li><a href="#" className="hover:text-gray-900">Women</a></li>
                <li><a href="#" className="hover:text-gray-900">Limited Edition</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Sustainability</a></li>
                <li><a href="#" className="hover:text-gray-900">Our Story</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900">Size Guide</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 THREAD. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ShopingHome;
