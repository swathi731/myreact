import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function VegItems() {
  const vegItems = useSelector((state) => state.products.veg);
  const dispatch = useDispatch();

  // Pagination State
  const perPage = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = Math.ceil(vegItems.length / perPage);

  // Calculate Items for Current Page
  const pageStartIndex = (pageNumber - 1) * perPage;
  const currentItems = vegItems.slice(pageStartIndex, pageStartIndex + perPage);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Veg Items</h1>

      {/* Items Grid */}
      <div className="row">
        {currentItems.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ₹{item.price}</p>
                <button onClick={() => dispatch(addToCart(item))} className="btn btn-warning">
                  Add to Cart
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
          className="btn btn-primary mx-2"
          disabled={pageNumber === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPageNumber(index + 1)}
            className={`btn ${pageNumber === index + 1 ? "btn-dark" : "btn-outline-dark"} mx-1`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className="btn btn-primary mx-2"
          disabled={pageNumber === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VegItems;
