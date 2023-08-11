import express from 'express'
import mongoose from 'mongoose'
import { PORT, DB_URI } from './config'
import router from './routes'
import cors from 'cors'
import bodyParser from 'body-parser'
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
import errorHandler from './middlewares/errorHandler'


const app = express()

// Database Connection

mongoose.connect(DB_URI) 
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Database Connection Error'))
db.once('open', () => {
  console.log('Database Connected')
})
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())


app.use(router)



app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`)
})
