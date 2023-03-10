const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        userid: { type: String, required: true},
        totalproducts: { type: [], required: true},
        totalprice: { type: Number, required: true},
        status: { type: String, required: true ,default:'Pending'}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order",orderSchema);