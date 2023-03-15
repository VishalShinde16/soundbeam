const router = require("express").Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);


router.post("/payment", async (req, res) => {


  const { items } = req.body;

  const transformedItems = items.map((item)=>({
    quantity: item.quantity,
    price_data: {
      currency: 'inr',
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        images: [item.img],
        description: 'description',
      },
    },
  }));
    
  

  const session = await stripe.checkout.sessions.create({
    
    shipping_address_collection: {allowed_countries: ['IN']},
    
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {amount: 5000, currency: 'inr'},
          display_name: 'Delivery in 3-4 days',
          delivery_estimate: {
            minimum: {unit: 'business_day', value: 3},
            maximum: {unit: 'business_day', value: 4},
          },
        },
      },
      
    ],

    payment_method_types: ['card'],
    line_items: transformedItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/checkout/success',
    cancel_url: 'http://localhost:3000/checkout/cancel',

   
  });

  
  res.json({ id: session.id})

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

router.post('/demo',async (req,res)=>{
  res.json({name:'vishal'})
})
module.exports = router;