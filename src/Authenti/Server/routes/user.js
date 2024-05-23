import express from 'express';
import { SECRET, authenticateJwt } from "../middleware/auth.js";
import { User ,Form} from "../db/index.js";
import jwt from 'jsonwebtoken';

const router = express.Router();

  router.post('/signup', async (req, res) => {
    console.log("fuck")
    const { name,email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ name,email, password });
      await newUser.save();
      const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
      
    }
  });
  router.post('/form',async(req,res)=>{
    console.log("form call")
    const { email, firstname, lastname, phone, Requirement }= req.body;
    const newform = new Form({ email, firstname, lastname, phone, Requirement });
    await newform.save();
    res.json({message:'Form field'});
  })
  
  router.post('/login', async (req, res) => {
    console.log("login call");
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const user = await User.findOne({ email, password });
    if (user) {
      const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
      console.log('logged successfull');
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
  
  
export default router