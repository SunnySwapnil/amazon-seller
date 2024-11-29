const db = require('../config/db');

const Dispute = {
  async create(dispute) {
    const query = `
      INSERT INTO disputes (return_id, reason, status)
      VALUES ($1, $2, 'Pending') RETURNING *;
    `;
    const values = [dispute.return_id, dispute.reason];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  async getAll() {
    const query = `SELECT * FROM disputes;`;
    const result = await db.query(query);
    return result.rows;
  },
};

module.exports = Dispute;
