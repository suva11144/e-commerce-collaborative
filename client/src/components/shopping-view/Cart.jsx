import React from 'react';
import CartItemComponent from './CartItem';
import { X } from 'lucide-react';

const Cart = ({
  isOpen,
  onClose,
  cartItems,
  products,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout,
}) => {
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const cartWithProducts = cartItems.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { item, product };
  }).filter(({ product }) => product !== undefined);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          onClick={onClose}
        />
        
        <div className="fixed inset-y-0 right-0 max-w-full flex">
          <div className="w-screen max-w-md transform transition-all ease-in-out duration-500 translate-x-0">
            <div className="h-full flex flex-col bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                  <button
                    type="button"
                    className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mt-8">
                  {cartWithProducts.length === 0 ? (
                    <p className="text-center py-12 text-gray-500">Your cart is empty</p>
                  ) : (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cartWithProducts.map(({ item, product }) => product && (
                          <li key={`${item.productId}-${item.size}-${item.color}`} className="py-6">
                            <CartItemComponent
                              product={product}
                              quantity={item.quantity}
                              size={item.size}
                              color={item.color}
                              onRemove={() => onRemoveItem(item.productId)}
                              onUpdateQuantity={(qty) => onUpdateQuantity(item.productId, qty)}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <p>Shipping</p>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-base font-semibold text-gray-900 mb-6">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <button
                  className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  onClick={onCheckout}
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </button>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="font-medium text-gray-600 hover:text-gray-500"
                      onClick={onClose}
                    >
                      Continue Shopping
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
