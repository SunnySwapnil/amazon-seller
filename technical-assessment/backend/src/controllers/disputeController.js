const Dispute = require('../models/disputeModel');

exports.createDispute = async (req, res, next) => {
  try {
    const dispute = await Dispute.create(req.body);
    res.status(201).json(dispute);
  } catch (err) {
    next(err);
  }
};

exports.getAllDisputes = async (req, res, next) => {
  try {
    const disputes = await Dispute.getAll();
    res.status(200).json(disputes);
  } catch (err) {
    next(err);
  }
};
