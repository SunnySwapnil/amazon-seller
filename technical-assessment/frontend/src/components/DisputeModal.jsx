import { useState } from 'react';
import './DisputeModal.css';

function DisputeModal({ closeModal, addDispute }) {
  const [returnId, setReturnId] = useState('');
  const [reason, setReason] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newDispute = { return_id: returnId, reason };

    fetch('http://localhost:5000/disputes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDispute),
    })
      .then((res) => res.json())
      .then((data) => {
        addDispute(data);
        closeModal();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h2>Add Dispute</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Return ID:
          <input
            type="text"
            name="return_id"
            value={returnId}
            onChange={(e) => setReturnId(e.target.value)}
            required
          />
        </label>
        <label>
          Reason:
          <input
            type="text"
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  );
}
export default DisputeModal;
