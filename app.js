// import express from 'express';
// import mongoose from 'mongoose';
// import User from './user.model.js'; 


// const mongoURL = 'mongodb://localhost:27017/testingDB';

// const app = express();
// app.use(express.json())

// mongoose.connect(mongoURL)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// app.get('/', (req, res) => {
//   res.send('Hello from Express & MongoDB!');
// });
// // ------------------add-user----------------------
// app.post('/addUser', async (req, res) => {
//     try {
//       const { username, age } = req.body;
//       const newUser = new User({ username, age });
//       const savedUser = await newUser.save();
//       res.json({ message: 'User created successfully!', user: savedUser });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error creating user' });
//     }
//   });
// //   ------------------add-user---------------------
  

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server listening on port ${port}`));


import express from 'express'
import mongoose from 'mongoose'

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("jsdfvsjvdsjk")
})

const mongo='mongodb://localhost:27017/db'

mongoose.connect(mongo).then(()=>console.log("db connected")).catch(()=>console.log("error"));

const port=process.env.PORT || 5000;
app.listen(port,()=>console.log("started"));

