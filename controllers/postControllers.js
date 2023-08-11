import { Plans, Subscribed } from '../models'
const postControllers = {
  async subscribe (req, res, next) {
    const { selectedData } = req.body

    const sub = Subscribed({
      user: req.user._id,
      plan: selectedData
    })

    try {
      const response = await sub.save()
      res.json({ message: 'uploaded' })
    } catch (error) {
      next(error)
    }
  },
  async getMy (req, res, next) {
    try {
      const result = await Subscribed.find({ user: req.user._id })
      if (!result) {
        return res.status(404).json({ message: 'Subscription not found' })
      }
      res.send(result)
      console.log(result)
    } catch (error) {
      console.log(error)
      next(error)
    }
  },
  async cancel (req, res, next) {
    try {
      const subscriptionId = req.body.sub;
      console.log('sub',subscriptionId);
      const result = await Subscribed.findByIdAndDelete(subscriptionId)
      if (!result) {
      
        return res.status(404).json({ message: 'Subscription NOt Deleted' })
      }
      // res.send(result)
      // console.log(result)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

export default postControllers
