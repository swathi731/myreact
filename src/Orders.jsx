import { useSelector } from "react-redux";

function Orders() {
  // Get the orders from the Redux store
  let orders = useSelector((state) => state.orders);  // ✅ Fixed incorrect state reference

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Orders</h1>
      <p className="text-muted">Track your past and current orders here.</p>

      {orders.length > 0 ? (
        <div className="card p-3 shadow-sm">
          <ul className="list-group">
            {orders.map((order, index) => (
              <li key={index} className="list-group-item">
                <h3 className="fw-bold">Order Date: {order.date}</h3>
                <ul className="mb-2">
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} - ₹{item.price} 
                      <span className="ms-2"> (Quantity: {item.quantity})</span>
                    </li>
                  ))}
                </ul>
                <p className="fw-bold">
                  Total Amount: ₹{ 
                    (order.finalPrice != null && !isNaN(order.finalPrice)) 
                    ? order.finalPrice.toFixed(2)
                    : '0.00' 
                  }
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
