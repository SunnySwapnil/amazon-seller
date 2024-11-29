import './DisputeList.css';

function DisputeList({ disputes }) {
  return (
    <div>
      <h2>Dispute Cases</h2>
      <ul>
        {disputes.map((dispute) => (
          <li key={dispute.id}>
            Reason: {dispute.reason} | Status: {dispute.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisputeList;
