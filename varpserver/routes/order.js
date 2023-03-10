const router = require('express').Router()
const Order = require('../models/Order')

router.post("/addorder",async (req,res)=>{

    const newOrder = new Order(
        {
            userid: req.body.userid,
            totalproducts: req.body.cartproducts,
            totalprice: req.body.totalprice,

        }
    )

    try{
            const savedOrder = await newOrder.save();
            res.status(200).json(savedOrder);
       
    }catch(err){
        res.send(err)
    }
})


router.get("/",async(req,res)=>{

    try{
        const allorders = await Order.find();
        res.status(200).json(allorders)
    }catch(err){
        console.log(err)
    }

})

router.delete("/:id",async(req,res)=>{
    try{

        const orderData = await Order.findByIdAndDelete(req.params.id);
        orderData ? res.status(200).json('order deleted successfully'):res.status(200).json('order doesnt exist')


    }catch(err){
        console.log(err)
    }
})
router.get("/:id",async(req,res)=>{
    try{

        const orderData = await Order.findOne({_id:req.params.id});
        orderData ? res.status(200).json(orderData):res.status(200).json('order doesnt exist')

    }catch(err){
        console.log(err)
    }
})

router.put('/:id',async(req,res)=>{

    try{
        const orderData = await Order.findByIdAndUpdate(req.params.id,{$set:req.body})
        orderData ? res.status(200).json('order updated successfully'):res.status(200).json('order doesnt exist')

    }catch(err){
        console.log(err)
    }
})


module.exports = router