import { useSelector } from "react-redux";

function Orders() {
  // Get the orders from the Redux store
  let orders = useSelector((state) => state.orders);

  return (
    <div
      className="container-fluid py-5" // Full width with extra padding for height
      style={{
        minHeight: "calc(100vh - 56px)", // Adjust to take up full height minus navbar
      }}
    >
      <h1 className="mb-3 text-primary text-center">Your Orders</h1>
      <p className="text-muted text-center">Track your past and current orders here.</p>

      {orders.length > 0 ? (
        <div className="card p-5 shadow-lg border-0 rounded-3">
          <ul className="list-group">
            {orders.map((order, index) => (
              <li key={index} className="list-group-item border-0 mb-3 shadow-sm">
                <div className="d-flex justify-content-between">
                  <h3 className="fw-bold text-success">Order Date: {order.date}</h3>
                  <p className="text-muted">
                    <strong>Status:</strong> <span className="badge bg-info">Delivered</span>
                  </p>
                </div>
                <ul className="mb-2">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="text-dark">
                      {item.name} - ₹{item.price}{" "}
                      <span className="ms-2 text-muted">(Quantity: {item.quantity})</span>
                    </li>
                  ))}
                </ul>
                <p className="fw-bold text-danger">
                  Total Amount: ₹{" "}
                  {order.finalPrice != null && !isNaN(order.finalPrice)
                    ? order.finalPrice.toFixed(2)
                    : "0.00"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2 className="text-center text-muted">No Orders Yet</h2>
      )}
    </div>
  );
}

export default Orders;
