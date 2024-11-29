const Return = require('../models/returnModel');

exports.createReturn = async (req, res, next) => {
  try {
    const returnData = await Return.create(req.body);
    res.status(201).json(returnData);
  } catch (err) {
    next(err);
  }
};

exports.getAllReturns = async (req, res, next) => {
  try {
    const returns = await Return.getAll();
    res.status(200).json(returns);
  } catch (err) {
    next(err);
  }
};
