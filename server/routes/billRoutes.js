// routes/billRoutes.js
const express = require('express');
const router = express.Router();
const Bill = require('../models/Bills'); // Ensure you're importing the correct model

// Create a new bill
router.post('/', async (req, res) => {
  const { id, amount, paymentMethod, time } = req.body; // Include paymentMethod
  const newBill = new Bill({ id, amount, paymentMethod, time }); // Include paymentMethod
  try {
    await newBill.save();
    res.status(201).json(newBill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all bills
router.get('/', async (req, res) => {
  try {
    const bills = await Bill.find(); // Fetch all bills from the database
    res.status(200).json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
