const initialState = {
    products: [],
    loading: false,
    error: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_PRODUCTS_FAILURE':
            return { ...state, error: action.error, loading: false };
        case 'EDIT_PRODUCT_SUCCESS':
            return {
                ...state,
                products: state.products.map(product => 
                    product.id === action.payload.id ? action.payload : product
                )
            };
        case 'DELETE_PRODUCT_SUCCESS':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        case 'ADD_PRODUCT_SUCCESS':
            return { ...state, products: [...state.products, action.payload] };
        default:
            return state;
    }
};

export default productReducer;
