import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/store';
import Navbar from './components/Navbar'
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CreatePage from './pages/CreatePage';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <div>
                        <Navbar />
                        <Routes>
                            <Route path="/" exact component={ProductsPage} />
                            <Route path="/product/:id" component={ProductDetailPage} />
                            <Route path="/cart" component={CartPage} />
                            <Route path="/create" component={CreatePage} />
                        </Routes>
                    </div>
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
