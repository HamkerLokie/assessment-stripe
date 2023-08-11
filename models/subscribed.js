import mongoose from 'mongoose'

const subsSchema = mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
      },
      plan: {
        type: Object,
        required: true
      },
      
  },
  { timestamps: true }
)

export default mongoose.model('Subscribed', subsSchema)
