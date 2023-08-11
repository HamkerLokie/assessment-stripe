import dotenv from 'dotenv'

dotenv.config()

export const { PORT,DB_URI,SALT, STRIPE_SECRET_TEST, DEBUG_MODE,JWT_SECRET } = process.env
