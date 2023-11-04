const express = require("express");
const { createOrder } = require("../controllers/orderController");
const router = express.Router();
router.route("/order/new").post(createOrder);
module.exports = router;
