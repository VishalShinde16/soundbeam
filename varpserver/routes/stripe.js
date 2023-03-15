const router = require("express").Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const Payment = require('../models/Razorpay')

router.post("/payment",(req,res)=>{
    stripe.charges.create(
        {
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:"usd",
        },
        (stripeErr,stripeRes) =>{
            if(stripeErr){
                res.status(500).json(stripeErr);

            }else{
                res.status(200).json(stripeRes);
            }
        }
    )
    // stripe.paymentintent.create(

    // )
})
// router.post('/razorpayment',async (req,res)=>{
//     const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

//     const isPaymentValid = verifyPaymentSignature(razorpay_payment_id, razorpay_order_id, razorpay_signature);

//     if (!isPaymentValid) {
//       return res.status(400).json({ error: 'Invalid payment signature' });
//     }
  
//     const payment = new Payment({
//       razorpay_payment_id,
//       razorpay_order_id,
//       razorpay_signature
//     });
  
//     try {
//       await payment.save();
//       res.json({ message: 'Payment successful' });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: 'Server error' });
//     }

// });

// // const razorpay_key_secret='oMeWDrXVqvY2rteQaHjoJ4gS'

// const verifyPaymentSignature = (razorpay_payment_id, razorpay_order_id, razorpay_signature, razorpay_key_secret='oMeWDrXVqvY2rteQaHjoJ4gS') => {
//     const hmac = crypto.createHmac('sha256', razorpay_key_secret);
//     hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
//     const generated_signature = hmac.digest('hex');
  
//     return generated_signature === razorpay_signature;
// };


module.exports = router;