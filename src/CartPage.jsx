import React from 'react';
import { FaStar } from 'react-icons/fa';

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const discountAmount = totalAmount * 0.1;
  const grandTotal = totalAmount - discountAmount;

  return (
    <div className="cart-page">
      <h2 className="text-[20px] mt-4 text-center underline font-bold animate-bounce">Your Cart</h2>
      {cart.length === 0 ? (
        <p className='text-center mt-10 font-bold'>No items in the cart</p>
      ) : (
        <>
          <div className="cart-items px-2 md:px-14 md:pb-10 max-h-full overflow-y-auto">
            {cart.map(product => {
              const discountedPrice = product.price * 0.9;
              return (
                <div key={product.id} className="flex flex-col md:flex-row border-b p-[15px] justify-between md:items-center mb-2">
                  <div className='flex items-center'>
                    <img src={product.image} alt={product.title} className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-cover bg-center mr-10" />
                    <div className='flex gap-3 flex-col border-l-4 border-gray-300 pl-4'>
                      <h3 className="inline-block text-xl md:text-2xl font-semibold font-Zain">{product.title}</h3>
                      <h4 className='text-green-600 text-xl md:text-2xl font-Zain font-bold'>In stock</h4>
                      <div className='flex items-center gap-6'>
                        <p className='inline-flex font-semibold text-lg font-Stylish'><FaStar className="text-yellow-400 mt-1 mr-1" />{product.rating.rate}({product.rating.count})</p>
                        <p className="inline-block text-blue-600 font-bold font-mono line-through decoration-blue-600 decoration-[1.5px]">${product.price}</p>
                      </div>
                      <p className="inline-block text-green-600 text-lg font-Stylish font-bold">10% Discount: ${discountedPrice.toFixed(2)}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mt-2 md:mt-0 ml-44 md:ml-0">
                      <div className='mr-2'>
                        <button className="px-2 font-bold bg-[#e6e6e6] border-2 border-slate-200 rounded-sm  active:bg-white active:translate-y-1 transition-transform" onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                        <span className="mx-2 font-Stylish font-bold">{product.quantity}</span>
                        <button className="px-2 font-bold bg-[#e6e6e6] border-2 border-slate-200 rounded-sm  active:bg-white active:translate-y-1 transition-transform" onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                      </div>
                      <button className="bg-red-500 font-semibold font-Stylish text-white active:bg-white active:text-red-500 active:translate-y-1 transition-transform px-3 py-2 rounded ml-2" onClick={() => removeFromCart(product.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex md:fixed md:bottom-0 bg-black text-white p-2 w-full font-Stylish text-lg items-center justify-around gap-4 mt-4">
            <h3 className="font-bold">Total: ${totalAmount.toFixed(2)}</h3>
            <h3 className="font-bold text-blue-500">10% Discount: ${discountAmount.toFixed(2)}</h3>
            <h3 className="font-bold text-green-500">Grand Total: ${grandTotal.toFixed(2)}</h3>
            <button className='py-2 px-3 font-bold text-black rounded-xl bg-[#FEE715FF] active:bg-white active:translate-y-1 transition-transform'>Place Your Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;