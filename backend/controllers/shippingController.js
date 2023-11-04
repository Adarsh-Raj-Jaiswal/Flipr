const Shipping = require("../models/shippingModel");

exports.createShipment = async (req, res, next) => {
  const { address, city, pincode, orderId, customerId } = req.body;
  const shipping = await Shipping.create({
    address,
    city,
    pincode,
    orderId,
    customerId,
  });
  res.status(201).json({
    success: true,
    shipping,
  });
};
