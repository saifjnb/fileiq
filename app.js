
const express = require('express');
const mongoose = require('mongoose');
const videoRoutes = require('./routes/videos');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/streamble_clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/videos', videoRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
