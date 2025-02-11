import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  // Get 'milk' products from Redux store
  const milkItems = useSelector((state) => state.products.milk) || [];
  const dispatch = useDispatch();

  // Pagination State
  const perPage = 5; // Items per page
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = Math.ceil(milkItems.length / perPage);

  // Function to handle page changes (Prev, Next, Page Buttons)
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPageNumber(newPage);
    }
  };

  // Get items for the current page
  const pageStartIndex = (pageNumber - 1) * perPage;
  const currentItems = milkItems.slice(pageStartIndex, pageStartIndex + perPage);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Milk Products</h1>

      {/* Items Grid */}
      <div className="row">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
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
                  <button onClick={() => dispatch(addToCart(item))} className="btn btn-success">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No milk products available</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-3 d-flex justify-content-center">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(pageNumber - 1)}
            className="btn btn-primary mx-2"
            disabled={pageNumber === 1} // Disable if first page
          >
            Previous
          </button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`btn ${pageNumber === index + 1 ? "btn-dark" : "btn-outline-dark"} mx-1`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(pageNumber + 1)}
            className="btn btn-primary mx-2"
            disabled={pageNumber === totalPages} // Disable if last page
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Milk;
