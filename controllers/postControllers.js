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
    } catch (error) {
      console.log(error)
      next(error)
    }
  },
  async cancel (req, res, next) {
    try {
      const {sub} = req.params;
      const result = await Subscribed.findByIdAndDelete(sub)
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
