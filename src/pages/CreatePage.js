import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Actions/productActions';

const CreatePage = () => {
    const [product, setProduct] = useState({ name: '', description: '', price: '' });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(product));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default CreatePage;
