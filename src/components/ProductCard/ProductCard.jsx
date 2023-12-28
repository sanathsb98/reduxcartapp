import React from 'react';
import '../ProductCard/ProductCard.css';
import playstation from '/src/images/playstation.webp';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={product.product_image} width='100px' height='100px' />
            </div>
            <div className='product-title'>{product.product_name}</div>
            <div className='product-description'>{product.product_description}</div>
            <div className='product-price'>$ {product.product_price}</div>
            <div className='add-to-cart' onClick={() => { handleAddToCart(product) }}>Add to cart</div>
        </div>
    )
}

export default ProductCard