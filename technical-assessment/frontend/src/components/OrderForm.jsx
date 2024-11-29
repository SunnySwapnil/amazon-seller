import { useEffect, useState } from 'react';
import './OrderForm.css';

function OrderForm() {
  const [orderId, setOrderId] = useState('');
  const [item, setItem] = useState('');
  const [customerDetails, setCustomerDetails] = useState('');
  const [newOrder, setNewOrder] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const order = {
      order_id: orderId,
      item,
      customer_details: customerDetails,
    };
    setNewOrder(order);
  }

  useEffect(() => {
    if (!newOrder) return;

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then(() => {
        setOrderId('');
        setItem('');
        setCustomerDetails('');
        setNewOrder(null);
      })
      .catch((err) => console.error(err));
  }, [newOrder]);

  return (
    <div>
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Order ID:
          <input
            type="text"
            name="order_id"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </label>
        <label>
          Item:
          <input
            type="text"
            name="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
        </label>
        <label>
          Customer Details:
          <textarea
            name="customer_details"
            value={customerDetails}
            onChange={(e) => setCustomerDetails(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
