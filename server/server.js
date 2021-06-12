const shrinkRay = require('shrink-ray-current');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(shrinkRay());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

app.use('/course', (req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

module.exports = app;