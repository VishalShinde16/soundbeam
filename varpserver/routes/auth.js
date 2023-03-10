const router = require('express').Router();

//importing user table schema model
const User = require('../models/User');

//Register
router.post('/register',async (req,res)=>{
    

    const newUser = new User(
        {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        }
    )

    try{
        const user = await User.findOne({username:req.body.username }||{email:req.body.email})
        if(!user){

            const saveduser = await newUser.save();
            res.status(200).json(saveduser);
        }
        else{
            res.status(401).json("user already exist");
        }

    }catch(err){
        res.send(err)
    }
    
})


//Login
router.post('/login',async (req,res)=>{
    
    try{

        const user = await User.findOne({username:req.body.username})
        
        if(!user){
            res.status(401).json("Invalid credentials")
            return;
        }

        if(user.password == req.body.password){
            res.status(200).json(user);
        }
        else{
            res.status(401).json("Invalid credentials")

        }

    }catch(err){
        res.send("err occured")
    }
})

module.exports = router