import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ProductList from "./ProductList";
import CartPage from "./CartPage";
import logo from "./image/Logo.png";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Router>
      <div className="App">
        <nav className="bg-black text-white flex justify-between items-center">
          <img className="ml-6 w-[200px] h-[100px]" src={logo} alt="Fake Store" />
          <div className="mr-6 flex items-center">
            <Link to="#" onClick={toggleCart} className="flex items-center relative mr-6">
              <FaShoppingCart className="mr-2 active:text-black active:translate-y-1 transition-transform" size={32} />
              {cart.length > 0 && (
                <span className="cart-count flex items-center font-semibold justify-center">{cart.length}</span>
              )}
            </Link>
          </div>
        </nav>
        {showCart ? (
          <CartPage cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        ) : (
          <ProductList addToCart={addToCart} />
        )}
      </div>
    </Router>
  );
}

export default App;
