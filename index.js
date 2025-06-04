
import express from 'express';
import cors from 'cors'
import bodyParser from "body-parser";
import connectDB from './DatabaseConnection/Database.js';
import UserRoutes from "./Routes/UserRoutes.js"
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;;


const app = express(); 

app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())
app.use(bodyParser.json({ limit: '100mb' }))
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });


  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome ....' });
});
// Routes
app.use(UserRoutes)


   

 
const start = async () => {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
  }
};

start();

 app.listen(PORT, () => {
    console.log("Server is running on Port " + PORT);
  });
  
 