const Customer = require("../models/customerModel");
const Shipment = require("../models/shippingModel");
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

  const shipments = await Shipment.find({ city: city }).populate("customerId");

  const userWithShipmentsInCity = shipments.map(
    (shipment) => shipment.customerId
  );

  res.status(200).json({
    success: true,
    shipments,
  });
};
exports.getAllCustomerOrders = async (req, res, next) => {
  const customers = await Customer.aggregate([
    {
      $lookup: {
        from: "Order",
        localField: "_id",
        foreignField: "customerId",
        as: "purchaseOrders",
      },
    },
    // {
    //   $match: {
    //     "purchaseOrders.0": { $exists: true },
    //   },
    // },
  ]);
  res.status(200).json({
    success: true,
    customers,
  });
};
exports.getAllCustomerOrdersAndShipment = async (req, res, next) => {
  res.json({
    success: true,
    message: "ordersAndShipment",
  });
};
