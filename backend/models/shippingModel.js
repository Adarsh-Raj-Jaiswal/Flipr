const mongoose = require("mongoose");
const shippingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, "Please enter the address"],
  },
  city: {
    type: String,
    required: [true, "Please enter the city"],
  },
  pincode: {
    type: Number,
    required: [true, "Please enter the pincode"],
  },
  orderId: {
    type: mongoose.Schema.ObjectId,
    ref: "Order",
    required: true,
  },
  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: "Customer",
    required: true,
  },
});
module.exports = mongoose.model("Shipment", shippingSchema);
