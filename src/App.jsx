import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import VegItems from "./VegItems";
import Cart from "./Cart";
import Login from "./Login";
import Orders from "./Orders";
import { logout } from "./Store";
import Milk from "./MilkItems";
import Nonveg from "./NonvegItems";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Notfound from "./NotFound";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  const cart = useSelector((state) => state.cart || []);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const auth = useSelector((state) => state.auth || {});
  const { isAuthenticated, user } = auth;
  const dispatch = useDispatch();

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow-lg">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand text-warning">
            <i className="fa-solid fa-store"></i> FreshMart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link text-light">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/veg" className="nav-link text-success">
                  <i className="fa-solid fa-carrot"></i> Veg Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nonveg" className="nav-link text-danger">
                  <i className="fa-solid fa-drumstick-bite"></i> Non-Veg Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/milk" className="nav-link text-info">
                  <i className="fa-solid fa-glass-water"></i> Milk Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-warning">
                  <i className="fa-solid fa-shopping-cart"></i> Cart{" "}
                  <sup>
                    <span className="badge bg-light text-dark">{totalItems}</span>
                  </sup>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/orders" className="nav-link text-primary">
                  <i className="fa-solid fa-box"></i> Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-info">
                  <i className="fa-solid fa-info-circle"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link text-light">
                  <i className="fa-solid fa-phone"></i> Contact Us
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {isAuthenticated ? (
                <>
                  <span className="navbar-text text-light me-3">
                    <i className="fa-solid fa-user"></i> Welcome, {user}
                  </span>
                  <button
                    onClick={() => dispatch(logout())}
                    className="btn btn-outline-danger"
                  >
                    <i className="fa-solid fa-sign-out-alt"></i> Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-outline-success">
                  <i className="fa-solid fa-sign-in-alt"></i> Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<VegItems />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
