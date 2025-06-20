import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  profile: {
    name: String,
    avatar: String,
    bio: String,
  },
  preferences: {
    theme: String,
    notifications: Boolean,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

export default mongoose.model('User', userSchema); 