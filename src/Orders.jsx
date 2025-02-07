import { useSelector } from "react-redux";

function Orders() {
  // Get the orders from the store
  let orders = useSelector((state) => state.purchase);

  return (
    <div>
      <h1>Orders</h1>
      <p>Track your past and current orders here.</p>

      {orders.length > 0 ? (
        <div>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                <h3>Order Date: {order.date}</h3>
                <ul>
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} - ${item.price} 
                      <span> Quantity: {item.quantity}</span>
                    </li>
                  ))}
                </ul>
                {/* Check if totalamount is a valid number before calling toFixed */}
                <p>
                  Total Amount: ${ 
                    (order.totalamount != null && !isNaN(order.totalamount)) 
                    ? order.totalamount.toFixed(2)
                    : '0.00' 
                  }
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>No Orders Yet</h2>
      )}
    </div>
  );
}

export default Orders;
