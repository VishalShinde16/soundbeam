const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema(
    {
        razorpay_payment_id: String,
        razorpay_order_id: String,
        razorpay_signature: String 
    }
);

module.exports = mongoose.model("Payment",paymentSchema);