// models/Bill.js
const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // Ensure unique Bill ID
  paymentMethod: { type: String, required: true },
  amount: { type: Number, required: true },
  time: { type: String, required: true }, // Change to String for time
  date: { type: Date, default: Date.now }
});

// Export the Bill model
module.exports = mongoose.model('Bill', BillSchema);
