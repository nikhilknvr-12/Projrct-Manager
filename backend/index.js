import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.route.js'

dotenv.config()
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB')
})
.catch((error) => {
  console.log('Error connecting to MongoDB:', error)
})
const app = express()

// Middleware to handle cors
app.use(cors(
  {
    origin: process.env.FRONT_END_URL || 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
))

//Middleware to parse JSON bodies
app.use(express.json())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

app.use('/api/auth', authRoutes)