import express from 'express'
import loginController from '../controllers/auth/loginController'
import getControllers from '../controllers/getControllers'
import registerController from '../controllers/auth/registerController'
import postControllers from '../controllers/postControllers'
import protect from '../middlewares/auth'
import paymentController from '../controllers/paymentController'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hii')
})

router.get('/validate', protect, loginController.validateUser)

router.get('/getPlans', getControllers.getPlans)
router.post('/login', loginController.login)
router.post('/register', registerController.tempReg)
router.post('/subscribe', protect, postControllers.subscribe)
router.delete('/cancel', protect, postControllers.cancel)
router.get('/active', protect, postControllers.getMy)

router.post('/payment', paymentController.pay)

export default router
