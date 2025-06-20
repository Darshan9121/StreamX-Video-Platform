import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: null },
  reports: [{
    reason: String,
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: Date,
  }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Comment', commentSchema); 