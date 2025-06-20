import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  status: {
    type: String,
    enum: ['public', 'private', 'unlisted'],
    default: 'public',
  },
  tags: [String],
  reports: [{
    reason: String,
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: Date,
  }],
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Video', videoSchema); 