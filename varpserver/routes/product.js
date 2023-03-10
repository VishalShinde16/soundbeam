const router = require('express').Router();
const Product = require('../models/Product')

router.post('/addproduct',async (req,res)=>{
    

    const newProduct = new Product(
        {
            imgurl:req.body.imgurl,
            productname: req.body.productname,
            type:req.body.type,
            price: req.body.price,
            quantity: req.body.quantity
        }
    )

    try{
        const product = await Product.findOne({productname:req.body.productname })
        if(!product){

            const savedproduct = await newProduct.save();
            res.status(200).json(savedproduct);
        }
        else{
            res.status(401).json("product already exist");
        }

    }catch(err){
        res.send(err)
    }
    
})

router.get("/",async(req,res)=>{
    try{

        const productsData = await Product.find();
        res.status(200).json(productsData)

    }catch(err){
        console.log(err)
    }

})

router.get("/:id",async(req,res)=>{
    try{

        const productData = await Product.findOne({_id:req.params.id});
        productData ? res.status(200).json(productData):res.status(200).json('product doesnt exist')

    }catch(err){
        console.log(err)
    }
})

router.delete("/:id",async(req,res)=>{
    try{

        const productData = await Product.findByIdAndDelete(req.params.id);
        productData ? res.status(200).json('product deleted successfully'):res.status(200).json('product doesnt exist')


    }catch(err){
        console.log(err)
    }
})

router.put('/:id',async(req,res)=>{

    try{
        const productData = await Product.findByIdAndUpdate(req.params.id,{$set:req.body})
        productData ? res.status(200).json('product updated successfully'):res.status(200).json('product doesnt exist')

    }catch(err){
        console.log(err)
    }
})
module.exports = router