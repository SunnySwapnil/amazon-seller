import { useEffect, useState } from 'react';
import './App.css';
import DisputeList from './components/DisputeList';
import OrderForm from './components/OrderForm';
import ReturnForm from './components/ReturnForm';
import DisputeModal from './components/DisputeModal';

function App() {
  const [disputes, setDisputes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:5000/disputes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setDisputes(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  function addDispute(newDispute) {
    setDisputes((prevDisputes) => [...prevDisputes, newDispute]);
  }

  return (
    <div>
      <OrderForm />
      <ReturnForm />
      {loading ? (
        <p>Loading disputes...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <DisputeList disputes={disputes} />
      )}
      <button onClick={() => setIsModalOpen(true)}>Create New Dispute</button>
      {isModalOpen && (
        <DisputeModal
          closeModal={() => setIsModalOpen(false)}
          addDispute={addDispute}
        />
      )}
    </div>
  );
}

export default App;
