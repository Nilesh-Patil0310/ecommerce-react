import axios from 'axios';

export const fetchProducts = () => async dispatch => {
    try {
        const response = await axios.get('https://my-json-server.typicode.com/Nilesh-Patil0310/Ecommers-json-server/products');
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE', error });
    }
};

export const editProduct = (product) => async dispatch => {
    try {
        const response = await axios.put(`https://my-json-server.typicode.com/Nilesh-Patil0310/Ecommers-json-server/products/${product.id}`, product);
        dispatch({ type: 'EDIT_PRODUCT_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'EDIT_PRODUCT_FAILURE', error });
    }
};

export const deleteProduct = (productId) => async dispatch => {
    try {
        await axios.delete(`https://my-json-server.typicode.com/Nilesh-Patil0310/Ecommers-json-server/products/${productId}`);
        dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: productId });
    } catch (error) {
        dispatch({ type: 'DELETE_PRODUCT_FAILURE', error });
    }
};

export const addProduct = (product) => async dispatch => {
    try {
        const response = await axios.post('https://my-json-server.typicode.com/Nilesh-Patil0310/Ecommers-json-server/products', product);
        dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'ADD_PRODUCT_FAILURE', error });
    }
};
