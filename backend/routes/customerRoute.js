const express = require("express");

const {
  addCustomer,
  getCustomerHavingShipment,
  getAllCustomerOrders,
  getAllCustomerOrdersAndShipment,
} = require("../controllers/customerController");

const router = express.Router();
router.route("/customer/new").post(addCustomer);
router.route("/customer/shipment").get(getCustomerHavingShipment);
router.route("/customer/orders").get(getAllCustomerOrders);
router.route("/customer/orderAndShipment").get(getAllCustomerOrdersAndShipment);
module.exports = router;
