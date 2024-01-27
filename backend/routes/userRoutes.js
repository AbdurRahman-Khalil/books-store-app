import express from 'express';
import  { User }  from '../models/userModel.js';

const userRoutes = express.Router();

// sign up a new user
userRoutes.post('/user', async (req, res) => {
  try {
   
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

    const user = await User.create(newUser);

    return res.send(user);
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


userRoutes.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
  
      // Check if user exists and password is correct
     
  
      // Return user information (you might want to omit sensitive information like password)
      return res.json({
        user:user
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });



export default userRoutes;
