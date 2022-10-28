const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getOrderById,
  getOrderByUser,
  updateOrder,
  deleteOrder,
  bestSellerProductChart,
  getDashboardOrders,
  getRecentOrders,
} = require('../controller/orderController');

//get all orders
router.get('/', getAllOrders);

// get dashboard orders data
router.get('/dashboard', getDashboardOrders);

// chart data for product
router.get('/best-seller/chart', bestSellerProductChart);

//get all order by a user
router.get('/user/:id', getOrderByUser);

//get a order by id
router.get('/:id', getOrderById);

//update a order
router.put('/:id', updateOrder);

//delete a order
router.delete('/:id', deleteOrder);

module.exports = router;
