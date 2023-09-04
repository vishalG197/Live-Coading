const express = require('express');
const UserModel = require('../model/usermodel');
const bcrypt = require('bcrypt');
const UserRouter=express.Router();
const jwt = require('jsonwebtoken');
UserRouter.get('/',async(req,res)=>{
try {
   const data =await UserModel.find();
res.status(200).json(data);
} catch (error) {
   res.send({"massege":error})
}
})



UserRouter.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Create a new user
  const user = new UserModel({ username, password: hashedPassword });
  await user.save();
  res.json({ message: 'User registered successfully' });
});

UserRouter.post('/login', async (req, res) => {
   const { username, password } = req.body;
   
   // Find the user by username
   const user = await UserModel.findOne({ username });
   if (!user) {
     return res.status(401).json({ error: 'Invalid credentials' });
   }
   
   // Compare passwords
   const isPasswordValid = await bcrypt.compare(password, user.password);
   if (!isPasswordValid) {
     return res.status(401).json({ error: 'Invalid credentials' });
   }
   
   // Create JWT and refresh token
   const token = jwt.sign({ username }, "one", { expiresIn: '1h' });
   const refreshToken = jwt.sign({ username }, "two", { expiresIn: '7d' });
   res.cookie("token",token,{ httpOnly: true })
   res.cookie('refreshToken', refreshToken, { httpOnly: true });
   res.json({ token });
 });
 


module.exports =UserRouter;