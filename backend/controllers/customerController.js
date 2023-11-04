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
