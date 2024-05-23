import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from "./routes/user.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/user", userRouter)

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
// const connectionParams = {
//     useUnifiedTopology: true,
// };

try {
    mongoose.connect("mongodb://localhost:27017/YOGAJI");
    console.log("Connected to database successfully");
} catch (err) {
    console.log("Connection to database failed:", err);
}

app.listen(3000, () => console.log('Server running on port 3000'));