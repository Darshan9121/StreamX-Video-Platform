import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
  video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['like', 'dislike'] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Like', likeSchema); 