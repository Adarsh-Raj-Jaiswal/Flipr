const Order = require("../models/orderModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.createOrder = catchAsyncErrors(async (req, res, next) => {
  const { name, quantity, price, mrp, customerId } = req.body;

  if (price > mrp) {
    res.status(400).json({
      success: false,
      error: "Price cannot be greater than MRP",
    });
    return;
  }

  const order = await Order.create({
    name,
    price,
    mrp,
    quantity,
    customerId,
  });
  res.status(201).json({
    success: true,
    order,
  });
});
