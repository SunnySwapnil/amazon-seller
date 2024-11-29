const Order = require('../models/orderModel');

exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.getAll();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};
