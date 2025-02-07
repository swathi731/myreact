import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
  // Take the products from store using useSelector()
  let NonvegItems = useSelector((state) => state.products.nonveg);

  // Create object for useDispatch() for taking the actions from reducers
  let dispatch = useDispatch();

  let allItems = NonvegItems.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {item.name} - <strong>&#8377;{item.price}</strong>
      </span>
      <button
        onClick={() => dispatch(addToCart(item))}
        className="btn btn-primary btn-sm"
      >
        Add to Cart
      </button>
    </li>
  ));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Non-Veg Items</h1>
      <ul className="list-group">
        {allItems}
      </ul>
    </div>
  );
}

export default Nonveg;