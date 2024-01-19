import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { PORT, mongoDBURL } from './config.js';
import booksRoute from './routes/booksRoute.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());


// app.get('/', (req, res) => {
//   console.log(req);
//   return res.status(234).send('Welcome To MERN Stack Tutorial');
// });

// Books Route
app.use('/home/books', booksRoute);
// Users Route
app.use(userRoutes);


// Connecting to the Database and Running the Server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database successfully!');
    
    app.listen(PORT, () => console.log(`App is listening to port: ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
