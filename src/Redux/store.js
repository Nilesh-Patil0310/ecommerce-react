import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {thunk} from 'redux-thunk';
import productReducer from './Reducer/productReducer';
import cartReducer from './Reducer/cartReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // Only persist cart
};

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
