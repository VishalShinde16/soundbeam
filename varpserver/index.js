require('dotenv').config();

const express = require('express')
const app = express();

const cors = require("cors")
const mongoose = require("mongoose")

//routes importing from routes
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')

//middlewares
app.use(express.json());
app.use(cors());


//database connection
mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log('DB connection successfull')
        })
        .catch(err=>{console.log(err)})


//listening
const port = process.env.PORT || 8080;

// app.use((req, res, next) => {
//     res.setHeader("Content-Security-Policy", "script-src 'self' https://checkout.razorpay.com");
//     next();
//   });


app.use('/user',userRoute);
app.use('/auth',authRoute);
app.use('/product',productRoute);
app.use('/order',orderRoute);
app.use('/checkout',stripeRoute);


app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})


