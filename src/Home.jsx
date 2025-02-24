import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container-fluid py-5 px-4">  
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-2 text-primary fw-bold">Welcome to FreshMart</h1>
        <p className="lead text-muted">
          Your one-stop shop for fresh, organic, and healthy products!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="text-center mb-5">
        <Link to="/veg" className="btn btn-success btn-lg mx-3 shadow-lg">
          <i className="fa-solid fa-carrot"></i> Explore Veg Items
        </Link>
        <Link to="/nonveg" className="btn btn-danger btn-lg mx-3 shadow-lg">
          <i className="fa-solid fa-drumstick-bite"></i> Explore Non-Veg Items
        </Link>
        <Link to="/milk" className="btn btn-info btn-lg mx-3 shadow-lg">
          <i className="fa-solid fa-glass-water"></i> Explore Milk Items
        </Link>
      </div>

      {/* Info Section with Cards */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card bg-light shadow-sm border-0">
            <img
              src="vegitems.jpeg"
              alt="Veg"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title text-success">Fresh Veggies</h4>
              <p className="card-text">Organic and fresh vegetables, handpicked daily.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-light shadow-sm border-0">
            <img
              src="nonveg.jpeg"
              alt="Non-Veg"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title text-danger">Premium Non-Veg</h4>
              <p className="card-text">Fresh non-veg products, ensuring quality and taste.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-light shadow-sm border-0">
            <img
              src="milk items.jpeg"
              alt="Milk"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title text-info">Pure Dairy</h4>
              <p className="card-text">Fresh milk, butter, and more, delivered to your door.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-3 mt-5 bg-dark text-white">
        <p>&copy; 2025 FreshMart | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
