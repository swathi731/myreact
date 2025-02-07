import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrement,
  increament,
  purchaseList,
  removeFromCart,
} from "./Store.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  let dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart);

  let finalItems = cartItems.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {item.name} - <strong>&#8377;{item.price}</strong>
      </span>
      <div>
        <button
          onClick={() => dispatch(increament(item))}
          className="btn btn-success btn-sm me-2"
        >
          +
        </button>
        <span>Quantity: {item.quantity}</span>
        <button
          onClick={() => dispatch(decrement(item))}
          className="btn btn-warning btn-sm ms-2"
        >
          -
        </button>
        <button
          onClick={() => dispatch(removeFromCart(item))}
          className="btn btn-danger btn-sm ms-2"
        >
          Remove
        </button>
      </div>
    </li>
  ));

  let totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  let [discountPercentage, setDiscountPercentage] = useState(0);
  let [discountApplied, setDiscountApplied] = useState(false);

  let discountAmount = (totalPrice * discountPercentage) / 100;
  let finalAmount = totalPrice - discountAmount;

  let [couponCode, setCouponCode] = useState("");
  let [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
  let [couponApplied, setCouponApplied] = useState(false);

  let handleCoupon = () => {
    switch (couponCode.toUpperCase()) {
      case "RATAN10":
        setCouponDiscountPercentage(10);
        setCouponApplied(true);
        break;
      case "RATAN20":
        setCouponDiscountPercentage(20);
        setCouponApplied(true);
        break;
      case "RATAN30":
        setCouponDiscountPercentage(30);
        setCouponApplied(true);
        break;
      case "RATAN40":
        setCouponDiscountPercentage(40);
        setCouponApplied(true);
        break;
      default:
        alert("Invalid Coupon code");
        setCouponDiscountPercentage(0);
        setCouponApplied(false);
    }
  };

  let couponAmount = (totalPrice * couponDiscountPercentage) / 100;
  finalAmount = finalAmount - couponAmount;

  let handlePurchase = () => {
    let purchaseDate = new Date().toLocaleDateString();
    let purchaseItems = {
      items: [...cartItems],
      finalPrice: finalAmount,
      date: purchaseDate,
    };
    dispatch(purchaseList(purchaseItems));
    dispatch(clearCart());
  };

  return (
    <div className="container mt-4">
      {cartItems.length > 0 ? (
        <div className="card p-4 shadow-sm">
          <ul className="list-group mb-3">{finalItems}</ul>
          <p className="fw-bold">Total Price: &#8377;{totalPrice}</p>

          {discountApplied && (
            <div className="alert alert-info">
              <p>Discount Applied: {discountPercentage}%</p>
              <p>Discount Amount: &#8377;{discountAmount}</p>
            </div>
          )}

          <div className="btn-group mb-3">
            <button
              onClick={() => {
                setDiscountPercentage(10);
                setDiscountApplied(true);
              }}
              className="btn btn-outline-primary"
            >
              Apply 10% Discount
            </button>
            <button
              onClick={() => {
                setDiscountPercentage(20);
                setDiscountApplied(true);
              }}
              className="btn btn-outline-secondary"
            >
              Apply 20% Discount
            </button>
            <button
              onClick={() => {
                setDiscountPercentage(30);
                setDiscountApplied(true);
              }}
              className="btn btn-outline-success"
            >
              Apply 30% Discount
            </button>
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={couponCode}
              className="form-control mb-2"
              placeholder="Enter coupon code"
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button onClick={handleCoupon} className="btn btn-dark w-100">
              Apply Coupon
            </button>
          </div>

          {couponApplied && (
            <div className="alert alert-success">
              <p>Your Coupon Code: {couponCode}</p>
              <p>Your Coupon Amount: &#8377;{couponAmount}</p>
            </div>
          )}

          <p className="fw-bold">Your Net Amount to Pay: &#8377;{finalAmount}</p>

          <button
            onClick={handlePurchase}
            className="btn btn-success w-100"
          >
            Complete Purchase
          </button>
        </div>
      ) : (
        <p className="text-center text-muted">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;