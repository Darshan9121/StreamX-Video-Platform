import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  refreshToken: String,
  createdAt: { type: Date, default: Date.now },
  expiresAt: Date,
});

export default mongoose.model('Session', sessionSchema); 