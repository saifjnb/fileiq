
const express = require('express');
const router = express.Router();
const Video = require('../models/video');

// رفع الفيديو
router.post('/upload', (req, res) => {
  // معالجة رفع الفيديو باستخدام مكتبة مثل multer
  // حفظ الفيديو في قاعدة البيانات
  res.send('Video uploaded successfully');
});

// عرض الفيديو
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.json(video);
  } catch (err) {
    res.status(404).send('Video not found');
  }
});

module.exports = router;
