import Joi from 'joi'
import bcrypt from 'bcrypt'
import { SALT } from '../../config'
import JwtService from '../../services/JwtServices'

import { User } from '../../models'
import CustomErrorHandler from '../../services/CustomErrorHandler'

const registerController = {
  
  async tempReg (req, res, next) {
    const registerSchema = Joi.object({
      user: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    })

    const { error } = registerSchema.validate(req.body)

    if (error) {
      return next(error)
    }
    

    try {
      const exists = await User.exists({ email: req.body.email })

      if (exists) {
        return next(
          CustomErrorHandler.alreadyExists('This E-Mail already exists')
        )
      }
    } catch (error) {
      return next(error)
    }

    // Hash Password
    const { user, email, mobile, password } = req.body
    const hashedPass = await bcrypt.hash(password, Number(SALT))

    const userONe = new User({
      user,
      email,
      mobile,
      password: hashedPass
    })
    let access_token

    try {
      const result = await userONe.save()

      access_token = JwtService.sign({
        _id: result._id,
        user: result.user
      })

      
    } catch (err) {
      return next(err)
    }

    res.json({ access_token })
  },
  async verify(req, res, next){
    const { token } = req.params

  try {
    const user = await User.findOne({
      verificationToken: token,
      verificationExpires: { $gt: Date.now() }
    })

    if (!user) {
      return next(CustomErrorHandler.unauthorized('Invalid verification token'))
    }

    user.emailVerified = true
    user.verificationToken = undefined
    user.verificationExpires = undefined
    await user.save()

    res.json({ message: 'Email address verified' })
  } catch (err) {
    return next(err)
  }
  }
}

export default registerController
