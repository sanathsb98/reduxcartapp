import React from 'react';
import '../cartCard/CartCard.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cartSlice';

const cartCard = ({data}) => {

    const dispatch = useDispatch()

    const removeCart = (data) => {
        console.log(data.product_price)
           dispatch(removeFromCart({id:data.id,price:data.product_price}))
    }

    return (
        <>
            <div className='cart-card'>
                <div className='cart-image'>
                    <img src={data.product_image} width='100px' height='100px' />
                </div>
                <div className='product-title'>{data.product_name}</div>
                <div className='product-description'>{data.product_description}</div>
                <div className='product-price'>${data.product_price}</div>
                <div className='add-to-checkout'>Proceed to checkout</div>
                <div onClick={()=>removeCart(data)} className='drop'>Drop</div>
            </div>
        </>
    )
}

export default cartCard