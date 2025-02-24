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
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "calc(100vh - 56px)", // Adjust to take up full height minus navbar
      }}
    >
      <h1 className="text-center mb-4 text-success fw-bold">Milk Products</h1>

      {/* Items Grid */}
      <div className="row">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }} // Adjust card image height
                />
                <div className="card-body text-center bg-light">
                  <h5 className="card-title text-primary fw-bold">{item.name}</h5>
                  <p className="card-text text-muted">Price: ₹{item.price}</p>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="btn btn-success px-4 py-2 mt-2 shadow-sm"
                  >
                    <i className="fa-solid fa-cart-plus"></i> Add to Cart
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
            className="btn btn-info mx-2 rounded-pill px-4 py-2 shadow-sm"
            disabled={pageNumber === 1} // Disable if first page
          >
            <i className="fa-solid fa-arrow-left"></i> Previous
          </button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`btn rounded-pill mx-1 px-3 py-2 ${
                pageNumber === index + 1 ? "btn-dark text-white" : "btn-outline-dark"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(pageNumber + 1)}
            className="btn btn-info mx-2 rounded-pill px-4 py-2 shadow-sm"
            disabled={pageNumber === totalPages} // Disable if last page
          >
            Next <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Milk;
