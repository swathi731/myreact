import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";  // Make sure this action is defined correctly in your store
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  // Get the 'milk' data from the Redux store using useSelector
  let milk = useSelector((state) => state.products.milk);
  
  // Get the dispatch function from Redux
  let dispatch = useDispatch();

  // Check if milk is empty or undefined
  let finalItems = milk && milk.length > 0 ? milk.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {item.name} - <strong>&#8377;{item.price}</strong>
      </span>
      <button
        onClick={() => dispatch(addToCart(item))}
        className="btn btn-success btn-sm"
      >
        Add to Cart
      </button>
    </li>
  )) : <li className="list-group-item">No milk products available</li>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Milk Products</h1>
      <ol className="list-group">
        {finalItems}
      </ol>
    </div>
  );
}

export default Milk;
