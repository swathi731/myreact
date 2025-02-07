import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import VegItems from "./VegItems";
import Cart from "./Cart";
import Aboutus from "./AboutUs";
import ContactUs from "./ContactUs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";

import Orders from "./Orders";
import { logout } from "./Store";
import Milk from "./MilkItems";
import Nonveg from "./NonvegItems";
import Notfound from "./NotFound";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  let auth = useSelector((state) => state.auth);
  let isAuthenticated = auth.isAuthenticated;
  let user = auth.user;
  let dispatch = useDispatch();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow-sm">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">FreshMart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/home" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/veg" className="nav-link text-white">Veg Items</Link>
              </li>
              <li className="nav-item">
                <Link to="/nonveg" className="nav-link text-white">Non-Veg Items</Link>
              </li>
              <li className="nav-item">
                <Link to="/milk" className="nav-link text-white">Milk Items</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-white">
                  Cart <sup><span className="badge bg-warning text-dark">{totalItems}</span></sup>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/orders" className="nav-link text-white">Orders</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-white">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link text-white">Contact Us</Link>
              </li>
            </ul>
            <div className="d-flex">
              {isAuthenticated ? (
                <>
                  <span className="navbar-text text-white me-3">Welcome, {user}</span>
                  <button onClick={() => dispatch(logout())} className="btn btn-outline-light">Logout</button>
                </>
              ) : (
                <Link to="/login" className="btn btn-outline-light">Login</Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<VegItems/>}/>
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/milk" element={<Milk/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
