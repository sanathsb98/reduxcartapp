import React from 'react';
import '../cart/CartPage.css'
import Navbar from '../../components/Navbar/Navbar';
import CartCard from '../../components/cartCard/cartCard';
import { useSelector } from 'react-redux';
import CheckoutComp from '../../components/checkout/CheckoutComp';

const CartPage = () => {

    const cartItems = useSelector((store)=>store.cart.cartItems)

  return (
      <>
          <Navbar />
          <div className='cart-page'>
              <div className='cart-product-container'>
                  {cartItems.map((item) => {
                      return <CartCard data={item} />
                  })}
                  <div className='no-items-cart'>{cartItems.length === 0 ? 'No items in your cart :( ' : ''}</div>
              </div>
              <div className='checkout-space'>
              <CheckoutComp/>
              </div>
          </div>
      </>
  )
}

export default CartPage