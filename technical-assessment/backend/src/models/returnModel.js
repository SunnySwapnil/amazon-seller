const db = require('../config/db');

const Return = {
  async create(returnData) {
    const query = `
      INSERT INTO returns (order_id, return_reason, return_tracking)
      VALUES ($1, $2, $3) RETURNING *;
    `;
    const values = [
      returnData.order_id,
      returnData.return_reason,
      returnData.return_tracking,
    ];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  async getAll() {
    const query = `SELECT * FROM returns;`;
    const result = await db.query(query);
    return result.rows;
  },
};

module.exports = Return;
