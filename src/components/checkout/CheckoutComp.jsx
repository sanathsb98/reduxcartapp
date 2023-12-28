import React from 'react';
import '../checkout/Checkout.css';
import { useSelector } from 'react-redux';

const CheckoutComp = () => {

    const totalItems = useSelector((store)=>store.cart.cartItems.length)
    const totalAmount = useSelector((store)=>store.cart.cartTotalAmount)

    return (
        <div className='checkout-component'>
            <div className='checkout-title'>Your cart info</div>
            <div className='checkout-item-quantity'>Total items : {totalItems}</div>
            <div className='checkout-item-price'>Grand total : ${totalAmount}</div>
            <div className='checkout-item-order'>Order Now</div>

        </div>
    )
}

export default CheckoutComp