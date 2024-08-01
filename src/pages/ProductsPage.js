import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct, editProduct } from '../Redux/Actions/productActions';
import { addToCart } from '../Redux/Actions/cartActions';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleEdit = (product) => {
        dispatch(editProduct(product));
    };

    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId));
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => handleEdit(product)}>Edit</button>
                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductsPage;
