const express = require('express');
const {
  createDispute,
  getAllDisputes,
} = require('../controllers/disputeController');

const router = express.Router();

router.post('/', createDispute);
router.get('/', getAllDisputes);

module.exports = router;
