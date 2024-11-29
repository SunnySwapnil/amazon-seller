const express = require('express');
const {
  createReturn,
  getAllReturns,
} = require('../controllers/returnController');

const router = express.Router();

router.post('/', createReturn);
router.get('/', getAllReturns);

module.exports = router;
