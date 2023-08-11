import mongoose, { Types } from 'mongoose'

const planSchema = mongoose.Schema({
  monthlyPlan: {
    mobile: [
      { price: { type: Number } },
      { videoQuality: { Type: String } },
      { resolution: { Type: String } },
      {
        devices: [
          {
            deviceName: String
          }
        ]
      }
    ],
    basic: [
      { price: { type: Number } },
      { videoQuality: { Type: String } },
      { resolution: { Type: String } },
      {
        devices: [
          {
            deviceName: String
          }
        ]
      }
    ],
    standard: [
      { price: { type: Number } },
      { videoQuality: { Type: String } },
      { resolution: { Type: String } },
      {
        devices: [
          {
            deviceName: String
          }
        ]
      }
    ],
    premium: [
      { price: { type: Number } },
      { videoQuality: { Type: String } },
      { resolution: { Type: String } },
      {
        devices: [
          {
            deviceName: String
          }
        ]
      }
    ]
  },
  yearlyPlan: {
    mobile: [
      { price: { type: Number } },
      { videoQuality: { Type: String } },
      { resolution: { Type: String } },
      {
        devices: [
          {
            deviceName: String
          }
        ]
      }
    ],
    basic: [
      { price: { type: Number } },
      { videoQuality: { Type: String } },
      { resolution: { Type: String } },
      {
        devices: [
          {
            deviceName: String
          }
        ]
      }
    ],
    standard: [
      { price: { type: Number } },
      { videoQuality: { Type: String } },
      { resolution: { Type: String } },
      {
        devices: [
          {
            deviceName: String
          }
        ]
      }
    ],
    premium: [
      { price: { type: Number } },
      { videoQuality: { Type: String } },
      { resolution: { Type: String } },
      {
        devices: [
          {
            deviceName: String
          }
        ]
      }
    ]
  }
})

export default mongoose.model('Plans', planSchema)
