const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
  },
  quantity: {
    type: Number,
    required: [true, "Please provide the product quantity"],
  },
  price: {
    type: Number,
    required: [true, "Please provide the price"],
  },
  mrp: {
    type: Number,
    required: [true, "Please provide the MRP"],
  },
  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: "Customer",
    required: true,
  },
});
module.exports = mongoose.model("Order", orderSchema);
