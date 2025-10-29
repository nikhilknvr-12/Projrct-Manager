import express from 'express';
import cors from 'cors';

const app = express();

// Middleware to handle cors
app.use(cors(
  {
    origin: process.env.FRONT_END_URL || 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
));


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
