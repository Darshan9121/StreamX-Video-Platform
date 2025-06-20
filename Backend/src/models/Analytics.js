import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  views: Number,
  likes: Number,
  comments: Number,
});

export default mongoose.model('Analytics', analyticsSchema); 