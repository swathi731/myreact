import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
  const nonVegItems = useSelector((state) => state.products.nonveg);
  const dispatch = useDispatch();

  // Pagination State
  const perPage = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = Math.ceil(nonVegItems.length / perPage);

  // Calculate Items for Current Page
  const pageStartIndex = (pageNumber - 1) * perPage;
  const currentItems = nonVegItems.slice(pageStartIndex, pageStartIndex + perPage);

  return (
    <div className="container-fluid py-5" style={{ minHeight: "calc(100vh - 56px)" }}>
      {/* This ensures the container height adjusts to the full screen height minus the navbar */}
      <h1 className="text-center mb-4 text-danger fw-bold">Non-Veg Delights</h1>

      {/* Items Grid */}
      <div className="row">
        {currentItems.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center bg-light">
                <h5 className="card-title text-danger fw-bold">{item.name}</h5>
                <p className="card-text text-muted">Price: ₹{item.price}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="btn btn-danger px-4 py-2 mt-2 shadow-sm"
                >
                  <i className="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-3 d-flex justify-content-center">
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          className="btn btn-primary mx-2 rounded-pill px-4 py-2 shadow-sm"
          disabled={pageNumber === 1}
        >
          <i className="fa-solid fa-arrow-left"></i> Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPageNumber(index + 1)}
            className={`btn rounded-pill mx-1 px-3 py-2 ${pageNumber === index + 1 ? "btn-dark text-white" : "btn-outline-dark"}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className="btn btn-primary mx-2 rounded-pill px-4 py-2 shadow-sm"
          disabled={pageNumber === totalPages}
        >
          Next <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Nonveg;
