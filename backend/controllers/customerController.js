const Customer = require("../models/customerModel");
exports.addCustomer = async (req, res, next) => {
  const { name, email, number, city } = req.body;

  const customer = await Customer.create({
    name,
    email,
    number,
    city,
  });
  res.status(201).json({
    success: true,
    customer,
  });
};
exports.getCustomerHavingShipment = async (req, res, next) => {
  const { city } = req.body;
  res.json({
    success: true,
    city,
  });
};
exports.getAllCustomerOrders = async (req, res, next) => {
  res.json({
    success: true,
    message: "orders",
  });
};
exports.getAllCustomerOrdersAndShipment = async (req, res, next) => {
  res.json({
    success: true,
    message: "ordersAndShipment",
  });
};
