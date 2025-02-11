import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
  const nonVegItems = useSelector((state) => state.products.nonveg) || [];
  const dispatch = useDispatch();

  // Pagination State
  const perPage = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter Items Based on Search
  const filteredItems = nonVegItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset to Page 1 if Search Changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPageNumber(1);
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / perPage);
  const pageStartIndex = (pageNumber - 1) * perPage;
  const currentItems = filteredItems.slice(pageStartIndex, pageStartIndex + perPage);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Non-Veg Items</h1>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a non-veg item..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Items Grid */}
      <div className="row">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
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
                  <button onClick={() => dispatch(addToCart(item))} className="btn btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No items found</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
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
            disabled={pageNumber >= totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Nonveg;
