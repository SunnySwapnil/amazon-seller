const db = require('../config/db');

const Order = {
  async create(order) {
    const query = `
      INSERT INTO orders (order_id, item, customer_details)
      VALUES ($1, $2, $3) RETURNING *;
    `;
    const values = [order.order_id, order.item, order.customer_details];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  async getAll() {
    const query = `SELECT * FROM orders;`;
    const result = await db.query(query);
    return result.rows;
  },
};

module.exports = Order;
