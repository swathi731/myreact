import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrement,
  increment,
  removeFromCart,
  addPurchase,
} from "./Store.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const discountAmount = (totalPrice * discountPercentage) / 100;

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  const handleCoupon = () => {
    const coupons = {
      RATAN10: 10,
      RATAN20: 20,
      RATAN30: 30,
      RATAN40: 40,
    };

    if (coupons[couponCode.toUpperCase()]) {
      setCouponDiscountPercentage(coupons[couponCode.toUpperCase()]);
      setCouponApplied(true);
    } else {
      alert("Invalid Coupon Code");
      setCouponDiscountPercentage(0);
      setCouponApplied(false);
    }
  };

  const finalAmount =
    totalPrice - discountAmount - (totalPrice * couponDiscountPercentage) / 100;

  const handlePurchase = () => {
    const purchaseDate = new Date().toLocaleDateString();
    const purchasedData = {
      items: [...cartItems],
      finalPrice: finalAmount,
      date: purchaseDate,
    };
    dispatch(addPurchase(purchasedData));
    dispatch(clearCart());
  };

  return (
    <div
      className="container-fluid py-5" // full width and padding
      style={{
        minHeight: "calc(100vh - 56px)", // Adjust to take up full height minus navbar
      }}
    >
      {cartItems.length > 0 ? (
        <div className="card p-5 shadow-lg rounded-3 border-0">
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <span className="text-dark">
                  {item.name} - <strong>&#8377;{item.price}</strong>
                </span>
                <div>
                  <button
                    onClick={() => dispatch(increment(item))}
                    className="btn btn-success btn-sm me-2"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                  <span className="text-dark">Quantity: {item.quantity}</span>
                  <button
                    onClick={() => dispatch(decrement(item))}
                    className="btn btn-warning btn-sm ms-2"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="btn btn-danger btn-sm ms-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="fw-bold text-primary">Total Price: &#8377;{totalPrice}</p>

          {discountApplied && (
            <div className="alert alert-info">
              <p>Discount Applied: {discountPercentage}%</p>
              <p>Discount Amount: &#8377;{discountAmount}</p>
            </div>
          )}

          <div className="btn-group mb-3">
            {[10, 20, 30].map((discount) => (
              <button
                key={discount}
                onClick={() => {
                  setDiscountPercentage(discount);
                  setDiscountApplied(true);
                }}
                className="btn btn-outline-success rounded-pill mx-2 px-4 py-2 hover-scale"
              >
                Apply {discount}% Discount
              </button>
            ))}
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={couponCode}
              className="form-control mb-2 border-2 shadow-sm"
              placeholder="Enter coupon code"
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button
              onClick={handleCoupon}
              className="btn btn-dark w-100 rounded-pill shadow-lg hover-scale"
            >
              Apply Coupon
            </button>
          </div>

          {couponApplied && (
            <div className="alert alert-success">
              <p>Your Coupon Code: {couponCode}</p>
              <p>Your Coupon Amount: &#8377;{(totalPrice * couponDiscountPercentage) / 100}</p>
            </div>
          )}

          <p className="fw-bold text-danger">
            Your Net Amount to Pay: &#8377;{finalAmount}
          </p>

          <button
            onClick={handlePurchase}
            className="btn btn-success w-100 py-3 rounded-pill shadow-lg hover-scale"
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
