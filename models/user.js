import { boolean } from 'joi'
import mongoose from 'mongoose'
const userSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)
