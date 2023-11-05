const Customer = require("../models/customerModel");
const Shipment = require("../models/shippingModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.addCustomer = catchAsyncErrors(async (req, res, next) => {
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
});
exports.getCustomerHavingShipment = catchAsyncErrors(async (req, res, next) => {
  const { city } = req.body;

  const shipments = await Shipment.find({ city: city }).populate("customerId");

  const userWithShipmentsInCity = shipments.map(
    (shipment) => shipment.customerId
  );

  res.status(200).json({
    success: true,
    shipments,
  });
});
exports.getAllCustomerOrders = catchAsyncErrors(async (req, res, next) => {
  const customers = await Customer.aggregate([
    {
      $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "customerId",
        as: "purchaseOrders",
      },
    },
  ]);
  res.status(200).json({
    success: true,
    customers,
  });
});
exports.getAllCustomerOrdersAndShipment = catchAsyncErrors(
  async (req, res, next) => {
    const customers = await Customer.aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "_id",
          foreignField: "customerId",
          as: "purchaseOrder",
        },
      },
      {
        $lookup: {
          from: "shipments",
          localField: "_id",
          foreignField: "customerId",
          as: "shipmentDetail",
        },
      },
    ]);
    res.status(200).json({
      success: true,
      customers,
    });
  }
);
