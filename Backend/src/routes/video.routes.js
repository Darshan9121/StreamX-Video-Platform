import express from 'express';
import { uploadVideo, streamVideo, getMetadata } from '../controllers/video.controller.js';
const router = express.Router();

router.post('/upload', uploadVideo);
router.get('/videos', getMetadata);
// router.get('/videos/:id/stream', streamVideo); // For future streaming endpoint

export default router; 