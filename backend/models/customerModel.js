const mongoose = require("mongoose");
const validator = require("validator");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter customer name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should be atleast 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: [true, "Already in use"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  number: {
    type: String,
    required: [true, "Please provide phone number"],
    maxLength: [10, "Phone number must be of 10 digits"],
    minLength: [10, "Phone number must be of 10 digits"],
  },
  city: {
    type: String,
    required: [true, "Please enter the city"],
  },
});

module.exports = mongoose.model("Customer", customerSchema);
