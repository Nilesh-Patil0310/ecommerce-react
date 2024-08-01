import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar = () => {
    const cartItemsCount = useSelector(state => state.cart.items.length);

  return (
    <div style={{ borderBottom: "1px solid white" }}>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            eCommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active text-white" to="/products">
                Products
              </Link>
              <Link className="nav-item nav-link active text-white" to="/cart">
                Add Product +
              </Link>
              <Link
                className="nav-item nav-link active text-white"
                to="/addcontact"
              >
                Cart ({cartItemsCount})
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;