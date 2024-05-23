import mongoose from "mongoose";

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  name:String,
  email: { type: String },
  password: String,
 
});
const formSchema = new mongoose.Schema({
  email:String,
  firstname:String,
  lastname:String,
  phone:Number,
  Requirement:String
})



const User = mongoose.model('User', userSchema);
const Form = mongoose.model('form', formSchema);



export {
  User,
  Form
  
};
