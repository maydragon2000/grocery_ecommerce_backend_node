const express = require('express');
const router = express.Router();
const {
  getOrderById,
  getOrderByUser,
  addOrder,
  createPaymentIntent,
  createTelrPayment,
  checkTelrPayment,
} = require('../controller/userOrderController');

//add a order
router.post('/add', addOrder);

// create stripe payment intent
router.post('/create-payment-intent', createPaymentIntent);

//create telr payment intent
router.post('/telrpayment', createTelrPayment);

//check telr payment status
router.post('/checkpayment', checkTelrPayment);

//get a order by id
router.get('/:id', getOrderById);

//get all order by a user
router.get('/', getOrderByUser);

module.exports = router;
