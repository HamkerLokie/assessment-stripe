import { Plans } from '../models'
const getControllers = {
  async getPlans (req, res, next) {
    try {
      const plans = await Plans.find({})
      res.send(plans)
    } catch (error) {
      console.log(error)
    }
  }
}

export default getControllers
