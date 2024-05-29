import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});


export default mongoose.model('User', userSchema);