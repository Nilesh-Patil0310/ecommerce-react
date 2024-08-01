import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Redux/Actions/cartActions';

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = useSelector(state => state.products.products.find(p => p.id === parseInt(id)));
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    if (!product) return <div>Product not found</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetailPage;
