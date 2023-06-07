const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'cancelled'],
    default: 'pending',
  },
  items: [{
    name: String,
    quantity: Number,
  }],
});

module.exports = mongoose.model('Order', OrderSchema);
