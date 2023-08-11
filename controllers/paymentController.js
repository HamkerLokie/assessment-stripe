import { STRIPE_SECRET_TEST } from '../config'
import stripePackage from 'stripe'

const stripe = new stripePackage(STRIPE_SECRET_TEST, {
  apiVersion: '2020-08-27' // Adjust the API version as needed
})
const paymentController = {
  async pay (req, res, next) {
    let { amount, id } = req.body
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'INR',
        description: 'Spatula company',
        payment_method: id,
        confirm: true
      })
      res.json({
        message: 'Payment successful',
        success: true
      })
    } catch (error) {
      console.log('Error', error)
      res.json({
        message: 'Payment failed',
        success: false
      })
    }
  }
  
}
export default paymentController
