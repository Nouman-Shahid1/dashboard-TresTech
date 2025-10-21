"use client";

import { useState } from "react";

export default function POSTerminal() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { id: 1, name: "iPhone 15 Pro", price: 1299.99, stock: 15 },
    { id: 2, name: "Samsung Galaxy S24", price: 999.99, stock: 8 },
    { id: 3, name: "MacBook Air M3", price: 1499.99, stock: 5 },
    { id: 4, name: "iPad Pro", price: 899.99, stock: 12 },
    { id: 5, name: "AirPods Pro", price: 249.99, stock: 25 },
    { id: 6, name: "Apple Watch", price: 399.99, stock: 18 },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotal(total + product.price);
  };

  const removeFromCart = (productId) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
      setTotal(total - item.price);
      if (item.quantity > 1) {
        setCart(cart.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ));
      } else {
        setCart(cart.filter(item => item.id !== productId));
      }
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const processPayment = () => {
    alert(`Payment processed: $${total.toFixed(2)}`);
    clearCart();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">POS Terminal</h1>
        <div className="text-right">
          <p className="text-gray-400">Store: TechStore Plus</p>
          <p className="text-gray-400">Terminal: #001</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Products Grid */}
        <div className="lg:col-span-2">
          <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
            <h2 className="text-xl font-semibold text-white mb-4">Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => addToCart(product)}
                  className="bg-[#100A1D] p-4 rounded-lg border border-gray-700 hover:border-[#f0a709] cursor-pointer transition-all"
                >
                  <h3 className="text-white font-medium mb-2">{product.name}</h3>
                  <p className="text-[#f0a709] text-lg font-bold">${product.price}</p>
                  <p className="text-gray-400 text-sm">Stock: {product.stock}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className="bg-[#1A1335] rounded-xl p-6 border border-[#f0a709]/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Cart</h2>
            <button
              onClick={clearCart}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-3 mb-6">
            {cart.length === 0 ? (
              <p className="text-gray-400 text-center py-8">Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-[#100A1D] p-3 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="text-white">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="text-green-400 hover:text-green-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-white">Total:</span>
              <span className="text-2xl font-bold text-[#f0a709]">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={processPayment}
              disabled={cart.length === 0}
              className="w-full bg-[#f0a709] hover:bg-[#ffbf4d] text-[#100A1D] font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Process Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}