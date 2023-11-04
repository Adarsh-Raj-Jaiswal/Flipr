const express = require("express");
const { createShipment } = require("../controllers/shippingController");
const router = express.Router();
router.route("/shipping/new").post(createShipment);
module.exports = router;
