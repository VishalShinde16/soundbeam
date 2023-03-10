const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        imgurl: { type: String, required: true},
        productname: { type: String, required: true ,unique:true},
        type: { type: [], required: true},
        price: { type: Number, required: true},
        quantity: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product",productSchema);



{/* <TableHeading>Id</TableHeading>
              <TableHeading>Image</TableHeading>
              <TableHeading>Name</TableHeading>
              <TableHeading>Type</TableHeading>
              <TableHeading>Price</TableHeading>
              <TableHeading>Quantity</TableHeading>
              <TableHeading>Action</TableHeading> */}