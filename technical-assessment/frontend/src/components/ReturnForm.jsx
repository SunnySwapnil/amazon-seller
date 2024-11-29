import { useEffect, useState } from 'react';
import './ReturnForm.css';

function ReturnForm() {
  const [orderId, setOrderId] = useState('');
  const [returnReason, setReturnReason] = useState('');
  const [returnTracking, setReturnTracking] = useState('');
  const [newReturn, setNewReturn] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const returnData = {
      order_id: orderId,
      return_reason: returnReason,
      return_tracking: returnTracking,
    };

    setNewReturn(returnData);
  }

  useEffect(() => {
    if (!newReturn) return;

    fetch('http://localhost:5000/returns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReturn),
    })
      .then((res) => res.json())
      .then(() => {
        setOrderId('');
        setReturnReason('');
        setReturnTracking('');
        setNewReturn(null);
      })
      .catch((err) => console.error(err));
  }, [newReturn]);

  return (
    <div>
      <h2>Add Return</h2>
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
          Return Reason:
          <input
            type="text"
            name="return_reason"
            value={returnReason}
            onChange={(e) => setReturnReason(e.target.value)}
            required
          />
        </label>
        <label>
          Return Tracking:
          <input
            type="text"
            name="return_tracking"
            value={returnTracking}
            onChange={(e) => setReturnTracking(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Return</button>
      </form>
    </div>
  );
}
export default ReturnForm;
