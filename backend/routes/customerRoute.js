const express = require("express");

const { addCustomer } = require("../controllers/customerController");

const router = express.Router();
router.route("/customer/new").post(addCustomer);

module.exports = router;
