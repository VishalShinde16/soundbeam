const router = require('express').Router();
const User = require('../models/User')
router.get("/",async(req,res)=>{
    try{

        const usersData = await User.find();
        res.status(200).json(usersData)

    }catch(err){
        console.log(err)
    }

})

router.get("/:id",async(req,res)=>{
    try{

        const userData = await User.findOne({_id:req.params.id});
        userData ? res.status(200).json(userData):res.status(200).json('user doesnt exist')

    }catch(err){
        console.log(err)
    }
})

router.delete("/:id",async(req,res)=>{
    try{

        const userData = await User.findByIdAndDelete(req.params.id);
        userData ? res.status(200).json('user deleted successfully'):res.status(200).json('user doesnt exist')


    }catch(err){
        console.log(err)
    }
})

router.put('/:id',async(req,res)=>{

    try{
        const userData = await User.findByIdAndUpdate(req.params.id,{$set:req.body})
        userData ? res.status(200).json('user updated successfully'):res.status(200).json('user doesnt exist')

    }catch(err){
        console.log(err)
    }
})
module.exports = router